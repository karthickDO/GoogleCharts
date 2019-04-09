// import {DrawChart} from './chart';
import 'jquery';
import { PieChart } from './chartType/pieChart';
import * as chartData from './JsonData';
import { BarChart } from './chartType/barChart';
import { LineChart } from './chartType/lineChart';
import { AreaChart } from './chartType/areaChart';
import { BubbleChart } from './chartType/bubbleChart';
import { CandlestickChart } from './chartType/candleStickChart';
import { ColumnChart } from './chartType/columnChart';
import { ComboChart } from './chartType/comboChart';
import { GanttChart } from './chartType/ganttChart';
import { Histogram } from './chartType/histogramsChart';
import { OrgChart } from './chartType/orgChart';
import { ScatterChart } from './chartType/scatterChart';
import { SteppedAreaChart } from './chartType/steppedAreaChart';
import { Timeline } from './chartType/timelineChart';
import { TreeMapChart } from './chartType/treeMapChart';
import { Trendline } from './chartType/trendlines';
import { AnnotationChart } from './chartType/annotationChart';
import { DrawChart } from './chart.js';
import { Gauge } from './chartType/gaugeChart';
import { GeoChart } from './chartType/GeoChart';
import { calenderChart } from './chartType/calendarChart';


// Default load  Barchart
var chartObj = {
  type: "BarChart",
  data: chartData.ChartInputData.BarChartData,
  chartoptions: chartData.ChartOptionsData.BarChartData,
}

new DrawChart(chartObj);


// Donut chart
var DonutChartObj = {
  type:"PieChart",
  data: chartData.ChartInputData.DonutChartData,
  chartoptions: chartData.ChartOptionsData.DonutChartData,
  container:"pie-chart",
  legend:true
}
new DrawChart(DonutChartObj);


// Column Stacked Chart
var columnStackedObj = {
  type:"ColumnChart",
  data: chartData.ChartInputData.ColumnChartData,
  chartoptions: chartData.ChartOptionsData.ColumnChartData,
  container:"column-stacked",
}
new DrawChart(columnStackedObj);


// Geo chart
var geoChartObj = {
  type:"ColumnChart",
  data: chartData.ChartInputData.GeoChartData,
  chartoptions: chartData.ChartOptionsData.GeoChartData,
  container:"Geo-chart",
  loadPackage: { 'packages': ['geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' },
}
new GeoChart(geoChartObj);


// linechart
var lineChartObj = {
  type:"LineChart",
  data: chartData.ChartInputData.LineChartData,
  chartoptions: chartData.ChartOptionsData.LineChartData,
  container:"Line-chart"
}
new DrawChart(lineChartObj);

// linechart
var lineChartObj = {
  type:"LineChart",
  data: chartData.ChartInputData.LineChartDashedData,
  chartoptions: chartData.ChartOptionsData.LineChartDashedData,
  container:"Line-chart-dashed",

}
new DrawChart(lineChartObj);



// linechart
var tabelChartObj = {
  type:"Table",
  data: chartData.ChartInputData.TableData,
  chartoptions: chartData.ChartOptionsData.TableData,
  loadPackage: { 'packages': ['table']},
  container:"Table-chart"
}
new DrawChart(tabelChartObj);





var charttype = 'AnnotationChart';
var chartObj;
var getchartObj;
$(document).ready(function () {
  var selectbox = "<label class='label-control'>Chart Type</label><select name='charttype' id='charttype' class='select-control-border'>";
  var option2 = "";
  chartData.ChartTypes.forEach(item => {
    var selected = (item.value=="BarChart") ? 'selected' : '';
    selectbox += "<option value='" + item.value + "' data-format='" + item.dataFormat + "' data-package='" + item.packages + "' " +selected + ">" + item.displayName + "</option>";
  });
  selectbox += "</select>";
  $('#select-box').append(selectbox);



  //chart type onchange functionality
  $('#charttype').change(function () {
    var tempcharttype = "";
    tempcharttype = charttype = $(this).val()
    if (tempcharttype == "WaterfallChart") {
      charttype = "CandlestickChart";
    } else if (tempcharttype == "DonutChart") {
      charttype = "PieChart";
    } else if (tempcharttype == "Trendlines") {
      charttype = "ScatterChart";
    }

    var dataFormat = $(this).find(':selected').attr('data-format');
    var packageData = $(this).find(':selected').attr('data-package');

    getchartObj = chartObjFunc();
    var chartObj = getchartObj.setChartTye(charttype, packageData, tempcharttype);
    // chartObj ={
    //   type: charttype,
    //   loadPackage: { 'packages': [packageData] },
    //   data: chartData.ChartInputData[tempcharttype + 'Data'],
    //   chartoptions: chartData.ChartOptionsData[tempcharttype + 'Data'],
    // }

    var selectbox = "";
    var option2 = "";
    chartData.ChartTypes.forEach(item => {
      if (tempcharttype == item.value) {
        selectbox += "<option value='" + item.value + "' data-format='" + item.dataFormat + "' data-package='" + item.packages + "' selected>" + item.displayName + "</option>";
      } else {
        selectbox += "<option value='" + item.value + "' data-format='" + item.dataFormat + "' data-package='" + item.packages + "'>" + item.displayName + "</option>";
      }
    });

    $('#charttype > option').remove();
    $('#charttype').append(selectbox);
    var test = new DrawChart(chartObj);
  });


  //x-axis date change functionality
  $('#xaxis').change(function () {
    var selectedValue = $(this).val();
    if(!getchartObj){
    getchartObj = chartObjFunc();
    }
    chartObj = getchartObj.xaxis(selectedValue)
    new DrawChart(chartObj);
  })


  var chartObjFunc = function () {
    var chartObj={
      type: "BarChart",
      data: chartData.ChartInputData.BarChartData,
      chartoptions: chartData.ChartOptionsData.BarChartData,
    }
    return {
      setChartTye: function (charttype, packageData, tempcharttype) {
        chartObj = {
          type: charttype,
          loadPackage: { 'packages': [packageData] },
          data: chartData.ChartInputData[tempcharttype + 'Data'],
          chartoptions: chartData.ChartOptionsData[tempcharttype + 'Data'],
        }
        return chartObj;
      },

      xaxis: function (value) {
        if (chartObj.type == "BarChart")
          if (value != "Year")
            chartObj.data = chartData.ChartInputData[chartObj.type + value + 'Data'];
          else
            chartObj.data = chartData.ChartInputData[chartObj.type + 'Data'];
        return chartObj;
      },

      getChartObj: function(){
        return chartObj;
      }
      
    }
  }
});






