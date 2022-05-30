<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { ECharts, EChartsOption, init } from "echarts";
import { getCoalStruct } from "../../api/get";

const emit = defineEmits<{
  (e: "ready", status: boolean): void;
}>();

let data = [
  {
    year: 2019,
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    year: 2020,
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    year: 2021,
    month: [1, 2, 3, 4, 5, 6],
  },
];

let year = ref(2019);
let month = ref(1);

const months = computed(() => {
  let year_: {
    year: number;
    month: number[];
  }[] = data.filter((x) => x.year === year.value);
  return year_[0].month;
});

const initial = async (year: number, month: number) => {
  let res = (await getCoalStruct(year, month)) as any;
  console.log(res);
  let legendData = res.data[0];
  let data1 = res.data[1];
  let data2 = res.data[2];
  let data3 = res.data[3];
  emit("ready", true);
  setTimeout(() => {
    const charEle = document.getElementById("coal-struct") as HTMLElement;
    const charEch: ECharts = init(charEle);
    charEch.clear();
    const option: EChartsOption = {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: data1,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: legendData[0],
          stack: "Total",
          data: data2,
          type: "line",
        },
        {
          name: legendData[1],
          type: "line",
          stack: "Total",
          data: data3,
        },
      ],
    };

    charEch.setOption(option);
  }, 1000);
};

onMounted(async () => {
  initial(year.value, month.value);
});

watch(year, (newVal) => {
  initial(newVal, month.value);
});

watch(month, (newVal) => {
  initial(year.value, newVal);
});
</script>

<template>
  <div class="chose">
    <span>年份</span>
    <select name="year" id="select" v-model="year">
      <option v-for="item in data" :value="item.year">
        {{ item.year }}
      </option>
    </select>
    <span>月份</span>
    <select name="month" id="select" v-model="month">
      <option v-for="month in months" :value="month">
        {{ month }}
      </option>
    </select>
  </div>
  <div id="coal-struct"></div>
</template>

<style lang="scss">
#coal-struct {
  width: 60rem;
  height: 50rem;
}

.chose {
  display: flex;
  gap: 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

#select {
  padding: 0.2rem 0.4rem;
  background: #fff;
  border-color: #aaa;
  color: #000;
  border-radius: 5px;
  outline: none;
}
</style>
