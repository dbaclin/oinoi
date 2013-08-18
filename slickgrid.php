
<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  
  
          <link rel="stylesheet" href="./libs/slickgrid/slick.grid.css" type="text/css"/>
      <link rel="stylesheet" href="libs/slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css" type="text/css"/>
      <link rel="stylesheet" href="./libs/slickgrid/plugins/slick.headermenu.css" type="text/css"/>
      <link rel="stylesheet" href="./libs/slickgrid/examples/examples.css" type="text/css"/>
        
  
  
  <style>
    /**
     * Style the drop-down menu here since the plugin stylesheet mostly contains structural CSS.
     */

    .slick-header-menu {
      border: 1px solid #718BB7;
      background: #f0f0f0;
      padding: 2px;
      -moz-box-shadow: 2px 2px 2px silver;
      -webkit-box-shadow: 2px 2px 2px silver;
      min-width: 100px;
      z-index: 20;
    }


    .slick-header-menuitem {
      padding: 2px 4px;
      border: 1px solid transparent;
      border-radius: 3px;
    }

    .slick-header-menuitem:hover {
      border-color: silver;
      background: white;
    }

    .slick-header-menuitem-disabled {
      border-color: transparent !important;
      background: inherit !important;
    }

    .icon-help {
      background-image: url(../images/help.png);
    }
  </style>
</head>
<body>
<div style="position:relative">
  <div style="width:600px;">
    <div id="myGrid" style="width:100%;height:500px;"></div>
  </div>

  <div class="options-panel">
    <p>
      This example demonstrates using the <b>Slick.Plugins.HeaderMenu</b> plugin to add drop-down menus to column
      headers.  (Hover over the headers.)
    </p>
  </div>
</div>


<script src="./libs/jquery/jquery-1.7.min.js"></script>
<script src="./libs/slickgrid/lib/jquery.event.drag-2.2.js"></script>
<script src="./libs/slickgrid/slick.core.js"></script>
<script src="./libs/slickgrid/slick.grid.js"></script>
<script src="./libs/slickgrid/plugins/slick.headermenu.js"></script>




<script>
  var grid;
  var columns = [
    {id: "title", name: "Title", field: "title"},
    {id: "duration", name: "Duration", field: "duration"},
    {id: "%", name: "% Complete", field: "percentComplete"},
    {id: "start", name: "Start", field: "start"},
    {id: "finish", name: "Finish", field: "finish"},
    {id: "effort-driven", name: "Effort Driven", field: "effortDriven"}
  ];

  for (var i = 0; i < columns.length; i++) {
    columns[i].header = {
      menu: {
        items: [
          {
            iconImage: "../images/sort-asc.gif",
            title: "Sort Ascending",
            command: "sort-asc"
          },
          {
            iconImage: "../images/sort-desc.gif",
            title: "Sort Descending",
            command: "sort-desc"
          },
          {
            title: "Hide Column",
            command: "hide",
            disabled: true,
            tooltip: "Can't hide this column"
          },
          {
            iconCssClass: "icon-help",
            title: "Help",
            command: "help"
          }
        ]
      }
    };
  }


  var options = {
    enableColumnReorder: false
  };

  $(function () {
    var data = [];
    for (var i = 0; i < 500; i++) {
      data[i] = {
        title: "Task " + i,
        duration: "5 days",
        percentComplete: Math.round(Math.random() * 100),
        start: "01/01/2009",
        finish: "01/05/2009",
        effortDriven: (i % 5 == 0)
      };
    }

    grid = new Slick.Grid("#myGrid", data, columns, options);

    var headerMenuPlugin = new Slick.Plugins.HeaderMenu({});

    headerMenuPlugin.onBeforeMenuShow.subscribe(function(e, args) {
      var menu = args.menu;

      // We can add or modify the menu here, or cancel it by returning false.
      var i = menu.items.length;
      menu.items.push({
        title: "Menu item " + i,
        command: "item" + i
      });
    });

    headerMenuPlugin.onCommand.subscribe(function(e, args) {
      alert("Command: " + args.command);
    });

    grid.registerPlugin(headerMenuPlugin);

  })
</script>
</body>
</html>
