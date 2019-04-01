
import { GoogleCharts } from 'google-charts';

export class DrawChart {
    constructor(options) {
        this.type = options.type;
        this.data = options.data;
        /* this.dataFormat = options.dataFormat; */
        this.chartoptions = {
            title:options.chartoptions.title || "Title"
        }

        this.loadPackage = options.loadPackage || null;  
        this.isCandleStick = options.chartoptions.isCandleStick || null;  

        this._init(options);
    }

    //default options that makes it look good
    _getDefaultOptions(options){
        var _this = this;
        var options1 = new [_this.type](options);
        return options1;
    }

    _init(options) {
        var _this = this;
        this.$container = $("#chart_div");
        options.chartoptions =  Object.assign(options.chartoptions , _this.chartoptions);
        GoogleCharts.load(drawChart,this.loadPackage);
    
        /* if(Object.entries(options.chartoptions).length === 0 && options.chartoptions.constructor === Object){
            this.chartoptions = this._getDefaultOptions(options);
        }  */

        function drawChart() {
            const data =  GoogleCharts.api.visualization.arrayToDataTable(_this.data,_this.isCandleStick);
           _this._renderChart(data, options);       
        }
    }

    _renderChart(data, options){
        var _this = this;
        _this.chart = new GoogleCharts.api.visualization[_this.type](document.getElementById('chart_div'));
        _this.chart.draw(data, options.chartoptions);
    }
}   


