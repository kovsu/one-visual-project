<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getDevelopment } from "../../api/get";

onMounted(async () => {
  let res = (await getDevelopment()) as any;
  console.log(res);
  let legendData = res.data[0];
  let data1 = res.data[1];
  let data2 = res.data[2];
  let data3 = res.data[3];

  const charEle = document.getElementById("development") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["能源发展指标", "经济发展指标", "环境发展指标"],
    },
    grid: {
      left: "3%",
      bottom: "13%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: legendData,
    },
    yAxis: {
      type: "value",
      min:0.7,
      max:1.05
    },
    series: [
            {
        name: "能源发展指标",
        type: "line",
        // stack: "Total",
        data: data3,
      },
      {
        name: "经济发展指标",
        type: "line",
        // stack: "Total",
        data: data1,
      },
      {
        name: "环境发展指标",
        type: "line",
        // stack: "Total",
        data: data2,
      },
    ],
  };
  charEch.setOption(option);
});
</script>

<template>
  <div id="development"></div>
</template>

<style>
#development {
  width: 60rem;
  height: 50rem;
}
</style>
