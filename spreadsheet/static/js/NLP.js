


function defineTags(){
    var availableTags = [];
    var allVariablesName = _.map(slickGrid.getColumns(), function(e) { return e.name; });
    var allActionName = _.map(transformation, function(e) { return e.tag_id.split('-')[0]; });


    function arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    };

    return availableTags = arrayUnique(allVariablesName.concat(allActionName)).sort();

}


 function findListElementinQuery(aQuery, aList){
    var res = [];

    for(i = 0; i < aList.length; i++) {
      if(aQuery.indexOf(aList[i]) > -1){
        var varID = _.find(dataset.getColumns(), function(c){ return c.name == aList[i]; }).id;//convert column name to id
        res.push(varID);

      }
    }

    return res;
              
}


function processQuery(aQuery){
    console.log("query is " + aQuery);

    var queryKeywords = aQuery.split(" ");//split aSearchInput into a set of strings
    var allVariablesName = _.rest(_.map(slickGrid.getColumns(), function(e) { return e.name; }),1);
    var action = "undefined";
    var actionArgs = {};
    var selectedVariable = "undefined";

    if(queryKeywords[0] == "keep"){
      if(queryKeywords.indexOf('where') > -1){
        queryKeywords[0] = "filter";
      }

    }


    switch(queryKeywords[0])
    {
       case "unflatten": 
            action = "unflatten-selected-columns";
            queryKeywords.shift();
            if( findListElementinQuery(aQuery, allVariablesName).length > 0 ){ //if we found at least 1 variable, then we remove it. 
              selectedVariable = findListElementinQuery(aQuery, allVariablesName);

              var name = queryKeywords.indexOf("to") > -1?  _.rest(queryKeywords, queryKeywords.indexOf("to") + 1).join(" ") : "NewColumn";

              actionArgs = { 
                 selectedColumns: selectedVariable,
                 name: name
              } 

            } else action = "undefined"; 

            //} else action = "undefined";// as we couldnt define to which variable the action applies, we cancel
            break; 
       

        case "create": 
            action = "create-new-variable-expression";
            queryKeywords.shift();
            var newVariable = _.first(queryKeywords,queryKeywords.indexOf("as")).join(" ");
            var rawExpression  = _.rest(queryKeywords,queryKeywords.indexOf("as") + 1).join(" ");

            
            actionArgs = {
              name: newVariable,
              where: convertRawFilterIntoFilter(rawExpression)
            };

            //} else action = "undefined";// as we couldnt define to which variable the action applies, we cancel
            break; 
       
        case "update": 
            action = "apply-expression-on-variable";
            queryKeywords.shift();
            selectedVariable = findListElementinQuery(aQuery.substring(0, aQuery.indexOf("as")), allVariablesName);
            
            if(selectedVariable.length > 0){ // there is eitehr 0 or more var
              selectedVariable = selectedVariable[0];
              var rawExpression  = _.rest(queryKeywords,queryKeywords.indexOf("as") + 1).join(" ");

              actionArgs = {
                selectedVariable: selectedVariable,
                where: convertRawFilterIntoFilter(rawExpression)
              };

            } else action = "undefined";// as we couldnt define to which variable the action applies, we cancel
            break; 

       case "convert": 
            action = "apply-type-on-variable";
            queryKeywords.shift();
            selectedVariable = findListElementinQuery(aQuery, allVariablesName);
            
            if(selectedVariable.length > 0){ // there is eitehr 0 or more var
              var newType = "undefined";
              ["number", "date", "string"].forEach(function(e){ if(aQuery.indexOf(e) > -1) newType = e ; } );

              actionArgs = {
                selectedVariable: selectedVariable,
                newType: newType
              };

            } else action = "undefined";// as we couldnt define to which variable the action applies, we cancel
            break; 

       case "filter": 
            action = "keep-only-records-where";

            queryKeywords.shift();
            
            
            if(queryKeywords.indexOf("where") > -1){ 
              var pivotKeyword = queryKeywords.indexOf("where");
              var filter = convertRawFilterIntoFilter(_.rest(queryKeywords ,pivotKeyword + 1).join(" "));
              
              actionArgs = {filter: filter};
            } else action = "undefined";// as we couldnt define to which variable the action applies, we cancel
            break; 

        case "rename": 
            action = "rename-variable";
            queryKeywords.shift();
            
            selectedVariable = findListElementinQuery(_.first(queryKeywords, queryKeywords.indexOf("to")).join(" "), allVariablesName);
            

            if(selectedVariable.length == 1){ // there should be only one variable
              

              var newColumnName = queryKeywords.indexOf('to') > -1 ? _.rest(queryKeywords, queryKeywords.indexOf('to') + 1).join(" ")  : 0; //either we find the keyword 'to' or we take the remaining string in the query
              
              newColumnName = newColumnName.trim().replace(/'/g,"").replace(/"/g,"");

              actionArgs = {selectedVariable: selectedVariable[0], 
                          newName: newColumnName };
            }
            else action = "undefined";// as we couldnt define to which variable the action applies, we cancel
            break; 

      case "replace": 
            action = "replace-from-to";
            queryKeywords.shift();//remove the first keyword which is the action

            var selectedVariable = queryKeywords[queryKeywords.indexOf("in") + 1]; // selected Variable should be right after the keyword in
            

            if(!_.contains(allVariablesName, selectedVariable)){ // if this extraction technique didnt work, we try to find a variable name in the query
              selectedVariable = findListElementinQuery(aQuery, allVariablesName);
              selectedVariable = selectedVariable[0];
            }
            else {
              queryKeywords.splice(queryKeywords.indexOf("in"),1); // remove the keyword in that was preceding the variable name
            }

            queryKeywords.splice(queryKeywords.indexOf(selectedVariable),1); // remove the variable name from the query
            
            
            var pivot = queryKeywords.indexOf("by");
            
            if(pivot > 0){
              actionArgs = {
                  selectedVariable: selectedVariable, 
                  from:  _.first(queryKeywords, pivot ).join(" "),
                  to:  _.rest(queryKeywords, pivot +1).join(" ")
                };
              
              console.log("from " + actionArgs.from + " and to " + actionArgs.to);
            } 
            else action = "undefined";              
            break;
        case "remove":
            action = "remove-selected-lines";
            queryKeywords.shift();//remove the first keyword which is the action
            
            if( aQuery.match(/\d+\.?\d*/g) == null) {
              action = "remove-selected-columns";
              
              if(queryKeywords.indexOf("but") > 0){
                var variableToKeep = findListElementinQuery(aQuery, allVariablesName);
                selectedVariable = _.difference(_.map(dataset.getColumns(), function(num){ return num.id; }), variableToKeep);
                
                actionArgs = { 
                   selectedVariable: selectedVariable
                } 

              } else if( findListElementinQuery(aQuery, allVariablesName).length > 0 ){ //if we found at least 1 variable, then we remove it. 
                selectedVariable = [];
                selectedVariable.push(findListElementinQuery(aQuery, allVariablesName));
                actionArgs = { 
                   selectedVariable: selectedVariable
                } 
              } else action = "undefined"; 
            } else{ // if no variables, we assumes the user wants to delete rows
              

              var rowsToDelete = aQuery.match(/\d+\.?\d*/g);

              
              if( queryKeywords.indexOf("to") > 0 || queryKeywords.indexOf("and") > 0 && rowsToDelete.length == 2) {// check if user hasnt defined a range like remove lines 2 to 10
                rowsToDelete.sort(function(a, b) { return a - b });
                var lowEnd = rowsToDelete[0] ;
                var highEnd = rowsToDelete[1];
                rowsToDelete = [];
                for (var i = lowEnd; i <= highEnd; i++) {
                  rowsToDelete.push(i);
                }
              }

              if( queryKeywords.indexOf("top") > -1 || queryKeywords.indexOf("first") > -1 ) {// check if user hasnt defined a range like remove lines 2 to 10
                var highEnd = queryKeywords[queryKeywords.indexOf("top") + 1];
                var lowEnd = 1;

                rowsToDelete = [];
                for (var i = lowEnd; i <= highEnd; i++) {
                  rowsToDelete.push(i);
                }
              }


              actionArgs = { 
                selectedLines: _.map(rowsToDelete, function(num){ return +num; }) // convert rowsToDelete to int
              }    

            } 
          
          break;

        default:
          action = "undefined";
    }

    if(action != "undefined")
      processSuggestion(action, actionArgs);

}



function convertRawFilterIntoFilter(aRawFilter){              
              return 'return '+ _.map( aRawFilter.split("and"), function(c){ return convertAClauseIntoAFilter(c); }).join(" && ") + ';';
            }


            function convertAClauseIntoAFilter(aClause){
              var operators = [
                {
                keyword: "/",
                symbol: "/"
                },
                {
                keyword: "divided by",
                symbol: "/"
                },
                {
                keyword: "*",
                symbol: "*"
                },
                ,
                {
                keyword: "times",
                symbol: "*"
                },
                  {
                keyword: "greater",
                symbol: ">"
              },
              ,
                  {
                keyword: ">",
                symbol: ">"
              },
              {
                keyword: "lower",
                symbol: "<"
              },
              {
                keyword: "<",
                symbol: "<"
              },
              {
                keyword: "=",
                symbol: "=="
              },
              {
                keyword: "equal",
                symbol: "=="
              },
                {
                keyword: "is",
                symbol: "=="
              } 
            ]

            operators.forEach( function(o){ return aClause = converAClause(aClause, o.keyword, o.symbol );});
            return  aClause;

            

              function converAClause(aClause, keyword, symbol){


                var allVariablesName = _.rest(_.map(dataset.getColumns(), function(e){return e.name;}), 1);
                var leftSide = "";
                var rightSide = "";
                var operator = symbol;

                var clauseKeywords = aClause.split(" ");
                if (clauseKeywords.indexOf(keyword)  > 0)
                {
                  

                  leftSide = _.first(clauseKeywords, clauseKeywords.indexOf(keyword) ).join(" ");
                  leftSide = "row."+ findListElementinQuery(leftSide, allVariablesName)[0];
                  
                  rightSide = _.rest(clauseKeywords, clauseKeywords.indexOf(keyword) + 1);
                  


                  if(rightSide.join(" ").match(/\d+\.?\d*/g) != null){//if there is number ,we assume its a number
                    rightSide = rightSide.join(" ").match(/\d+\.?\d*/g);  
                  } else{//otherwise we convert into a string
                    
                    rightSide = '"' + rightSide.join(" ") + '"';
                  }
                  return leftSide + " " + operator + " " + rightSide;
                } else
                    return aClause;
                
             }
            }

            function clearSuggestionList(){


            }

            function processSuggestion(actionID, actionArgs) {
              if(transformation[actionID] !== null){
                if(typeof actions == "undefined"){
                  console.log("execute " + transformation[actionID] + " on var " + actionArgs.selectedVariable);
                  transformation[actionID].action(actionArgs);
                  clearSuggestionList();  
                }
                else {
                console.log("args undefined for action: "+ actionID);

              }

              } else {
                console.log("unknown suggestion id: "+ actionID);

              }
              
            }

            function updateSuggestionSelectedValue(aValue) {
              
              //var selectedValue = getSelectionText();
              $('#suggestionsList').find('.selectedValue').val(aValue);
              
            }

            function updateSuggestionVariableName() {
                var activeCell = slickGrid.getActiveCell();
                
                
                if(activeCell != null) {
                  var selectedVariable = slickGrid.getColumns()[activeCell.cell].id;
                  
                  var text;
                  if(dataset.columns[selectedVariable].name.length > 0){
                    text = " for " + dataset.columns[selectedVariable].name;
                  }else{
                    text = " for selected rows";
                  }
                  $('#suggestionsTitle').find('.selectedVariable').text(text);
                } else if(selectedColumns.length > 0) {
                  text = " for selected columns";
                  $('#suggestionsTitle').find('.selectedVariable').text(text);
                }
            }

            function updateSuggestionsList(aSlickRange ){ //update the list of suggestion based on the slickgrid range sleected. Range can be: aCell, Rows or Columns

              var selectedValue = getSelectionText();
              var selectedVariable = getSelectedVariable();

              var activeCell = slickGrid.getActiveCell();
              var selectedRows = slickGrid.getSelectedRows();
              var keepSuggestionApplyingTo;

              if(activeCell != null) {
               if(selectedRows.length > 1) { // several rows selected
                  keepSuggestionApplyingTo = "rows";
                }
                else{//one row selected
                  if ( selectedValue.length > 0){ // content selected in a cell
                    keepSuggestionApplyingTo = "cellContent"; 
                    
                  }
                  else if (activeCell.cell == 0){ //selection is one row
                    keepSuggestionApplyingTo = "row"; 
                  }
                  
                  else{
                    keepSuggestionApplyingTo = "cell";                       
                  }
                }
               } else if(selectedColumns.length > 0) {
                  keepSuggestionApplyingTo = selectedColumns.length == 1 ? "column" : "columns"; 
               } else if(selectedRows.length >= 1) {
                   keepSuggestionApplyingTo = selectedRows.length == 1 ? "row" : "rows";
               }
               //console.log("Suggestions for : "+keepSuggestionApplyingTo);
              
               
              var suggestionsToShow  = _.filter(transformation, function(p){ return _.contains(p.applyTo, keepSuggestionApplyingTo); });
              var suggestionsToShowHtml = _.reduce(suggestionsToShow, function(memo, s){ return memo + s.html(); }, "");

              if(activeCell != null && activeCell.row == 0){ 
                keepSuggestionApplyingTo = "firstLine";                       
                suggestionsToShow  = _.filter(transformation, function(p){ return _.contains(p.applyTo, keepSuggestionApplyingTo); });
                suggestionsToShowHtml += _.reduce(suggestionsToShow, function(memo, s){ return memo + s.html(); }, "");
                
              }
              
              
              $('#suggestionsList').empty().append(suggestionsToShowHtml);
             
              updateSuggestionVariableName();
              updateSuggestionSelectedValue(selectedValue);
              
              function executeActionOnSuggestionClick(args) {
                var actionID = $(this).parent().attr('action');
                var actionArgs = {
                  selectedVariable: getSelectedVariable()
                };
                
                $(this).parent().find("input, select").each(function(){actionArgs[$(this).attr("args")] = $(this).val() ;});
                
                processSuggestion(actionID, actionArgs); 
                
              }

              $('#suggestionsList').find('a').click(executeActionOnSuggestionClick);

              $('<span class="addButtonIcon"><i class="icon-check"></i></span>').appendTo($('.suggestion'));
              $('.suggestion').hover(function() { $(this).find('.addButtonIcon').show(); }, function() { $(this).find('.addButtonIcon').hide(); });
              $('.suggestion').find('.addButtonIcon').click(executeActionOnSuggestionClick);

  
              /*
              $('#suggestionsList').find('.suggestion').click( function(args) { 
                var actionID = $(this).attr('action');
                var actionArgs = {
                  selectedVariable: getSelectedVariable()
                };
                $(this).parent().find("input, select").each(function(){actionArgs[$(this).attr("args")] = $(this).val() ;});
                
                processSuggestion(actionID, actionArgs); 
                

              });
                */
              
            }
