<html>

<head>

 <meta charset="utf-8" />
  <title>Oinoi</title>
  
  <link rel="stylesheet" href="../libs/jquery/plugins/uniform/themes/default/css/uniform.default.css" media="screen" />
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
  <link href="../libs/nvd3/src/nv.d3.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../libs/jquery/demos/demos.css" />
  <link rel="stylesheet" href="../libs/slickgrid/slick.grid.css" type="text/css"/>
  <link rel="stylesheet" href="../libs/slickgrid/examples/examples.css" type="text/css"/>
  <link rel="stylesheet" href="../libs/slickgrid/plugins/slick.headermenu.css" type="text/css"/>
  <link rel="stylesheet" href="../libs/slickgrid/plugins/slick.headerbuttons.css" type="text/css"/>
  
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
  <script src="../libs/jquery/plugins/uniform/jquery.uniform.js"></script>
 
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
  <script>
  $(function() {
    $( "#tabs" ).tabs();
  });
  
  $(function() {
    $( "#accordion" ).accordion();
  });
  
  $(function() {
	$("select, input, a.button, button").uniform();
  });
  
  $(function() {
   $("#suggestions").click(function() {
					var str = "";
					for(var i = 0; i < data.length; i++) {
						str = data[i].Region;
						data[i].country = str.substring(0,str.indexOf(";") == -1 ? str.length : str.indexOf(";"));
					}
					var columns = grid.getColumns();
					columns.push({id: "country", name: "Country", field: "country"});
					grid.setColumns(columns);
					
					var countryCount = {};
					for(var i = 0; i < data.length; i++) {
						if(isNaN(countryCount[data[i].country])) {
							countryCount[data[i].country] = 1;
						} else {
							countryCount[data[i].country] ++ ;
						}
					}
					
					console.log(countryCount);
					
					var newdata = [];
					var cpt = 0;
					
					for(var ctry in countryCount) {
						newdata[cpt] = { x: ctry, y: countryCount[ctry] };
						cpt ++ ;
					}
					
					console.log(newdata);
					
					nv.addGraph(function() {
						var width = 300,
							height = 300;

						var chart = nv.models.pieChart()
							.values(function(d) { return d })
							.width(width)
							.height(height)
							.showLabels(true)
							.labelThreshold(.1)
							.donut(true);

						d3.select("#myd3Chart")
							.datum([newdata])
						  .transition().duration(1200)
							.attr('width', width)
							.attr('height', height)
							.call(chart);

						return chart;
					});
					
					
    });
  });
  
  $(function() {
   $("#suggestionAntoine").click(function() {
					var str = "";
					for(var i = 0; i < data.length; i++) {
						str = data[i].Points;
						data[i].PointsClean = str.substring(0,2);
					}
					var columns = grid.getColumns();
					columns.push({id: "PointsClean", name: "Points", field: "PointsClean"});
					grid.setColumns(columns);
					
    });
  }); 
  
  </script>

  
  
</head>

<body>

<div class="general-menu" id="general-menu-id" pane="north" style="visibility: visible; margin: 0px; width: 100%; height: 10%;">
		hello world
</div>
<div class="left-menu" id="left-menu-id" pane="west" style="visibility: visible; float:left; padding: 2px; margin: 0px; height: 85%; width: 25%;">

<div id="tabs">
  <ul>
    <li><a href="#tabs-1">Suggestions</a></li>
    <li><a href="#tabs-2">Reshape</a></li>
    <li><a href="#tabs-3">Visualize</a></li>
    <li><a href="#tabs-4">History</a></li>
	
  </ul>
  <div id="tabs-1">
    <div id="accordion">
  <h3 id="suggestions">Extract up to the first ","</h3>
  <div>
    <p>
    Showing off the forms
    </p>
	<div>
		<label>Separator:</label>
		<select id="separator">
			<option value="comma">,</option>
			<option value="pipe">|</option>
			<option value="colon">:</option>
			<option value="semi-colon">;</option>
		</select>
	</div>
	<div>
		<label>Some number:</label>
		<input type="number" size="40" />
	</div>				
  </div>
  <h3 id="suggestionAntoine">Suggestion 2</h3>
  <div>
    <p>
    Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
    purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
    velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
    suscipit faucibus urna.
    </p>
  </div>
  <h3>Suggestion 3</h3>
  <div>
    <p>
    Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
    Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
    ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
    lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
    </p>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>
  </div>
  <h3>Suggestion 4</h3>
  <div>
    <p>
    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
    mauris vel est.
    </p>
    <p>
    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos.
    </p>
  </div>
    <h3>Suggestion Antoine</h3>
  <div>
    <p>
    Cras dictum. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
    faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
    mauris vel est.
    </p>
    <p>
    Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    inceptos himenaeos.
    </p>
  </div>
  </div>
  </div>
  <div id="tabs-2">
    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
  </div>
  <div id="tabs-3">
    <p>My d3 chart here</p>
	
	<div><svg id="myd3Chart"></svg></div>

	<ul id="contextMenu" style="display:none;position:absolute">
		<li data="Low">Sort</li>
		<li data="Medium">Delete</li>
		<li data="High">Create new colum</li>
</ul>

<script src="../libs/nvd3/lib/d3.v2.js"></script>
<script src="../libs/nvd3/nv.d3.js"></script>
<script src="../libs/nvd3/src/models/pie.js"></script>
<script> 

  var testdata = [
    { 
      x: "test",
      y: 5
    },
    { 
      x: "Two",
      y: 2
    },
    { 
      label: "Three",
      y: 7
    },
    { 
      label: "Four",
      y: 4
    },
    { 
      label: "Five",
      y: 6
    }
  ];
  
nv.addGraph(function() {
    var width = 250,
        height = 250;

    var chart = nv.models.pieChart()
        .values(function(d) { return d })
        .width(width)
        .height(height)
		.showLabels(true)
        .donut(true);

    d3.select("#myd3Chart")
        .datum([testdata])
      .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);

    return chart;
});

  
</script>

	
  </div>
  <div id="tabs-4">
    <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
    <p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
  </div>
</div>


</div>

<div class="main-table" id="main-table-id" pane="center" style="visibility: visible; overflow: hidden; padding: 2px; margin: 0px; height: 85%; width: 74%;">
		<div id="myGrid" style="width:100%;height:100%;"></div>
</div>


<script src="../libs/jquery/plugins/jquery.event.drag-2.2.js"></script>
<script src="../libs/slickgrid/slick.editors.js"></script>
<script src="../libs/slickgrid/slick.core.js"></script>
<script src="../libs/slickgrid/slick.grid.js"></script>
<script src="../libs/slickgrid/plugins/slick.headermenu.js"></script>
<script src="../libs/slickgrid/plugins/slick.headerbuttons.js"></script>

<script>
  var grid;
  
  var columns = [
    {id: "Rank", name: "Rank", field: "Rank"},
    {id: "Name", name: "Name", field: "Name"},
    {id: "Region", name: "Region", field: "Region"},
    {id: "Points", name: "Points", field: "Points"},
    {id: "Price", name: "Price", field: "Price"}
  ];

  var options = {
	editable: true,
    enableAddRow: false,
    asyncEditorLoading: false,
	enableCellNavigation: true,
    enableColumnReorder: true
	
  };


  
    var data = 
	[
	{
		"Rank": "1",
		"Name": "DOMAINE SAINT PREFERT Châteauneuf-du-Pape Collection Charles Giraud 2010",
		"Region": "FRANCE; Rhone",
		"Points": "99",
		"Price": "75"
	},
	{
		"Rank": "2",
		"Name": "BEN GLAETZER Amon-Ra 2010",
		"Region": "AUSTRALIA; Barossa Valley",
		"Points": "97",
		"Price": "80"
	},
	{
		"Rank": "3",
		"Name": "LUCE DELLA VITE Luce 2008",
		"Region": "ITALY; Tuscany",
		"Points": "96",
		"Price": "80"
	},
	{
		"Rank": "4",
		"Name": "LA PEIRA EN DAMAISELA Las Flors de la Peira 2009",
		"Region": "FRANCE; Languedoc",
		"Points": "95+",
		"Price": "45"
	},
	{
		"Rank": "5",
		"Name": "GORMAN WINERY The Evil Twin 2009",
		"Region": "USA; Washington",
		"Points": "95+",
		"Price": "55"
	},
	{
		"Rank": "6",
		"Name": "ANTONIOLO Gattinara 'Osso San Grato' 2007",
		"Region": "ITALY; Piedmont",
		"Points": "95",
		"Price": "60"
	},
	{
		"Rank": "7",
		"Name": "M. CHAPOUTIER Hermitage Blanc Chante-Alouett 2010",
		"Region": "FRANCE; Rhone",
		"Points": "94",
		"Price": "95"
	},
	{
		"Rank": "8",
		"Name": "CHARLES SMITH WINES King Coal 2009",
		"Region": "USA; Washington",
		"Points": "95",
		"Price": "90"
	},
	{
		"Rank": "9",
		"Name": "QUINTA DO VALE D. MARIA Douro 2009",
		"Region": "PORTUGAL; Douro",
		"Points": "94+",
		"Price": "55"
	},
	{
		"Rank": "10",
		"Name": "SAINT JEAN DU BARROUX Cotes du Ventoux La Pierre Noire 2007",
		"Region": "FRANCE; Rhone",
		"Points": "94",
		"Price": "40"
	},
	{
		"Rank": "11",
		"Name": "TENUTA DELLE TERRE NERE Etna 'Santo Spirito' 2008",
		"Region": "ITALY; Sicily",
		"Points": "94",
		"Price": "40"
	},
	{
		"Rank": "12",
		"Name": "MONTES Purple Angel 2010",
		"Region": "CHILE; Central Valley",
		"Points": "94",
		"Price": "55"
	},
	{
		"Rank": "13",
		"Name": "EPOCH ESTATE WINES Tempranillo Paderewski Vineyard 2009",
		"Region": "USA; California",
		"Points": "94+",
		"Price": "60"
	},
	{
		"Rank": "14",
		"Name": "DOMAINE DE BEAURENARD Chateauneuf-du-Pape Boisrenard 2010",
		"Region": "FRANCE; Rhone",
		"Points": "97",
		"Price": "70"
	},
	{
		"Rank": "15",
		"Name": "PAHLMEYER Merlot 2009",
		"Region": "USA; California",
		"Points": "94",
		"Price": "55"
	},
	{
		"Rank": "16",
		"Name": "DENNER VINEYARDS The Dirt Worshiper 2010",
		"Region": "USA; California",
		"Points": "94+",
		"Price": "60"
	},
	{
		"Rank": "17",
		"Name": "BODEGAS ALTO MONCAYO Campo de Borja 2009",
		"Region": "SPAIN; Campo de Borja",
		"Points": "94+",
		"Price": "44"
	},
	{
		"Rank": "18",
		"Name": "TWO HANDS Shiraz Bella's Garden 2010",
		"Region": "AUSTRALIA; Barossa Valley",
		"Points": "96",
		"Price": "70"
	},
	{
		"Rank": "19",
		"Name": "BODEGAS EL NIDO Clio 2010",
		"Region": "SPAIN; Jumilla",
		"Points": "94",
		"Price": "50"
	},
	{
		"Rank": "20",
		"Name": "DOMAINE DU PEGAU Chateauneuf-du-Pape Cuvee Reservé 2009",
		"Region": "FRANCE; Rhone",
		"Points": "97+",
		"Price": "75"
	},
	{
		"Rank": "21",
		"Name": "TOR KENWARD Chardonnay 'Torchiana' Beresini Vineyard Hyde Clone 2010",
		"Region": "USA; California",
		"Points": "93",
		"Price": "60"
	},
	{
		"Rank": "22",
		"Name": "DONNHOFF Norheimer Kirschheck Riesling Spätlese 2010",
		"Region": "GERMANY; Nahe",
		"Points": "93",
		"Price": "40"
	},
	{
		"Rank": "23",
		"Name": "MORIC Blaufrankisch 2010",
		"Region": "AUSTRIA; Burgenland",
		"Points": "92+",
		"Price": "25"
	},
	{
		"Rank": "24",
		"Name": "HAMILTON RUSSELL Chardonnay 2011",
		"Region": "S. AFRICA; Walker Bay",
		"Points": "93",
		"Price": "25"
	},
	{
		"Rank": "25",
		"Name": "CUVELIER LOS ANDES Grand Vin 2007",
		"Region": "ARGENTINA; Mendoza",
		"Points": "93",
		"Price": "40"
	},
	{
		"Rank": "26",
		"Name": "LE VIEUX DONJON Chateauneuf-du-Pape 2010",
		"Region": "FRANCE; Rhone",
		"Points": "95",
		"Price": "55"
	},
	{
		"Rank": "27",
		"Name": "MOCCAGATTA Barbaresco Bric Balin 2007",
		"Region": "ITALY; Piedmonte",
		"Points": "94+",
		"Price": "55"
	},
	{
		"Rank": "28",
		"Name": "RIDGE VINEYARDS Geyserville 2010",
		"Region": "USA; California",
		"Points": "93",
		"Price": "40"
	},
	{
		"Rank": "29",
		"Name": "PODERE POGGIO SCALETTE Il Carbonaione 2009",
		"Region": "ITALY; Tuscany",
		"Points": "94",
		"Price": "60"
	},
	{
		"Rank": "30",
		"Name": "CHATEAU DE SAINT COSME Gigondas 2010",
		"Region": "FRANCE; Rhone",
		"Points": "94",
		"Price": "35"
	},
	{
		"Rank": "31",
		"Name": "K VINTNERS Syrah 'The Beautiful' 2010",
		"Region": "USA; Washington",
		"Points": "95",
		"Price": "60"
	},
	{
		"Rank": "32",
		"Name": "JUSTIN VINEYARDS Isosceles 2009",
		"Region": "USA; California",
		"Points": "94",
		"Price": "60"
	},
	{
		"Rank": "33",
		"Name": "UCCELLIERA Brunello di Montalcino 2007",
		"Region": "ITALY; Tuscany",
		"Points": "94",
		"Price": "45"
	},
	{
		"Rank": "34",
		"Name": "CHATEAU VALANDRAUD Virginie de Valandraud St. Emilion Grand Cru 2009",
		"Region": "FRANCE; Bordeaux",
		"Points": "93+",
		"Price": "65"
	},
	{
		"Rank": "35",
		"Name": "DOMAINE LEPLAN-VERMEERSCH Côtes du Rhône Villages GT-X 2010",
		"Region": "FRANCE; Rhone",
		"Points": "94",
		"Price": "50"
	},
	{
		"Rank": "36",
		"Name": "CHAPPELLET VINEYARD Las Piedras 2009",
		"Region": "USA; California",
		"Points": "93",
		"Price": "50"
	},
	{
		"Rank": "37",
		"Name": "PARUSSO Barolo Mariondino 2007",
		"Region": "ITALY; Piedmonte",
		"Points": "93",
		"Price": "45"
	},
	{
		"Rank": "38",
		"Name": "DOMINO DEL PLATA Susana Balbo Brioso Agrelo 2008",
		"Region": "ARGENTINA; Mendoza",
		"Points": "93",
		"Price": "44"
	},
	{
		"Rank": "39",
		"Name": "CHATEAU MOULIN DE LA ROSE Saint-Julien 2009",
		"Region": "FRANCE; Bordeaux",
		"Points": "93+",
		"Price": "65"
	},
	{
		"Rank": "40",
		"Name": "DOMAINE DE LA COTE DE L'ANGE Chateauneuf-du-Pape Vieilles Vignes 2010",
		"Region": "FRANCE; Rhone",
		"Points": "94+",
		"Price": "55"
	},
	{
		"Rank": "41",
		"Name": "CIACCI PICCOLOMINI d'ARGONA Brunello di Montalcino 'Pianrosso' 2007",
		"Region": "ITALY;Tuscany",
		"Points": "94",
		"Price": "60"
	},
	{
		"Rank": "42",
		"Name": "ODDERO Barbaresco Gallina 2008",
		"Region": "ITALY; Piedmonte",
		"Points": "92",
		"Price": "60"
	},
	{
		"Rank": "43",
		"Name": "MICHEL GASSIER Costières-de-Nîmes Nostre Pais Blanc 2010",
		"Region": "FRANCE; Rhone",
		"Points": "92",
		"Price": "19"
	},
	{
		"Rank": "44",
		"Name": "PIAGGIA Carmignano Il Sasso 2009",
		"Region": "ITALY; Tuscany",
		"Points": "91+",
		"Price": "25"
	},
	{
		"Rank": "45",
		"Name": "DOMAINE LOUIS CHEZE Condrieu Cuvée Pagus Luminis 2011",
		"Region": "FRANCE; Rhone",
		"Points": "92",
		"Price": "50"
	},
	{
		"Rank": "46",
		"Name": "DUCKHORN VINEYARDS Merlot 2009",
		"Region": "USA; California",
		"Points": "92",
		"Price": "50"
	},
	{
		"Rank": "47",
		"Name": "RAVENTOS i BLANC Cava de Nit Rosé 2009",
		"Region": "SPAIN; Cava",
		"Points": "92",
		"Price": "19"
	},
	{
		"Rank": "48",
		"Name": "IMPRIMATA Proprietary Red 2009",
		"Region": "AUSTRALIA; McLaren Vale",
		"Points": "92+",
		"Price": "40"
	},
	{
		"Rank": "49",
		"Name": "MARCEL DEISS Engelgarten Grand Vin 2007",
		"Region": "FRANCE; Alsace",
		"Points": "93",
		"Price": "40"
	},
	{
		"Rank": "50",
		"Name": "CHATEAU PUECH-HAUT Coteaux du Languedoc Saint-Drézéry Cuvée Prestige 2010",
		"Region": "FRANCE; Languedoc",
		"Points": "92+",
		"Price": "20"
	}
]
	



	/*
    for (var i = 0; i < 500; i++) {
      data[i] = {
	    id: i+1,
        title: "Task " + i,
        duration: "5 days",
        percentComplete: Math.round(Math.random() * 100),
        start: "01/01/2009",
        finish: "01/05/2009",
        effortDriven: (i % 5 == 0)
      };
    }
	
	*/

  grid = new Slick.Grid("#myGrid", data, columns, options);
  
  // Add  & customize the menu header
  
  for (var i = 0; i < columns.length; i++) {
    columns[i].header = {
	   buttons: [
      {
        image: "../images/help.png",
        showOnHover: true,
        tooltip: "This button only appears on hover.",
        handler: function(e) {
          alert('Help');
        }
      }
    ],
	  
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
    }};
  

  
  //HeaderMenu Plugin
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
	
	//HeaderButton Plugin
	var headerButtonsPlugin = new Slick.Plugins.HeaderButtons();

    headerButtonsPlugin.onCommand.subscribe(function(e, args) {
      var column = args.column;
      var button = args.button;
      var command = args.command;
	  
	 }); 
	 grid.registerPlugin(headerButtonsPlugin);
	 
	 
	
</script>

</body>

</html>