import { GoogleCharts } from 'google-charts';

import { DrawChart } from '../chart.js';

export class OrgChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;

    var chartoptions = {
        allowHtml:true
    };

     options.chartoptions = chartoptions;  
     super._init(options); 

    /*  GoogleCharts.load(drawChart, {
        'packages': ['orgchart']
    });
     
        function drawChart() {
            var data = new GoogleCharts.api.visualization.DataTable();
            data.addColumn('string', 'Name');
            data.addColumn('string', 'Manager');
            data.addColumn('string', 'ToolTip');

            data.addRows([
              [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
               '', 'The President'],
              [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
               'Mike', 'VP'],
              ['Alice', 'Mike', ''],
              ['Bob', 'Jim', 'Bob Sponge'],
              ['Carol', 'Bob', '']
            ]);
           
           _this._renderChart(data, options);       
        } */        
   }

   /* _renderChart(data, options){
    var _this= this;
    // super. _renderChart(data, options);
    _this.chart = new GoogleCharts.api.visualization.OrgChart(document.getElementById('chart_div'));
    _this.chart.draw(data, options.chartoptions);
   } */
}