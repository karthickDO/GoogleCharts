import { DrawChart } from '../chart.js';

export class Trendline extends DrawChart {
    constructor(options) {
        super(options);
        this._init(options);
    }

    _init(options) {
        var _this = this;
        var chartoptions = {
            hAxis: { title: options.hAxistitle || ''  },
            vAxis: { title: options.vAxistitle || '' },
            legend: 'none',
            trendlines: { 0: {} }
        };
        options.chartoptions = chartoptions;
        super._init(options);
    }
}