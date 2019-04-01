import { DrawChart } from '../chart.js';

export class ScatterChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
          hAxis: {title: options.hAxistitle || '', minValue: 0, maxValue: 15},
          vAxis: {title: options.vAxistitle || '', minValue: 0, maxValue: 15},
          legend: 'none'
    };
    options.chartoptions = chartoptions;
    super._init(options); 
   }
}