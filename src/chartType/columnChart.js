import { DrawChart } from '../chart.js';

export class ColumnChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}