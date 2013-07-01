<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="utf-8">
        <title>Bootstrap, from Twitter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- Le styles -->
        <link href="../libs/bootstrap/css/bootstrap.css" rel="stylesheet">
        <style>
            body {
                padding-top: 60px;
                /* 60px to make the container go all the way to the bottom of the topbar */
            }
        </style>
        <link href="../libs/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../libs/gridster/dist/jquery.gridster.min.css">
        <link rel="stylesheet" type="text/css" href="./data-quality.css"/>
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="../assets/js/html5shiv.js"></script>
        <![endif]-->
        <!-- Fav and touch icons -->
        <link rel="stylesheet" type="text/css" href="../libs/dc/dc.css" />
        <link rel="stylesheet" type="text/css" href="./data-quality.css" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="../assets/ico/favicon.png">
    </head>
    
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="brand" href="#">Project name</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li class="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div class="container">
              <div id="spinner">
                
            </div>
              <h1>Data quality report</h1>
              <div class="gridster">
              <ul>
            </ul>
            </div>
        </div>
<!--
        <div class="row">
            <div>
                <div class="dc-data-count">
                    <span class="filter-count"></span>selected out of
                    <span class="total-count"></span>records |
                    <a href="javascript:dc.filterAll(); dc.renderAll();">Reset All</a>
                </div>
            </div>
            <table class="table table-hover dc-data-table">
                <thead>
                    <tr class="header" id="datatable-holder">
                    </tr>
                </thead>
            </table>
        </div>
-->
            
            
        
        <!-- /container -->
        <!-- Le javascript==================================================- ->
    <!-- Placed at the end of the document so the pages load faster -->
        <script src="../libs/jquery/jquery-1.9.1.js"></script>
        <script src="../libs/bootstrap/js/bootstrap.js"></script>
        <script src="../libs/d3/d3.v3.js"></script>
        <script src="../libs/crossfilter/crossfilter.js"></script>
        <script src="../libs/dc/dc.js"></script>
        <script type="text/javascript" src="../libs/csvjsonjs/csvjson.min.js"></script>
        <script type="text/javascript" src="../libs/datejs/date.js"></script>
        <script type="text/javascript" src="../libs/utils_functions.js"></script>
        <script type="text/javascript" src="../libs/mustache/0.5.0-dev/mustache.js"></script>
           <script type="text/javascript" src="../libs/spin/spin.min.js"></script>     
        <script src="../libs/gridster/dist/jquery.gridster.js" type="text/javascript" charset="utf-8"></script>
         <script type="text/javascript">       
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
                   <script id="tpl-gridster" type="text/html">
                {{#variables}}
                
                 <li id="{{var_name}}-card" class="card" data-row="{{var_idx}}" data-col="1" data-sizex="{{cardSizeMin.x}}" data-sizey="{{cardSizeMin.y}}" card-size="0">                
                    <div class="card-heading">
                          <button class="close card disable-widget" href="#{{var_name}}-card-collapse" data-toggle="collapse" type="button"  aria-hidden="true">&times;</button>
                          <a class="card-toggle"  >{{var_name_short}}</a>
                          
                          <div class="btn-group hide" >
                              <button class="close resize size-smaller">&#45;</button>
                              <button class="close resize size-bigger">&#43;</button>
                          </div>
                    </div>
                <div id="{{var_name}}-card-collapse" class="card-body collapse">
                  <div id="{{var_name}}-chart"><a class="reset" href="javascript:dimGroup.get('{{var_name}}').chart.filterAll();dc.redrawAll();" style="display: none;">reset</a><div class="clearfix"></div></div>
                </div>     
            </li>
                 
                 
                {{/variables}}
                
        </script>

                
                                
        <script id="tpl-chart" type="text/html">
                {{#variables}}
                <li>
                <div id="{{var_name}}-card">
                    <div id="{{var_name}}-chart">
                    <strong>{{var_name}}</strong>
                    <a class="reset" href="javascript:dimGroup.get('{{var_name}}').chart.filterAll();dc.redrawAll();" style="display: none;">reset</a>
                    <div class="clearfix"></div>
                </div>
                <div id="{{var_name}}-stats"> 
                    <table id="{{var_name}}-table-stats">
                        <tr>
                            <th>KPI</th>
                            <th>Value</th>
                        </tr>
                        {{#stats}}
                        <tr>        
                            <td>{{stats_name}}</td>
                            <td>{{stats_value}}</td>
                        </tr>
                        {{/stats}}        
                      </table>
                </div>
                </div>
                </li>
                {{/variables}}
                
        </script>
        
        <script id="tpl-stats" type="text/html">
                <tr>
                        <th>KPI</th>
                        <th>Value</th>
                </tr>
                {{#stats}}
                <tr>
                
                    <td>{{KPI_name}}</td>
                    <td>{{KPI_value}}</td>
                </tr>
                {{/stats}}        
        </script>
        
        <script id="tpl-datatable" type="text/html">
            {{#variables}} 
                <th>{{var_name}}</th>
            {{/variables}}
        </script>
        <script type="text/javascript">
            function guessTypeOfColumn(aColumn, f) {

                var tempRes = {
                    date: 0,
                    number: 0,
                    string: 0,
                    na: 0,
                    cpt: 0
                };

                for (var i = 0; i < aColumn.length; i++) {

                    if (typeof f(aColumn[i]) == "number") + tempRes.number++;
                    else if (Date.parse(f(aColumn[i])) != null) + tempRes.date++;
                    else if (typeof f(aColumn[i]) == "string") + tempRes.string++;
                    else +tempRes.na++;

                    + tempRes.cpt++;
                }

                var maxSoFar = -1;
                var result;
                for (var i in tempRes) {
                    if (i != "cpt") {
                        if (maxSoFar < tempRes[i]) {
                            maxSoFar = +tempRes[i];
                            result = i;
                        }
                    }
                }

                     if (aColumn.length <= 5) result = "string"; 
                else if (result == "na") result = "string";

                return result;
            }

            function guessType(jsonData) {
                var columns = {};

                for (var i in jsonData) {
                    columns[i] = guessTypeOfColumn(jsonData[i]);
                }

                return columns;
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
                                
                                if(data_summary[headers[i]].nbDistinct < 3) 
                                   data_summary[headers[i]].type = "string";
                                else if(data_summary[headers[i]].nbNumber > data_summary[headers[i]].nbString &&
                                   data_summary[headers[i]].nbNumber > data_summary[headers[i]].nbDate) data_summary[headers[i]].type = "number";
                                else if(data_summary[headers[i]].nbDate > data_summary[headers[i]].nbString &&
                                   data_summary[headers[i]].nbDate > data_summary[headers[i]].nbDate) data_summary[headers[i]].type = "date";
                                else data_summary[headers[i]].type = "string";
                            }
                            
                            return data_summary;
            }
            
            function convertDataSet(rows, statistics) {
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

            
            var file_name = "<?php if(isset($_POST['file_name'])) echo $_POST['file_name']; else echo 'income-reduced.csv'; ?>";

            var json_data;
            var data_in_columns = {};
            var columns_types;
            var headers;
            var rows;
            var ndx;

            var dimGroup;

            if (file_name.length > 0) {
                $.ajax("./uploads/" + file_name, {
                    success: function(data) {
                        json_data = csvjson.csv2json(data);
                        console.log("done loading initial data");
                        headers = json_data.headers;
                        rows = json_data.rows;
                        
                        var cardSizeMin = {x:6,y:1};
                        var cardSize = [{x:11,y:8}, {x:13,y:9}, {x:14,y:10}];
                        var gridsterUnit = {x:30,y:30};
                        
                        var dcSize = [];
                        for(var i in cardSize){
                            dcSize[i] = { x : 0, y: 0};
                            dcSize[i].x = cardSize[i].x * gridsterUnit.x;
                            dcSize[i].y = cardSize[i].y * gridsterUnit.y;
                        }
                        
                        var data_summary = getSummaryStats(headers, rows.slice(0,200));
                        
                        convertDataSet(rows, data_summary);

                        var variables_for_template = { "variables" : []};
                        
                        for(var i = 0; i < headers.length; i++) {
                            
                            var short_name = "";
                            if(headers[i].trim().replace(/\s+/g, '-').length > 17)
                                short_name = headers[i].trim().replace(/\s+/g, '-').substring(0,16) + "...";
                             else 
                                 short_name = headers[i].trim().replace(/\s+/g, '-');
                            
                            variables_for_template.variables[i] = {
                                "var_name":headers[i].trim().replace(/\s+/g, '-'),
                                "cardSizeMin": {"x": cardSizeMin.x , "y": cardSizeMin.y },
                                
                                "var_name_short": short_name ,
                                "var_idx" : i + 1 , 
                                "stats" : []
                            };
                            
                            for(var k in data_summary[headers[i]]) {
                                variables_for_template.variables[i].stats.push({"stats_name": k, "stats_value": data_summary[headers[i]][k] });
                            }    
                            
                        }
                        
                        var chart_holder = Mustache.render($('#tpl-gridster').html(),variables_for_template);
                        //var chart_holder = Mustache.render($('#tpl-chart').html(),variables_for_template);
                        
                        $('.gridster ul').append(chart_holder);
                        
                        var datatable_holder = Mustache.render($('#tpl-datatable').html(), variables_for_template);
                        $('#datatable-holder').append(datatable_holder);
                        //$('#chart-holder').listview('refresh');
                        
                        dimGroup = new HashTable();

                        var data = json_data.rows;
                        ndx = crossfilter(data);
                        var all = ndx.groupAll();
                        
                        //var candidateVariableForGrouping; // stuff for the rows display
                        var minSoFar = 9999999999;

                        for (var i = 0; i < headers.length; i++) {
                            var dimension = ndx.dimension(function(d) {
                                return d[headers[i]];
                            });
                            var dimensionGroup = dimension.group();
                            /*
                            stuff linked to the rows display
                            var dimensionTop = dimensionGroup.top(20);
                            if(dimensionTop.length < minSoFar && dimensionTop.length > 1) 
                            {
                                candidateVariableForGrouping = headers[i];
                                minSoFar = dimensionTop.length;
                            }
                            */
                            
                            var currentType = data_summary[headers[i]].type;
                            
                            var chart;
                            var colorCategory10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
                            
                            
                            if (currentType == "number") {
                                var min_bound = d3.min(data, function(d) {return d[headers[i]]; });
                                var max_bound = d3.max(data, function(d) {return d[headers[i]]; });
                                var increment = 0.02 * (max_bound - min_bound);
                                min_bound -= increment;
                                max_bound += increment;
                                
                                chart = dc.barChart("#" + headers[i].trim().replace(/\s+/g, '-') + "-chart");
                                chart.width(700)
                                    .height(250)
                                    .margins({
                                    top: 10,
                                    right: 50,
                                    bottom: 30,
                                    left: 40
                                }).dimension(dimension)
                                    .group(dimensionGroup)
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

                            } else if(currentType == "string") {
                                
                                var allKeysValues = dimensionGroup.top(Infinity);
                                var allKeysValuesStore = {};
                                for(var idx in allKeysValues) {
                                    
                                    allKeysValuesStore[allKeysValues[idx].key] = allKeysValues[idx].value;
                                }
                                
                                var dimensionForChart = ndx.dimension(function(d) {
                                    return (9999999999 - allKeysValuesStore[d[headers[i]]]) + "" + d[headers[i]];
                                });
                                var dimensionGroupForChart = dimensionForChart.group();
                                
                                chart = dc.rowChart("#" + headers[i].trim().replace(/\s+/g, '-') + "-chart");
                                chart.width(700)
                                    .height(300)
                                    .margins({
                                    top: 20,
                                    left: 10,
                                    right: 10,
                                    bottom: 20
                                })
                                    .group(dimensionGroupForChart)
                                    .dimension(dimensionForChart)
                                    .colors(colorCategory10)
                                    .label(function(d) {
                                    return d.key.substr(10);
                                })
                                    .title(function(d) {
                                    return d.value;
                                })
                                    .elasticX(true)
                                    .xAxis().ticks(4);
                            } else if(currentType == "date") {
                                
                                dimension = ndx.dimension(function(d) {
                                    return d3.time.day(d[headers[i]]);
                                });
                                dimensionGroup = dimension.group();
                                
                                chart = dc.lineChart("#" + headers[i].trim().replace(/\s+/g, '-') + "-chart");
                                chart.width(700)
                                    .height(300)
                                    .margins({top: 10, right: 50, bottom: 30, left: 60})
                                    .dimension(dimension)
                                    .group(dimensionGroup)
                                    .valueAccessor(function(d) {
                                        return d.value;
                                    })
                                    .x(d3.time.scale().domain([d3.min(data, function(d) { return d[headers[i]]; }), 
                                                               d3.max(data, function(d) { return d[headers[i]]; })]                                                                 
                                                                 ))
                                    /*.x(d3.time.scale().domain([new Date.parse("2010-01-01"), Date.parse("2015-01-01")]))*/
                                    .renderHorizontalGridLines(true)
                                    .elasticY(true)
                                    .brushOn(false)
                                    .title(function(d){
                                        return d.key
                                                + "\nNumber of records: " + Math.round(d.value);
                                    })
                                    .xAxis();
                                    
                                
                            }
                            dimGroup.put(headers[i].trim().replace(/\s+/g, '-'), {
                                dim: dimension,
                                grp: dimensionGroup,
                                chart: chart
                            });
                        }
                        /*
                        dc.dataCount(".dc-data-count")
                                .dimension(ndx)
                                .group(all);
            
                        var functions_array = [];
                        
                        function createFunction(varName) {
                          var variableName = varName;
                          return function (d) {
                            return d[variableName];
                          }
                        }
                        
                        for(var i in headers) {
                            functions_array[i] = createFunction(headers[i]);
                        }
                        
                        dc.dataTable(".dc-data-table")
                                .dimension(ndx.dimension(function (d) {
                                    return d[candidateVariableForGrouping];
                                 }))
                                .group(function (d) {
                                    return d[candidateVariableForGrouping];
                                })
                                .size(20)
                                .columns(functions_array)
                                .sortBy(function (d) {
                                    return d[candidateVariableForGrouping];
                                })
                                .order(d3.ascending)
                                .renderlet(function (table) {
                                    table.selectAll(".dc-table-group").classed("info", true);
                                });
                        */
                    
                      dc.renderAll();
                        
                      var gridster;
                        
             
                         $('.collapse').on('hide', function () {       
                           gridster.resize_widget( $(this).parents(".card"), cardSizeMin.x , cardSizeMin.y);
                          $(this).siblings().children('.btn-group').hide();
                        })
                        
                        $('.collapse').on('show', function () {
                          
                          var currentSize = $(this).parents(".card").attr('card-size');
                          gridster.resize_widget( $(this).parents(".card"), cardSize[currentSize].x, cardSize[currentSize].y);
                          
                          $(this).siblings().children('.btn-group').show();
                        })  
                        
                        gridster = $(".gridster > ul").gridster({
                            widget_margins: [5, 5],
                            widget_base_dimensions: [gridsterUnit.x, gridsterUnit.y],
                            min_cols: 1,
                            max_cols: 0,
                            autogenerate_stylesheet: true
                        }).data('gridster');
                    
                        $('.size-smaller').click(function() {
                            
                            var currentSize = $(this).parents(".card").attr('card-size');
                            var newSize = Math.max(currentSize - 1, 0);
                            console.log(currentSize);
                           $(this).parents(".card").attr('card-size', newSize);
                            gridster.resize_widget( $(this).parents(".card"), cardSize[newSize].x,cardSize[newSize].y);
                        })  
                          
                        $('.size-bigger').click(function() {
                            
                            var currentSize = $(this).parents(".card").attr('card-size');
                            var newSize = Math.min(currentSize + 1, cardSize.length - 1);
                            console.log(currentSize);
                            $(this).parents(".card").attr('card-size', newSize);
                            gridster.resize_widget( $(this).parents(".card"), cardSize[newSize].x, cardSize[newSize].y);
                        })   
                              
                        spinner.stop();
                              
                         /*$(".disable-widget").click(function () {
                          
                              gridster.remove_widget( $(this).parents(".card"))
                                  
                        });*/
                    

                    },
                    error: function() {
                        // Show some error message, couldn't get the CSV file
                    }
                })
            };
        </script>
    </body>

</html>