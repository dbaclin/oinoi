<html lang="en">
    
    <head>
        <meta charset="utf-8">
        <title>Bootstrap, from Twitter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- Le styles -->
        <!-- <link rel="stylesheet" href="../libes/recline/css/grid.css" />-->
        <link rel="stylesheet" href="../libs/slickgrid/slick.grid.css" />
        <link rel="stylesheet" href="../libs/slickgrid/controls/slick.pager.css" type="text/css" />
        <link rel="stylesheet" href="../libs/slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css" />
        <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap-responsive.css" />
        <link rel="stylesheet" href="../libs/bootstrap/css/bootstrap.css" />
        
        <link type="text/css" rel="stylesheet" href="../libs/rickshaw/src/css/graph.css">
        <link type="text/css" rel="stylesheet" href="../libs/rickshaw/src/css/detail.css">
        <link type="text/css" rel="stylesheet" href="../libs/rickshaw/src/css/legend.css">
        <link type="text/css" rel="stylesheet" href="../libs/rickshaw/examples/css/lines.css">
        
        <style type="text/css">
            body {
                padding-top: 60px;
                padding-bottom: 40px;
            }
            .sidebar-nav {
                padding: 9px 0;
            }
            @media (max-width: 980px) {
                /* Enable use of floated navbar text */
                .navbar-text.pull-right {
                    float: none;
                    padding-left: 5px;
                    padding-right: 5px;
                }
            }
        </style>
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="../libs/bootstrap/js/html5shiv.js"></script>
        <![endif]-->
        <!-- Fav and touch icons -->
    </head>
    
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container-fluid">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="brand" href="#">Project name</a>
                    <div class="nav-collapse collapse">
                        <p class="navbar-text pull-right">Logged in as
                            <a href="#" class="navbar-link">Username</a>
                        </p>
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
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span3">
                    <div class="btn-group" data-toggle="buttons-radio">
                        <button type="button" class="btn" style="width:63.5%;">Data</button>
                        <button type="button" class="btn" style="width:63.5%;">Pivot</button>
                        <button type="button" class="btn" style="width:63.5%;">Visualize</button>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane active" id="Data-menu">
                            <div class="accordion" id="accordion2">
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">Suggestion 1</a>
                                    </div>
                                    <div id="collapseOne" class="accordion-body collapse">
                                        <div class="accordion-inner">Suggestion 1 stuff</div>
                                    </div>
                                </div>
                                <div class="accordion-group">
                                    <div class="accordion-heading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">Suggestion 2</a>
                                    </div>
                                    <div id="collapseTwo" class="accordion-body collapse">
                                        <div class="accordion-inner">Suggestion 2 stuff</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="Pivot-menu">
                            <div id="variableslist">
                                <ul class="nav nav-pills nav-stacked">
                                    <li style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Variable 1</a>
                                    </li>
                                    <li style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Variable 2</a>
                                    </li>
                                    <li style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Variable 3</a>
                                    </li>
                                    <li style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Variable 4</a>
                                    </li>
                                    <li style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Variable 5</a>
                                    </li>
                                    <li style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Variable 6</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="variablespicked" style="height:100px; border-radius: 4px; border-color: #cccccc; border-width: 1px; border-style:solid; overflow-y: scroll;">
                                <ul class="nav nav-pills nav-stacked">
                                    <li class="placeholder" style="background-color:#f8f8f8; border-radius: 4px;">
                                        <a href="#">Drop your variables here</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane" id="Visualize-menu">
                            <p>Visualize-menu</p>
                        </div>
                    </div>
                </div>
                <!--/span-->
                <div class="span9">
                    <div class="tabbable">
                        <!-- Only required for left/right tabs -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="Data">
                                <div id="myGrid" style="height:550px;"></div>
                            </div>
                            <div class="tab-pane" id="Pivot">
                                <p>Pivot</p>
                            </div>
                            <div class="tab-pane" id="Visualize">
                                <div id="chart_container">
                                    <div id="my_chart"></div>
                                    <div id="legend_container">
                                        <div id="smoother" title="Smoothing"></div>
                                        <div id="legend"></div>
                                    </div>
                                    <div id="slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--/span-->
            </div>
            <!--/row-->
            <hr>
            <footer>
                <p>&copy; Oinoi 2013</p>
            </footer>
        </div>
        <!--/.fluid-container-->
        <!-- Le javascript==================================================- ->
    <!-- Placed at the end of the document so the pages load faster -->
        <script type="text/javascript" src="../libs/jquery/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="../libs/jquery/ui/jquery-ui.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/lib/jquery.event.drag-2.2.js"></script>
        <script type="text/javascript" src="../libs/bootstrap/js/bootstrap.js"></script>
        <!--<script type="text/javascript" src="../libs/underscore/1.4.4/underscore.js"></script>
        <script type="text/javascript" src="../libs/backbone/1.0.0/backbone.js"></script>
        <script type="text/javascript" src="../libs/mustache/0.5.0-dev/mustache.js"></script>
        <script type="text/javascript" src="../libs/recline/recline.js"></script>
        -->
        <script type="text/javascript" src="../libs/slickgrid/slick.core.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/slick.formatters.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/slick.editors.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/slick.grid.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/slick.dataview.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/plugins/slick.headermenu.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/plugins/slick.headerbuttons.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/plugins/slick.rowselectionmodel.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/controls/slick.columnpicker.js"></script>
        <script type="text/javascript" src="../libs/slickgrid/controls/slick.pager.js"></script>
<!--
        <script type="text/javascript" src="../libs/d3/d3.v2.js"></script>

        <script type="text/javascript" src="../libs/d3/d3.geo.projection.min.js"></script>
        <script type="text/javascript" src="../libs/d3/d3.layout.cloud.js"></script>

        <script type="text/javascript" src="../libs/vega/vega.js"></script>
-->
        <script type="text/javascript" src="../libs/csvjsonjs/csvjson.min.js"></script>
        <script type="text/javascript" src="../libs/rickshaw/vendor/d3.v2.js"></script>
        <script type="text/javascript" src="../libs/rickshaw/rickshaw.js"></script>
        
        <script type="text/javascript" src="../libs/datejs/date.js"></script>
        
        <script type="text/javascript" src="./utils_functions.js"></script>
        
        <script>
            var selected = "";
            $(".btn-group > button.btn").on("click", function() {
                selected = this.innerHTML;

                if (selected == 'Data') {
                    $('#Data').addClass('active');
                    $('#Data-menu').addClass('active');
                    $('#Pivot').removeClass('active');
                    $('#Pivot-menu').removeClass('active');
                    $('#Visualize').removeClass('active');
                    $('#Visualize-menu').removeClass('active');
                } else if (selected == 'Pivot') {
                    $('#Data').removeClass('active');
                    $('#Data-menu').removeClass('active');
                    $('#Pivot').addClass('active');
                    $('#Pivot-menu').addClass('active');
                    $('#Visualize').removeClass('active');
                    $('#Visualize-menu').removeClass('active');
                } else {
                    $('#Data').removeClass('active');
                    $('#Data-menu').removeClass('active');
                    $('#Pivot').removeClass('active');
                    $('#Pivot-menu').removeClass('active');
                    $('#Visualize').addClass('active');
                    $('#Visualize-menu').addClass('active');
                }
            });

            $("#variableslist li").draggable({
                appendTo: "body",
                helper: "clone"
            });

            $("#variablespicked ul").droppable({
                activeClass: "ui-state-default",
                hoverClass: "ui-state-hover",
                accept: ":not(.ui-sortable-helper)",
                drop: function(event, ui) {

                    $(this).find(".placeholder").remove();
                    $("<li style=\"background-color:#f8f8f8; border-radius: 4px;\"><a href=\"#\">" + ui.draggable.text() + "</a></li>").appendTo(this);
                }
            });

            var grid;

            var file_name = "<?php if(isset($_POST['file_name'])) echo $_POST['file_name']; else echo ''; ?>";

            var json_data;
            var columns;

            if (file_name.length > 0) {
                $.ajax("uploads/" + file_name, {
                    success: function(data) {
                        json_data = csvjson.csv2json(data);
                        var headers = json_data.headers;

                        columns = [{
                                id: "sel",
                                name: "#",
                                field: "num",
                                behavior: "select",
                                cssClass: "cell-selection",
                                width: 40,
                                resizable: false,
                                selectable: false
                            }
                        ];
                        for (var i = 0; i < headers.length; i++) {
                            columns[i + 1] = {
                                id: headers[i],
                                name: headers[i],
                                field: headers[i]
                            };
                        }

                        var options = {
                            editable: false,
                            enableAddRow: false,
                            enableCellNavigation: true
                        };

                        dataView = new Slick.Data.DataView({
                            inlineFilters: true
                        });
                        grid = new Slick.Grid("#myGrid", dataView, columns, options);
                        var pager = new Slick.Controls.Pager(dataView, grid, $("#pager"));

                        // wire up model events to drive the grid
                        dataView.onRowCountChanged.subscribe(function(e, args) {
                            grid.updateRowCount();
                            grid.render();
                        });

                        dataView.onRowsChanged.subscribe(function(e, args) {
                            grid.invalidateRows(args.rows);
                            grid.render();
                        });

                        data = json_data.rows;

                        for (var i = 0; i < data.length; i++) {
                            data[i].id = "id_" + i;
                            data[i].num = i + 1;
                        }

                        dataView.beginUpdate();
                        dataView.setItems(data);
                        dataView.endUpdate();
                        
                        for(var i = 1;i<columns.length;i++) {
                            if(i == 1) columns[i].type = "date";
                            else columns[i].type = "metric";
                        }
                        
                        var nof_series = 0;
                        for(var i = 1;i<columns.length;i++) {
                            if(columns[i].type == "metric") nof_series ++;
                        }
                        var nof_dimensions = 0;
                        for(var i = 1;i<columns.length;i++) {
                            if(columns[i].type == "dimension") nof_dimensions ++;
                        }
                        if(nof_dimensions == 0) nof_dimensions = 1;
                        nof_series = nof_series * nof_dimensions;
                        
                        var rows = json_data.rows;
                        var seriesData = [];
                        for(var i = 0;i<nof_series;i++) {
                            seriesData[i] = [];
                        }
                        for(var i=0;i<rows.length;i++) {
                            for(var j=0;j<nof_series;j++) {
                                seriesData[j][i] = {x: Date.parse(rows[rows.length-i-1].Date).getTime() / 1000, y: +rows[rows.length-i-1][columns[2+j].name]};
                            }        
                        }
                        var series = [];
                        var colors = [
                                        "#1f77b4",
                                        "#ff7f0e",
                                        "#2ca02c",
                                        "#d62728",
                                        "#9467bd",
                                        "#8c564b",
                                        "#e377c2",
                                        "#7f7f7f",
                                        "#bcbd22",
                                        "#17becf"
                                      ];
                        
                        for(var i=0;i<nof_series;i++) {
                            series[i] = {name: columns[2+i].name, data: seriesData[i], color: colors[i % 10]};
                        }
                        
                        // instantiate our graph!
                        
                        var graph = new Rickshaw.Graph( {
                            element: document.getElementById("my_chart"),
                            width: 800,
                            height: 550,
                            min: 'auto',
                            renderer: 'line',
                            series: series
                        } );
                        
                        graph.render();
                        
                        var hoverDetail = new Rickshaw.Graph.HoverDetail( {
                            graph: graph
                        } );
                        
                        var legend = new Rickshaw.Graph.Legend( {
                            graph: graph,
                            element: document.getElementById('legend')
                        
                        } );
                        
                        var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
                            graph: graph,
                            legend: legend
                        } );
                        
                        var axes = new Rickshaw.Graph.Axis.Time( {
                            graph: graph
                        } );
                        axes.render();
                        
                    },
                    error: function() {
                        // Show some error message, couldn't get the CSV file
                    }
                })
            };
        </script>
        
    </body>

</html>