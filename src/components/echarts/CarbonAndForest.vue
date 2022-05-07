<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";

onMounted(() => {
  const charEle = document.getElementById("carbon-forest") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    title: {
      text: "树木年龄与固碳量的关系",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
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
