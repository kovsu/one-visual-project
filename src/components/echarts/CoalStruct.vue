<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getCoalStruct } from "../../api/get";

onMounted(async () => {
  let res = (await getCoalStruct()) as any;
  console.log(res);
  let legendData = res.data[0];
  let data1 = res.data[1];
  let data2 = res.data[2];
  let data3 = res.data[3];

  const charEle = document.getElementById("coal-struct") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    tooltip: {
    trigger: 'axis'
  },
    xAxis: {
      type: "category",
      data: data1,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: legendData[0],
        stack: 'Total',
        data: data2,
        type: "line",
      },
      {
      name: legendData[1],
      type: 'line',
      stack: 'Total',
      data: data3
     },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="coal-struct"></div>
</template>

<style>
#coal-struct {
  width: 60rem;
  height: 50rem;
}
</style>
