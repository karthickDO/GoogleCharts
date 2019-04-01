import { DrawChart } from '../chart.js';

export class CandlestickChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {  
        legend:'none', 
        isCandleStick :true     
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}