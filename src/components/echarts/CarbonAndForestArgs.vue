<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";

onMounted(() => {
  const charEle = document.getElementById("carbon-forest-arg") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    legend: {
      data: ["固碳量与森林的关系系数"],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "病害面积", max: 1 },
        { name: "火灾面积", max: 1 },
        { name: "造林面积", max: 1 },
        { name: "森林面积", max: 1 },
        { name: "年降雨量", max: 1 },
        { name: "中龄林占比", max: 1 },
        { name: "砍伐面积", max: 1 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [0.563, 0.541, 0.723, 0.334, 0.433, 0.882, 0.234],
            name: "固碳量与森林的关系系数",
          },
        ],
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="carbon-forest-arg"></div>
</template>

<style>
#carbon-forest-arg {
  width: 60rem;
  height: 50rem;
}
</style>
