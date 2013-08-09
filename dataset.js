  function Dataset(obj) {
      this.columns = {};
      this.rows = obj.rows;

      this.applyFunction = function (columnId, expression) {
          var myfun = new Function("row", expression);

          for (var i = 0; i < this.rows.length; i++) {
              this.rows[i][columnId] = myfun(this.rows[i]);
          }
      }
      
      this.getColumns = function() {
           var res = [];
           for(var k in this.columns) {
                res.push(this.columns[k])
           }
           return res;
      }

      this.getNewColumnName = function (columnDisplayName) {
          var tentativeColumnId = columnDisplayName.trim().replace(/%/g, "_Prct").replace(/\//g, "_").replace(/ /g, "_").replace(/"/g, "").replace(/'/g, "").replace(/\./g, "_");
          var i = 0;
          var columnId = tentativeColumnId;
          while (this.columns.hasOwnProperty(columnId)) {
              columnId = tentativeColumnId + "_" + i;
              i++;
          }
          return columnId;
      }

      this.addColumn = function (columnDisplayName, expression) {

          var columnId = this.getNewColumnName(columnDisplayName);

          this.columns[columnId] = {
              id: columnId,
              field: columnId,
              name: columnDisplayName
          };

          this.applyFunction(columnId, expression);
          this.setColumnTypeEditor(columnId);

          return columnId;
      }

      this.removeColumn = function (columnId) {
          if (this.columns.hasOwnProperty(columnId)) {
              for (var i = 0; i < this.rows.length; i++) {
                  delete(this.rows[i][columnId]);
              }

              delete(this.columns[columnId]);
          }
      }

      this.renameColumn = function (columnId, newColumnName) {
          this.columns[columnId].name = newColumnName;
      }

      this.getColumnIdName = function (displayColumnName) {
          for (var i in this.columns) {
              if (this.columns[i].name == displayColumnName) return i;
          }
          return null;
      }

      this.getColumnStatistics = function (columnId) {
          var columnStatistics = {};
          columnStatistics.count = 0;

          columnStatistics.max = d3.max(this.rows.slice(0, 100), function (d) {
              return d[columnId];
          });
          columnStatistics.min = d3.min(this.rows.slice(0, 100), function (d) {
              return d[columnId];
          });
          columnStatistics.median = d3.median(this.rows.slice(0, 100), function (d) {
              return d[columnId];
          });

          columnStatistics.nbNumber = 0;
          columnStatistics.nbString = 0;
          columnStatistics.nbDate = 0;
          columnStatistics.nbUndefined = 0;
          columnStatistics.nbNegative = 0;

          columnStatistics.nbDistinct = {};

          this.rows.slice(0, 100).reduce(function (previousValue, currentValue, index, array) {

              previousValue.count++;

              if (typeof currentValue[columnId] == "number")
                  previousValue.nbNumber++;
              else if (!isNaN(new Date(currentValue[columnId])))
                  previousValue.nbDate++;
              else if (typeof currentValue[columnId] == "string" && currentValue[columnId].length > 0)
                  previousValue.nbString++;
              else
                  previousValue.nbUndefined++;

              previousValue.nbDistinct[currentValue[columnId]] = 1;

              previousValue.nbNegative = previousValue.nbNegative + (currentValue[columnId] < 0);

              return previousValue;
          },
              columnStatistics);

          columnStatistics.nbDistinct = sizeOfDict(columnStatistics.nbDistinct);

          this.columns[columnId].statistics = columnStatistics;
          return this.columns[columnId].statistics;
      }

      this.setColumnTypeEditor = function (columnId) {
          if (!this.columns[columnId].hasOwnProperty("type")) {
              this.setAutoType(columnId);
          }
          this.columns[columnId].editor =
              (this.columns[columnId].type == "date" ? Slick.Editors.Date :
              (this.columns[columnId].type == "number" ? Slick.Editors.Float : Slick.Editors.Text));
      }

      this.setAutoType = function (columnId) {
          if (!this.columns[columnId].hasOwnProperty("statistics")) {
              this.getColumnStatistics(columnId);
          }

          var columnStatistics = this.columns[columnId].statistics;

          if ((columnStatistics.nbNumber / columnStatistics.count) > 0.9) this.columns[columnId].type = "number";
          else if ((columnStatistics.nbDate / columnStatistics.count) > 0.9) this.columns[columnId].type = "date";
          else this.columns[columnId].type = "string";

          return this.columns[columnId].type;
      }

      this.applyType = function (columnId, newType) {
          for (var i = 0; i < this.rows.length; i++) {
              var currentValue = this.rows[i][columnId];
              if (currentValue != null && typeof currentValue != newType) {
                  if (newType == "date") this.rows[i][columnId] = Date.parse(currentValue);
                  else if (newType == "number") {
                      var localFloat = parseFloat(currentValue);
                      this.rows[i][columnId] = isNaN(localFloat) ? null : localFloat;
                  } else if (newType == "string") {
                      this.rows[i][columnId] = currentValue.toString();
                  }
              }
          }

          this.getColumnStatistics(columnId);
          this.columns[columnId].type = newType;
          this.setColumnTypeEditor(columnId);
      }

      this.unFlatten = function (columnIds, newColumnNameCategory, newColumnNameValue, replaceRows) {
          // starting with: {a:1, b:2, c:3, d:4}
          // if c,d are given as columnIds, the resulting dataset looks like
          // {a:1,b:2,newColumnNameCategory:c,newColumnNameValue:3},
          // {a:1,b:2,newColumnNameCategory:d,newColumnNameValue:4}
          replaceRows = typeof replaceRows !== 'undefined' ? replaceRows : 0;
          
          var columnIdsToKeep = _.keys(_.omit(this.columns, columnIds));
          var columnIdCategory = this.getNewColumnName(newColumnNameCategory);
          var columnIdValue = this.getNewColumnName(newColumnNameValue);

          var data = [];
          for (var i = 0; i < this.rows.length; i++) {
              for (var k in columnIds) {
                  var newrecord = _.pick(this.rows[i], columnIdsToKeep);
                  newrecord[columnIdCategory] = columnIds[k];
                  newrecord[columnIdValue] = this.rows[i][columnIds[k]];
                  data.push(newrecord);
              }
          }
          
          if(replaceRows) {
            this.rows = data;
            for(var k in columnIds) delete(this.columns[columnIds[k]]);
            this.linkColumn(columnIdCategory,newColumnNameCategory);
            this.linkColumn(columnIdValue,newColumnNameValue);
          }
          
          return data;
      }
      
      this.linkColumn = function(columnId,columnName) {
          this.columns[columnId] = {
              id: columnId,
              field: columnId,
              name: columnName
          };
          this.setColumnTypeEditor(columnId);
      }

      this.groupBy = function (columnIdsDimensions, columnIdsMeasuresAndMetrics) {
          // function getKeys(anArray) { var arr = []; for(var k in anArray) arr.push(k); return arr; };
          // ["Player","Tm"],{"Age":{"avg":{init:function(), loop:function(), final:function()}}}
          var holder = {};
          // {"[Lebron James,MIA]":{"[Age,Avg]":29,...},...} 
          // {"[Lebron James,MIA]":{"[Age,Avg]":29,...},...} 

          // {"Player":"Lebron James", "Tm":"MIA", "Age_avg":29, "Age_max":30}

          for (var i = 0; i < this.rows.length; i++) {
              var key = [];
              for (var j = 0; j < columnIdsDimensions.length; j++) {
                  key.push(this.rows[i][columnIdsDimensions[j]])
              }
              var keyForHolder = JSON.stringify(key);

              if (!holder.hasOwnProperty(keyForHolder)) {
                  holder[keyForHolder] = {};

                  for (var measure in columnIdsMeasuresAndMetrics) {
                      for (var metric in columnIdsMeasuresAndMetrics[measure]) {
                          var currentKPI = JSON.stringify([measure, metric]);
                          holder[keyForHolder][currentKPI] = columnIdsMeasuresAndMetrics[measure][metric].init(); // launch init fun
                      }
                  }
              }
              for (var measure in columnIdsMeasuresAndMetrics) {
                  for (var metric in columnIdsMeasuresAndMetrics[measure]) {
                      var currentKPI = JSON.stringify([measure, metric]);
                      holder[keyForHolder][currentKPI] =
                          columnIdsMeasuresAndMetrics[measure][metric].loop(
                          holder[keyForHolder][currentKPI], this.rows[i][measure]); // launch loop fun
                  }
              }
          }
          for (var keyForHolder in holder) {
              for (var m in holder[keyForHolder]) {
                  measureAndMetric = JSON.parse(m);
                  holder[keyForHolder][m] =
                      columnIdsMeasuresAndMetrics[measureAndMetric[0]][measureAndMetric[1]].final(
                      holder[keyForHolder][m]);
              }
          }
          return holder;
      }

      for (var i = 0; i < obj.headers.length; i++) {
          this.columns[obj.headers[i]] = {
              id: obj.headers[i],
              field: obj.headers[i],
              name: obj.prettynames[obj.headers[i]]
          };
          this.setColumnTypeEditor(obj.headers[i]);
      }

  }