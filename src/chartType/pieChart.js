import { DrawChart } from '../chart.js';

export class PieChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        title: _this.title,
    };
    options.chartoptions = chartoptions;
    super._init(options); 
   }
}