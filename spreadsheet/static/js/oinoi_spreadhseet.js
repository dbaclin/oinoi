var file_name;
var json_data = {};
var dataset;

var dataView;
var slickGrid;
var selectedColumns = [];

var previousVariables;
var previousColumns;

var dimGroup = new HashTable();
var ndx;
var all;            

var transformation;
var availableTags;

var colorCategory10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
for(var i = 0; i < 10; i++) {
    colorCategory10 = colorCategory10.concat(colorCategory10);
 }


var test;
        


/* initialisation */

function initialization() {
                
                

    //dataset = new Dataset(json_data);
    dataset = load_data(json_data);
    
    transformation = defineTransformation();
    addSlickGrid(dataset);
    availableTags = defineTags();
    addJQEvents();
    addContextMenu();

    previousVariables = _.map(dataset.getColumns(),function(d) { return d.id; });

    ndx = crossfilter(dataView.getRows());
    all = ndx.groupAll();     
                                    
    //loadDataset(json_data);

    addVariableList(dataset);
    spinner.stop();


    var oinoiCookie = $.cookie('oinoi-analysis');
    var currentDate = new Date().toString("yyyy-MM-dd hh:mm:ss");
    if(oinoiCookie == undefined) {
      $.cookie('oinoi-analysis',
        JSON.stringify({firstVisit: currentDate, lastVisit: currentDate, nofVisits: 1}),
        { expires: 365, path: '/' });
      introJs().start();
    } else {
      oinoiCookie = JSON.parse(oinoiCookie);
      $.cookie('oinoi-analysis',
        JSON.stringify({firstVisit: oinoiCookie.firstVisit , lastVisit: currentDate, nofVisits: (oinoiCookie.nofVisits - 0) + 1}),
        { expires: 365, path: '/' });  
    }
};




function load_data(){   
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


/* render UI */ 

var browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;  

$('#header').hide(); 
$('#header ul.nav li').removeClass('active');
$('#header ul.nav li:contains(Analyze)').addClass('active');

 $( "#accordion" ).accordion({
  heightStyle: "content" 
});


//$("#tabs" ).tabs();
//$('#tabs').tabs("disable",2)
$('#ui-id-3').click( function() { shareWranglingAndViz(); } );



// Spinner
   var targetSpinner = document.getElementById('overall-main-page');
   var spinner = new Spinner(opts).spin(targetSpinner);








function addJQEvents(){
   //Grid
  $('#myGrid').find('div.slick-viewport').click(function() {
    updateSuggestionsList();
  });
  $('#myGrid').find('div.slick-header').mousedown(function() {                  
    updateSuggestionsList();
    slickGrid.resetActiveCell(); 
  });
  $('#myGrid').find('div.slick-viewport').mouseup(function() { 
    //updateSuggestionsList();
    //updateSuggestionSelectedValue();
  });
  $('#myGrid').find('div.slick-viewport').keyup(function() {               
    updateSuggestionsList();
    //updateSuggestionSelectedValue();
  });

  //App-left-menu
   $('#app-left-menu li:contains("Data")').click(function(e) {
      $('#app-left-menu li:contains("Dashboard")').removeClass('active');
      $('#app-left-menu li:contains("Data")').addClass('active');

      $('.span2.list-var').hide();
      $('.span9.visualization-dashboard').hide();
      $('.span3.suggestions-menu').show();
      $('.span8.data-wrangling').show();
  });
  
   $('#app-left-menu li:contains("Dashboard")').click(function(e) {
      $('#app-left-menu li:contains("Data")').removeClass('active');
      $('#app-left-menu li:contains("Dashboard")').addClass('active');

      var newVariables = _.map(dataset.getColumns(),function(d) { return d.id; });
      $('.ui-state-default.variable.ui-draggable').remove();
      addVariableList(dataset);
      previousVariables = newVariables;
      refreshData();
      $('.span2.list-var').show();
      $('.span9.visualization-dashboard').show();
      $('.span3.suggestions-menu').hide();
      $('.span8.data-wrangling').hide();
  });

  $('#app-left-menu li:contains("Share")').click(function(e) {
    shareWranglingAndViz();
  });
  $('#app-left-menu li:contains("Oinoi")').click(function(e) {
    if(!$('#header').is(':visible')) $('#header').show();
    else $('#header').hide();
  });
  $('#app-left-menu li:contains("Help")').click(function(e) {
    introJs().start();
  });
  $('#app-left-menu li:contains("Download")').click(function(e) {

      spinner.spin(targetSpinner);
      setTimeout(function() {
         var jsonData = {};
         jsonData.rows = dataset.rows;
         jsonData.headers = _.map(_.omit(dataset.columns,"id"), function(c) {return c.id;});
         jsonData.types = _.map(_.omit(dataset.columns,"id"), function(c) {return c.type;});
         jsonData.prettynames = _.map(_.omit(dataset.columns,"id"), function(c) {return c.name;});
         var dataToWrite = csvjson.json2csv(jsonData);

         $.post("file_writer.php", { action: 'write_csv_dataset', json_string: dataToWrite }, function(data) { 
            spinner.stop();
            bootbox.confirm("Your file is ready for download, click the link below to proceed", function(result) {
            console.log("result: "+result);
         }); 
         $('<p><a href="./uploads/'+ data + '.csv" target="_blank" class="btn btn-primary" style="font-size:14px!important; margin-top:10px!important;">Download data file</a><p>').appendTo($('.modal-body'));
          
         });
      },500);

  });

  $('#app-left-menu li:contains("Upload")').click(function(e) {
          
          bootbox.confirm("Do you want to leave this page and upload a new dataset?", function(result) {
              if(result) window.location.href = "./analyze.php";
          }); 

  });



  $('#searchBox').bind("enterKey",function(e){
    processQuery($('#searchBox').val());
    $('#searchBox').val("")


  });

  $('#searchBox').keyup(function(e){
    if(e.keyCode == 13)
    {
      $(this).trigger("enterKey");
    }
  });


  $( "#searchBox" )
    // don't navigate away from the field on tab when selecting an item
    .bind( "keydown", function( event ) {
      if ( event.keyCode === $.ui.keyCode.TAB &&
          $( this ).data( "ui-autocomplete" ).menu.active ) {
        event.preventDefault();
      }
    })
    .autocomplete({
      minLength: 0,
      source: function( request, response ) {
        // delegate back to autocomplete, but extract the last term
        response( $.ui.autocomplete.filter(
          availableTags, extractLast( request.term ) ) );
      },
      focus: function() {
        // prevent value inserted on focus
        return false;
      },
      select: function( event, ui ) {
        var terms = split( this.value );
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push( ui.item.value );
        // add placeholder to get the comma-and-space at the end
        terms.push( "" );
        this.value = terms.join( " " );
        return false;

      }
    });


 

};













    

                    




//DC charts
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
    top: '250', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};

//Gridster
        
     
           
var layout;
var grid_size = 100;
var grid_margin = 5;
var block_params = {
   max_width: 6,
   max_height: 6
};
   

gridsterWidth = $('#layouts_grid').width();
        
         
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
   min_rows: block_params.max_height,
   min_cols: Math.floor(gridsterWidth / (grid_size + 2 * grid_margin)) ,
   max_cols: Math.floor(gridsterWidth / (grid_size + 2 * grid_margin)) 
}).data('gridster');



$('#layouts_grid').height(browserHeight - 10);    
$('#layouts_grid ul').first().css("min-height",browserHeight - 10);    

          
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
          
            
//gridster Helpers   


 function addCard(varName, colNumber, rowNumber){
   var dimension, group;
   var chart;
   var gridster = $(".layouts_grid ul").gridster().data('gridster');
   var widget_html = Mustache.render($('#tpl-card').html(),{"varName":varName,"displayVarName":dataset.columns[varName].name});
   var grid_squares = Math.floor($('#layouts_grid').width() / (grid_size + 2*grid_margin));
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

   var gridster_widget_element = gridster.add_widget(widget_html,1,1,best_position[0],best_position[1]);

   switch(dataset.columns[varName].type)
   {
      case "number":
          dimension = ndx.dimension(function(d) {
                      return d[varName];
                  });
          group = dimension.group();
          
          chart = addDCBarChart(varName,dimension,group,gridster.min_widget_width * 3 - 30,gridster.min_widget_height * 3);
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
                  
          chart = addDCRowChart(varName,nbBins,dimension,group,gridster.min_widget_width * 3 - 30, gridster.min_widget_height );
          break;
      
      case "date":
          
          dimension = ndx.dimension(function(d) {
                          return d[varName];
                      });
          group = dimension.group();
          
          chart = addDCLineChart(varName,dimension,group,gridster.min_widget_width * 4 - 30, gridster.min_widget_height * 2);
          
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
   
   dimGroup.get(varName).chart.width(new_width-5).height(new_height-30).render();
   
   return gridster_widget_element;
};






function addDCBarChart(name,dimension,group,w,h){
  var chart; 
  var min_bound = dimension.bottom(1)[0][name];
  var max_bound = dimension.top(1)[0][name];
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
};

function addDCRowChart(name,nbBins,dimension,group,w, gridster_min_height){
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

};

    
function addDCLineChart(name,dimension,group,w,h){
  var chart = dc.lineChart("#" + name + "-chart");
  var leftBound = dimension.bottom(1)[0][name] - 0;
  var rightBound = dimension.top(1)[0][name] - 0;
  var diff = (rightBound - leftBound) * 0.05;
  leftBound = leftBound - diff;
  rightBound = rightBound + diff;
  leftBound = new Date(leftBound);
  rightBound = new Date(rightBound);
 
  
  chart.width(w)
    .height(h)
    .margins({
          top: 5,
          right: 10,
          bottom: 25,
          left: 35})
    .dimension(dimension)
    .group(group)
    .x(d3.time.scale().domain([leftBound, rightBound]))
    .renderHorizontalGridLines(true)
    .elasticY(true)
    .brushOn(true)
    .xAxis();

     return chart;   

}





function addElementOnGridBoard(aVariableName,colNumber,rowNumber) {
  if(dimGroup.get(aVariableName) === undefined) {
      
      colNumber = (typeof colNumber !== 'undefined' ? colNumber : 1 );
      rowNumber = (typeof rowNumber !== 'undefined' ? rowNumber : 1 );
      
      var gridster_widget_element = addCard(aVariableName,colNumber,rowNumber);

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
};

//Other helpers

function split( val ) {
   return val.split( / \s*/ );
}

function extractLast( term ) {
   return split(term).pop();
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

//SlickGrid helpers

function addContextMenu(){
   $( "#contextMenu" ).menu();
   $("#contextMenu").click(function (e) {
      var actionSelected = $(e.target).attr('data-action');

      switch(actionSelected){
         case "change-header": 
           transformation[actionSelected].action();
           break;
         case "remove-selected-columns": 
             transformation[actionSelected].action({selectedVariable:selectedColumns});
             break;
         case "duplicate-selected-columns": 
             transformation[actionSelected].action({selectedVariable:selectedColumns});
             break;
         case "remove-selected-lines": 
           transformation[actionSelected].action({});
           break;
         case "apply-type-on-variable": 
           //var selectedVariable = $("#contextMenu").data("selectedVariable");
           var newType = $(e.target).html();
           transformation[actionSelected].action({selectedVariable:selectedColumns, newType:newType});
           break;
         default:
             $("#myModalSuggestion .modal-body").empty().append(transformation[actionSelected].html());
             $("#myModalSuggestion").modal('toggle');

             $("#myModalSuggestion").on("hidden", function() {    // remove the event listeners when the dialog is dismissed            
             $("#myModalSuggestion button.btn-primary").off('click').unbind('click');
             $("#myModalSuggestion").unbind('on');
             });
            
             $("#myModalSuggestion button.btn-primary").click( function() {
               var actionSelected = $("#myModalSuggestion .suggestion").attr("action");     
               
               var args = {
                 selectedVariable: $("#contextMenu").data("selectedVariable")
               };

               $("#myModalSuggestion .suggestion").find("input, select").each(function(){args[$(this).attr("args")] = $(this).val() ;}); //add all the value inside all the input of the action
               //console.log("args are " + args);
               transformation[actionSelected].action(args);
               $("#myModalSuggestion").modal('toggle');     // dismiss the dialog
             });

             $('#myModalSuggestion').draggable({
                handle: ".modal-body"
              }); 
             break;
      }
   });
};



 function addSlickGrid(someDataset) {
  
  var options = {
    autoEdit:true,
    asyncEditorLoading: true,
    enableCellNavigation: true,
    enableColumnReorder: true,
    explicitInitialization: true,
    editable: true
  };
  
  var browserHeight = window.innerHeight ||
     document.documentElement.clientHeight ||
     document.body.clientHeight;  

  $('#app-left-menu').height(browserHeight - 10);    
  browserHeight = browserHeight - 60;
  $('#myGrid').attr('style',"width: 100%; height: "+browserHeight+"px; overflow: hidden; outline: 0px; position: relative;")

  dataView = new Slick.Data.DataView();
  slickGrid = new Slick.Grid("#myGrid", dataView, dataset.getColumns(), options);
  slickGrid.setSelectionModel(new Slick.CellSelectionModel());

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
    var selectedVariable;

    if(cell != null) {
        selectedVariable = slickGrid.getColumns()[cell.cell].id;
    }
    //console.log("selected variable: "+selectedVariable); 


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

};



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
};

function getSelectedVariable(){
   var activeCell = slickGrid.getActiveCell();
                    
    if(activeCell != null) {
      return slickGrid.getColumns()[activeCell.cell].id;
    } else if(selectedColumns.length > 0) {
      return selectedColumns;
    } else return null;

}


 function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
   return text;
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
    ndx = crossfilter(dataView.getRows());
    all = ndx.groupAll();     
};

function selectAllRows() {
  var rowsToSelect = [];
  for(var i = 0, len = dataView.getLength(); i < len; i++) {
    rowsToSelect.push(i);
  }
  
  slickGrid.setSelectedRows(rowsToSelect);
}

//NLP helpers
 function findListElementinQuery(aQuery, aList){
   var res = [];

   for(i = 0; i < aList.length; i++) {
     if(aQuery.indexOf(aList[i]) > -1){
       var varID = _.find(dataset.getColumns(), function(c){ return c.name == aList[i]; }).id;//convert column name to id
       res.push(varID);

     }
   }

   return res;
     

 };


function protectStringForRegExp(str) {
  var res = "";
  var specialChars = ['"',"'","$","^","*","-","[","]","?",".","{","}","|","+","(",")","\\","/"];
  for(var i = 0, len = str.length; i < len; i++ ){
    if(_.contains(specialChars, str.charAt(i))) res = res + "\\" + str.charAt(i);
    else res = res + str.charAt(i);
  }
  return res;
}


function convertRawFilterIntoFilter(aRawFilter){              
  return 'return '+ _.map( aRawFilter.split("and"), function(c){ return convertAClauseIntoAFilter(c); }).join(" && ") + ';';
}


function convertAClauseIntoAFilter(aClause){
  var operators = [
      {keyword: "/",symbol: "/"},
      {keyword: "divided by",symbol: "/"},
      {keyword: "*",symbol: "*"},
      {keyword: "times", symbol: "*"},
      {keyword: "greater",symbol: ">"},
      {keyword: ">", symbol: ">"},
      {keyword: "lower", symbol: "<"},
      {keyword: "<", symbol: "<"},
      {keyword: "=", symbol: "=="},
      {keyword: "equal", symbol: "=="},
      {keyword: "is", symbol: "=="} 
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
    
 };
};

function clearSuggestionList(){


};

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
  
};

function updateSuggestionSelectedValue(aValue) {
  $('#suggestionsList').find('.selectedValue').val(aValue);
};

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
};

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

};

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
                

function addVariableList(someDataset){
         
   var allVariables = { "variables" : []};          
   var allColumns = _.reject(_.map(dataset.getColumns(),function(d) { return d.id; }),function(e) {return e == "id";});

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

   var browserHeight = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;  

     $('.list-var').height(browserHeight - 10);    

 };
          
         
            
         

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
};
                       
 
            
 
           

            
    

            
  
           

           
            
            
            
            
            
            

            function shareWranglingAndViz() {
              console.log("Sharing");
              spinner.spin(targetSpinner);
              setTimeout(function() {
              var allKeys = dimGroup.keys();
              var jsonToSend = JSON.stringify({   rows: dataset.rows, 
                                                  columnIds: _.map(slickGrid.getColumns(),function(e) {return e.id;}),
                                                  columnNames: _.map(slickGrid.getColumns(),function(e) {return e.name;}),
                                                  variables: allKeys });

              $.post("file_writer.php", { action: 'write_dataset', json_string: jsonToSend }, function(data) { 
                spinner.stop();
                bootbox.prompt("Share this dashboard link:", function(result) { console.log("res:"+result); })
                $('.input-block-level').attr('value',"http://oinoi.com/?j=" + data);
              } ); },500);
            };

/*
            var jsonFile = "<?php if(isset($_GET['j'])) echo $_GET['j']; else echo ''; ?>";
            var pouetdata;

            if(jsonFile.length > 0) {
                $.getJSON( "./uploads/" + jsonFile + ".json", function(data) {
                    
                    file_name = jsonFile + ".json";
                    var variablesToDisplay = data["variables"];
                    var columnNames = data["columnNames"];
                    var columnIds = data["columnIds"];

                    json_data = {};
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
            } else {
                file_name = "<?php if(isset($_POST['pasted_data']) && strlen($_POST['pasted_data'])>1) echo write_pasted_data($_POST['pasted_data']); else echo ''; ?>";
                
                if(file_name.length == 0) {
                    file_name = "<?php if(isset($_POST['file_name'])) echo $_POST['file_name']; else echo 'vc-reduced.csv'; ?>";
                }
                
                if (file_name.length > 0) {
                console.log("file name: " + file_name);
                $.ajax("./uploads/" + file_name, {
                    success: function(data) {

                        pouetdata = data;

                        json_data = csvjson.csv2json(data);
                      
                        initialization();
                        
                    },
                    error: function() {
                        console.log("could not load csv file");
                        spinner.stop();    
                    }
                });
                } else {
                    console.log("nothing to see here");
                    spinner.stop();
                }        
            }
            
            
        */
        