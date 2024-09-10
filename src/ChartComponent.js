// src/ChartComponent.js
import React, { useRef, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const ChartComponent = () => {
  const chartDiv = useRef(null);

  useEffect(() => {
    let chart = am4core.create(chartDiv.current, am4charts.XYChart);

    // Add data
    chart.data = [
      { category: "January", value: 40 },
      { category: "February", value: 55 },
      { category: "March", value: 60 },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.name = "Sales";

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return <div ref={chartDiv} style={{ width: '100%', height: '500px' }}></div>;
};

export default ChartComponent;
