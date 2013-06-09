	$(function() {
		$("#tabs").tabs();
	
	 $( "#accordion-data-summary" ).accordion({
      collapsible: true
    });
	$( "#accordion-fields" ).accordion({
      collapsible: true
    });
	
	
	$("#menu-grid").click(function(){
		$( "#tabs" ).tabs("option", "active",0);
	
	});
	$("#menu-transform").click(function(){
		$( "#tabs" ).tabs("option", "active",1);
	
	});
	$("#menu-graph").click(function(){
		$( "#tabs" ).tabs("option", "active",2);
	
	});
	
	
		
			
		
		var grid;
		
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
;
		
		  var columns = [{
                    id: "sel",
                    name: "#",
                    field: "num",
                    behavior: "select",
                    cssClass: "cell-selection",
                    width: 40,
                    resizable: false,
                    selectable: false
                }, {
                    id: "Rank",
                    name: "Rank",
                    field: "Rank"
                }, {
                    id: "Name",
                    name: "Name",
                    field: "Name"
                }, {
                    id: "Region",
                    name: "Region",
                    field: "Region"
                }, {
                    id: "Points",
                    name: "Points",
                    field: "Points"
                }, {
                    id: "Price",
                    name: "Price",
                    field: "Price"
                }
            ];

		var options = {
			enableCellNavigation: true,
			enableColumnReorder: false
		};

	
		grid = new Slick.Grid("#myGrid", data, columns, options);
		
	        var palette = new Rickshaw.Color.Palette();

		var graph = new Rickshaw.Graph( {
				element: document.querySelector("#chart"),
				width: 540,
				height: 250,
				series: [
						{
								name: "Northeast",
								data: [ { x: -1893456000, y: 25868573 }, { x: -1577923200, y: 29662053 }, { x: -1262304000, y: 34427091 }, { x: -946771200, y: 35976777 }, { x: -631152000, y: 39477986 }, { x: -315619200, y: 44677819 }, { x: 0, y: 49040703 }, { x: 315532800, y: 49135283 }, { x: 631152000, y: 50809229 }, { x: 946684800, y: 53594378 }, { x: 1262304000, y: 55317240 } ],
								color: palette.color()
						},
						{
								name: "Midwest",
								data: [ { x: -1893456000, y: 29888542 }, { x: -1577923200, y: 34019792 }, { x: -1262304000, y: 38594100 }, { x: -946771200, y: 40143332 }, { x: -631152000, y: 44460762 }, { x: -315619200, y: 51619139 }, { x: 0, y: 56571663 }, { x: 315532800, y: 58865670 }, { x: 631152000, y: 59668632 }, { x: 946684800, y: 64392776 }, { x: 1262304000, y: 66927001 } ],
								color: palette.color()
						},
						{
								name: "South",
								data: [ { x: -1893456000, y: 29389330 }, { x: -1577923200, y: 33125803 }, { x: -1262304000, y: 37857633 }, { x: -946771200, y: 41665901 }, { x: -631152000, y: 47197088 }, { x: -315619200, y: 54973113 }, { x: 0, y: 62795367 }, { x: 315532800, y: 75372362 }, { x: 631152000, y: 85445930 }, { x: 946684800, y: 100236820 }, { x: 1262304000, y: 114555744 } ],
								color: palette.color()
						},
						{
								name: "West",
								data: [ { x: -1893456000, y: 7082086 }, { x: -1577923200, y: 9213920 }, { x: -1262304000, y: 12323836 }, { x: -946771200, y: 14379119 }, { x: -631152000, y: 20189962 }, { x: -315619200, y: 28053104 }, { x: 0, y: 34804193 }, { x: 315532800, y: 43172490 }, { x: 631152000, y: 52786082 }, { x: 946684800, y: 63197932 }, { x: 1262304000, y: 71945553 } ],
								color: palette.color()
						}
				]
		} );

		var x_axis = new Rickshaw.Graph.Axis.Time( { graph: graph } );

		var y_axis = new Rickshaw.Graph.Axis.Y( {
			graph: graph,
			orientation: 'left',
			tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
			element: document.getElementById('y_axis'),
		} );

		var legend = new Rickshaw.Graph.Legend( {
			element: document.querySelector('#legend'),
			graph: graph
		} );
		
		
		var offsetForm = document.getElementById('offset_form');

		offsetForm.addEventListener('change', function(e) {
			var offsetMode = e.target.value;

			if (offsetMode == 'lines') {
                graph.setRenderer('line');
                graph.offset = 'zero';
			} else {
                graph.setRenderer('stack');
                graph.offset = offsetMode;
			}       
			graph.render();

		}, false);

		graph.render();



		
  })	
			
			
		
		
	
