import { GoogleCharts } from 'google-charts';

import { DrawChart } from '../chart.js';

export class Timeline extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;

    var chartoptions = {
        
    };

     options.chartoptions = chartoptions;  
     super._init(options);
     /* GoogleCharts.load(drawChart, {
        'packages': ['timeline']
    });
     
        function drawChart() {
            var data = new google.visualization.DataTable();

        data.addColumn({ type: 'string', id: 'President' });
        data.addColumn({ type: 'date', id: 'Start' });
        data.addColumn({ type: 'date', id: 'End' });
        data.addRows([
          [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);
           
           _this._renderChart(data, options);       
        } */
   }

  /*  _renderChart(data, options){
    var _this= this;
    // super. _renderChart(data, options);
    _this.chart = new GoogleCharts.api.visualization.Timeline(document.getElementById('chart_div'));
    _this.chart.draw(data, options.chartoptions);
   } */
}