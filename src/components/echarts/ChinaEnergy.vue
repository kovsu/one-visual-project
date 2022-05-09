<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getChinaEnergy } from "../../api/get";

onMounted(async () => {
  let res = (await getChinaEnergy()) as any;
  console.log(res);

  const charEle = document.getElementById("china-energy") as HTMLElement;
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
      text: "中国能源消耗",
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
  <div id="china-energy"></div>
</template>

<style lang="scss">
#china-energy {
  width: 70rem;
  height: 50rem;
}
</style>
