import { GoogleCharts } from 'google-charts';
import { DrawChart } from '../chart.js';

export class TreeMapChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }

    _init(options) {
        var _this = this;
        var chartoptions = {
            minColor: options.minColor || '#f00',
            midColor: options.midColor || '#ddd',
            maxColor: options.maxColor || '#0d0',
            headerHeight: options.headerHeight || 15,
            fontColor: options.fontColor || 'black',
            showScale: true
        };
        options.chartoptions = chartoptions;
        GoogleCharts.load(drawChart, {
            'packages': ['treemap']
        });
        function drawChart() {
            const data = GoogleCharts.api.visualization.arrayToDataTable(_this.data, options.chartoptions.isCandleStick);
            _this._renderChart(data, options);
        }
    }
    _renderChart(data, options) {
        var _this = this;
        _this.chart = new GoogleCharts.api.visualization.TreeMap(document.getElementById('chart_div'));
        _this.chart.draw(data, options.chartoptions);
    }
}