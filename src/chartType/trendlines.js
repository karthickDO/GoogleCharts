import { DrawChart } from '../chart.js';

export class Trendline extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }

    _init(options) {
        var _this = this;
        var chartoptions = {
            hAxis: { title: 'Diameter' },
            vAxis: { title: 'Age' },
            legend: 'none',
            trendlines: { 0: {} }
        };
        options.chartoptions = chartoptions;
        super._init(options);
    }
}