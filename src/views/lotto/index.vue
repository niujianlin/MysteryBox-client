<template>
  <div>
    <van-grid :gutter="20" :column-num="3">
      <van-grid-item v-for="value in 12" :key="value">
        <img src="../../../static/lotto.gif"
      /></van-grid-item>
    </van-grid>
    <van-grid :column-num="2" clickable>
      <van-grid-item @click="isChannelEditShow = true">
        <div>限时优惠</div>
        <div>10/20</div>
      </van-grid-item>
      <van-grid-item
        ><div>缤纷豆</div>
        <div>50</div></van-grid-item
      >
    </van-grid>
    <van-popup
      v-model:show="isChannelEditShow"
      round
      position="bottom"
      :style="{ height: '60%' }"
      >内容</van-popup
    >
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
let isChannelEditShow = ref(false);
</script>
  
  <style lang="scss">
.van-grid-item img {
  width: 50px;
  height: 50px;
}
</style>