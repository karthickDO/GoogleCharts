import { DrawChart } from '../chart.js';

export class BubbleChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        hAxis: {title: options.hAxistitle || ''},
        vAxis: {title: options.vAxistitle || ''},
        bubble: {textStyle: {fontSize: options.fontSize|| 11}}
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}