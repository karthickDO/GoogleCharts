import { DrawChart } from '../chart.js';

export class ComboChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {1: {type: 'line'}}
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}