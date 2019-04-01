import { DrawChart } from '../chart.js';

export class AreaChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        hAxis: {title: options.title || null, 
        titleTextStyle: {color: options.color || "#333"}},
        vAxis: {minValue: options.minValue || 0}
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}