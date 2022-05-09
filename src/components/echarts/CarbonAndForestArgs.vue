<script setup lang="ts">
import { onMounted } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getCarbonForestArgs } from "../../api/get";

onMounted(async () => {
  let res = await getCarbonForestArgs() as any;
  let indicator = res?.data[0];
  let value = res?.data[1];

  const charEle = document.getElementById("carbon-forest-arg") as HTMLElement;
  const charEch: ECharts = init(charEle);
  charEch.clear();
  const option: EChartsOption = {
    
    legend: {
      data: ["固碳量与森林的关系系数"],
    },
    radar: {
      // shape: 'circle',
      indicator,
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value,
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
