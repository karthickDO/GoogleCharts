export const ChartInputData = {
    AnnotationChartData :[
        ['Date','Kepler-22b mission', 'Kepler title', 'Kepler text', 
        'Gliese 163 mission', 'Gliese title','Gliese text'],
        [new Date(2314, 2, 15), 12400, undefined, undefined,
                                10645, undefined, undefined],
        [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
                                12374, undefined, undefined],
        [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
                                15766, 'Gallantors', 'First Encounter'],
        [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
                                34334, 'Gallantors', 'Statement of shared principles'],
        [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
                                66467, 'Gallantors', 'Mysteries revealed'],
        [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
                                79463, 'Gallantors', 'Omniscience achieved']
    ],
    AreaChartData: [
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
    ],
    BarChartData :[
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
    ],
    ColumnChartData :[
        ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
         'Western', 'Literature', { role: 'annotation' } ],
        ['2010', 10, 24, 20, 32, 18, 5, ''],
        ['2020', 16, 22, 23, 30, 16, 9, ''],
        ['2030', 28, 19, 29, 30, 12, 13, '']
    ],
    ComboChartData:[
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ],
    PieChartData : [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ],
    DonutChartData : [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ],
    ScatterChartData : [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ],
    TrendlinesData : [
        ['Diameter', 'Age'],
        [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]],
    BubbleChartData :[
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
        ['CAN',    80.66,              1.67,      'North America',  33739900],
        ['DEU',    79.84,              1.36,      'Europe',         81902307],
        ['DNK',    78.6,               1.84,      'Europe',         5523095],
        ['EGY',    72.73,              2.78,      'Middle East',    79716203],
        ['GBR',    80.05,              2,         'Europe',         61801570],
        ['IRN',    72.49,              1.7,       'Middle East',    73137148],
        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
        ['ISR',    81.55,              2.96,      'Middle East',    7485600],
        ['RUS',    68.6,               1.54,      'Europe',         141850000],
        ['USA',    78.09,              2.05,      'North America',  307007000]
    ],
    GanttData:[
        ['Task ID','Task Name','Start Date','End Date','Duration',
        'Percent Complete','Dependencies',],
        ['Research', 'Find sources',
        new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper',
        null, new Date(2015, 0, 9), 3* 24 * 60 * 60 * 1000, 25, 'Research,Outline'],
        ['Cite', 'Create bibliography',
        null, new Date(2015, 0, 7), 1* 24 * 60 * 60 * 1000, 20, 'Research'],
        ['Complete', 'Hand in paper',
        null, new Date(2015, 0, 10), 1* 24 * 60 * 60 * 1000, 0, 'Cite,Write'],
        ['Outline', 'Outline paper',
        null, new Date(2015, 0, 6), 1* 24 * 60 * 60 * 1000, 100, 'Research']
    ],
    GaugeData:[
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ],
    CandlestickChartData :[
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15]
    ],
    WaterfallChartData :[
        ['Mon', 28, 28, 38, 38],
        ['Tue', 38, 38, 55, 55],
        ['Wed', 55, 55, 77, 77],
        ['Thu', 77, 77, 66, 66],
        ['Fri', 66, 66, 22, 22]
    ],
    GeoChartData:[
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
    ],
    HistogramData : [
        ['Dinosaur', 'Length'],
        ['Acrocanthosaurus (top-spined lizard)', 12.2],
        ['Albertosaurus (Alberta lizard)', 9.1],
        ['Allosaurus (other lizard)', 12.2],
        ['Apatosaurus (deceptive lizard)', 22.9],
        ['Archaeopteryx (ancient wing)', 0.9],
        ['Argentinosaurus (Argentina lizard)', 36.6],
        ['Baryonyx (heavy claws)', 9.1],
        ['Brachiosaurus (arm lizard)', 30.5],
        ['Ceratosaurus (horned lizard)', 6.1],
        ['Coelophysis (hollow form)', 2.7],
        ['Compsognathus (elegant jaw)', 0.9],
        ['Deinonychus (terrible claw)', 2.7],
        ['Diplodocus (double beam)', 27.1],
        ['Dromicelomimus (emu mimic)', 3.4],
        ['Gallimimus (fowl mimic)', 5.5],
        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
        ['Megalosaurus (big lizard)', 7.9],
        ['Microvenator (small hunter)', 1.2],
        ['Ornithomimus (bird mimic)', 4.6],
        ['Oviraptor (egg robber)', 1.5],
        ['Plateosaurus (flat lizard)', 7.9],
        ['Sauronithoides (narrow-clawed lizard)', 2.0],
        ['Seismosaurus (tremor lizard)', 45.7],
        ['Spinosaurus (spiny lizard)', 12.2],
        ['Supersaurus (super lizard)', 30.5],
        ['Tyrannosaurus (tyrant lizard)', 15.2],
        ['Ultrasaurus (ultra lizard)', 30.5],
        ['Velociraptor (swift robber)', 1.8]
    ],
    LineChartData:[
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
    ],
    TreeMapData : [
        ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
        ['Global',    null,                 0,                               0],
        ['America',   'Global',             0,                               0],
        ['Europe',    'Global',             0,                               0],
        ['Asia',      'Global',             0,                               0],
        ['Australia', 'Global',             0,                               0],
        ['Africa',    'Global',             0,                               0],
        ['Brazil',    'America',            11,                              10],
        ['USA',       'America',            52,                              31],
        ['Mexico',    'America',            24,                              12],
        ['Canada',    'America',            16,                              -23],
        ['France',    'Europe',             42,                              -11],
        ['Germany',   'Europe',             31,                              -2],
        ['Sweden',    'Europe',             22,                              -13],
        ['Italy',     'Europe',             17,                              4],
        ['UK',        'Europe',             21,                              -5],
        ['China',     'Asia',               36,                              4],
        ['Japan',     'Asia',               20,                              -12],
        ['India',     'Asia',               40,                              63],
        ['Laos',      'Asia',               4,                               34],
        ['Mongolia',  'Asia',               1,                               -5],
        ['Israel',    'Asia',               12,                              24],
        ['Iran',      'Asia',               18,                              13],
        ['Pakistan',  'Asia',               11,                              -52],
        ['Egypt',     'Africa',             21,                              0],
        ['S. Africa', 'Africa',             30,                              43],
        ['Sudan',     'Africa',             12,                              2],
        ['Congo',     'Africa',             10,                              12],
        ['Zaire',     'Africa',             8,                               10]
    ],
/*     trendlineChartData :[
        ['Diameter', 'Age'],
        [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]
    ], */
    OrgChartData:[
        ['Name','Manager','ToolTip'],
        [{v:'Mike', f:'Mike<div style="color:red; font-style:italic">President</div>'},
         '', 'The President'],
        [{v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'},
         'Mike', 'VP'],
        ['Alice', 'Mike', ''],
        ['Bob', 'Jim', 'Bob Sponge'],
        ['Carol', 'Bob', '']
    ],
    SteppedAreaChartData:[
        ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
        ['Alfred Hitchcock (1935)', 8.4,         7.9],
        ['Ralph Thomas (1959)',     6.9,         6.5],
        ['Don Sharp (1978)',        6.5,         6.4],
        ['James Hawes (2008)',      4.4,         6.2]
    ],
    TimelineData:[
        ['President','Start','End' ],
        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
        [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]],
    WordTreeData:[ ['Phrases'],
        ['cats are better than dogs'],
        ['cats eat kibble'],
        ['cats are better than hamsters'],
        ['cats are awesome'],
        ['cats are people too'],
        ['cats eat mice'],
        ['cats meowing'],
        ['cats in the cradle'],
        ['cats eat mice'],
        ['cats in the cradle lyrics'],
        ['cats eat kibble'],
        ['cats for adoption'],
        ['cats are family'],
        ['cats eat mice'],
        ['cats are better than kittens'],
        ['cats are evil'],
        ['cats are weird'],
        ['cats eat mice'],
    ],
    TableData:[
        ['Name','Salary','Full Time Employee'],
        ['Mike',  {v: 10000, f: '$10,000'}, true],
        ['Jim',   {v:8000,   f: '$8,000'},  false],
        ['Alice', {v: 12500, f: '$12,500'}, true],
        ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ],
    CalendarData:[
        ['Date','Won/Loss'],
        [ new Date(2012, 3, 13), 37032 ],
        [ new Date(2012, 3, 14), 38024 ],
        [ new Date(2012, 3, 15), 38024 ],
        [ new Date(2012, 3, 16), 38108 ],
        [ new Date(2012, 3, 17), 38229 ],
        [ new Date(2013, 9, 4), 38177 ],
        [ new Date(2013, 9, 5), 38705 ],
        [ new Date(2013, 9, 12), 38210 ],
        [ new Date(2013, 9, 13), 38029 ],
        [ new Date(2013, 9, 19), 38823 ],
        [ new Date(2013, 9, 23), 38345 ],
        [ new Date(2013, 9, 24), 38436 ],
        [ new Date(2013, 9, 30), 38447 ]
      ]
}
export const ChartOptionsData = {
    AnnotationChartData :{
        displayAnnotations: true
    },
    AreaChartData: {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
      },
    BarChartData :{
        title: "Density of Precious Metals, in g/cm^3",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      },
    ColumnChartData :{
        title: "Density of Precious Metals, in g/cm^3",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      },
    ComboChartData:{
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
      },
    PieChartData : {
        title: 'My Daily Activities'
    },
    ScatterChartData : {
        title: 'Age vs. Weight comparison',
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
    },
    BubbleChartData :{
        title: 'Correlation between life expectancy, fertility rate ' +
            'and population of some world countries (2010)',
        hAxis: {title: 'Life Expectancy'},
        vAxis: {title: 'Fertility Rate'},
        bubble: {textStyle: {fontSize: 11}}
    },
    GanttData:{
        height: 275
    },
    GaugeData:{
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    },
    CandlestickChartData :{
        legend:'none',
        isCandleStick :true
    },
    GeoChartData:{},
    HistogramData : {
        title: 'Lengths of dinosaurs, in meters',
        legend: { position: 'none' },
    },
    LineChartData:{
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    },
    TreeMapData : {
        minColor: '#f00',
        midColor: '#ddd',
        maxColor: '#0d0',
        headerHeight: 15,
        fontColor: 'black',
        showScale: true
    },
    TrendlinesData :{
        title: 'Age of sugar maples vs. trunk diameter, in inches',
        hAxis: {title: 'Diameter'},
        vAxis: {title: 'Age'},
        legend: 'none',
        trendlines: { 0: {} }    // Draw a trendline for data series 0.
    }, 
    OrgChartData:{allowHtml:true},
    SteppedAreaChartData:{
        title: 'The decline of \'The 39 Steps\'',
        vAxis: {title: 'Accumulated Rating'},
        isStacked: true
    },
    TimelineData:{
        timeline: { showRowLabels: true }
    },
    WordTreeData:{
        wordtree: {
          format: 'implicit',
          word: 'cats'
        }
    },
    DonutChartData:{
        title: 'My Daily Activities',
        pieHole: 0.4,
    },
    WaterfallChartData : {
    legend: 'none',
    bar: { groupWidth: '100%' }, // Remove space between bars.
    candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
    },
    isCandleStick :true
    },
    TableData:{showRowNumber: true, width: '100%', height: '100%'},
    CalendarData : {
        title: "Red Sox Attendance",
        height: 350,
      }
}

export const ChartTypes =[
    {displayName:"Annotation Chart",value:"AnnotationChart",dataLength:"7",dataFormat:"DataTable",packages:"annotationchart"},
    {displayName:"Area Chart",value:"AreaChart",dataLength:"3",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Bar Chart",value:"BarChart",dataLength:"3",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Bubble Chart",value:"BubbleChart",dataLength:"5",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Calendar Chart",value:"Calendar",dataLength:"2",dataFormat:"DataTable",packages:"calendar"},
    {displayName:"Candlestick Chart",value:"CandlestickChart",dataLength:"5",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Waterfall chart",value:"WaterfallChart",dataLength:"5",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Column Chart",value:"ColumnChart",dataLength:"3",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Combo Chart",value:"ComboChart",dataLength:"7",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Pie Chart",value:"PieChart",dataLength:"2",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Donut Chart",value:"DonutChart",dataLength:"2",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Gantt Chart",value:"Gantt",dataLength:"7",dataFormat:"DataTable",packages:"gantt"},
    {displayName:"Gauge Charts",value:"Gauge",dataLength:"2",dataFormat:"arrayToDataTable",packages:"gauge"},
    {displayName:"GeoChart",value:"GeoChart",dataLength:"3",dataFormat:"arrayToDataTable",packages:"{}"},
    {displayName:"Histogram",value:"Histogram",dataLength:"3",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Line Chart",value:"LineChart",dataLength:"4",dataFormat:"arrayToDataTable",packages:"corechart"},
    /* {displayName:"Map",value:"Map",dataLength:"2",dataFormat:"arrayToDataTable",packages:"{ 'packages': ['map'] }"}, */
    {displayName:"Organization Chart",value:"OrgChart",dataLength:"3",dataFormat:"DataTable",packages:"orgchart"},
/*     {displayName:"Sankey Diagram",value:"Sankey",dataLength:"3",dataFormat:"DataTable",packages:"sankey"}, */
    {displayName:"Scatter Chart",value:"ScatterChart",dataLength:"2",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Stepped Area Chart",value:"SteppedAreaChart",dataLength:"3",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Table",value:"Table",dataLength:"3",dataFormat:"DataTable",packages:"table"}, 
    {displayName:"Timelines",value:"Timeline",dataLength:"3",dataFormat:"DataTable",packages:"timeline"},
    {displayName:"Treemaps",value:"TreeMap",dataLength:"4",dataFormat:"arrayToDataTable",packages:"treemap"},
    {displayName:"Trendlines",value:"Trendlines",dataLength:"2",dataFormat:"arrayToDataTable",packages:"corechart"},
    {displayName:"Word Trees",value:"WordTree",dataLength:"5",dataFormat:"arrayToDataTable",packages:"wordtree"}
]