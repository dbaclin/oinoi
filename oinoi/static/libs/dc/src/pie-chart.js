dc.pieChart = function (parent, chartGroup) {
    var DEFAULT_MIN_ANGLE_FOR_LABEL = 0.5;

    var _sliceCssClass = "pie-slice";

    var _radius = 90, _innerRadius = 0;

    var _g;

    var _minAngleForLabel = DEFAULT_MIN_ANGLE_FOR_LABEL;

    var _chart = dc.colorChart(dc.baseChart({}));

    var _slicesCap = Infinity;
    var _othersLabel = "Others";
    var _othersGrouper = function (data, sum) {
        data.push({"key": _othersLabel, "value": sum });
    };

    function assemblePieData() {
        if (_slicesCap == Infinity) {
            return _chart.orderedGroup().top(_slicesCap); // ordered by keys
        } else {
            var topRows = _chart.group().top(_slicesCap); // ordered by value
            var topRowsSum = d3.sum(topRows, _chart.valueAccessor());

            var allRows = _chart.group().all();
            var allRowsSum = d3.sum(allRows, _chart.valueAccessor());

            _othersGrouper(topRows, allRowsSum - topRowsSum);

            return topRows;
        }
    }

    _chart.label(function (d) {
        return _chart.keyAccessor()(d.data);
    });

    _chart.renderLabel(true);

    _chart.title(function (d) {
        return _chart.keyAccessor()(d.data) + ": " + _chart.valueAccessor()(d.data);
    });

    _chart.transitionDuration(350);

    _chart.doRender = function () {
        _chart.resetSvg();

        _g = _chart.svg()
            .append("g")
            .attr("transform", "translate(" + _chart.cx() + "," + _chart.cy() + ")");

        drawChart();

        return _chart;
    };

    function drawChart() {
        if (_chart.dataSet()) {
            var pie = calculateDataPie();

            var arc = _chart.buildArcs();

            var pieData = pie(assemblePieData());

            if (_g) {
                var slices = _g.selectAll("g." + _sliceCssClass)
                    .data(pieData);

                createElements(slices, arc, pieData);

                updateElements(pieData, arc);

                removeElements(slices);

                highlightFilter();
            }
        }
    }

    function createElements(slices, arc, pieData) {
        var slicesEnter = createSliceNodes(slices);

        createSlicePath(slicesEnter, arc);

        createTitles(slicesEnter);

        createLabels(pieData, arc);
    }

    function createSliceNodes(slices) {
        var slicesEnter = slices
            .enter()
            .append("g")
            .attr("class", function (d, i) {
                return _sliceCssClass + " _" + i;
            });
        return slicesEnter;
    }

    function createSlicePath(slicesEnter, arc) {
        var slicePath = slicesEnter.append("path")
            .attr("fill", function (d, i) {
                return _chart.getColor(d, i);
            })
            .on("click", onClick)
            .attr("d", function (d, i) {
                return safeArc(d, i, arc);
            });
        slicePath.transition()
            .duration(_chart.transitionDuration())
            .attrTween("d", tweenPie);
    }

    function createTitles(slicesEnter) {
        if (_chart.renderTitle()) {
            slicesEnter.append("title").text(function (d) {
                return _chart.title()(d);
            });
        }
    }

    function createLabels(pieData, arc) {
        if (_chart.renderLabel()) {
            var labels = _g.selectAll("text." + _sliceCssClass)
                .data(pieData);

            var labelsEnter = labels
                .enter()
                .append("text")
                .attr("class", function (d, i) {
                    return _sliceCssClass + " _" + i;
                })
                .on("click", onClick);
            dc.transition(labelsEnter, _chart.transitionDuration())
                .attr("transform", function (d) {
                    d.innerRadius = _chart.innerRadius();
                    d.outerRadius = _radius;
                    var centroid = arc.centroid(d);
                    if (isNaN(centroid[0]) || isNaN(centroid[1])) {
                        return "translate(0,0)";
                    } else {
                        return "translate(" + centroid + ")";
                    }
                })
                .attr("text-anchor", "middle")
                .text(function (d) {
                    var data = d.data;
                    if (sliceHasNoData(data) || sliceTooSmall(d))
                        return "";
                    return _chart.label()(d);
                });
        }
    }

    function updateElements(pieData, arc) {
        updateSlicePaths(pieData, arc);
        updateLabels(pieData, arc);
        updateTitles(pieData);
    }

    function updateSlicePaths(pieData, arc) {
        var slicePaths = _g.selectAll("g." + _sliceCssClass)
            .data(pieData)
            .select("path")
            .attr("d", function (d, i) {
                return safeArc(d, i, arc);
            });
        dc.transition(slicePaths, _chart.transitionDuration(),
            function (s) {
                s.attrTween("d", tweenPie);
            }).attr("fill", function (d, i) {
                return _chart.getColor(d, i);
            });
    }

    function updateLabels(pieData, arc) {
        if (_chart.renderLabel()) {
            var labels = _g.selectAll("text." + _sliceCssClass)
                .data(pieData);
            dc.transition(labels, _chart.transitionDuration())
                .attr("transform", function (d) {
                    d.innerRadius = _chart.innerRadius();
                    d.outerRadius = _radius;
                    var centroid = arc.centroid(d);
                    if (isNaN(centroid[0]) || isNaN(centroid[1])) {
                        return "translate(0,0)";
                    } else {
                        return "translate(" + centroid + ")";
                    }
                })
                .attr("text-anchor", "middle")
                .text(function (d) {
                    var data = d.data;
                    if (sliceHasNoData(data) || sliceTooSmall(d))
                        return "";
                    return _chart.label()(d);
                });
        }
    }

    function updateTitles(pieData) {
        if (_chart.renderTitle()) {
            _g.selectAll("g." + _sliceCssClass)
                .data(pieData)
                .select("title")
                .text(function (d) {
                    return _chart.title()(d);
                });
        }
    }

    function removeElements(slices) {
        slices.exit().remove();
    }

    function highlightFilter() {
        if (_chart.hasFilter()) {
            _chart.selectAll("g." + _sliceCssClass).each(function (d) {
                if (_chart.isSelectedSlice(d)) {
                    _chart.highlightSelected(this);
                } else {
                    _chart.fadeDeselected(this);
                }
            });
        } else {
            _chart.selectAll("g." + _sliceCssClass).each(function (d) {
                _chart.resetHighlight(this);
            });
        }
    }

    _chart.innerRadius = function (r) {
        if (!arguments.length) return _innerRadius;
        _innerRadius = r;
        return _chart;
    };

    _chart.radius = function (r) {
        if (!arguments.length) return _radius;
        _radius = r;
        return _chart;
    };

    _chart.cx = function () {
        return _chart.width() / 2;
    };

    _chart.cy = function () {
        return _chart.height() / 2;
    };

    _chart.buildArcs = function () {
        return d3.svg.arc().outerRadius(_radius).innerRadius(_innerRadius);
    };

    _chart.isSelectedSlice = function (d) {
        return _chart.hasFilter(_chart.keyAccessor()(d.data));
    };

    _chart.doRedraw = function () {
        drawChart();
        return _chart;
    };

    _chart.minAngleForLabel = function (_) {
        if (!arguments.length) return _minAngleForLabel;
        _minAngleForLabel = _;
        return _chart;
    };

    _chart.slicesCap = function (_) {
        if (!arguments.length) return _slicesCap;
        _slicesCap = _;
        return _chart;
    };

    _chart.othersLabel = function (_) {
        if (!arguments.length) return _othersLabel;
        _othersLabel = _;
        return _chart;
    };

    _chart.othersGrouper = function (_) {
        if (!arguments.length) return _othersGrouper;
        _othersGrouper = _;
        return _chart;
    };

    function calculateDataPie() {
        return d3.layout.pie().sort(null).value(function (d) {
            return _chart.valueAccessor()(d);
        });
    }

    function sliceTooSmall(d) {
        var angle = (d.endAngle - d.startAngle);
        return isNaN(angle) || angle < _minAngleForLabel;
    }

    function sliceHasNoData(data) {
        return _chart.valueAccessor()(data) == 0;
    }

    function tweenPie(b) {
        b.innerRadius = _chart.innerRadius();
        var current = this._current;
        if (isOffCanvas(current))
            current = {startAngle: 0, endAngle: 0};
        var i = d3.interpolate(current, b);
        this._current = i(0);
        return function (t) {
            return safeArc(i(t), 0, _chart.buildArcs());
        };
    }

    function isOffCanvas(current) {
        return current == null || isNaN(current.startAngle) || isNaN(current.endAngle);
    }

    function onClick(d) {
        _chart.onClick(d.data);
    }

    function safeArc(d, i, arc) {
        var path = arc(d, i);
        if (path.indexOf("NaN") >= 0)
            path = "M0,0";
        return path;
    }

    return _chart.anchor(parent, chartGroup);
};
