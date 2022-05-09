<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getCarbonAndGdp } from "../../api/get";

onMounted(async () => {
  let res = await getCarbonAndGdp() as any;
  // console.log(res);
  let xY = res.data[0];
  let data = res.data[1];
  const charEle = document.getElementById("carbon-gdp") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    textStyle: {
      fontSize: 12,
    },
    tooltip: {
      position: "top",
      textStyle: {
        fontSize: 6,
      },
    },
    grid: {
      height: "60%",
      top: "10%",
    },
    xAxis: {
      type: "category",
      data: xY,
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: "category",
      data: xY,
      splitArea: {
        show: true,
      },
      nameTextStyle: {
        fontSize: 6,
        align: "right"
      }
    },
    visualMap: {
      min: 0,
      max: 1,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: " 15%",
    },
    series: [
      {
        name: "",
        type: "heatmap",
        data: data,
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
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
  <div id="carbon-gdp"></div>
</template>

<style lang="scss">
#carbon-gdp {
  width: 60rem;
  height: 50rem;
}
</style>
