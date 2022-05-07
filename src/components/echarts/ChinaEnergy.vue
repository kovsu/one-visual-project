<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";

onMounted(() => {
  const charEle = document.getElementById("china-energy") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    title: {
      text: "中国能源消耗",
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
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="china-energy"></div>
</template>

<style lang="scss">
#china-energy {
  width: 60rem;
  height: 50rem;
}
</style>
