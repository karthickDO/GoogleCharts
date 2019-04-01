import { DrawChart } from '../chart.js';

export class BarChart extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }  
    
   _init(options){
       var _this= this;
    var chartoptions = {
        chart: {
            subtitle: options.subtitle,
        },
        bars: options.chartoptions.bartype || 'vertical',
        vAxis: {format: 'decimal'},
        colors: ['#1b9e77', '#d95f02', '#7570b3'],
        bar: { groupWidth: '75%' },
        isStacked: options.isStacked || false
    };
     options.chartoptions = chartoptions;
    super._init(options); 
   }
}