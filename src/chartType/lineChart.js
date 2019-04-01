import { DrawChart } from '../chart.js';

export class LineChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        curveType: 'function',
        legend: { position: 'bottom' }
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}