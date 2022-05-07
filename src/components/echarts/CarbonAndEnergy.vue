<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";

onMounted(() => {
  const charEle = document.getElementById("carbon-energy") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="carbon-energy"></div>
</template>

<style>
#carbon-energy {
  width: 60rem;
  height: 50rem;
}
</style>
