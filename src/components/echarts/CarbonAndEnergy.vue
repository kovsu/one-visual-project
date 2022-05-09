<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getCarbonAndEnergy } from "../../api/get";

onMounted(async () => {
  let res = await getCarbonAndEnergy() as any;
  // console.log(res);
  let xData = res.data[0];
  let yData = res.data[1];

  const charEle = document.getElementById("carbon-energy") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yData,
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
