// import {DrawChart} from './chart';
import 'jquery';
import {PieChart} from './chartType/pieChart';
import  * as chartData from './JsonData';
import {BarChart} from './chartType/barChart';
import {LineChart} from './chartType/lineChart';
import {AreaChart} from './chartType/areaChart';
import {BubbleChart} from './chartType/bubbleChart';
import {CandlestickChart} from './chartType/candleStickChart';
import {ColumnChart} from './chartType/columnChart';
import {ComboChart} from './chartType/comboChart';
import {GanttChart} from './chartType/ganttChart';
import {Histogram} from './chartType/histogramsChart';
import {OrgChart} from './chartType/orgChart';
import {ScatterChart} from './chartType/scatterChart';
import {SteppedAreaChart} from './chartType/steppedAreaChart';
import {Timeline} from './chartType/timelineChart';
import {TreeMapChart} from './chartType/treeMapChart';
import {Trendline} from './chartType/trendlines';
import {AnnotationChart} from './chartType/annotationChart';
import {DrawChart} from './chart.js';
import {Gauge} from './chartType/gaugeChart';
import {GeoChart} from './chartType/GeoChart';
import {calenderChart} from './chartType/calendarChart';

var chartObj = {
  type : "AnnotationChart",
  loadPackage :  {'packages':['annotationchart']},
  data: chartData.ChartInputData.AnnotationChartData,
  chartoptions:chartData.ChartOptionsData.AnnotationChartData,
}

new AnnotationChart(chartObj);


var charttype = 'AnnotationChart';

$(document).ready(function () {
 
/* $('button').click(function () { twoArrayData*/
  var selectbox = "<select name='charttype' id='charttype'>";
  var option2 = "";
chartData.ChartTypes.forEach(item => {
  /* if(chartData.ChartInputData[charttype+'Data'][0].length > 2 && item.dataLength > 2){ */
    selectbox += "<option value='"+item.value+"' data-format='"+item.dataFormat+"' data-package='"+item.packages+"'>"+item.displayName+"</option>";
  /* }else{
    option2 += "<option value='"+item.value+"' data-format='"+item.dataFormat+"'>"+item.displayName+"</option>";
  } */
});
/* if(chartData.ChartInputData[charttype+'Data'][0].length == 2){
  selectbox += option2;
} */
selectbox += "</select>";
  $('#select-box').append(selectbox);


  $('#charttype').change(function () { 
      var tempcharttype = "";
      tempcharttype = charttype = $(this).val()
    if(tempcharttype == "WaterfallChart"){
        charttype = "CandlestickChart";
    }else if(tempcharttype == "DonutChart"){
        charttype = "PieChart";
    }else if(tempcharttype == "Trendlines"){
        charttype = "ScatterChart";
    }

    var dataFormat = $(this).find(':selected').attr('data-format');
    var packageData = $(this).find(':selected').attr('data-package');
    var chartObj = {
      type : charttype,
      loadPackage: {'packages':[packageData]},
      data: chartData.ChartInputData[tempcharttype+'Data'],
      chartoptions:chartData.ChartOptionsData[tempcharttype+'Data'],
    }

    var selectbox = "";
    var option2 = "";
  chartData.ChartTypes.forEach(item => {
    /* if(chartData.ChartInputData[charttype+'Data'][0].length > 2 && item.dataLength > 2){ */
        if(tempcharttype == item.value){
            selectbox += "<option value='"+item.value+"' data-format='"+item.dataFormat+"' data-package='"+item.packages+"' selected>"+item.displayName+"</option>";
        }else{
            selectbox += "<option value='"+item.value+"' data-format='"+item.dataFormat+"' data-package='"+item.packages+"'>"+item.displayName+"</option>";
        }
    /* }else{
        if(charttype == item.value){
            option2 += "<option value='"+item.value+"' data-format='"+item.dataFormat+"' selected>"+item.displayName+"</option>";
        }else{
            option2 += "<option value='"+item.value+"' data-format='"+item.dataFormat+"'>"+item.displayName+"</option>";
        }
      
    } */
  });
 /*  if(chartData.ChartInputData[charttype+'Data'][0].length == 2){
    selectbox += option2;
  } */
    $('#charttype > option').remove();
    $('#charttype').append(selectbox);

   var test = new DrawChart(chartObj);
 }); 
});






