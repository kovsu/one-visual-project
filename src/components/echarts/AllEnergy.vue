<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getAllEnergy } from "../../api/get";

onMounted(async () => {
  let res = (await getAllEnergy()) as any;
  let data = res.data;

  const charEle = document.getElementById("all-energy") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    legend: {
      orient: "horizontal",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="all-energy"></div>
</template>

<style>
#all-energy {
  width: 60rem;
  height: 50rem;
}
</style>
