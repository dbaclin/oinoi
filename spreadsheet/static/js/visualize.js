 
var colorCategory10 = [ "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf" ];
for(var i = 0; i < 10; i++) {
  colorCategory10 = colorCategory10.concat(colorCategory10);
}


 function addDCBarChart(name,dimension,group,w,h){
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
          
          }

                
          function addDCLineChart(name,dimension,group,w,h){
              
              var leftBound = dimension.bottom(1)[0][name] - 0;
              var rightBound = dimension.top(1)[0][name] - 0;
              var diff = (rightBound - leftBound) * 0.05;
              leftBound = leftBound - diff;
              rightBound = rightBound + diff;
              leftBound = new Date(leftBound);
              rightBound = new Date(rightBound);
              /*
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
                  .x(d3.time.scale().domain([leftBound, rightBound]))
                  .renderHorizontalGridLines(true)
                  .xAxis();*/
              var chart = dc.lineChart("#" + name + "-chart");
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