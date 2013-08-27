  function Dataset(obj) {
      this.columns = {};
      this.rows = obj.rows;

      this.applyFunction = function (columnId, expression) {
          var myfun = new Function("row", expression);

          for (var i = 0; i < this.rows.length; i++) {
              this.rows[i][columnId] = myfun(this.rows[i]);
          }
      }
      
      this.applyFunctionOnRows = function (expression) {
          var myfun = new Function("row", expression);
          var newdataset = _.filter(this.rows, myfun);
          if(newdataset.length > 0) {
            this.rows = newdataset;
          } else {
            alert("function: " + expression + " would result in an empty dataset");
          }
      }
      
      this.getColumns = function() {
           if(!_.has(this.columns,"id")){
              this.addIdColumn(); 
           }
           var res = [this.columns["id"]];
           //var res = [];
           for(var k in _.omit(this.columns,"id")) {
                res.push(this.columns[k])
           }
           return res;
      }

      this.getMeasures = function() {
        return _.filter(_.keys(this.columns),function(d) { return d != "id" && this.columns[d].type == "number"; }, this);
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

          this.applyFunction(columnId, expression);
          this.linkColumn(columnId,columnDisplayName);

          return columnId;
      }

      this.copyColumn  = function(columnId) {
         var newColumnId = this.getNewColumnName(columnId);
         for (var i = 0, len = this.rows.length; i < len; i++) {
            this.rows[i][newColumnId] = this.rows[i][columnId];
         }
         this.columns[newColumnId] = deepCopy(this.columns[columnId]);
         this.columns[newColumnId].id = newColumnId;
         this.columns[newColumnId].field = newColumnId;
      }

      this.removeColumn = function (columnId) {
          if (this.columns.hasOwnProperty(columnId)) {
              for (var i = 0, len = this.rows.length; i < len; i++) {
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

      this.removeLines = function(rowIndexes) {
        this.rows = _.reject(this.rows, function(element) { return _.contains(rowIndexes,element.id); });
      }

      this.changeHeader = function(columnIds, newHeader) {
        for(var i = 0, len = columnIds.length; i < len; i++) {
          this.renameColumn(columnIds[i], newHeader[i]);
          this.columns[columnIds[i]].width = this.getColumnSize(columnIds[i], newHeader[i]);
        }
      }

      this.getColumnStatistics = function (columnId) {
          var columnStatistics = {};


          var sliceOfData = this.rows.slice(0, 100);

          columnStatistics.max = d3.max(sliceOfData, function (d) {
              return d[columnId];
          });
          columnStatistics.min = d3.min(sliceOfData, function (d) {
              return d[columnId];
          });
          columnStatistics.median = d3.median(sliceOfData, function (d) {
              return d[columnId];
          });

          columnStatistics.count = 0;
          columnStatistics.nbNull = 0;
          columnStatistics.nbNonNull = 0;
          columnStatistics.nbNumber = 0;
          columnStatistics.nbString = 0;
          columnStatistics.nbDate = 0;
          columnStatistics.nbUndefined = 0;
          columnStatistics.nbNegative = 0;

          columnStatistics.nbDistinct = {};

          sliceOfData.reduce(function (previousValue, currentValue, index, array) {

              previousValue.count++;
              if(currentValue[columnId] === null) columnStatistics.nbNull++;

              if (typeof currentValue[columnId] == "number" 
                  || (currentValue[columnId] != null && currentValue[columnId].length > 0 && !isNaN(currentValue[columnId].replace(/[\$£€ ,]/g,"")-0)))
                  previousValue.nbNumber++;
              else if (currentValue[columnId] != null && new Date(currentValue[columnId]).toString() != "Invalid Date")
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
          columnStatistics.nbNonNull = columnStatistics.count - columnStatistics.nbNull;
          this.columns[columnId].statistics = columnStatistics;
          return this.columns[columnId].statistics;
      }

      this.setColumnFormatter = function(columnId) {
          this.columns[columnId].formatter =
              (this.columns[columnId].type == "date" ? Slick.Formatters.Date :
              (this.columns[columnId].type == "number" ? Slick.Formatters.Number : Slick.Formatters.Text));
      }

      this.setColumnTypeEditor = function (columnId) {
          this.columns[columnId].editor =
              (this.columns[columnId].type == "date" ? Slick.Editors.Date :
              (this.columns[columnId].type == "number" ? Slick.Editors.Float : Slick.Editors.Text));
      }

      this.setAutoType = function (columnId) {
          this.getColumnStatistics(columnId);

          var columnStatistics = this.columns[columnId].statistics;

          if ((columnStatistics.nbNumber / columnStatistics.nbNonNull) > 0.95) this.columns[columnId].type = "number";
          else if ((columnStatistics.nbDate / columnStatistics.nbNonNull) > 0.95) this.columns[columnId].type = "date";
          else this.columns[columnId].type = "string";

          this.applyType(columnId,this.columns[columnId].type);

          return this.columns[columnId].type;
      }

      this.applyType = function (columnId, newType) {
          for (var i = 0, len=this.rows.length; i < len; i++) {
              var currentValue = this.rows[i][columnId];
              if (currentValue != null && typeof currentValue != newType) {
                  if (newType == "date") { 
                    var localDate = new Date(currentValue);
                    if(localDate == "Invalid Date")
                      localDate = Date.parse(currentValue);
                    if(localDate != null && localDate.getMonth() != undefined)
                        this.rows[i][columnId] = localDate;
                    else this.rows[i][columnId] = currentValue;
                  } else if (newType == "number") {
                      var valueToTransform = currentValue;
                      if(!(typeof currentValue == "object" && currentValue.getMonth() != undefined))
                        valueToTransform = (currentValue + "").replace(/[\$£€ ,]/g,"");
                      var localFloat = (valueToTransform - 0); // remove all , in the input numbers
                      this.rows[i][columnId] = !isNaN(localFloat) ? localFloat : 
                                               valueToTransform.length > 0 ? currentValue : null;
                  } else if (newType == "string") {
                      if(typeof currentValue == "object" && currentValue.getMonth() != undefined) {
                        this.rows[i][columnId] = currentValue.toString("yyyy-MM-dd");  
                      } else this.rows[i][columnId] = currentValue.toString();
                  }
              }
          }
          
          this.getColumnStatistics(columnId);
          this.columns[columnId].type = newType;

          this.setColumnTypeEditor(columnId);
          this.setColumnFormatter(columnId);
      }

      this.unFlatten = function (columnIds, newColumnNameCategory, newColumnNameValue, replaceRows) {
          // starting with: {a:1, b:2, c:3, d:4}
          // if c,d are given as columnIds, the resulting dataset looks like
          // {a:1,b:2,newColumnNameCategory:c,newColumnNameValue:3},
          // {a:1,b:2,newColumnNameCategory:d,newColumnNameValue:4}
          replaceRows = typeof replaceRows !== 'undefined' ? replaceRows : 0;
          
          var columnIdsToKeep = _.keys(_.omit(this.columns, columnIds.concat(["id"])));
          var columnIdCategory = this.getNewColumnName(newColumnNameCategory);
          var columnIdValue = this.getNewColumnName(newColumnNameValue);


          var data = [];
          var id = 1;
          for (var i = 0; i < this.rows.length; i++) {
              for (var k in columnIds) {
                  var newrecord = _.pick(this.rows[i], columnIdsToKeep);
                  newrecord[columnIdCategory] = this.columns[columnIds[k]].name;
                  newrecord[columnIdValue] = this.rows[i][columnIds[k]];
                  newrecord["id"] = id++;
                  data.push(newrecord);
              }
          }
          
          if(replaceRows) {
            this.rows = data;
            for(var k in columnIds) delete(this.columns[columnIds[k]]);
            this.linkColumn(columnIdCategory,newColumnNameCategory);
            this.linkColumn(columnIdValue,newColumnNameValue);
            this.linkColumn("id","Id");
          }
          
          return data;
      }

      this.getColumnSize = function(columnId, columnName) {
          var colWidth = columnName.length * 7 + 30;
          for(var i = 0, len = this.rows.length; i < 20 && i < len; i++) {
            colWidth = Math.max(colWidth,(this.rows[i][columnId] + "").length * 7);
          }
          colWidth = Math.max(50,Math.min(colWidth, 200));
          return colWidth;
      }
      
      this.linkColumn = function(columnId,columnName) {
          
          this.columns[columnId] = {
              id: columnId,
              field: columnId,
              name: columnName,
              width: this.getColumnSize(columnId, columnName)
          };
          this.setAutoType(columnId);
      }

      this.addIdColumn = function() {
       
        for(var i = 0, len = this.rows.length; i < len; ){
          this.rows[i]["id"] = ++i;
        }
        this.columns["id"] = {
          id: "id",
          field: "id",
          name: "",
          width: 40,
          cssClass: "id-column",
          type: undefined
        }
       
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
                  key.push(this.rows[i][columnIdsDimensions[j]]);
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
          this.linkColumn(obj.headers[i], obj.prettynames[obj.headers[i]]);
      }
      this.addIdColumn();
      
  }