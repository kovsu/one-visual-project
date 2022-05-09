<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getForestAge } from "../../api/get";

onMounted(async () => {
  let res = (await getForestAge()) as any;

  let xData = res.data[0];
  let yData = res.data[1];
  const charEle = document.getElementById("carbon-forest") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    title: {
    text: '固碳量与树木年龄关系图'
    },
    tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['固碳量', '树木年龄']
  },
  xAxis: [
    {
      type: 'category',
      data: xData,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 150,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '固碳量',
      type: 'bar',
      data: xData
    },
    {
      name: '树木年龄',
      type: 'line',
      yAxisIndex: 1,
      data: yData
    }
  ]
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="carbon-forest"></div>
</template>

<style>
#carbon-forest {
  width: 60rem;
  height: 50rem;
}
</style>
