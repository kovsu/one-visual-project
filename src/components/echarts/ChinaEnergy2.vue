<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getChinaEnergy2 } from "../../api/get";

onMounted(async () => {
  let res = (await getChinaEnergy2()) as any;
  // console.log(res);

  const charEle = document.getElementById("china-energy2") as HTMLElement;
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
      text: "中国能源不同行业消耗",
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
        type: "bar",
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="china-energy2"></div>
</template>

<style lang="scss">
#china-energy2 {
  width: 70rem;
  height: 50rem;
}
</style>
