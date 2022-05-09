<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getRainCarbon } from "../../api/get";

onMounted(async () => {
  let res = (await getRainCarbon()) as any;
  console.log(res);

  const charEle = document.getElementById("carbon-rain") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    title: {
      text: "归一化后碳含量与降雨量散点图",
      left: "center",
    },
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: res.data,
        type: "scatter",
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="carbon-rain"></div>
</template>

<style>
#carbon-rain {
  width: 60rem;
  height: 50rem;
}
</style>
