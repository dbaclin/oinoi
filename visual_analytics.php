
        
        <?php 
        function write_pasted_data($pasted_data) {
            $unique_id = uniqid();
            $data_file = "./uploads/" . $unique_id . ".csv";
            $handle = fopen($data_file, 'w') or die('Cannot open file:  '.$data_file);
            foreach (explode("Ø",$pasted_data) as $line) {
                if(strlen($line)) fwrite($handle,str_replace("\t",",",$line) . "\n");
            }
            fclose($handle);
            return $unique_id . ".csv";
        }
        ?>
        
        
        

         

 <div id="tabs">
              <ul>
    <li><a href="#tabs-1">Wrangle</a></li>
    <li><a href="#tabs-2">Visualize</a></li>
    
  </ul>
  <div id="tabs-1" class="tabs-no-padding">
    <div class="container-fluid main-page">
          
          <div class="row-fluid">
            <div class="span2">
                <div id="suggestions-list">
                 <div><a href="javascript:cleanDataMenuFunction('replace');">replace all occurences of <b class="selectedValue"></b> in <b class="selectedVariable"></b> with </a><input id="replaceInput" type="text" style="width: 100px;vertical-align: baseline;padding: 0px; "></div>
 <div><a href="#">keep all characters of <b class="selectedVariable"></b> up to </a><input id="upToInput" type="text" style="width: 100px;vertical-align: baseline; padding: 0px; "></div>
 <div><a href="#">keep all characters of <b class="selectedVariable"></b> starting from </a><input id="fromToInput" type="text" style="width: 100px;vertical-align: baseline; padding: 0px; "></div>
 <div><a href="#">keep all characters of <b class="selectedVariable"></b> between </a><input id="leftCharInput" type="text" style="width: 60px;vertical-align: baseline; padding: 0px;"> and <input id="rightCharInput" type="text" style="width: 60px;vertical-align: baseline; padding: 0px;"></div>
 <div><a href="#">keep the first </a><input id="leftInput" type="number" style="width: 40px;vertical-align: baseline;padding: 0px;"> characters of <b class="selectedVariable"></b></div>
 <div><a href="#">keep all characters of <b class="selectedVariable"></b> between positions </a><input id="leftPosInput" type="number" style="width: 40px;vertical-align: baseline;padding: 0px;"> and <input id="rightPosInput" type="number" style="width: 40px;vertical-align: baseline;padding: 0px;"></div>
 <div><a href="#">keep only the records where the <b class="selectedVariable"></b> contains <b class="selectedValue"></b></a></div> 
 <div><a href="#">delete all records where the <b class="selectedVariable"></b> contains <b class="selectedValue"></b></a></div>
 <div><a href="#">delete all records where the <b class="selectedVariable"></b> is empty</a></div>
 
             </div>
            </div>
            <div class="span10" >
                 <div id="myGrid" style="width:100%;height:600px;"></div>
            </div>
         </div>
     
     </div>
  </div>
  <div id="tabs-2" class="tabs-no-padding">
    <div class="container-fluid main-page" >
          <div id="spinner"> </div>
          
          <div class="row-fluid">
            <div class="span2 list-var" style="align:right;">
              <ul id="variables" >
              <li id="share" style="background: white; border: 1px solid #444; font-weight: 600; font-size: 14px; margin-bottom: 7px;">
                <i class="icon-share"></i> Share Dashboard
              </li>
              </ul>
            </div>
            <div class="span10 layouts_grid" id="layouts_grid">
          <ul>
          </ul>
        </div>
      </div>
    </div>
    </div>
</div>

<div aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal hide ui-draggable" id="myModalLeft" >
 <div class="modal-body">
  <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
      
      <p>Keep only the first <input type="number" style="width: 35px;vertical-align: baseline;"> characters</p>
        
    </div>
    <div class="modal-footer">
      <button data-dismiss="modal" class="btn">Cancel</button>
      <button class="btn btn-primary">Ok</button>
    </div>
  </div>
  
 <div aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal hide ui-draggable" id="myModalLeftToString" >
 <div class="modal-body">
  <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
      
      <p>Keep only the first characters up to string <input type="text" style="width: 100px;vertical-align: baseline;"> </p>
        
    </div>
    <div class="modal-footer">
      <button data-dismiss="modal" class="btn">Cancel</button>
      <button class="btn btn-primary">Ok</button>
    </div>
  </div>
         
  <div aria-labelledby="myModalLabel" role="dialog" tabindex="-1" class="modal hide ui-draggable" id="myModalReplaceString" >
 <div class="modal-body">
  <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
      
      <p>Replace all occurences of <input type="text" style="width: 150px;vertical-align: baseline;"> with <input type="text" style="width: 150px;vertical-align: baseline;"></p>
        
    </div>
    <div class="modal-footer">
      <button data-dismiss="modal" class="btn">Cancel</button>
      <button class="btn btn-primary">Ok</button>
    </div>
  </div>       
      
      	<?php include_once("./libs.php"); ?>
         
         <script type="text/javascript">       
         
         $('ul.nav li').removeClass('active');
         $('ul.nav li:contains(Analyze)').addClass('active');
         
        var opts = {
          lines: 15, // The number of lines to draw
          length: 12, // The length of each line
          width: 7, // The line thickness
          radius: 19, // The radius of the inner circle
          corners: 0.6, // Corner roundness (0..1)
          rotate: 90, // The rotation offset
          direction: 1, // 1: clockwise, -1: counterclockwise
          color: '#000', // #rgb or #rrggbb
          speed: 0.7, // Rounds per second
          trail: 58, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinner', // The CSS class to assign to the spinner
          zIndex: 2e9, // The z-index (defaults to 2000000000)
          top: '100%', // Top position relative to parent in px
          left: 'auto' // Left position relative to parent in px
        };
        var target = document.getElementById('spinner');
        var spinner = new Spinner(opts).spin(target);
                    
         </script>                           

        <script id="tpl-card" type="text/html"><li class="layout_block" id="{{varName}}-card" varName="{{varName}}">
        <div class="card-content">
        <div id="{{varName}}-chart"><div class="card-title"><span class="placeholder"></span><b> by </b>{{displayVarName}}<a class="reset" href="javascript:dimGroup.get('{{varName}}').chart.filterAll();dc.redrawAll();" style="display: none;"><i class="icon-filter filter-header"></i></a><div class="remove_element"><i class="icon-remove"></i></div></div></div></li>
        </script>    
                                
      
        
        <script id="tpl-var-list" type="text/html">
            {{#variables}} 
                 <li  class="ui-state-default variable" data-var="{{varName}}"><i class="icon-plus-sign"></i> {{varNameShort}}</li>
            {{/variables}}
        </script>
        
        <script id="tpl-datatable" type="text/html">
            {{#variables}} 
                <th>{{var_name}}</th>
            {{/variables}}
        </script>
        
        <script id="tpl-measure-choice" type="text/html">
            <span class='dropdown' id='{{currentVariable}}-measure-selection'> <a data-toggle='dropdown' href='#'>Count(#Records)</a> <ul class='dropdown-menu' style='position: absolute;'> <li><a href='javascript:changeDisplayedMetric("{{currentVariable}}","NA","reset");'>Count(#Records)</a></li> {{#measures}} <li class='dropdown-submenu'> <a tabindex='-1' href='#'>{{displayVariableName}}</a> <ul class='dropdown-menu' style='position: absolute;'> {{#statistics}} <li><a tabindex='-1' href='javascript:changeDisplayedMetric("{{currentVariable}}","{{variableName}}","{{func}}");'>{{display}}</a></li> {{/statistics}} </ul> </li> {{/measures}} </ul> </span>
        </script>
        
        <script type="text/javascript">
        
             
            var layout;
            var grid_size = 100;
            var grid_margin = 5;
            var block_params = {
                max_width: 6,
                max_height: 6
            };
                // initialize gridster
                
                layout = $('.layouts_grid ul').gridster({
                    avoid_overlapped_widgets:true,
                    widget_margins: [grid_margin, grid_margin],
                    widget_base_dimensions: [grid_size, grid_size],
                    serialize_params: function($w, wgd) {
                        return {
                            x: wgd.col,
                            y: wgd.row,
                            width: wgd.size_x,
                            height: wgd.size_y,
                            id: $($w).attr('data-id'),
                            name: $($w).find('.block_name').html(),
                        };
                    },
                    min_rows: block_params.max_height
                }).data('gridster');
                
                
                $("#layouts_grid" ).droppable({
                  drop: function( event, ui ) {
                    var variable_to_add = ui.draggable.data('var');
                    var global_offset = $('#layouts_grid').offset();
                    
                    var column_number = Math.round((ui.position.left - $(this).offset().left) / (grid_size + (2*grid_margin))) + 1;
                    var row_number = Math.round((ui.position.top - $(this).offset().top) / (grid_size + (2*grid_margin))) + 1;
                    //console.log("where we want to put it "+column_number,row_number);
                    addElementOnGridBoard(variable_to_add,column_number,row_number);
                  }
                });
                
                $( "#tabs" ).tabs();
                
               
                function addElementOnGridBoard(aVariableName,colNumber,rowNumber) {
                    if(dimGroup.get(aVariableName) === undefined) {
                        
                        colNumber = (typeof colNumber !== 'undefined' ? colNumber : 1 );
                        rowNumber = (typeof rowNumber !== 'undefined' ? rowNumber : 1 );
                        
                        var gridster_widget_element = add_card(aVariableName,colNumber,rowNumber);
  
                        addResize(gridster_widget_element,aVariableName);
                        addResizeHandle(gridster_widget_element);
                        addRemove(gridster_widget_element,aVariableName);
                        /*
                        var new_width = $("#"+aVariableName+"-card").width();
                        var new_height = $("#"+aVariableName+"-card").height();
                            
                        dimGroup.get(aVariableName).chart.width(new_width-5).height(new_height-30).render();
                        */
                        //if(data_summary[aVariableName].type != "number")
                        $('#'+aVariableName+'-chart').find('.placeholder')
                            .append(Mustache.render($('#tpl-measure-choice').html(),
                                {currentVariable:aVariableName, measures:measures}
                         )); 
                    }
                }
                
                function addResize(anElement,aVariableName) {
                
                anElement.resizable({
                    grid: [grid_size + (grid_margin * 2), grid_size + (grid_margin * 2)],
                    animate: false,
                    minWidth: grid_size,
                    minHeight: grid_size,
                    autoHide: true,
                    containment: '#layouts_grid ul',
                    start: function(event, ui) {
                        grid_height = layout.$el.height();
                    },
                    resize: function(event, ui) {
                        //set new grid height along the dragging period
                        var delta = grid_size + grid_margin * 2;
                        if (event.offsetY > layout.$el.height()) {
                            var extra = Math.floor((event.offsetY - grid_height) / delta + 1);
                            var new_height = grid_height + extra * delta;
                            layout.$el.css('height', new_height);
                        }
                    },
                    stop: function(event, ui) {
                        var resized = $(this);
                        setTimeout(function() {
                            var new_dimensions = resizeBlock(resized);
                            
                            var width = $("#"+aVariableName+"-card").width();
                            var height = $("#"+aVariableName+"-card").height();
                            
                            dimGroup.get(aVariableName).chart.width(width-5).height(height-30).render();
                        }, 200);
                    }
                });

                }
                
                function addResizeHandle(anElement) {
                    $(anElement).find('.ui-resizable-handle').hover(function() {
                    layout.disable();
                    }, function() {
    
                        layout.enable();
                    });    
                }
                function addRemove(anElement,aVariableName) {
                    $(anElement).find('.remove_element').click(function(event) {
                        var gridster = $(".layouts_grid ul").gridster().data('gridster');
                        gridster.remove_widget(anElement);
                        dimGroup.get(aVariableName).chart.filterAll();
                        dc.redrawAll();
                        dimGroup.get(aVariableName).dim.remove();
                        dimGroup.remove(aVariableName);
                    });
                }
                
                function resizeBlock(elmObj) {
            
                    var elmObj = $(elmObj);
                    var w = elmObj.width() - grid_size;
                    var h = elmObj.height() - grid_size;
            
                    for (var grid_w = 1; w > 0; w -= (grid_size + (grid_margin * 2))) {
            
                        grid_w++;
                    }
            
                    for (var grid_h = 1; h > 0; h -= (grid_size + (grid_margin * 2))) {
            
                        grid_h++;
                    }
            
                    layout.resize_widget(elmObj, grid_w, grid_h);
                    
                    return [grid_w,grid_h];
                }
                 
                function changeDisplayedMetric(aVariableName,aMesureName,aStatistic) {
                
                if(aStatistic != "reset") {
                    $('#'+aVariableName+'-measure-selection').find('a[data-toggle=dropdown]').text(aStatistic + "(" + json_data.prettynames[aMesureName] +")");
                    
                    dimGroup.get(aVariableName).grp = dimGroup.get(aVariableName).dim.group().reduce(
                                    function (p, v) {
                                        p.Count = p.Count + 1;
                                        p.CountNonNulls = p.CountNonNulls + ( v[aMesureName] !== null ? 1 : 0);
                                        p.CountNulls = p.Count - p.CountNonNulls;
                                        p.Min = ( v[aMesureName] < p.Min ? v[aMesureName] : p.Min );
                                        p.Max = ( v[aMesureName] > p.Max ? v[aMesureName] : p.Max );
                                        p.Sum = p.Sum + v[aMesureName];
                                        p.Avg = p.Sum / p.CountNonNulls;
                                        p.StdDev = (p.Count != 0 ? Math.sqrt(Math.pow(v[aMesureName] - p.Avg,2)/p.Count) : null);
                                        return p;
                                    },
                                    null
                                     ,
                                    function () {
                                        return {Count: 0, CountNonNulls:0, CountNulls:0, Min: Infinity, Max: -Infinity, Sum: 0, Avg: 0, StdDev: 0};
                                    }
                            );
                            
                    dimGroup.get(aVariableName).chart.group(dimGroup.get(aVariableName).grp);
                    
                    function getValue() {
                        var hardcodedStat = aStatistic;
                        return function(d) { return d.value[hardcodedStat]; };
                    }
                    function getTitle() {
                        var hardcodedStat = aStatistic;
                        return function(d) { return hardcodedStat + ": "+ Math.round(d.value[hardcodedStat] * 1000)/1000; };
                    }
                    
                    dimGroup.get(aVariableName).chart.valueAccessor(getValue());			
                    dimGroup.get(aVariableName).chart.title(getTitle());
                    
                } else {
                    $('#'+aVariableName+'-measure-selection').find('a[data-toggle=dropdown]').text("Count(#Records)");
                    dimGroup.get(aVariableName).grp = dimGroup.get(aVariableName).dim.group();
                    dimGroup.get(aVariableName).chart.group(dimGroup.get(aVariableName).grp);
                            
                    dimGroup.get(aVariableName).chart.valueAccessor(function(d) { return d.value; });			
                    dimGroup.get(aVariableName).chart.title(function(d) {
                        return "Count(#Records): "+ d.value;
                    });
                }
                dimGroup.get(aVariableName).chart.render();
            }

                //end: gridster initialized

           
        
        
         </script>
        <script type="text/javascript">
            var dimGroup = new HashTable();
            var ndx;
            var all;
            var measures = [];
            
            
            function add_variable_list(headers){
                    
                    var allVariables = { "variables" : []};
                        
                    for(var i = 0; i < headers.length; i++) {
                        
                        var currentVarForDisplay = json_data.prettynames[headers[i]];
                        
                        allVariables.variables[i] = {
                            "varName":headers[i],
                            "varIdx" : i + 1,
                            "varNameShort":(currentVarForDisplay.length > 25 ? currentVarForDisplay.slice(0,25) + ".." : currentVarForDisplay)
                        };
                         
                        
                    }


                    $('#variables').append(Mustache.render($('#tpl-var-list').html(),allVariables));
                    
                    $('#variables li[class="ui-state-default variable"]').draggable({revert: "invalid" ,
                                                   helper: function () { $copy = $(this).clone(); 
                                                    $copy.css({"list-style":"none",
                                                      "width":$(this).outerWidth(),
                                                      "margin": "0 0px 3px 0px", 
                                                      "padding": "0.4em", 
                                                      "text-indent": "2px",
                                                      "font-size": "13px", 
                                                      "height": "18px", 
                                                      "border-radius": "2px",
                                                      "cursor": "pointer",
                                                      "font-style": "normal",
                                                      "font-weight": 500,
                                                      "z-index": 5,
                                                      "border": "1px solid #444",
                                                      "background": "#ffffff",
                                                      "color": "#444"
                                                                }); return $copy; 
                                                    },
                                                    appendTo: 'body',
                                                    scroll: false});
                                                    
                    $('#variables li[class="ui-state-default variable ui-draggable"]').click(function() {
                        var variable_to_add = $(this).attr('data-var');
                        
                        addElementOnGridBoard(variable_to_add);
                        
                  });
                
            }
            
             function add_card(varName, colNumber, rowNumber){
                    
                    //console.log("where we would like to put it: "+[colNumber,rowNumber]);
                    var dimension, group;
                    var chart;
                    var gridster = $(".layouts_grid ul").gridster().data('gridster');
                    
                    var widget_html = Mustache.render($('#tpl-card').html(),{"varName":varName,"displayVarName":json_data.prettynames[varName]});
                    
                    var grid_squares = Math.floor($('.span10.layouts_grid.ready.ui-droppable ul').width() / (grid_size + 2*grid_margin));
                    
                    var best_position = [];
                    
                    thesoundbarrier:
                    for(var j = rowNumber; j < grid_squares*2; j++) {
                        for(var i = colNumber; i < grid_squares; i++) {
                            if(!gridster.is_occupied(i,j)) 
                            {
                                best_position = [i,j];
                                break thesoundbarrier;
                            }
                        }
                    }
                    
                    //console.log("where it's going to go: "+best_position);
                    var gridster_widget_element = gridster.add_widget(widget_html,1,1,best_position[0],best_position[1]);
                 
                    switch(data_summary[varName].type)
                    {
                    case "number":
                        dimension = ndx.dimension(function(d) {
                                    return d[varName];
                                });
                        group = dimension.group();
                        
                        chart = add_dc_bar_chart(varName,dimension,group,gridster.min_widget_width * 3 - 30,gridster.min_widget_height * 3);
                        break;
                    case "string":
                        dimension = ndx.dimension(function(d) {
                                    return d[varName];
                                });
                        var allKeysValues = dimension.group().top(Infinity);
                        var allKeysValuesStore = {};
                        for(var i in allKeysValues) {
                            allKeysValuesStore[allKeysValues[i].key] = allKeysValues[i].value;
                        }
                        dimension.remove();
                        dimension = ndx.dimension(function(d) {
                            return (9999999999 - allKeysValuesStore[d[varName]]) + "" + d[varName];
                        });
                        group = dimension.group();

                        var nbBins = dimension.group().top(Infinity).length;        
                                
                        chart = add_dc_row_chart(varName,nbBins,dimension,group,gridster.min_widget_width * 3 - 30, gridster.min_widget_height );
                        break;
                    
                    case "date":
                        
                        dimension = ndx.dimension(function(d) {
                                        return d[varName];
                                    });
                        group = dimension.group();
                        
                        chart = add_dc_line_chart(varName,dimension,group,gridster.min_widget_width * 4 - 30, gridster.min_widget_height * 2);
                        
                        break;
                    default:
                        alert('data type is undefined');
                    }
                    
                    
                    
                    dimGroup.put(varName, {
                                dim: dimension,
                                grp: group,
                                chart: chart
                            });
                    
                    var sizex = Math.ceil(chart.width() / gridster.min_widget_width);
                    var sizey = Math.ceil(chart.height() / gridster.min_widget_height);
                    gridster.resize_widget($('#'+ varName +'-card' ), sizex, sizey);
                    
                    var new_width = (2*grid_margin)*(sizex-1)+(sizex*grid_size);
                    var new_height = (2*grid_margin)*(sizey-1)+(sizey*grid_size);
                    // dimGroup.get(varName).chart.width((sizex * (grid_size + grid_margin))-5).height((sizey * (grid_size + grid_margin)-30).render();
                    
                    dimGroup.get(varName).chart.width(new_width-5).height(new_height-30).render();
                    
                    return gridster_widget_element;
                }
            
            function sizeOfDict(obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            }
            
            function isNullOrNanOrUndefined(aVariable){
                return (aVariable == null) ||
                       (aVariable == undefined) ||
                       (typeof aVariable == "number" && isNaN(aVariable))  
            }
            
            function isNullOrNanOrUndefinedOrEmptyString(aVariable){
                return (aVariable == null) ||
                       (aVariable == undefined) ||
                       (typeof aVariable == "number" && isNaN(aVariable)) ||
                       (typeof aVariable == "string" && aVariable.length == 0)
            }

            function getSummaryStats(headers, rows) {        
                var data_summary = {};
                for(var i in headers){
                    data_summary[headers[i]] = {};
                    
                    data_summary[headers[i]].max = d3.max(rows, function(d){return d[headers[i]];});
                    data_summary[headers[i]].min = d3.min(rows, function(d){return d[headers[i]];});
                    data_summary[headers[i]].median = d3.median(rows, function(d){return d[headers[i]];});
                    
                    data_summary[headers[i]].nbNumber = 0;
                    data_summary[headers[i]].nbString = 0;
                    data_summary[headers[i]].nbDate = 0;
                    data_summary[headers[i]].nbUndefined = 0;
                    data_summary[headers[i]].nbNegative = 0;
                    
                    data_summary[headers[i]].nbDistinct = {};
                }
                
                rows.reduce(function (previousValue, currentValue, index, array){ 
                    for(var i in headers){
                        if(typeof currentValue[headers[i]] == "number")
                         previousValue[headers[i]].nbNumber++;
                        else if(!isNaN(new Date(currentValue[headers[i]])))
                         previousValue[headers[i]].nbDate++;
                        else if( typeof currentValue[headers[i]] == "string" && currentValue[headers[i]].length > 0)
                         previousValue[headers[i]].nbString++;
                        else
                         previousValue[headers[i]].nbUndefined++;
                         
                        previousValue[headers[i]].nbDistinct[currentValue[headers[i]]] = 1;
                        
                        previousValue[headers[i]].nbNegative  = previousValue[headers[i]].nbNegative + (currentValue[headers[i]] < 0);
                         
                }return previousValue;}, data_summary);
                
                for(var i in headers) {
                    data_summary[headers[i]].nbDistinct = sizeOfDict(data_summary[headers[i]].nbDistinct);
                    /*
                    if(data_summary[headers[i]].nbDistinct < 3) 
                       data_summary[headers[i]].type = "string";
                    else*/ 
                       if(data_summary[headers[i]].nbNumber > data_summary[headers[i]].nbString &&
                       data_summary[headers[i]].nbNumber > data_summary[headers[i]].nbDate) data_summary[headers[i]].type = "number";
                    else if(data_summary[headers[i]].nbDate > data_summary[headers[i]].nbString) data_summary[headers[i]].type = "date";
                    else data_summary[headers[i]].type = "string";
                }
                
                return data_summary;
            }
            
           
            
            function cleanDataset(rows, statistics) {
                for(var k in statistics) {
                    if(statistics[k].type == "date") {
                        for(var i in rows) {
                            if(isNullOrNanOrUndefinedOrEmptyString(rows[i][k])) rows[i][k] = null; 
                            else rows[i][k] = Date.parse(rows[i][k]);     
                        }
                    } else {
                        for(var i in rows) {
                            if(isNullOrNanOrUndefinedOrEmptyString(rows[i][k])) {
                                rows[i][k] = null;
                            } 
                            else {
                                 if(statistics[k].type != typeof rows[i][k]) {
                                    if(statistics[k].type == "number") {
                                        var localFloat = parseFloat(rows[i][k]);
                                        if(isNaN(localFloat)) rows[i][k] = null; 
                                        else rows[i][k] = localFloat;
                                    } else {
                                        rows[i][k] = (""+rows[i][k]).trim();
                                    }
                                 } else if(statistics[k].type == "string") {
                                    rows[i][k] = rows[i][k].trim();    
                                 }
                            }
                        }
                    }
                }
            }
            
           
            
            function loadDataset(json_data){
          
                data_summary = getSummaryStats(json_data.headers, json_data.rows.slice(0,200));
                var statistics = 
                 [{display:"Sum",func:"Sum"},
                  {display:"Average",func:"Avg"},
                  {display:"Maximum",func:"Max"},
                  {display:"Minimum",func:"Min"},
                  {display:"Standard Deviation",func:"StdDev"},
                  {display:"Count",func:"Count"},
                  {display:"Count Nulls",func:"CountNulls"},
                  {display:"Count Non Nulls",func:"CountNonNulls"}
                  ];
                for(var key in data_summary) {
                    if(data_summary[key].type == "number") measures = measures.concat([{variableName:key, displayVariableName: json_data.prettynames[key], statistics:statistics}]);
                }

                cleanDataset(json_data.rows, data_summary);
                
                ndx = crossfilter(json_data.rows);
                all = ndx.groupAll();
                
            }
            
     

            
            function add_dc_bar_chart(name,dimension,group,w,h){
                var chart; 
                
                var min_bound = dimension.bottom(1)[0][name];
                var max_bound = dimension.top(1)[0][name];
               // var min_bound = d3.min(rows, function(d) {return d[name]; });
               // var max_bound = d3.max(rows, function(d) {return d[name]; });
                var increment = 0.02 * (max_bound - min_bound);
                        
                min_bound -= increment;
                max_bound += increment;

                chart = dc.barChart("#" + name + "-chart");
                chart.width(w)
                    .height(h)
                    .margins({
                        top: 5,
                        right: 10,
                        bottom: 25,
                        left: 35})
                    .dimension(dimension)
                    .group(group)
                    .elasticY(true)
                    .centerBar(true)
                    .gap(1)
                    .round(dc.round.floor)
                    .x(d3.scale.linear().domain([min_bound,max_bound]))
                    .renderHorizontalGridLines(true)
                    .xAxis()
                    .tickFormat(function(v) {
                    return v;
                    });
                         
                   return chart;     
            
            }
            
            var colorCategory10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
            for(var i = 0; i < 10; i++) {
                colorCategory10 = colorCategory10.concat(colorCategory10);
             }
             
            function add_dc_row_chart(name,nbBins,dimension,group,w, gridster_min_height){
                var chart;
                
                var grid_height = Math.ceil( (nbBins * 18 + 75)/ gridster_min_height);
                
                var h = Math.min(gridster_min_height * grid_height, gridster_min_height * 5) - 50;
                
                chart = dc.rowChart("#" + name + "-chart");
                chart.width(w)
                    .height(h)
                    .margins({
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 25 })
                    .group(group)
                    .dimension(dimension)
                    .colors(colorCategory10)
                    .label(function(d) {
                    return d.key.substr(10);
                    })
                    .title(function(d) {
                    return d.value;
                    })
                    .elasticX(true)
                    .xAxis().ticks(4);
                
                
                return chart;
            
            }

                
            function add_dc_line_chart(name,dimension,group,w,h){
                
                var chart = dc.barChart("#" + name + "-chart");
               chart.width(w)
                    .height(h)
                    .margins({
                        top: 5,
                        right: 10,
                        bottom: 25,
                        left: 35})
                    .dimension(dimension)
                    .group(group)
                    .elasticY(true)
                    .x(d3.time.scale().domain([dimension.bottom(1)[0][name], dimension.top(1)[0][name]]))
                    .renderHorizontalGridLines(true)
                    .xAxis();
                         
                   return chart;    
            /*
                var min_bound = d3.min(json_data.rows, function(d) {return d[name]; });
                var max_bound = d3.max(json_data.rows, function(d) {return d[name]; });
                
                var chart = dc.lineChart("#" + name + "-chart");
               chart.width(w)
                    .height(h)
                    .margins({top: 5, right: 10, bottom: 25, left: 30})
                    .dimension(dimension)
                    .group(dimension.group())
                    .valueAccessor(function(d) {
                        return d.value;
                    })
                    .x(d3.time.scale().domain([min_bound, max_bound]))
                    .renderHorizontalGridLines(true)
                    .elasticY(true)
                    .brushOn(false)
                    .title(function(d){
                        return d.key
                                + "\nNumber of records: " + Math.round(d.value);
                    })
                    .xAxis();
                    
                return chart;
                  */  
                                    
            }
            
            function cleanDataMenuFunction(command) {
                if(command == "replace") {
                    var replaceFrom = $($('.selectedValue')[0]).text();
                    if(replaceFrom === "*") replaceFrom = '\\*';
                    
                    var replaceTo = $('#replaceInput').val();
                    if(replaceFrom.length > 0) 
                        applyFunction(function(d,n) { 
                                        return d.replace(new RegExp(n[0], 'g'),n[1]) // need to replace g with gi if we want non case sensistive replace
                                            },[replaceFrom,replaceTo],$($('.selectedVariable')[0]).text());
                } else {
                
                }
            
            }
            
            function applyFunction(functionName, parameters, variableName) {
               
                for(var i = 0; i < json_data.rows.length; i++) { 
                    json_data.rows[i][variableName] = functionName(json_data.rows[i][variableName],parameters); 
                };
                slickGrid.invalidate();
            }
    
            function add_slick_grid(someJsonData) {
            
            var columns = [];     
            for(var i in someJsonData.headers) {
              var field_id = someJsonData.headers[i];
              columns[i] = {id:field_id, name: someJsonData.prettynames[field_id], field:field_id };
            }
            
              for (var i = 0; i < columns.length; i++) {
                columns[i].header = {
                  menu: {
                    items: [
                      {
                        title: "Keep first characters",
                        command: "left"
                      },
                      {
                        title: "Keep first characters up to a certain string",
                        command: "leftToString"
                      },
                      {
                        title: "Replace string",
                        command: "replaceString"
                      }
                    ]
                  }
                };
              }
            
            
              var options = {
                enableColumnReorder: false, 
                enableTextSelectionOnCells: true
              };
            
            
                slickGrid = new Slick.Grid("#myGrid", someJsonData.rows, columns, options);
            
                var headerMenuPlugin = new Slick.Plugins.HeaderMenu({});
            /*
                headerMenuPlugin.onBeforeMenuShow.subscribe(function(e, args) {
                  var menu = args.menu;
            
                  // We can add or modify the menu here, or cancel it by returning false.
                  var i = menu.items.length;
                  menu.items.push({
                    title: "Menu item " + i,
                    command: "item" + i
                  });
                });
            */
                
                $('.modal.hide.ui-draggable').draggable({
                    handle: ".modal-body"
                });   
                        
                $('#myGrid').mouseup(function() {
                    ///$('.selectedVariable').text(slickGrid.getColumns()[slickGrid.getActiveCell().cell].field);
                    $('.selectedValue').text(getSelectionText());
                });
                
                $('#myGrid').click(function() {
                    $('.selectedVariable').text(slickGrid.getColumns()[slickGrid.getActiveCell().cell].field);
                });
                
                function getSelectionText() {
                var text = "";
                if (window.getSelection) {
                    text = window.getSelection().toString();
                } else if (document.selection && document.selection.type != "Control") {
                    text = document.selection.createRange().text;
                }
                return text;
                }
                        

                
                headerMenuPlugin.onCommand.subscribe(function(e, args) {
                  if(args.command == "left")
                    {
                        $("#myModalLeft").on("hidden", function() {    // remove the event listeners when the dialog is dismissed
                                $("#myModalLeft button.btn-primary").off('click').unbind('click');
                                $("#myModalLeft").unbind('on');
                        });
                        $("#myModalLeft button.btn-primary").click( function() {
                                $("#myModalLeft").modal('hide');     // dismiss the dialog
                                var inputParameter = parseInt($('#myModalLeft input').val());
                                if(!isNaN(inputParameter)) applyFunction(function(d,n) { return d.substring(0,n) },inputParameter,args.column.field);
                        });

                        $("#myModalLeft").modal('toggle');
                    } else if (args.command == "leftToString") 
                    {
                        $("#myModalLeftToString").on("hidden", function() {    // remove the event listeners when the dialog is dismissed
                                $("#myModalLeftToString button.btn-primary").off('click').unbind('click');
                                $("#myModalLeftToString").unbind('on');
                        });
                        $("#myModalLeftToString button.btn-primary").click( function() {
                                $("#myModalLeftToString").modal('hide');     // dismiss the dialog
                                var inputParameter = $('#myModalLeftToString input').val();
                                if(inputParameter.length > 0)  applyFunction(function(d,n) { 
                                                                                var idx = d.indexOf(n);
                                                                                idx = (idx == -1 ? d.length : idx);
                                                                                return d.substring(0,idx); 
                                                                            },inputParameter,args.column.field);
                        });

                        $("#myModalLeftToString").modal('toggle');
                        
                    } else if (args.command == "replaceString") 
                    {
                        $("#myModalReplaceString").on("hidden", function() {    // remove the event listeners when the dialog is dismissed
                                $("#myModalReplaceString button.btn-primary").off('click').unbind('click');
                                $("#myModalReplaceString").unbind('on');
                        });
                        $("#myModalReplaceString button.btn-primary").click( function() {
                                $("#myModalReplaceString").modal('hide');     // dismiss the dialog
                                var replaceFrom = $($('#myModalReplaceString input')[0]).val();
                                if(replaceFrom === "*") replaceFrom = '\\*';
                                var replaceTo = $($('#myModalReplaceString input')[1]).val();
                                if(replaceFrom.length > 0) applyFunction(function(d,n) { 
                                        return d.replace(new RegExp(n[0], 'g'),n[1]) // need to replace g with gi if we want non case sensistive replace
                                    },[replaceFrom,replaceTo],args.column.field);
                        });

                        $("#myModalReplaceString").modal('toggle');
    
                    }
                });
            
                slickGrid.registerPlugin(headerMenuPlugin);
                
                //slickGrid.autosizeColumns();
            }
            
            var json_data;
            var slickGrid;
            var file_name;
            
            function initialization(someData) {
                json_data = csvjson.csv2json(someData);
                console.log("done loading initial data");
                            
                loadDataset(json_data);
                            
                add_variable_list(json_data.headers);
                
                add_slick_grid(json_data);
            }
            
            var json_config_file = "<?php if(isset($_GET['j'])) echo $_GET['j']; else echo ''; ?>";
            if(json_config_file.length > 0) {
                $.getJSON( "./json_configs/" + json_config_file, function(data) {
                    
                    file_name = data["file_name"];
                    var variables_to_display = data["variables"];
                    
                    $.ajax("./uploads/" + file_name, {
                        success: function(csvdata) {
                            initialization(csvdata);
                            
                            for(var i in variables_to_display) {
                                addElementOnGridBoard(variables_to_display[i]);
                            }
                            //buildDashboard(json_data);
                            spinner.stop();
    
                        },
                        error: function() {
                            console.log("could not load csv file");
                        }
                    });  
                          
                })
                .fail(function() { console.log( "error" ); });
            } else {
                file_name = "<?php if(isset($_POST['pasted_data']) && strlen($_POST['pasted_data'])>1) echo write_pasted_data($_POST['pasted_data']); else echo ''; ?>";
                
                if(file_name.length == 0) {
                    file_name = "<?php if(isset($_POST['file_name'])) echo $_POST['file_name']; else echo 'vc-reduced.csv'; ?>";
                }
                
                if (file_name.length > 0) {
                console.log("file name: " + file_name);
                $.ajax("./uploads/" + file_name, {
                    success: function(data) {
                      
                        initialization(data);
                        
                        //buildDashboard(json_data);
                        spinner.stop();

                    },
                    error: function() {
                        console.log("could not load csv file");
                    }
                });
                } else {
                    console.log("nothing to see here");
                    spinner.stop();
                }        
            }
            
            $('#share').click(function() { 
                var allKeys = dimGroup.keys();
                var json_to_send = JSON.stringify({ file_name: file_name, variables: allKeys });
                $.post("file_writer.php", { action: 'write_config', json_string: json_to_send }, function(data) { 
                
                bootbox.prompt("Share this dashboard link:", function(result) { console.log("res:"+result); })
            
                $('.input-block-level').attr('value',"http://oinoi.com/?j=" + data);
                
                } );
                
            });
            
        </script>
        