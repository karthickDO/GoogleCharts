import { DrawChart } from '../chart.js';

export class GanttChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        
    };
    options.chartoptions = chartoptions;
    super._init(options); 
   }
   
   daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
}