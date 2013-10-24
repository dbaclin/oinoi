/***
 * Contains basic SlickGrid formatters.
 * 
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 * 
 * @module Formatters
 * @namespace Slick
 */

(function ($) {
  // register namespace
  $.extend(true, window, {
    "Slick": {
      "Formatters": {
        "PercentComplete": PercentCompleteFormatter,
        "PercentCompleteBar": PercentCompleteBarFormatter,
        "YesNo": YesNoFormatter,
        "Checkmark": CheckmarkFormatter,
        "Date":DateFormatter,
        "Number":NumberFormatter,
        "Text":TextFormatter
      }
    }
  });

  function DateFormatter(row, cell, value, columnDef, dataContext) {
    if(value == null) return "";
    else if(typeof value == "object" && value.getMonth) { // test likely date type
      var curr_date = value.getDate();
      var curr_month = value.getMonth() + 1; //Months are zero based
      var curr_year = value.getFullYear();
      return curr_year + "-" + (curr_month < 10 ? "0" : "") + curr_month + "-" + (curr_date < 10 ? "0" : "") + curr_date ;
    } else {
      return "<span style='color:red;'>" + value + "</span>";
    }
  }

  function NumberFormatter(row, cell, value, columnDef, dataContext) {
    if(value == null) return "";
    else if(typeof value == "number") {
      return "<div style='text-align:right'>" + Number(value).toFixed(2) + " </div>";
    } else {
      return "<span style='color:red;'>" + value + "</span>";
    }
  }

  function TextFormatter(row, cell, value, columnDef, dataContext) {
    if(value == null) return "";
    else return value;
  }

  function PercentCompleteFormatter(row, cell, value, columnDef, dataContext) {
    if (value == null || value === "") {
      return "-";
    } else if (value < 50) {
      return "<span style='color:red;font-weight:bold;'>" + value + "%</span>";
    } else {
      return "<span style='color:green'>" + value + "%</span>";
    }
  }

  function PercentCompleteBarFormatter(row, cell, value, columnDef, dataContext) {
    if (value == null || value === "") {
      return "";
    }

    var color;

    if (value < 30) {
      color = "red";
    } else if (value < 70) {
      color = "silver";
    } else {
      color = "green";
    }

    return "<span class='percent-complete-bar' style='background:" + color + ";width:" + value + "%'></span>";
  }

  function YesNoFormatter(row, cell, value, columnDef, dataContext) {
    return value ? "Yes" : "No";
  }

  function CheckmarkFormatter(row, cell, value, columnDef, dataContext) {
    return value ? "<img src='../images/tick.png'>" : "";
  }
})(jQuery);
