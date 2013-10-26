

function load_data(){   
  /* temp solution 
   var jsonFile = '521ce62eb51cf';
   if(jsonFile.length > 0) {
      $.getJSON( "./uploads/" + jsonFile + ".json", function(data) {
        
        file_name = jsonFile + ".json";
        var variablesToDisplay = data["variables"];
        var columnNames = data["columnNames"];
        var columnIds = data["columnIds"];

        
        json_data.rows = data["rows"];
        json_data.prettynames = {};
        for(var i = 0, len = columnIds.length; i < len; i++) {
          json_data.prettynames[columnIds[i]] = columnNames[i];
        }
        json_data.headers = columnIds;

        initialization();

        for(var i = 0, len = variablesToDisplay.length; i < len; i ++) {
            addElementOnGridBoard(variablesToDisplay[i]);
        }
              
    })
    .fail(function() { console.log( "error" ); });
   */ 

   var data = {
         "rows": [{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2,"id":1},
                  {"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":0.41,"id":2},
                  {"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Product In Beta Test","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":4.5,"id":3},
                  {"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"PA","Deals":1,"Amount_Raised":3.88,"id":4},
                  {"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"NY","Deals":1,"Amount_Raised":5,"id":5},
                  {"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"MA","Deals":1,"Amount_Raised":9.93,"id":6},
                  {"Industry_Group":"Consumer Goods","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NC","Deals":1,"Amount_Raised":null,"id":7},
                  {"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product In Beta Test","RoundClassDescr":"First Round","State":"NY","Deals":1,"Amount_Raised":1.5,"id":8},
                  {"Industry_Group":"Energy and Utilities","PrimaryRegion":"Midwest East","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"OH","Deals":1,"Amount_Raised":0.15,"id":9},
                  {"Industry_Group":"Energy and Utilities","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":22,"id":10},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"NJ","Deals":1,"Amount_Raised":2,"id":11},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"NY","Deals":1,"Amount_Raised":10.09,"id":12},{"Industry_Group":"Healthcare","PrimaryRegion":"South Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"TX","Deals":1,"Amount_Raised":2.84,"id":13},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NJ","Deals":1,"Amount_Raised":9,"id":14},{"Industry_Group":"Healthcare","PrimaryRegion":"Midwest Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"MN","Deals":1,"Amount_Raised":8,"id":15},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Clinical Trials - Phase 1","RoundClassDescr":"Second Round","State":"NY","Deals":1,"Amount_Raised":25.78,"id":16},{"Industry_Group":"Information Technology","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"OR","Deals":1,"Amount_Raised":0.2,"id":17},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":0.65,"id":18},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"Corporate","State":"MA","Deals":1,"Amount_Raised":20,"id":19},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":45,"id":20},{"Industry_Group":"Information Technology","PrimaryRegion":"South Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"TX","Deals":1,"Amount_Raised":0.1,"id":21},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":1.45,"id":22},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mountain","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CO","Deals":1,"Amount_Raised":10,"id":23},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":20,"id":24},{"Industry_Group":"Consumer Services","PrimaryRegion":"Southern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":0.2,"id":25},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Startup","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":14.13,"id":26},{"Industry_Group":"Industrial Goods and Materials","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":1.2,"id":27},{"Industry_Group":"Information Technology","PrimaryRegion":"Southern California","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":3.5,"id":28},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":null,"id":29},{"Industry_Group":"Healthcare","PrimaryRegion":"Midwest Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Individual","State":"MN","Deals":1,"Amount_Raised":5,"id":30},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NY","Deals":1,"Amount_Raised":44,"id":31},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NY","Deals":1,"Amount_Raised":5.5,"id":32},{"Industry_Group":"To Be Assigned","PrimaryRegion":"Northern California","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":null,"id":33},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"MA","Deals":1,"Amount_Raised":5,"id":34},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Profitable","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":4.2,"id":35},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":0.25,"id":36},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":3,"id":37},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"PA","Deals":1,"Amount_Raised":50,"id":38},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":4.25,"id":39},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"NY","Deals":1,"Amount_Raised":2.27,"id":40},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"South Central","RoundBusStat":"Profitable","RoundClassDescr":"Second Round","State":"TX","Deals":1,"Amount_Raised":6,"id":41},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"MA","Deals":1,"Amount_Raised":5.86,"id":42},{"Industry_Group":"Information Technology","PrimaryRegion":"South Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"ACQ Financing","State":"TX","Deals":1,"Amount_Raised":10.79,"id":43},{"Industry_Group":"Information Technology","PrimaryRegion":"Mountain","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"CO","Deals":1,"Amount_Raised":null,"id":44},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NJ","Deals":1,"Amount_Raised":5.5,"id":45},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":5,"id":46},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":5.02,"id":47},{"Industry_Group":"Consumer Goods","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":16.03,"id":48},{"Industry_Group":"Consumer Services","PrimaryRegion":"Southern California","RoundBusStat":"Startup","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":5,"id":49},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Southern California","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":1.25,"id":50},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":1.06,"id":51},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"Midwest East","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"IL","Deals":1,"Amount_Raised":3.77,"id":52},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Clinical Trials - Phase 3","RoundClassDescr":"Later Stage","State":"FL","Deals":1,"Amount_Raised":6.18,"id":53},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Clinical Trials - Phase 2","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":2,"id":54},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":1.85,"id":55},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":10.96,"id":56},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":2.65,"id":57},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":5.25,"id":58},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":22,"id":59},{"Industry_Group":"Information Technology","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"FL","Deals":1,"Amount_Raised":12.5,"id":60},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":100,"id":61},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Clinical Trials - Phase 3","RoundClassDescr":"Corporate","State":"MD","Deals":1,"Amount_Raised":12.02,"id":62},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"PA","Deals":1,"Amount_Raised":16.88,"id":63},{"Industry_Group":"Healthcare","PrimaryRegion":"Midwest East","RoundBusStat":"Clinical Trials - Phase 1","RoundClassDescr":"Later Stage","State":"WI","Deals":1,"Amount_Raised":1.7,"id":64},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":0.6,"id":65},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"Mountain","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"NM","Deals":1,"Amount_Raised":2.87,"id":66},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":4.5,"id":67},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Profitable","RoundClassDescr":"Later Stage","State":"TN","Deals":1,"Amount_Raised":6,"id":68},{"Industry_Group":"Industrial Goods and Materials","PrimaryRegion":"New England","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":8,"id":69},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"ACQ Financing","State":"NJ","Deals":1,"Amount_Raised":null,"id":70},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":13,"id":71},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":0.02,"id":72},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"MD","Deals":1,"Amount_Raised":1.9,"id":73},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":10.58,"id":74},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"South East","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"GA","Deals":1,"Amount_Raised":11,"id":75},{"Industry_Group":"Consumer Services","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Second Round","State":"WA","Deals":1,"Amount_Raised":4,"id":76},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"CT","Deals":1,"Amount_Raised":3,"id":77},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"South Central","RoundBusStat":"Startup","RoundClassDescr":"First Round","State":"TX","Deals":1,"Amount_Raised":50,"id":78},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":0.01,"id":79},{"Industry_Group":"Industrial Goods and Materials","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":17.7,"id":80},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":25.9,"id":81},{"Industry_Group":"Industrial Goods and Materials","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":null,"id":82},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"NY","Deals":1,"Amount_Raised":4.03,"id":83},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"South Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"TX","Deals":1,"Amount_Raised":2,"id":84},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":37.5,"id":85},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Clinical Trials - Phase 2","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":45,"id":86},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"MD","Deals":1,"Amount_Raised":0.17,"id":87},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":12.5,"id":88},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":3,"id":89},{"Industry_Group":"Information Technology","PrimaryRegion":"South Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Restart","State":"TX","Deals":1,"Amount_Raised":4,"id":90},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CT","Deals":1,"Amount_Raised":null,"id":91},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":22.5,"id":92},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":6.29,"id":93},{"Industry_Group":"Consumer Services","PrimaryRegion":"Southern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":1.56217541,"id":94},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":1.7,"id":95},{"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"Seed Round","State":"NY","Deals":1,"Amount_Raised":0.8,"id":96},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"Northern California","RoundBusStat":"Profitable","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":7,"id":97},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Second Round","State":"WA","Deals":1,"Amount_Raised":0.89,"id":98},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"MD","Deals":1,"Amount_Raised":12.6,"id":99},{"Industry_Group":"Healthcare","PrimaryRegion":"Mountain","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"AZ","Deals":1,"Amount_Raised":10.56,"id":100},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Clinical Trials - Generic","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":6,"id":101},{"Industry_Group":"Healthcare","PrimaryRegion":"Southern California","RoundBusStat":"Clinical Trials - Generic","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":29.5,"id":102},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"NY","Deals":1,"Amount_Raised":4.1,"id":103},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"FL","Deals":1,"Amount_Raised":0.09,"id":104},{"Industry_Group":"Information Technology","PrimaryRegion":"Southern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":null,"id":105},{"Industry_Group":"Consumer Goods","PrimaryRegion":"Northern California","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":17,"id":106},{"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NY","Deals":1,"Amount_Raised":7.51,"id":107},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"FL","Deals":1,"Amount_Raised":21,"id":108},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Seed Round","State":"TN","Deals":1,"Amount_Raised":0.23,"id":109},{"Industry_Group":"Information Technology","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Generating Revenue","RoundClassDescr":"Corporate","State":"OR","Deals":1,"Amount_Raised":null,"id":110},{"Industry_Group":"Information Technology","PrimaryRegion":"Midwest East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"IL","Deals":1,"Amount_Raised":7,"id":111},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":2,"id":112},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"PA","Deals":1,"Amount_Raised":0.84,"id":113},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"NY","Deals":1,"Amount_Raised":15,"id":114},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Product Development","RoundClassDescr":"Second Round","State":"WA","Deals":1,"Amount_Raised":3.5,"id":115},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":0.02,"id":116},{"Industry_Group":"Consumer Goods","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":2,"id":117},{"Industry_Group":"Consumer Services","PrimaryRegion":"Midwest East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"IL","Deals":1,"Amount_Raised":0.5,"id":118},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":26,"id":119},{"Industry_Group":"Information Technology","PrimaryRegion":"Midwest East","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"IL","Deals":1,"Amount_Raised":5.65,"id":120},{"Industry_Group":"Information Technology","PrimaryRegion":"Southern California","RoundBusStat":"Profitable","RoundClassDescr":"Individual","State":"CA","Deals":1,"Amount_Raised":2.8,"id":121},{"Industry_Group":"Information Technology","PrimaryRegion":"South Central","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Later Stage","State":"TX","Deals":1,"Amount_Raised":null,"id":122},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":6.44,"id":123},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":10.84,"id":124},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"NY","Deals":1,"Amount_Raised":0.68,"id":125},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"PA","Deals":1,"Amount_Raised":1.08,"id":126},{"Industry_Group":"Healthcare","PrimaryRegion":"Midwest East","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"MI","Deals":1,"Amount_Raised":6.7,"id":127},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":33.79,"id":128},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":5,"id":129},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Product In Beta Test","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2.5,"id":130},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mountain","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CO","Deals":1,"Amount_Raised":4.14,"id":131},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":8.6,"id":132},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"South Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"TX","Deals":1,"Amount_Raised":4.6,"id":133},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mountain","RoundBusStat":"Profitable","RoundClassDescr":"Second Round","State":"UT","Deals":1,"Amount_Raised":6,"id":134},{"Industry_Group":"Consumer Goods","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"Seed Round","State":"PA","Deals":1,"Amount_Raised":0.25,"id":135},{"Industry_Group":"Consumer Services","PrimaryRegion":"Midwest East","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"IL","Deals":1,"Amount_Raised":0.73,"id":136},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":17.5,"id":137},{"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"NY","Deals":1,"Amount_Raised":3,"id":138},{"Industry_Group":"Energy and Utilities","PrimaryRegion":"South Central","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"TX","Deals":1,"Amount_Raised":12,"id":139},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":20.62,"id":140},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":35,"id":141},{"Industry_Group":"Information Technology","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"ACQ Financing","State":"GA","Deals":1,"Amount_Raised":2.2,"id":142},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":null,"id":143},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":null,"id":144},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Startup","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2.25,"id":145},{"Industry_Group":"Information Technology","PrimaryRegion":"South East","RoundBusStat":"Profitable","RoundClassDescr":"Later Stage","State":"GA","Deals":1,"Amount_Raised":5.25,"id":146},{"Industry_Group":"Information Technology","PrimaryRegion":"Southern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":15,"id":147},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"VA","Deals":1,"Amount_Raised":0.59,"id":148},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":19.05,"id":149},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"CT","Deals":1,"Amount_Raised":0.3,"id":150},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":0.02,"id":151},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Midwest Central","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"MO","Deals":1,"Amount_Raised":22.77,"id":152},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Southern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":5.48,"id":153},{"Industry_Group":"Consumer Services","PrimaryRegion":"Southern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2,"id":154},{"Industry_Group":"Consumer Services","PrimaryRegion":"New England","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"MA","Deals":1,"Amount_Raised":1,"id":155},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"GA","Deals":1,"Amount_Raised":20.84,"id":156},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Pre-Clinical Trials","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":2.17,"id":157},{"Industry_Group":"Industrial Goods and Materials","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":5.21,"id":158},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":5,"id":159},{"Industry_Group":"Information Technology","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"WA","Deals":1,"Amount_Raised":null,"id":160},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"NH","Deals":1,"Amount_Raised":8.3,"id":161},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Southern California","RoundBusStat":"Profitable","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2,"id":162},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":6,"id":163},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"VA","Deals":1,"Amount_Raised":1.52,"id":164},{"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"NY","Deals":1,"Amount_Raised":0.69,"id":165},{"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Product In Beta Test","RoundClassDescr":"First Round","State":"NY","Deals":1,"Amount_Raised":1,"id":166},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":7,"id":167},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Individual","State":"CA","Deals":1,"Amount_Raised":null,"id":168},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":4,"id":169},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Clinical Trials - Phase 2","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":14,"id":170},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":6,"id":171},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":14.43,"id":172},{"Industry_Group":"Information Technology","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"WA","Deals":1,"Amount_Raised":2,"id":173},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"CA","Deals":1,"Amount_Raised":2,"id":174},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"South East","RoundBusStat":"Startup","RoundClassDescr":"First Round","State":"GA","Deals":1,"Amount_Raised":null,"id":175},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Northern California","RoundBusStat":"Profitable","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":5.75,"id":176},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"Seed Round","State":"MA","Deals":1,"Amount_Raised":1,"id":177},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2,"id":178},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"CA","Deals":1,"Amount_Raised":20,"id":179},{"Industry_Group":"Consumer Services","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"NY","Deals":1,"Amount_Raised":1,"id":180},{"Industry_Group":"Information Technology","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"DC","Deals":1,"Amount_Raised":4.04,"id":181},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":3,"id":182},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Profitable","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":5.56,"id":183},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":7.5,"id":184},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"New England","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"MA","Deals":1,"Amount_Raised":20,"id":185},{"Industry_Group":"Business and Financial Services","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Product In Beta Test","RoundClassDescr":"Second Round","State":"WA","Deals":1,"Amount_Raised":10.2,"id":186},{"Industry_Group":"Consumer Services","PrimaryRegion":"Midwest East","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"IN","Deals":1,"Amount_Raised":0.19,"id":187},{"Industry_Group":"Healthcare","PrimaryRegion":"Pacific Northwest","RoundBusStat":"Generating Revenue","RoundClassDescr":"Later Stage","State":"OR","Deals":1,"Amount_Raised":4.41,"id":188},{"Industry_Group":"Healthcare","PrimaryRegion":"South East","RoundBusStat":"Clinical Trials - Phase 2","RoundClassDescr":"Later Stage","State":"NC","Deals":1,"Amount_Raised":45,"id":189},{"Industry_Group":"Healthcare","PrimaryRegion":"New England","RoundBusStat":"Pre-Clinical Trials","RoundClassDescr":"Second Round","State":"MA","Deals":1,"Amount_Raised":6.3,"id":190},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Restart","State":"CA","Deals":1,"Amount_Raised":4.15,"id":191},{"Industry_Group":"Information Technology","PrimaryRegion":"Midwest East","RoundBusStat":"Startup","RoundClassDescr":"Seed Round","State":"IL","Deals":1,"Amount_Raised":1.15,"id":192},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Product Development","RoundClassDescr":"Corporate","State":"CA","Deals":1,"Amount_Raised":40,"id":193},{"Industry_Group":"Consumer Services","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"CA","Deals":1,"Amount_Raised":37,"id":194},{"Industry_Group":"Healthcare","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"First Round","State":"CA","Deals":1,"Amount_Raised":2.51,"id":195},{"Industry_Group":"Healthcare","PrimaryRegion":"Mid-Atlantic","RoundBusStat":"Generating Revenue","RoundClassDescr":"Second Round","State":"VA","Deals":1,"Amount_Raised":24,"id":196},{"Industry_Group":"Information Technology","PrimaryRegion":"Northern California","RoundBusStat":"Generating Revenue","RoundClassDescr":"Corporate","State":"CA","Deals":1,"Amount_Raised":36.18,"id":197},{"Industry_Group":"Information Technology","PrimaryRegion":"New England","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"MA","Deals":1,"Amount_Raised":7.58,"id":198},
                  {"Industry_Group":"Information Technology","PrimaryRegion":"South Central","RoundBusStat":"Product Development","RoundClassDescr":"First Round","State":"TX","Deals":1,"Amount_Raised":7.4,"id":199},
                  {"Industry_Group":"Information Technology","PrimaryRegion":"Mountain","RoundBusStat":"Profitable","RoundClassDescr":"Restart","State":"CO","Deals":1,"Amount_Raised":35,"id":200}],
         "columnIds": ["id","Industry_Group","PrimaryRegion","RoundBusStat","RoundClassDescr","State","Deals","Amount_Raised"],
         "columnNames": ["","Industry Group","PrimaryRegion","RoundBusStat","RoundClassDescr","State","Deals","Amount Raised"],
         "variables": []
   };
  

  // var variablesToDisplay = data["variables"];
  var columnNames = data["columnNames"];
  var columnIds = data["columnIds"];
  json_data.rows = data["rows"];
  json_data.headers = columnIds;
  json_data.prettynames = {};
  for(var i = 0, len = columnIds.length; i < len; i++) {
    json_data.prettynames[columnIds[i]] = columnNames[i];
  }
  
   
  return new Dataset(json_data);
};


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
    ndx = crossfilter(dataView.getRows());
    all = ndx.groupAll();     
}

function initialize_slickgrid(someDataset) {

  var options = {
    autoEdit:true,
    asyncEditorLoading: true,
    enableCellNavigation: true,
    enableColumnReorder: true,
    explicitInitialization: true,
    editable: true
  };
  
  var browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;  

  //$('#app-left-menu').height(browserHeight - 10);    

  browserHeight = browserHeight - 60;


  $('#myGrid').attr('style',"width: 100%; height: "+browserHeight+"px; overflow: hidden; outline: 0px; position: relative;")

  dataView = new Slick.Data.DataView();

 
  slickGrid = new Slick.Grid("#myGrid", dataView, dataset.getColumns(), options);
 
  

  slickGrid.setSelectionModel(new Slick.CellSelectionModel());
      
  slickGrid.onContextMenu.subscribe(function (e) {
      e.preventDefault();
      var cell = slickGrid.getCellFromEvent(e);
      var selectedVariable;

      if(cell != null) {
         selectedVariable = slickGrid.getColumns()[cell.cell].id;
      }
    
      $("#contextMenu")
         .data("selectedVariable", selectedVariable)
         .data("row", cell.row)
         .css("top", e.pageY - 70)
         .css("left", e.pageX)
         .show();

     $("body").one("click", function () {
         $("#contextMenu").hide();
     });
   });
  
  dataView.onRowCountChanged.subscribe(function (e, args) {
      slickGrid.updateRowCount();
      slickGrid.render();
  });

  dataView.onRowsChanged.subscribe(function (e, args) {
      slickGrid.invalidateRows(args.rows);
      slickGrid.render();
  });

  dataView.beginUpdate();
  dataView.setItems(dataset.rows);
  dataView.setFilter(filter);
  dataView.endUpdate();

  var filterPlugin = new Ext.Plugins.HeaderFilter({});

  filterPlugin.onFilterApplied.subscribe(function () {
    var status;

    dataView.refresh();
    slickGrid.resetActiveCell();

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
              processSuggestion('duplicate-selected-columns',{selectedVariable:[args.column.id]});
              refreshData();
              break;
          case "delete-column":
              processSuggestion('remove-selected-columns',{selectedVariable:[args.column.id]});
              break;
          case "fill-down-columns":
              processSuggestion('fill-down-columns',{selectedVariable:[args.column.id]});
              break;
          case "filter-issues-in-columns":
              refreshData();
              //selectAllRows();
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



    dataView.getItemMetadata = function (row) {
        if (_.contains(slickGrid.getSelectedRows(),row)) {
            return { "cssClasses":"row-currently-selected" };
        }
    };


    function filter(item) {
                  var columns = slickGrid.getColumns();

                  var value = true;

                  for (var i = 0; i < columns.length; i++) {
                      var col = columns[i];
                      var filterValues = col.filterValues;
                      var filterWildCard = col.filterWildCard;
                      var filterProblems = col.filterProblems;

                      if(filterProblems && filterProblems == 1) {
                          if(col.type == "date") {
                            value = value & !(value != null && typeof value == "object" && value.getMonth != "undefined");
                          } else if(col.type == "number") {
                            value = value & (item[col.field] == null || isNaN(item[col.field] - 0));
                          } else {
                            value = value & (item[col.field] == null || item[col.field].length == 0);
                          }
                      } else if (filterWildCard && filterWildCard.length > 0) {
                          if(col.type == "date") {
                            value = value & (item[col.field] != null ? item[col.field].toString("yyyy-MM-dd").indexOf(filterWildCard) >= 0 : false);
                          } else {
                            value = value & (item[col.field] != null ? (item[col.field] + '').indexOf(filterWildCard) >= 0 : false);
                          }
                      }
                      else if (filterValues && filterValues.length > 0) {
                          if(col.type == "date") {
                            value = value & _.contains(_.map(filterValues,function(d){return +d;}), +item[col.field]);
                          } else {
                            value = value & _.contains(filterValues, item[col.field]);
                          }
                      }
                  }
                  return value;
            }


    function removeHighlightOnColumns() {
      
      var currentSlickGridColumns = _.map(slickGrid.getColumns(),function(e) {return e.id;});
      var selectedColumnsIndexes = _.map(selectedColumns,function(e) {return currentSlickGridColumns.indexOf(e);});
      for(var i = 0, len = selectedColumnsIndexes.length; i < len; i++) {
        delete(slickGrid.getColumns()[selectedColumnsIndexes[i]].cssClass);  
      }
      $('#myGrid').find(".slick-header > div > div").removeClass("selected-header");
    }
  
    slickGrid.onSelectedRowsChanged.subscribe(function(e, args) { 
      if(args.rows.length > 0) {
          if(selectedColumns.length > 0) {
            removeHighlightOnColumns();
            selectedColumns = [];
          }
          //console.log("selected rows: "+ args.rows);
          updateSuggestionsList(args.rows);
          slickGrid.invalidate(); 
      } 
    });

    previousColumns = _.map(slickGrid.getColumns(), function(element) { var x = {}; x[element.id] = {type:element.type, name:element.name}; return x; } );

    shortcut.add("Ctrl+A",function() {
      selectAllRows();
    },{'target':'myGrid'});

    shortcut.add("Shift+Delete",function() {
      if(slickGrid.getSelectedRows().length > 0) {
          processSuggestion('remove-selected-lines',{});
      } else if(selectedColumns.length > 0) {
        processSuggestion('remove-selected-columns',{selectedVariable:this.getSelectedVariable()});
      }
    },{'target':'myGrid'});


    function sift3B(s1, s2, maxOffset, maxDistance) {
        if (s1 == null||!s1.length) {
            if (s2 == null) {
                return 0;
            }
            return s2.length;
        }

        if (s2 == null||!s2.length) {
            return s1.length;
        }

        var c1 = 0;
        var c2 = 0;
        var lcs = 0;
        var temporaryDistance;

        while ((c1 < s1.length) && (c2 < s2.length)) {
            if (s1.charAt(c1) == s2.charAt(c2)) {
                lcs++;
            } else {
                if (c1<c2) {
                    c2=c1;
                } else {
                    c1=c2;
                }
                for (var i = 0; i < maxOffset; i++) {
                    if ((c1 + i < s1.length) && (s1.charAt(c1 + i) == s2.charAt(c2))) {
                        c1+= i;
                        break;
                    }
                    if ((c2 + i < s2.length) && (s1.charAt(c1) == s2.charAt(c2 + i))) {
                        c2+= i;
                        break;
                    }
                }
            }
            c1++;
            c2++;
            if (maxDistance)
            {
                temporaryDistance=(c1+c2)/1.5-lcs;
                if (temporaryDistance>=maxDistance) return Math.round(temporaryDistance);
            }
        }
        return Math.round((s1.length + s2.length) / 1.5 - lcs);
    }

    function closestMatch(stringArray, str) {
        var distances = _.map(stringArray, function(e) { return sift3B(e,str); } );
        var currentMin = {val: +Infinity, idx: -1 } ;
        for(var i = 0, len = distances.length; i < len; i++) {
            if(currentMin.val > distances[i]) currentMin = { val: distances[i], idx: i};
        }
        return stringArray[currentMin.idx];
    }

    slickGrid.onHeaderClick.subscribe(function(event, col ) {  
        var selectedColumnId = col.column.id;
        if(selectedColumnId == "id") return;

        slickGrid.setSelectedRows([]);
        var currentSlickGridColumns = _.map(slickGrid.getColumns(),function(e) { return e.id; });

        if(selectedColumns.length > 0) removeHighlightOnColumns();
        
        if(event.ctrlKey) {
            // shift or ctrl click
            selectedColumns = _.union(selectedColumns, selectedColumnId);
        } else if(event.shiftKey) {
            var columnsToAdd = [];
            var maxIdx = _.max(_.map(selectedColumns,function(e) {return currentSlickGridColumns.indexOf(e);}));
            var colIdx = currentSlickGridColumns.indexOf(selectedColumnId);
            if(maxIdx == -Infinity) maxIdx = colIdx; 
            if(colIdx > maxIdx) {
                var tmp = maxIdx;
                maxIdx = colIdx;
                colIdx = tmp;
            }
            var i = colIdx;
            while(i <= maxIdx) {
                columnsToAdd.push(currentSlickGridColumns[i]);
                i++;
            }
            selectedColumns = _.union(selectedColumns, columnsToAdd);
        } else {
            selectedColumns = [selectedColumnId];    
        }

        var selectedColumnsIndexes = _.map(selectedColumns,function(e) {return currentSlickGridColumns.indexOf(e);});

        for(var i = 0, len = selectedColumns.length; i < len; i++ ) {
            var columnElement = $('#myGrid').find('[id$=' + selectedColumns[i] + ']', '.slick-header');
            if(columnElement.length > 1) {  
                var columnIdInSlickGrid = closestMatch(_.map(columnElement,function(e) { return $(e).attr('id'); }),selectedColumns[i]);
                columnElement = $('#myGrid').find('#'+columnIdInSlickGrid);
            } 
            columnElement.addClass('selected-header');
            
            slickGrid.getColumns()[selectedColumnsIndexes[i]].cssClass = "column-currently-selected";
        }
             
        slickGrid.invalidate();       
        //console.log("selected columns:" + selectedColumns);  
        updateSuggestionsList();
    });

}




function defineTransformation(){
  return  {'replace-from-to': {
      tag_id: 'replace-from-to' ,
      applyTo: ["cellContent","column","cell"],
      keywords: ["with", "by"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Replace <span args="from">' + args.from + '</span> by <span args="to">' + args.to + '</span> in column <span args="selectedVariable">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Replace </a><input class="from selectedValue" args="from" type="text"><a href="#">  to</a> <input class="to" type="text" args="to"></div>'},
      action: function(args){
        if(typeof args.selectedVariable != "undefined" ){

          var from = typeof args.from != "undefined" ? protectStringForRegExp(args.from): "";
          var to = typeof args.to != "undefined" ? protectStringForRegExp(args.to) : "";
          
          var myregex = new RegExp(from, 'g');
      
          if(from.length){
            if(typeof args.selectedVariable == "string") {
              var functionString = "return (row." + args.selectedVariable + " + '').replace("+myregex+",'"+to+"') ;";
            
              dataset.applyFunction(args.selectedVariable,functionString);  
            
            } else {
              for(var i = 0, len = args.selectedVariable.length; i < len; i++) {
                 var functionString = "return (row." + args.selectedVariable[i] + " + '').replace("+myregex+",'"+to+"') ;";
                 dataset.applyFunction(args.selectedVariable[i],functionString); 
              }
            }

            slickGrid.invalidate();
            this.writeALog(args);
          };   
        } else alert("action " + this.tag_id + " cannot work when no variable is defined");
        
     }
    },
    'keep-upto': {
      tag_id: 'keep-upto' ,
      applyTo: ["cellContent","column","cell"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Keep all characters up to <span args="to">' + args.to + '</span> in column <span args="selectedVariable">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Keep text up to</a> <input type="text" class="upto selectedValue" args="to"></div>'},
      action: function(args){
        if(typeof args.selectedVariable != "undefined"){
          var upto = protectStringForRegExp(args.to);
          if(upto.length){
            var functionString = "var str = (row." + args.selectedVariable + " + ''); var idx = str.indexOf('"+upto+"');"+
                                 "return idx == -1 ? row." + args.selectedVariable +" : str.substr(0,idx) ;";
            dataset.applyFunction(args.selectedVariable,functionString);  
            slickGrid.invalidate();
          }; 
        } else alert("action " + this.tag_id + " cannot work when no variable is defined");
      }
    },
     'keep-startingfrom': {
      tag_id: 'keep-startingfrom' ,
      applyTo: ["cellContent","column", "cell"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Keep all characters starting from <span args="from">' + args.from + '</span> in column <span args="selectedVariable">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Keep text from </a><input type="text" class="startingfrom selectedValue" args="from"></div>'},
      action: function(args){
        if(typeof args.selectedVariable != "undefined"){
          var startingfrom = protectStringForRegExp(args.from);
          if(startingfrom.length){
            var functionString = "var str = (row." + args.selectedVariable + " + ''); var idx = str.indexOf('"+startingfrom+"');"+
                                 "return idx == -1 ? row." + args.selectedVariable +" : str.substr(idx+1) ;";
            dataset.applyFunction(args.selectedVariable,functionString);  
            slickGrid.invalidate();
          }
        } else alert("action " + this.tag_id + " cannot work when no variable is defined");
      }
    },  
     'keep-between-left-right': {
      tag_id: 'keep-between-left-right' ,
      applyTo: ["cellContent","cell"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Keep all characters between <span args="from">' + args.from + '</span> and <span args="to">' + args.to + '</span>  in column <span args="selectedVariable">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Keep text between </a><input type="text" class="left selectedValue" args="from"><a href="#"> and </a><input type="text" class="right" args="to"></div>'},
      action: function(args){
        if(typeof args.selectedVariable != "undefined"){
          var left = protectStringForRegExp(args.from);
          var right = protectStringForRegExp(args.to);
          if(left.length * right.length){
            var functionString = "var str = (row." + args.selectedVariable + " + '');" +
                                 "var idx_left = str.indexOf('"+left+"');"+
                                 "var idx_right = str.indexOf('"+right+"',idx_left+1);"+
                                 "return idx_left == -1 || idx_right == -1 ? row." + args.selectedVariable +" : str.substring(idx_left+1,idx_right) ;";
            dataset.applyFunction(args.selectedVariable,functionString);  
            slickGrid.invalidate();
          }
        } else alert("action " + this.tag_id + " cannot work when no variable is defined");
      }
    },
    'keep-fixed-left': {
      tag_id: 'keep-fixed-left' ,
      applyTo: ["cellContent","cell"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Keep the first <span args="from">' + args.from + '</span> characters in column <span args="selectedVariable">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Keep the first</a> <input type="number" class=" left" args="from"><a href="#"> characters </a></div>'},
      action: function(args){
        if(typeof args.selectedVariable != "undefined"){
          var left = args.from - 0;
          if(!isNaN(left) && left > 0){
            var functionString = "var str = (row." + args.selectedVariable + " + '');" +
                                 "return str.substr(0,"+left+") ;";
            dataset.applyFunction(args.selectedVariable,functionString);  
            slickGrid.invalidate();
          }
        } else alert("action " + this.tag_id + " cannot work when no variable is defined");
      }
    },
     'keep-between-fixed-left-right': {
      tag_id: 'keep-between-fixed-left-right' ,
      applyTo: ["cellContent","cell"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Keep text between positions<span args="from">' + args.from + '</span> and <span args="to">' + args.to + '</span> in column <span args="selectedVariable">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Keep text between positions</a> <input type="number" class=" left" args="from"><a href="#"> and </a><input type="number" class=" right" args="to"></div>'},
      action: function(args){
        var left = args.from - 0 - 1;
        var right = args.to - 0 ;
        if(!isNaN(left) && left >= 0 && !isNaN(right) && right >= left) {
          var functionString = "var str = (row." + args.selectedVariable + " + '');" +
                               "return str.substring("+left+","+right+") ;";
          dataset.applyFunction(args.selectedVariable,functionString);  
          slickGrid.invalidate();
        }
      }
    },
    'keep-only-records-where': {
      tag_id: 'keep-only-records-where' ,
      applyTo: ["cell", "cellContent","column"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Filter rows where <span args="filter">' + args.filter + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Keep records if</a><input type="text" args="filter"></div>'},
      action: function(args){
        var functionString = args.filter;
        if(functionString.length > 0) {
          dataset.applyFunctionOnRows(functionString);
          refreshData();
          this.writeALog(args);
        }
      }
    },
     'create-new-variable-expression': {
      tag_id: 'create-new-variable-expression' ,
      applyTo: ["column"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Create new column <span args="name">' + args.name + '</span>  as <span args="where">' + args.where + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Create </a><input args="name" type="text" value="new variable"><a href="#"> as </a> <input type="text" args="where"></div>'},
      action: function(args){
        if(args.name.length > 0 && args.where.length > 0) {
          dataset.addColumn(args.name,args.where);
          refreshData();
          this.writeALog(args);
        }
      }
    },
     'apply-expression-on-variable': {
      tag_id: 'apply-expression-on-variable' ,
      applyTo: ["column"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Update column <span args="selectedVariable">' + args.selectedVariable + '</span>  as <span args="where">' + args.where + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Apply the expression</a><input type="text" args="where"></div>'},
      action: function(args){
        var functionString = args.where;
        if(functionString.length > 0) {
          dataset.applyFunction(args.selectedVariable,functionString);
          slickGrid.invalidate();
          this.writeALog(args);
      }
    }
    },
    'apply-type-on-variable': {
      tag_id: 'apply-type-on-variable' ,
      applyTo: ["column","columns"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Convert column <span args="selectedVariable">' + args.selectedVariable + '</span>  type to <span args="newType">' + args.newType + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Convert to </a><select class="type" args="newType"><option selected="selected">number</option><option>string</option><option>date</option></select></div>'},                    
      action: function(args){
       
       var newType = args.newType;
       if(newType.length > 0) {
        for(var i = 0, len = args.selectedVariable.length; i < len; i++) {
        dataset.applyType(args.selectedVariable[i],newType);
        } 
        refreshData();
        this.writeALog(args);
       }

      }
    },
    'rename-variable': {
      tag_id: 'rename-variable' ,
      applyTo: ["column", "cell", "cellContent"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Rename column <span args="selectedVariable">' + args.selectedVariable + '</span>  in <span args="newName">' + args.newName + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Rename column to </a> <input type="text" args="newName"></div> '},                    
      action: function(args){
        if(typeof args.selectedVariable != "undefined" ){
          if(typeof args.newName == "undefined"){
            args.newName = "undefined";
          }
          dataset.renameColumn(args.selectedVariable, args.newName.trim());
          refreshData();
          this.writeALog(args);
        } else console.log('No variable defined. Cannot execute the rename function');
      }
    },
    'remove-selected-lines': {
      tag_id: 'remove-selected-lines' ,
      applyTo: ["row", "rows"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Remove rows <span args="from">' + args.selectedLines.join(",") + '</span>  </div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Remove selected lines</a> </div> '},                    
      action: function(args){
        if(typeof args.selectedLines == 'undefined')
          args.selectedLines = _.map(slickGrid.getSelectedRows(), function(row) {return dataView.getItem(row).id;} );
        dataset.removeLines(args.selectedLines);
        this.writeALog(args);
        refreshData();
      }
    },
    'remove-selected-columns': {
      tag_id: 'remove-selected-columns' ,
      applyTo: ["column", "columns"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Remove column <span args="from">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Remove selected columns</a> </div> '},                    
      action: function(args){
        for(var i = 0, len = args.selectedVariable.length; i < len; i++) {
          dataset.removeColumn(args.selectedVariable[i]);  
        }
        selectedColumns = [];
        this.writeALog(args);
        refreshData();
      }
    },
     'duplicate-selected-columns': {
      tag_id: 'duplicate-selected-columns' ,
      applyTo: ["column", "columns"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Duplicate column <span args="from">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Duplicate selected columns</a> </div> '},                    
      action: function(args){
        for(var i = 0, len = args.selectedVariable.length; i < len; i++) {
          dataset.copyColumn(args.selectedVariable[i]);  
        }
        this.writeALog(args);
        refreshData();
      }
    },
    'fill-down-columns': {
      tag_id: 'fill-down-columns' ,
      applyTo: ["column", "columns"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Fill down column <span args="from">' + args.selectedVariable + '</span></div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Fill down selected columns with non-empty values</a> </div> '},                    
      action: function(args){
        var nonEmptyColumnValues = {};
        var currentItem = null;
        for(var i = 0, len = dataView.getLength(); i < len; i++) {
          currentItem = dataView.getItem(i);
          for(var c = 0, lenCols = selectedColumns.length; c < lenCols; c++) {
            if(currentItem[selectedColumns[c]] == null || currentItem[selectedColumns[c]].length == 0) {
              currentItem[selectedColumns[c]] = nonEmptyColumnValues[selectedColumns[c]] != undefined ? nonEmptyColumnValues[selectedColumns[c]] : null;
            } else {
              nonEmptyColumnValues[selectedColumns[c]] = currentItem[selectedColumns[c]]; 
            }
          }
        }
        this.writeALog(args);
        refreshData();
      }
    },
    'unflatten-selected-columns': {
      tag_id: 'unflatten-selected-columns' ,
      applyTo: ["columns"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Unflatten columns <span args="from">' + args.selectedColumns + '</span> into <span args="name">' + args.name + '</span> </div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Unflatten columns into a new variable </a> <input type="text" class="suggestion name" args="name"></div> '},                    
      action: function(args){
        
        var newName =  args.name.trim();
        if(newName.length > 0) {
          dataset.unFlatten(selectedColumns,newName,newName + " Value", 1);
          selectedColumns = [];
          refreshData();
          this.writeALog(args);
        }
        
      }
    },
    'change-header': {
      tag_id: 'change-header' ,
      applyTo: ["firstLine"],
      writeALog: function(args) { return $('#stepsList').append('<div class="step" action="' + this.tag_id +'">Convert 1st row into column names</div>');},
      html: function() { return '<div class="suggestion" action="' + this.tag_id +'"><a href="#">Use first line as column names</a></div>'},                    
      action: function(){
        var newHeader = []; 
        var columnIdsToReplace = _.map(slickGrid.getColumns(),function(d) { return d.id; }).slice(1); // remove id column
        var firstLineItem = dataView.getItem(0);
        for(var i = 0, len = columnIdsToReplace.length; i < len; i++) {
          var headerValue = firstLineItem[columnIdsToReplace[i]];
          headerValue = headerValue == null ? "" : headerValue;
          newHeader.push(headerValue);
        }
        dataset.rows = dataset.rows.slice(1); // remove the header row from the grid
        dataset.changeHeader(columnIdsToReplace,newHeader);
        this.writeALog();
        refreshData();
      }
    }             
  };
};
