
import { GoogleCharts } from 'google-charts';

export class DrawChart {
    constructor(options) {
        this.type = options.type;
        this.data = options.data;
        this.loadPackage = options.loadPackage || null;  
        this.isCandleStick = options.chartoptions.isCandleStick || null;  
        this.container= options.container || "chart_div" ;

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
        options.chartoptions.titleTextStyle= {
            color: '#A1A1A1',
            fontWeight: "normal",
        }
        this.$container = $("#chart_div");

        options.chartoptions.colors= [];

        var opacity  = 1;
        for(var i = 0;i < options.data[0].length;i++){
            options.chartoptions.colors.push('rgba(1,1,1,0.3)'.replace(/[^,]+(?=\))/, opacity))
            opacity= opacity-0.2;
        }
          options.chartoptions.colors= ['#3267D6', '#4285F4', '#73A4F7', '#9FC2F9', '#CFE0FC']

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
        _this.chart = new GoogleCharts.api.visualization[_this.type](document.getElementById(_this.container));
        _this.chart.draw(data, options.chartoptions);

        if(options.legend){
            var total = 0;
            for (var i = 0; i < data.getNumberOfRows(); i++) {
                total += data.getValue(i, 1);
            }
            var legend = document.getElementById("legend");
            var legItem = [];
            var colors = ['#3267D6', '#4285F4', '#73A4F7', '#9FC2F9', '#CFE0FC'];
            for (var i = 0; i < data.getNumberOfRows(); i++) {
                var label = data.getValue(i, 0);
                var value = data.getValue(i, 1);
                var percent = Number(100 * value / total).toFixed(1);
    
                // This will create legend list for the display
                legItem[i] = document.createElement('li');
                legItem[i].id = 'legend_' + data.getValue(i, 0);
                legItem[i].innerHTML = '<div class="legendMarker"><span class="legend-icon" style="background-color:' + colors[i] + ';"></span> <span style="color:' + colors[i] + ';">' + label + ' ' + percent +'%</span></div>';
    
                legend.appendChild(legItem[i]);
        }
    }
    }
}   


