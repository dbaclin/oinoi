
        
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
                 <div id="replace-from-to"><a href="#">replace all occurences of </a>
                  <input class="suggestion from selectedValue" type="text"><a href="#"> in <b class="selectedVariable"></b> with</a> 
                    <input class="suggestion to" type="text">
                </div>
                <div id="keep-upto">
                <a href="#">keep all characters of <b class="selectedVariable"></b> up to</a> 
                  <input type="text" class="suggestion upto">
                </div>
                <div id="keep-startingfrom">
                <a href="#">keep all characters of <b class="selectedVariable"></b> starting from</a> 
                  <input type="text" class="suggestion startingfrom">
                </div>
                <div id="keep-between-left-right">
                <a href="#">keep all characters of <b class="selectedVariable"></b> between</a> 
                  <input type="text" class="suggestion left"><a href="#"> and </a>
                  <input type="text" class="suggestion right">
                </div>                
                <div id="keep-fixed-left">              
                  <a href="#">keep the first</a> 
                  <input type="number" class="suggestion left">
                  <a href="#"> characters of <b class="selectedVariable"></b></a> 
                </div>
                <div id="keep-between-fixed-left-right">
                <a href="#">keep all characters of <b class="selectedVariable"></b> between positions</a> 
                  <input type="number" class="suggestion left"><a href="#"> and </a>
                  <input type="number" class="suggestion right">
                </div>  
                <div id="apply-type-on-variable">
                <a href="#">convert <b class="selectedVariable"></b> to </a>
                  <select class="suggestion type">
                  <option></option>
                  <option>string</option>
                  <option>number</option>  
                  <option>date</option>
                </select>
                </div>
                 <div id="rename-variable">
                <a href="#">rename variable <b class="selectedVariable"></b> to </a> 
                  <input type="text" class="suggestion name">
                </div>     
                 <div id="remove-selected-lines">
                <a href="#">remove selected lines</a> 
                </div>     
                <div id="apply-expression-on-variable">
                <a href="#">apply on <b class="selectedVariable"></b> the following expression</a>
                  <input type="text" class="suggestion where expression">
                </div>
                <div id="keep-only-records-where">
                <a href="#">keep only the records satisfying the following condition</a> 
                  <input type="text" class="suggestion where expression">
                </div>
                <div id="create-new-variable-expression">
                <a href="#">create a new variable variable named </a>
                  <input class="suggestion new-variable-name" type="text">
                <a href="#"> using the expression </a> 
                  <input type="text" class="suggestion where expression">
                </div>
                <div id="supaquick-unflatten">
                <a href="#">Unflatten dataset </a>
                </div>
                <div id="supaquick-group-by">
                <a href="#">Group by dataset </a>
                </div>
             </div>
            </div>
            <div class="span10" >
                 <div id="myGrid" style="width:100%;height:600px;"></div>
                 
           
                 
                <ul id="contextMenu" class="slick-header-menu" style="display:none;position:absolute">
                  <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Rename Column</a></li>
                  <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Remove Column</a></li>
                  <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Create calculated field</a></li>
                  <li>-</li>
                  <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Replace</a></li>
                  <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Group by</a></li>
                  <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Unflatten</a></li>
                  
                  <li class="slick-header-menuitem" class="slick-header-menucontent">
                    <a href="#">Change type</a>
                    <ul class="slick-header-menu">
                      <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">String</a></li>
                      <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Number</a></li>
                      <li class="slick-header-menuitem"><a href="#" class="slick-header-menucontent">Date</a></li>
                    </ul>
                  </li>
                </ul> 
                 
                 
                 
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
         
        <script type="text/javascript" src="./dataset.js"></script> 
         
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
                         var measuresForChart = [];
                         var measures = dataset.getMeasures();
                         for(var i = 0, len = measures.length; i < len; i++){
                            measuresForChart.push({variableName:measures[i], displayVariableName: dataset.columns[measures[i]].name, statistics:statistics})
                         }

                        $('#'+aVariableName+'-chart').find('.placeholder')
                            .append(Mustache.render($('#tpl-measure-choice').html(),
                                {currentVariable:aVariableName, measures:measuresForChart}
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
                    $('#'+aVariableName+'-measure-selection').find('a[data-toggle=dropdown]').text(aStatistic + "(" + dataset.columns[aMesureName].name +")");
                    
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
            
            function add_variable_list(someDataset){
                    
                    var allVariables = { "variables" : []};
                    
                    var allColumns = _.map(dataset.getColumns(),function(d) { return d.id; });

                    for(var i = 0, len = allColumns.length; i < len; i++) {
                        
                        var currentVarForDisplay = someDataset.columns[allColumns[i]].name;
                        
                        allVariables.variables[i] = {
                            "varName":allColumns[i],
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
                    
                    var widget_html = Mustache.render($('#tpl-card').html(),{"varName":varName,"displayVarName":dataset.columns[varName].name});
                    
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
                 
                    switch(dataset.columns[varName].type)
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
                                      return d[varName] == null ? "EMPTY" : d[varName]; // return d[varName];
                                });
                        var allKeysValues = dimension.group().top(Infinity);
                        var allKeysValuesStore = {};
                        for(var i in allKeysValues) {
                            allKeysValuesStore[allKeysValues[i].key] = allKeysValues[i].value;
                        }
                        dimension.remove();
                        dimension = ndx.dimension(function(d) {
                            var v = d[varName] == null ? "EMPTY" : d[varName];
                            return (9999999999 - allKeysValuesStore[v]) + "" + v;
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
            /*
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
            */
            function supaquick_unflatten() {
                dataset.unFlatten(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"Month","Month_Value",1);
                refreshData();
            }

            function supaquick_groupBy() {
              var dimensionsForGroupBy = ["Tyres", "Code", "Qty", "OnHand", "Ords", "Pend", "Bask", "MSL", "Min", "Max", "Last_Cost"];
              var groupByResult = dataset.groupBy(dimensionsForGroupBy,
                              {"Month_Value":{"sum":{init: function() {return 0;},
                                                               loop: function(previousValue,newValue) {return previousValue+newValue;},
                                                               final: function(finalValue) {return finalValue;}
                                                               }}});
              var groupByKeys = _.keys(groupByResult);
              var groupByResultAsArray = [];
              for(var i = 0, len = groupByKeys.length; i < len; i++) {
                  var currentItem = JSON.parse(groupByKeys[i])
                  var newItem = {};
                  for(var idxItem = 0, lenItem = currentItem.length; idxItem < lenItem; idxItem++) {
                      newItem[dimensionsForGroupBy[idxItem]] = currentItem[idxItem];
                  }
                  var measureNames = _.keys(groupByResult[groupByKeys[i]]);
                  for(var idxMeasure = 0, measuresLen = measureNames.length; idxMeasure < measuresLen; idxMeasure++) {
                      var currentMeasure = JSON.parse(measureNames[idxMeasure]);
                      newItem[currentMeasure[0] + "_" + currentMeasure[1]] = groupByResult[groupByKeys[i]][measureNames[idxMeasure]];
                  } 
                  groupByResultAsArray.push(newItem);
              }

              dataset.removeColumn("id");
              dataset.removeColumn("Month");
              dataset.removeColumn("Month_Value");
              dataset.rows = groupByResultAsArray;
              dataset.linkColumn("Month_Value_sum","Month_Value_sum");
              refreshData();
            }

            function refreshData() {
                var currentCell = slickGrid.getActiveCell();
                if(currentCell !== null) slickGrid.resetActiveCell(); 
                slickGrid.resetActiveCell();
                dataset.addIdColumn();
                var cols = dataset.getColumns();
                //dataView.beginUpdate();
                dataView.setItems(dataset.rows);
                //dataView.endUpdate();
                var newColumns = _.map(cols, function(element) { var x = {}; x[element.id] = {type:element.type, name:element.name}; return x; } );
                if(!_.isEqual(newColumns,previousColumns)) {
                  previousColumns = newColumns;
                  var slickGridColumns = _.map(slickGrid.getColumns(), function(element) { return element.id; });
                  var newColsForSlickGrid = [];
                  for(var i = 0, len = slickGridColumns.length; i < len; i++) {
                    var currentElement = _.find(cols,function (element) { return element.id === slickGridColumns[i]; });
                    if(currentElement != undefined) {
                      newColsForSlickGrid.push(currentElement);
                    }
                  }
                  var lastColsToPush = _.difference(_.map(cols, function(element) { return element.id; }), 
                                                    _.map(newColsForSlickGrid,function(element) { return element.id; }));
                  for(var i = 0, len = lastColsToPush.length; i < len; i++) {
                    var currentElement = _.find(cols,function (element) { return element.id === lastColsToPush[i]; });
                    if(currentElement != undefined) {
                      newColsForSlickGrid.push(currentElement);
                    }
                  }
                  slickGrid.setColumns(newColsForSlickGrid);
                }
                slickGrid.invalidate();
                if(currentCell !== null) slickGrid.setActiveCell(currentCell.row,currentCell.cell);
                ndx = crossfilter(dataset.rows);
                all = ndx.groupAll();     
                
            }

            function protectStringForRegExp(str) {
              var res = "";
              var specialChars = ['"',"'","$","^","*","-","[","]","?",".","{","}","|","+","(",")","\\","/"];
              for(var i = 0, len = str.length; i < len; i++ ){
                if(_.contains(specialChars, str.charAt(i))) res = res + "\\" + str.charAt(i);
                else res = res + str.charAt(i);
              }
              return res;
            }

            function processSuggestion(SuggestionId) {
              var suggestion = $('#' + SuggestionId);
              switch(SuggestionId) {
                case "replace-from-to":
                  var from = protectStringForRegExp(suggestion.find('.from').val());
                  var to = protectStringForRegExp(suggestion.find('.to').val());
                  var myregex = new RegExp(from, 'g');
                  //console.log(myregex);
                  if(from.length){
                    var functionString = "return (row." + selectedVariable + " + '').replace("+myregex+",'"+to+"') ;";
                    //console.log(functionString);
                    dataset.applyFunction(selectedVariable,functionString);  
                    slickGrid.invalidate();
                  }
                  break;
                case "keep-upto":
                  var upto = protectStringForRegExp(suggestion.find('.upto').val());
                  if(upto.length){
                    var functionString = "var str = (row." + selectedVariable + " + ''); var idx = str.indexOf('"+upto+"');"+
                                         "return idx == -1 ? row." + selectedVariable +" : str.substr(0,idx) ;";
                    console.log(functionString);
                    dataset.applyFunction(selectedVariable,functionString);  
                    slickGrid.invalidate();
                  }
                  break;
                case "keep-startingfrom":
                  var startingfrom = protectStringForRegExp(suggestion.find('.startingfrom').val());
                  if(startingfrom.length){
                    var functionString = "var str = (row." + selectedVariable + " + ''); var idx = str.indexOf('"+startingfrom+"');"+
                                         "return idx == -1 ? row." + selectedVariable +" : str.substr(idx+1) ;";
                    console.log(functionString);
                    dataset.applyFunction(selectedVariable,functionString);  
                    slickGrid.invalidate();
                  }
                  break;
                case "keep-between-left-right":
                  var left = protectStringForRegExp(suggestion.find('.left').val());
                  var right = protectStringForRegExp(suggestion.find('.right').val());
                  if(left.length * right.length){
                    var functionString = "var str = (row." + selectedVariable + " + '');" +
                                         "var idx_left = str.indexOf('"+left+"');"+
                                         "var idx_right = str.indexOf('"+right+"',idx_left+1);"+
                                         "return idx_left == -1 || idx_right == -1 ? row." + selectedVariable +" : str.substring(idx_left+1,idx_right) ;";
                    console.log(functionString);
                    dataset.applyFunction(selectedVariable,functionString);  
                    slickGrid.invalidate();
                  }
                  break;
                case "keep-fixed-left":
                  var left = suggestion.find('.left').val() - 0;
                  if(!isNaN(left) && left > 0){
                    var functionString = "var str = (row." + selectedVariable + " + '');" +
                                         "return str.substr(0,"+left+") ;";
                    console.log(functionString);
                    dataset.applyFunction(selectedVariable,functionString);  
                    slickGrid.invalidate();
                  }
                  break;
                case "keep-between-fixed-left-right":
                  var left = suggestion.find('.left').val() - 0 - 1;
                  var right = suggestion.find('.right').val() - 0 ;
                  if(!isNaN(left) && left >= 0 && !isNaN(right) && right >= left) {
                    var functionString = "var str = (row." + selectedVariable + " + '');" +
                                         "return str.substring("+left+","+right+") ;";
                    console.log(functionString);
                    dataset.applyFunction(selectedVariable,functionString);  
                    slickGrid.invalidate();
                  }
                  break;
                case "keep-only-records-where":
                  var functionString = suggestion.find('.where').val().replace(/\"/g,'\\"');
                  if(functionString.length > 0) {
                    dataset.applyFunctionOnRows(functionString);
                    refreshData();
                  }
                  break;
                case "create-new-variable-expression":
                  var newVariableName = suggestion.find('.new-variable-name').val();
                  var functionString = suggestion.find('.where').val().replace(/\"/g,'\\"');
                  if(newVariableName.length > 0 && functionString.length > 0) {
                    dataset.addColumn(newVariableName,functionString);
                    refreshData();
                  }
                  break;
                case "apply-expression-on-variable":
                  var functionString = suggestion.find('.where').val().replace(/\"/g,'\\"');
                  if(functionString.length > 0) {
                    dataset.applyFunction(selectedVariable,functionString);
                    slickGrid.invalidate();
                  }
                  break;
                case "apply-type-on-variable":
                  var newType = suggestion.find('.type').val();
                  dataset.applyType(selectedVariable,newType);
                  refreshData();
                  break;
                case "rename-variable":
                  var newName = suggestion.find('.name').val().trim();
                  dataset.renameColumn(selectedVariable,newName);
                  refreshData();
                  break;
                case "remove-selected-lines":
                  dataset.removeLines(_.map(slickGrid.getSelectedRows(), function(row) {return dataView.getItem(row).id;} ));
                  refreshData();
                  break;
                case "supaquick-group-by":
                  supaquick_groupBy();
                  break;
                case "supaquick-unflatten":
                  supaquick_unflatten();
                  break;
                default:
                  console.log("unknown suggestion id: "+SuggestionId);
              }

            }
    
            function add_slick_grid(someDataset) {
            
            $( "#contextMenu" ).menu();
            
             var options = {
              autoEdit:true,
              asyncEditorLoading: true,
            enableCellNavigation: true,
            enableColumnReorder: true,
            explicitInitialization: true,
            editable: true
            };
          
            dataView = new Slick.Data.DataView();

            slickGrid = new Slick.Grid("#myGrid", dataView, dataset.getColumns(), options);

           // slickGrid.setSelectionModel(new Slick.CellSelectionModel());
            slickGrid.setSelectionModel(new Slick.RowSelectionModel());
            
            
            dataView.onRowCountChanged.subscribe(function (e, args) {
                slickGrid.updateRowCount();
                slickGrid.render();
            });

            dataView.onRowsChanged.subscribe(function (e, args) {
                slickGrid.invalidateRows(args.rows);
                slickGrid.render();
            });
            
            
            slickGrid.onContextMenu.subscribe(function (e) {
              e.preventDefault();
              var cell = slickGrid.getCellFromEvent(e);
              
              console.log("cell.row " + cell.row + "and top " + e.pageY + "and left " + e.pageX);
              
              $("#contextMenu")
                  .data("row", cell.row)
                  .css("top", e.pageY)
                  .css("left", e.pageX)
                  .show();
        
                  $("body").one("click", function () {
                        $("#contextMenu").hide();
                  });
            });

            
            $("#contextMenu").click(function (e) {
                
                  
                  console.log("yop  it works ..."+ e);
                  console.log(e.target);
                  var huhu = $(e.target).attr("data");
                  console.log(huhu);
                  /*if (!$(e.target).is("li")) {
                  return;
                }
                if (!slickGrid.getEditorLock().commitCurrentEdit()) {
                  return;
                }
                var row = $(this).data("row");
                data[row].priority = $(e.target).attr("data");
                slickGrid.updateRow(row); */
              });

            dataView.beginUpdate();
            dataView.setItems(dataset.rows);
            dataView.setFilter(filter);
            dataView.endUpdate();

            var filterPlugin = new Ext.Plugins.HeaderFilter({});

            filterPlugin.onFilterApplied.subscribe(function () {
                dataView.refresh();
                slickGrid.resetActiveCell();

                var status;

                if (dataView.getLength() === dataView.getItems().length) {
                    status = "";
                } else {
                    status = dataView.getLength() + ' OF ' + dataView.getItems().length + ' RECORDS FOUND';
                }
                //$('#status-label').text(status);
            });

            filterPlugin.onCommand.subscribe(function (e, args) {
                var comparer = function (a, b) {
                    return a[args.column.field] > b[args.column.field];
                };

                switch (args.command) {
                    case "sort-asc":
                        // dataView.sort(comparer, true);
                        dataset.rows = _.sortBy(dataset.rows, function(row) { 
                              return row[args.column.field] == null ? (args.column.type == "number" ? -Infinity : "")
                                                                    : row[args.column.field]; });
                        refreshData();
                        break;
                    case "sort-desc":
                        dataset.rows = _.sortBy(dataset.rows, function(row) { 
                              return row[args.column.field] == null ? (args.column.type == "number" ? -Infinity : "")
                                                                    : row[args.column.field]; }).reverse();
                        refreshData();
                        // dataView.sort(comparer, false);
                        break;
                    case "duplicate-column":
                        dataset.addColumn(args.column.name,"return row."+args.column.field+";");
                        refreshData();
                        break;
                    case "delete-column":
                        dataset.removeColumn(args.column.field);
                        refreshData();
                        break;
                }
            });

            slickGrid.registerPlugin(filterPlugin);

            var overlayPlugin = new Ext.Plugins.Overlays({ decoratorWidth: 1});

            overlayPlugin.onFillUpDown.subscribe(function (e, args) {
                var column = slickGrid.getColumns()[args.range.fromCell];

                if (!column.editor) {
                    return;
                }

                var value = dataView.getItem(args.range.fromRow)[column.field];

                dataView.beginUpdate();

                for (var i = args.range.fromRow + 1; i <= args.range.toRow; i++) {
                    dataView.getItem(i)[column.field] = value;
                    slickGrid.invalidateRow(i);
                }

                dataView.endUpdate();
                slickGrid.render();
            });

            slickGrid.registerPlugin(overlayPlugin);

            slickGrid.init();

            function filter(item) {
                var columns = slickGrid.getColumns();

                var value = true;

                for (var i = 0; i < columns.length; i++) {
                    var col = columns[i];
                    var filterValues = col.filterValues;

                    if (filterValues && filterValues.length > 0) {
                        if(col.type == "date") {
                          value = value & _.contains(_.map(filterValues,function(d){return +d;}), +item[col.field]);
                        } else {
                          value = value & _.contains(filterValues, item[col.field]);
                        }
                    }
                }
                return value;
            }

            function updateSuggestionVariableName() {
                var activeCell = slickGrid.getActiveCell();
                if(activeCell != null) {
                  selectedVariable = slickGrid.getColumns()[activeCell.cell].id;
                  $('#suggestions-list').find('.selectedVariable').text(dataset.columns[selectedVariable].name);
                }
            }
            function updateSuggestionSelectedValue() {
                function getSelectionText() {
                  var text = "";
                  if (window.getSelection) {
                      text = window.getSelection().toString();
                  } else if (document.selection && document.selection.type != "Control") {
                      text = document.selection.createRange().text;
                  }
                  return text;
                }
                var selectedValue = getSelectionText();
                $('#suggestions-list').find('.selectedValue').val(getSelectionText());
            }

            // prevent crash when re-ordering a column that goes over a cell that was being edited
            $('#myGrid').find('div.slick-header').mousedown(function() { 
                updateSuggestionVariableName();
                slickGrid.resetActiveCell(); 
            });

            $('#myGrid').find('div.slick-viewport').click(function() {
                updateSuggestionVariableName();
            });
            $('#myGrid').find('div.slick-viewport').mouseup(function() {
                updateSuggestionSelectedValue();
            });

            $('#suggestions-list').find('a').click( function(args) { processSuggestion($(this).parent().attr('id')); });

            dataView.getItemMetadata = function (row) {
                if (_.contains(slickGrid.getSelectedRows(),row)) {
                    return { "cssClasses":"row-currently-selected" };
                }
            };

            slickGrid.onSelectedRowsChanged.subscribe(function(e, args) { slickGrid.invalidate(); });

            previousColumns = _.map(slickGrid.getColumns(), function(element) { var x = {}; x[element.id] = {type:element.type, name:element.name}; return x; } );


            /*
                slickGrid = new Slick.Grid("#myGrid", someDataset.rows, someDataset.getColumns(), options);
                slickGrid.setSelectionModel(new Slick.CellSelectionModel());
                
                $('#myGrid').find('div.grid-canvas').mouseup(function() {
                    ///$('.selectedVariable').text(slickGrid.getColumns()[slickGrid.getActiveCell().cell].field);
                    $('.selectedValue').text(getSelectionText());
                });
                
                $('#myGrid').find('div.grid-canvas').click(function() {
                    $('.selectedVariable').text(slickGrid.getColumns()[slickGrid.getActiveCell().cell].field);
                    //$('.selectedValue').text(someJsonData.rows[slickGrid.getActiveCell().row][slickGrid.getColumns()[slickGrid.getActiveCell().cell].field]);
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
                */
                /*
                var headerMenuPlugin = new Slick.Plugins.HeaderMenu({});
                
                
                $('.modal.hide.ui-draggable').draggable({
                    handle: ".modal-body"
                });   
                        
                
                        
                
                
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
                */
                //slickGrid.autosizeColumns();
            }
            
            var json_data;
            var slickGrid;
            var file_name;
            var dataset;
            var dataView;
            var selectedVariable;
            var previousVariables;
            var previousColumns;
            
            function initialization(someData) {
                json_data = csvjson.csv2json(someData);
                console.log("done loading initial data");
                  
                dataset = new Dataset(json_data);

                add_slick_grid(dataset);

                previousVariables = _.map(dataset.getColumns(),function(d) { return d.id; });

                ndx = crossfilter(dataset.rows);
                all = ndx.groupAll();     
                                                
                //loadDataset(json_data);
                
                            
                add_variable_list(dataset);
                
                //add_slick_grid(json_data);
            }



            $('#ui-id-1').click(function() {
              //
              console.log("wrangling");
            });
            $('#ui-id-2').click(function() {
              console.log("vizualisation");
              var newVariables = _.map(dataset.getColumns(),function(d) { return d.id; });
              if(_.difference(previousVariables,newVariables).length + _.difference(newVariables,previousVariables).length) {
                console.log("removing vars");
                $('.ui-state-default.variable.ui-draggable').remove();
                add_variable_list(dataset);
                previousVariables = newVariables;
              }
            });

            
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
        