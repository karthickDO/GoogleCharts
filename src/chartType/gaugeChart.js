import { GoogleCharts } from 'google-charts';
import { DrawChart } from '../chart.js';

export class Gauge extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }

    _init(options) {
        var _this = this;
        var chartoptions = {
            redFrom: 90, redTo: 100,
            yellowFrom: 75, yellowTo: 90,
            minorTicks: 5
        };
        options.chartoptions = chartoptions;
        super._init(options); 
      
        /* GoogleCharts.load(drawChart, this.loadPackage);

        function drawChart() {
            const data = GoogleCharts.api.visualization.arrayToDataTable(_this.data, _this.isCandleStick);
            _this._renderChart(data, options);
        } */
    }

   /*  _renderChart(data, options) {
        var _this = this;
        _this.chart = new GoogleCharts.api.visualization[_this.type](document.getElementById('chart_div'));
        _this.chart.draw(data, options.chartoptions);
        setInterval(function() {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            _this.chart.draw(data, options);
          }, 13000);
          setInterval(function() {
            data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
            _this.chart.draw(data, options);
          }, 5000);
          setInterval(function() {
            data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
            _this.chart.draw(data, options);
          }, 26000);
        } */
    
}