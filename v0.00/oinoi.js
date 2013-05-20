
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

  
/*
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

*/
  
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

  


var dataset = new recline.Model.Dataset({
  records: data
});

var $el = $('#myGrid');
var grid = new recline.View.SlickGrid({
  model: dataset,
  el: $el,
  state: {gridOptions: {
	editable: true,
    enableAddRow: false,
    asyncEditorLoading: false,
	enableCellNavigation: true,
    enableColumnReorder: true
	
  }}
});





grid.visible = true;
grid.render();



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
	
	
	columns = grid.grid.getColumns();
	columns.push({id: "__dummy__", name: "", field: "__dummy__"});
	grid.grid.setColumns(columns);

	for( var i = 0;i < columns.length; i++) {
	  	columns[i].sortable = false;
    }
  
  // Add  & customize the menu header
  
  for (var i = 0; i < columns.length; i++) {
    columns[i].header = {
	   buttons: [
      {
        image: "../images/help.png",
        showOnHover: true,
		command: "rename",
        tooltip: "Rename column" 
		/*,
        handler: function(e) {
          alert('Help');
        }
		*/
      }
    ],
	  
	  menu: {
        items: [
		  {
			title: "Copy",
			command: "copy",
			disabled: false,
			tootlip: "Create a copy of this column"
		  }
		/*
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
		  */
        ]
		
      }
    }};
  

  
  //HeaderMenu Plugin
  var mytest;
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
	  mytest = args;
      //alert("Command: " + args.command + " column: " + args.column.id);
	  
	  var slick_grid = grid.grid;
	  var newcolumn = args.column.id + "_copy";
	  var cpt = 1;
	  while(slick_grid.getColumnIndex(newcolumn) != undefined) {
			newcolumn = args.column.id + "_copy_" + cpt;
			cpt = cpt + 1;
	  }
	  
		for(var i = 0; i < data.length; i++) {
			data[i][newcolumn] = data[i][args.column.id];
		}
		var columns = grid.grid.getColumns();
		columns.push({id: newcolumn, name: newcolumn, field: newcolumn});
		slick_grid.setColumns(columns);
		slick_grid.getColumns()[slick_grid.getColumnIndex(newcolumn)].header = slick_grid.getColumns()[slick_grid.getColumnIndex(args.column.id)].header;
		slick_grid.registerPlugin(headerMenuPlugin); 
		
		dataset = new recline.Model.Dataset({
	records: data
});
 // grod porc mode :p
var $el = $('#myGrid');
grid = new recline.View.SlickGrid({
  model: dataset,
  el: $el
});
grid.visible = true;
grid.render();				
    });

	grid.grid.registerPlugin(headerMenuPlugin); 
	
	//HeaderButton Plugin
	var headerButtonsPlugin = new Slick.Plugins.HeaderButtons({});

    headerButtonsPlugin.onCommand.subscribe(function(e, args) {
      var column = args.column;
      var button = args.button;
      var command = args.command;
	  
	  //alert("Command: " + args.command + " column: " + args.column.id);
	  
	  var newcolumn = prompt("Please enter the new column name","");
	  grid.grid.getColumns()[grid.getColumnIndex(args.column.id)].name = newcolumn;
	  grid.grid.setColumns(grid.getColumns());
	  
	 }); 
	grid.grid.registerPlugin(headerButtonsPlugin);
	 
	
