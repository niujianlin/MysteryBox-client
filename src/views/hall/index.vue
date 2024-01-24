<template>
  <div>
    <van-tabs class="channels-tabs" v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      lazy-render
      indicator-color="white"
    >
      <van-swipe-item v-for="image in imgSrc1" :key="image">
        <img class="my-pic" :src="image" />
        <div>木质摆件</div>
      </van-swipe-item>
    </van-swipe>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      lazy-render
      indicator-color="white"
    >
      <van-swipe-item v-for="image in imgSrc2" :key="image">
        <img class="my-pic" :src="image" />
        <div>汉服</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { ref } from "vue";
let active = ref(2);

let imgSrc1 = [
  "../../../static/ceshi/木质摆件1.jpg",
  "../../../static/ceshi/木质摆件2.jpg",
  "../../../static/ceshi/木质摆件3.webp",
  "../../../static/ceshi/木质摆件4.jpg",
  "../../../static/ceshi/木质摆件5.webp",
];
let imgSrc2 = [
  "../../../static/ceshi/汉服1.webp",
  "../../../static/ceshi/汉服2.webp",
  "../../../static/ceshi/汉服3.webp",
  "../../../static/ceshi/汉服4.webp",
  "../../../static/ceshi/汉服5.webp",
];
</script>

<style lang="scss" >
.channels-tabs .van-tab {
  min-width: 120px;
  border-right: 1px solid #edeff3;
  font-size: 16px;
  color: #777;
}

.channels-tabs .van-tab--active {
  color: #333;
  // color: red;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 45px;
  text-align: center;
  background-color: #b4b8ba;
}

.my-pic {
  height: 100px;
  width: 100px;
  align-content: center;
  align-items: center;
}
</style>