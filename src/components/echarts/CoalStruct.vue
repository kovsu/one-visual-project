<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";

onMounted(() => {
  const charEle = document.getElementById("coal-struct") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
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
  <div id="coal-struct"></div>
</template>

<style>
#coal-struct {
  width: 60rem;
  height: 50rem;
}
</style>
