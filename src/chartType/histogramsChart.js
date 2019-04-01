import { DrawChart } from '../chart.js';

export class Histogram extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        legend: { position: 'none' }
    };
    options.chartoptions = chartoptions;
    super._init(options); 
   }
}