
var hash_count = new HashTable();
var selected_var = "Region";

for(var i = 0; i < data.length; i++) {
    var currentValue = data[i][selected_var];
    if(hash_count.has(currentValue)) {
        hash_count.put(currentValue, hash_count.get(currentValue) + 1);
    } else {
        hash_count.put(currentValue,1);
    }
}

var keys = hash_count.keys();
var values = hash_count.values();
var keys_values = [];
for(var i = 0; i<keys.length; i++) {
    keys_values[i] = [keys[i],values[i]];
}

keys_values.sort(function(a,b) {
    return b[1] - a[1];
});

var value_to_display = [];
for(var i = 0; i<keys_values.length; i++) {
    value_to_display[i] = {};
    value_to_display[i]["x"] = keys_values[i][0];
    value_to_display[i]["y"] = keys_values[i][1];
}

//var value_to_display = [
//        {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
//        {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
//        {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
//        {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
//        {"x": 9,  "y": 52}, {"x": 10, "y": 48},
//        {"x": 11, "y": 24}, {"x": 12, "y": 49},
//        {"x": 13, "y": 87}, {"x": 14, "y": 66},
//        {"x": 15, "y": 17}, {"x": 16, "y": 27},
//        {"x": 17, "y": 68}, {"x": 18, "y": 16},
//        {"x": 19, "y": 49}, {"x": 20, "y": 15}
//      ]  

var vega_json = {
  "width": 800,
  "height": 400,
  "padding": {"top": 10, "left": 30, "bottom": 100, "right": 10},
  "data": [
    {
      "name": "table",
      "values": value_to_display
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "ordinal",
      "range": "width",
      "domain": {"data": "table", "field": "data.x"}
    },
    {
      "name": "y",
      "range": "height",
      "nice": true,
      "domain": {"data": "table", "field": "data.y"}
    }
  ],
  "axes": [
    {"type": "x", "scale": "x",
    "properties": {
       "labels": {
         "angle": {"value": 45},
         "align": {"value": "left"},
         "fontSize": {"value": 11},
         "fontStyle": {"value": "bold"},
         "font": {"value": "Helvetica"}
       }
     }
    },
    {"type": "y", "scale": "y"}
  ],
  "marks": [
    {
      "type": "rect",
      "from": {"data": "table"},
      "properties": {
        "enter": {
          "x": {"scale": "x", "field": "data.x"},
          "width": {"scale": "x", "band": true, "offset": -1},
          "y": {"scale": "y", "field": "data.y"},
          "y2": {"scale": "y", "value": 0}
        },
        "update": {
          "fill": {"value": "orange"}
        },
        "hover": {
          "fill": {"value": "lightgrey"}
        }
      }
    }
  ]
}


 vg.parse.spec(
                vega_json
                , function(chart) {
                self.view = chart({
                    el: "#viz"
                }).update();
            });