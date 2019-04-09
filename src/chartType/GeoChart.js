import { GoogleCharts } from 'google-charts';
import { DrawChart } from '../chart.js';

export class GeoChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }

    _init(options) {
        var _this = this;
        var chartoptions = {
           
        };
        options.chartoptions = chartoptions;
        options.chartoptions.colors= ['#3267D6', '#4285F4', '#73A4F7', '#9FC2F9', '#CFE0FC']
        GoogleCharts.load(drawChart, options.loadPackage);
        function drawChart() {
            const data = GoogleCharts.api.visualization.arrayToDataTable(_this.data, options.chartoptions.isCandleStick);
            _this._renderChart(data, options);
        } 
    }
    _renderChart(data, options) {
        var _this = this;
        _this.chart = new GoogleCharts.api.visualization.GeoChart(document.getElementById(options.container));
        _this.chart.draw(data, options.chartoptions);
    } 
}