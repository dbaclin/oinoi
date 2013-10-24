(function ($) {
    $.extend(true, window, {
        "Ext": {
            "Plugins": {
                "HeaderFilter": HeaderFilter
            }
        }
    });

    /*
    Based on SlickGrid Header Menu Plugin (https://github.com/mleibman/SlickGrid/blob/master/plugins/slick.headermenu.js)

    (Can't be used at the same time as the header menu plugin as it implements the dropdown in the same way)


    */

    function HeaderFilter(options) {
        var grid;
        var self = this;
        var handler = new Slick.EventHandler();
        var defaults = {
            buttonImage: "./images/down.png",
            filterImage: "./images/filter.png",
            sortAscImage: "./images/sort-asc.png",
            sortDescImage: "./images/sort-desc.png",
            deleteImage: "./images/icon-trash.png",
            copyImage: "./images/icon-copy.png",
            pasteImage: "./images/icon-paste.png",
            warningImage: "./images/icon-warning.png",
        };
        var $menu;

        function init(g) {
            options = $.extend(true, {}, defaults, options);
            grid = g;
            handler.subscribe(grid.onHeaderCellRendered, handleHeaderCellRendered)
                   .subscribe(grid.onBeforeHeaderCellDestroy, handleBeforeHeaderCellDestroy)
                   .subscribe(grid.onClick, handleBodyMouseDown)
                   .subscribe(grid.onColumnsResized, columnsResized);

            grid.setColumns(grid.getColumns());

            $(document.body).bind("mousedown", handleBodyMouseDown);
        }

        function destroy() {
            handler.unsubscribeAll();
            $(document.body).unbind("mousedown", handleBodyMouseDown);
        }

        function handleBodyMouseDown(e) {
            if ($menu && $menu[0] != e.target && !$.contains($menu[0], e.target)) {
                hideMenu();
            }
        }

        function hideMenu() {
            if ($menu) {
                $menu.remove();
                $menu = null;
            }
        }

        function handleHeaderCellRendered(e, args) {
            //console.log('handleHeaderCellRendered');
            var column = args.column;

            var $el = $("<div></div>")
                .addClass("slick-header-menubutton")
                .data("column", column);

            if (options.buttonImage) {
                $el.css("background-image", "url(" + options.buttonImage + ")");
            }

            $el.bind("click", showFilter).appendTo(args.node);
        }

        function handleBeforeHeaderCellDestroy(e, args) {
            $(args.node)
                .find(".slick-header-menubutton")
                .remove();
        }

        function addMenuItem(menu, columnDef, title, command, image) {
            var $item = $("<div class='slick-header-menuitem'>")
                         .data("command", command)
                         .data("column", columnDef)
                         .bind("click", handleMenuItemClick)
                         .appendTo(menu);

            var $icon = $("<div class='slick-header-menuicon'>")
                         .appendTo($item);

            if (image) {
                $icon.css("background-image", "url(" + image + ")");
            }

            $("<span class='slick-header-menucontent'>")
             .text(title)
             .appendTo($item);
        }

        function addMenuItemCustom(menu, columnDef, title, command, image, menuButton, problemNumbers) {
            var $item = $("<div class='slick-header-menuitem' "+ (problemNumbers > 0 ? "style='color:red;'" : "") + ">")
                         .data("command", command)
                         .data("column", columnDef)
                         .bind("click", handleMenuItemClickCustom)
                         .bind("click", function() { setButtonImage(menuButton,true);} )
                         .appendTo(menu);

            var $icon = $("<div class='slick-header-menuicon'>")
                         .appendTo($item);

            if (image) {
                $icon.css("background-image", "url(" + image + ")");
            }

            $("<span class='slick-header-menucontent'>")
             .text(title)
             .appendTo($item);
        }

        function addMenuInputItem(menu, columnDef, title, command, image) {
            var $item = $("<div class='slick-header-menuitem'>")
                         .data("command", command)
                         .data("column", columnDef)
                         .appendTo(menu);

            var $icon = $("<div class='slick-header-menuicon'>")
                         .appendTo($item);

            if (image) {
                $icon.css("background-image", "url(" + image + ")");
            }

            //$("<span class='slick-header-menucontent'><input type='text' args='wildcard' style='width: 180px; padding: 0px; margin: 0px;'>")
            $("<span class='slick-header-menucontent'><input type='text' args='wildcard'>")
             .appendTo($item);

            if(columnDef.filterWildCard && columnDef.filterWildCard.length > 0) { 
                $item.find('input').val(columnDef.filterWildCard);
            }
        }

        function showFilter(e) {
            var $menuButton = $(this);
            var columnDef = $menuButton.data("column");

            columnDef.filterValues = columnDef.filterValues || [];
            columnDef.filterWildCard = columnDef.filterWildCard || "";

            // WorkingFilters is a copy of the filters to enable apply/cancel behaviour
            var workingFilters = columnDef.filterValues.slice(0);

            var filterItems;

            if (workingFilters.length === 0) {
                // Filter based all available values
                filterItems = getFilterValues(grid.getData(), columnDef);
            }
            else {
                // Filter based on current dataView subset
                filterItems = getAllFilterValues(grid.getData().getItems(), columnDef);
            }

            if (!$menu) {
                $menu = $("<div class='slick-header-menu'>").appendTo(document.body);
            }

            $menu.empty();

            var problemNumbers = getProblemNumbers(grid.getData(), columnDef);
            problemNumbersForDisplay = problemNumbers > 100 ? '100+' : ''+problemNumbers;

            addMenuItem($menu, columnDef, 'Sort Ascending', 'sort-asc', options.sortAscImage);
            addMenuItem($menu, columnDef, 'Sort Descending', 'sort-desc', options.sortDescImage);
            addMenuItem($menu, columnDef, 'Duplicate Column', 'duplicate-column', options.copyImage);
            addMenuItem($menu, columnDef, 'Delete Column', 'delete-column', options.deleteImage);
            addMenuItem($menu, columnDef, 'Fill Down Column', 'fill-down-columns', options.pasteImage);
            addMenuItemCustom($menu, columnDef, 'Filter '+problemNumbersForDisplay+' issue'+ (problemNumbers != 1 ? 's' : ''), 'filter-issues-in-columns', options.warningImage, $menuButton, problemNumbers);
            addMenuInputItem($menu, columnDef, 'Filter text', 'filter-column-wildcard', options.filterImage);

            var filterOptions = "<label><input type='checkbox' value='-1' />(Select All)</label>";

            for (var i = 0; i < filterItems.length; i++) {
                var filtered = _.contains(workingFilters, filterItems[i]);

                filterOptions += "<label><input type='checkbox' value='" + i + "'"
                                 + (filtered ? " checked='checked'" : "")
                                 + "/>" + filterItems[i] + "</label>";
            }

            var $filter = $("<div class='filter'>")
                           .append($(filterOptions))
                           .appendTo($menu);

            $('<button>OK</button>')
                .appendTo($menu)
                .bind('click', function (ev) {
                    columnDef.filterValues = workingFilters.splice(0);
                    columnDef.filterWildCard = ($menu.find('input').val().length == 0 ? null : $menu.find('input').val());
                    setButtonImage($menuButton, (columnDef.filterWildCard != null && columnDef.filterWildCard.length > 0) ||
                                                (columnDef.filterProblems != null && columnDef.filterProblems == 1) 
                                                || columnDef.filterValues.length > 0);
                    handleApply(ev, columnDef);
                });

            $('<button>Clear</button>')
                .appendTo($menu)
                .bind('click', function (ev) {
                    columnDef.filterValues.length = 0;
                    columnDef.filterWildCard = null;
                    columnDef.filterProblems = null;
                    setButtonImage($menuButton, false);
                    handleApply(ev, columnDef);
                });

            $('<button>Cancel</button>')
                .appendTo($menu)
                .bind('click', hideMenu);

            $(':checkbox', $filter).bind('click', function () {
                workingFilters = changeWorkingFilter(filterItems, workingFilters, $(this));
            });

            var offset = $(this).offset();
            var left = offset.left - $menu.width() + $(this).width() - 8;

            $menu.css("top", offset.top + $(this).height())
                 .css("left", (left > 0 ? left : 0));
        }

        function columnsResized() {
            hideMenu();
        }

        function changeWorkingFilter(filterItems, workingFilters, $checkbox) {
            var value = $checkbox.val();
            var $filter = $checkbox.parent().parent();

            if ($checkbox.val() < 0) {
                // Select All
                if ($checkbox.prop('checked')) {
                    $(':checkbox', $filter).prop('checked', true);
                    workingFilters = filterItems.slice(0);
                } else {
                    $(':checkbox', $filter).prop('checked', false);
                    workingFilters.length = 0;
                }
            } else {
                var index = _.indexOf(workingFilters, filterItems[value]);

                if ($checkbox.prop('checked') && index < 0) {
                    workingFilters.push(filterItems[value]);
                }
                else {
                    if (index > -1) {
                        workingFilters.splice(index, 1);
                    }
                }
            }

            return workingFilters;
        }

        function setButtonImage($el, filtered) {
            var image = "url(" + (filtered ? options.filterImage : options.buttonImage) + ")";

            $el.css("background-image", image);
        }

        function handleApply(e, columnDef) {
            hideMenu();
            //console.log(columnDef.filterValues);
            if(_.contains(columnDef.filterValues,"null")) {
                columnDef.filterValues = _.map(columnDef.filterValues,function(d) { return (d == "null") ? null : d; });
            } 

            self.onFilterApplied.notify({ "grid": grid, "column": columnDef }, e, self);

            e.preventDefault();
            e.stopPropagation();
        }

        function getProblemNumbers(dataView, column) {
            var errors = 0;
            switch(column.type) {
                case 'string':
                    for (var i = 0, len = dataView.getLength(), limit = 101; i < len && errors <= limit; i++) {
                         var value = dataView.getItem(i)[column.field];
                         errors += value == null || value.length == 0 ? 1 : 0;
                    }
                break;
                case 'date':
                    for (var i = 0, len = dataView.getLength(), limit = 101; i < len && errors <= limit; i++) {
                         var value = dataView.getItem(i)[column.field];
                         errors += value != null && typeof value == "object" && value.getMonth != "undefined" ? 0 : 1;
                    }
                break;
                case 'number':
                    for (var i = 0, len = dataView.getLength(), limit = 101; i < len && errors <= limit; i++) {
                         var value = dataView.getItem(i)[column.field];
                         errors += value == null || isNaN(value - 0) ? 1 : 0;
                    }
                break;
            }
            return errors;
        }

        function getFilterValues(dataView, column) {
            var seen = {};
            for (var i = 0, len = dataView.getLength(), limit = 200; _.size(seen) < limit && i < len ; i++) {
                var value = dataView.getItem(i)[column.field];
                if(column.type == "date" && value !== null) {
                    seen[value.toString("yyyy-MM-dd hh:mm:ss")] = 1;
                }
                else seen[value] = 1;
            }
            
            seen = _.keys(seen);
            if(column.type == "date"){
                seen = _.map(seen,function(d) {return d == null ? null : Date.parse(d);} );
            } else if(column.type =="number") {
                seen = _.map(seen,function(d) { return !isNaN(d - 0) ? d - 0 : 
                                                       d == null ? null : d;} );
            }
            return _.sortBy(seen, function (v) { return v; });
        }

        function getAllFilterValues(data, column) {
            /*
            var seen = [];
            for (var i = 0; i < data.length; i++) {
                var value = data[i][column.field];

                if (!_.contains(seen, value)) {
                    seen.push(value);
                }
            }

            return _.sortBy(seen, function (v) { return v; });
            */
            var seen = {};
            for (var i = 0, len = dataView.getLength(), limit = 200; _.size(seen) < limit && i < len ; i++) {
                var value =  dataView.getItem(i)[column.field];
                if(column.type == "date" && value !== null) {
                    seen[value.toString("yyyy-MM-dd hh:mm:ss")] = 1;
                }
                else seen[value] = 1;
            }
            
            seen = _.keys(seen);
           if(column.type == "date"){
                seen = _.map(seen,function(d) {return d == null ? null : Date.parse(d);} );
            } else if(column.type =="number") {
                seen = _.map(seen,function(d) { return !isNaN(d - 0) ? d - 0: 
                                                       d == null ? null : d;} );
            }
            return _.sortBy(seen, function (v) { return v; });
        }

        function handleMenuItemClick(e) {
            var command = $(this).data("command");
            var columnDef = $(this).data("column");

            hideMenu();

            self.onCommand.notify({
                "grid": grid,
                "column": columnDef,
                "command": command
            }, e, self);

            e.preventDefault();
            e.stopPropagation();
        }

        function handleMenuItemClickCustom(e) {
            var command = $(this).data("command");
            var columnDef = $(this).data("column");
            columnDef.filterProblems = 1;

            hideMenu();

            self.onCommand.notify({
                "grid": grid,
                "column": columnDef,
                "command": command
            }, e, self);

            e.preventDefault();
            e.stopPropagation();
        }

        $.extend(this, {
            "init": init,
            "destroy": destroy,
            "onFilterApplied": new Slick.Event(),
            "onCommand": new Slick.Event()
        });
    }
})(jQuery);