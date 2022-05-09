<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getPer } from "../../api/get";

onMounted(async () => {
  let res = (await getPer()) as any;
  // console.log(res);

  const charEle = document.getElementById("per-energy") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    title: {
      text: "人均能源消耗量",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: res.data[0],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: res.data[1],
        type: "line",
        smooth: true,
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="per-energy"></div>
</template>

<style>
#per-energy {
  width: 70rem;
  height: 50rem;
}
</style>
