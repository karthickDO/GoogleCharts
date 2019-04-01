import { DrawChart } from '../chart.js';

export class PieChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
       var piehole = (options.originaltype == 'DonutChart') ? options.piehole : '0';
    var chartoptions = {
        pieHole: piehole,
    };
    options.chartoptions = chartoptions;
    super._init(options); 
   }
}