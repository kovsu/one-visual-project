<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getEnergyStruct } from "../../api/get";

onMounted(async () => {
  let res = (await getEnergyStruct()) as any;
  console.log(res);
  let legendData = res.data[0];
  let data1 = res.data[1];
  let data2 = res.data[2];
  let data3 = res.data[3];

  const charEle = document.getElementById("energy-struct") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["煤炭", "汽油", "天然气"],
    },
    grid: {
      left: "3%",
      bottom: "13%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: legendData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "煤炭",
        type: "line",
        // stack: "Total",
        data: data1,
      },
      {
        name: "汽油",
        type: "line",
        // stack: "Total",
        data: data2,
      },
      {
        name: "天然气",
        type: "line",
        // stack: "Total",
        data: data3,
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="energy-struct"></div>
</template>

<style>
#energy-struct {
  width: 60rem;
  height: 50rem;
}
</style>
