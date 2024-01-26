<template>
  <div>
    <van-grid class="lottoimg" :gutter="20" :column-num="3">
      <!-- <van-grid-item v-for="value in 12" :key="value" @click="clickResShow()"> -->
      <van-grid-item v-for="value in 12" :key="value">
        <img src="../../../static/lotto.gif" @click="clickResShow()"
      /></van-grid-item>
    </van-grid>
    <van-grid class="lottorecharge" :column-num="2" clickable>
      <van-grid-item @click="isChannelEditShow = true">
        <div class="discount-header">限时优惠</div>
        <div class="discount-info">10/20</div>
      </van-grid-item>
      <van-grid-item
        ><div class="balance">缤纷豆</div>
        <div>50</div></van-grid-item
      >
    </van-grid>
    <!-- 充值面板弹出层 -->
    <van-popup
      v-model:show="isChannelEditShow"
      round
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div class="recharge-type">充值金额</div>
      <van-grid :column-num="3" clickable>
        <van-grid-item text="50" />
        <van-grid-item text="100" />
        <van-grid-item text="150" />
      </van-grid>
      <van-image
        width="10rem"
        height="10rem"
        fit="contain"
        src="../../../static/aliPay.png"
      />
      <div class="pay-type">微信/支付宝</div>
      <div class="contact">有问题请联系我们</div>
    </van-popup>
    <!-- 抽奖结果弹出层 -->
    <van-popup
      v-model:show="isLottoResShow"
      round
      position="bottom"
      :style="{ height: '80%' }"
    >
      <div class="recharge-type">您抽中了</div>
      <van-row justify="center">
        <van-image width="7rem" height="7rem" fit="contain" :src="ResShow" />
      </van-row>
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </van-popup>
  </div>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";

const areaList = {
  province_list: {
    110000: "北京市",
    120000: "天津市",
  },
  city_list: {
    110100: "北京市",
    120100: "天津市",
  },
  county_list: {
    110101: "东城区",
    110102: "西城区",
    // ....
  },
};

let imgSrc = [
  "../../../static/ceshi/汉服1.webp",
  "../../../static/ceshi/汉服2.webp",
  "../../../static/ceshi/汉服3.webp",
  "../../../static/ceshi/汉服4.webp",
  "../../../static/ceshi/汉服5.webp",
];

let isChannelEditShow = ref(false);
let isLottoResShow = ref(false);

// let ResShow = "../../../static/ceshi/汉服5.webp";
let ResShow = imgSrc[0];

console.log(imgSrc[Number.parseInt(Math.random() * 4)]);
// let randomImg = ref(imgSrc[Number.parseInt(Math.random() * 4)]);
// useRaf(() => {
//   let randomImg = ref(ranimg);
// });
// console.log(imgSrc[Number.parseInt(Math.random() * 4)]);

// let randomImg = ref(imgSrc[Number.parseInt(Math.random() * 5)]);

let clickResShow = () => {
  console.log("1111111111");
  isLottoResShow.value = true;
  ResShow = imgSrc[Number.parseInt(Math.random() * 4)];
};
</script>
  
  <style lang="scss">
.lottoimg img {
  width: 50px;
  height: 50px;
}

.lottorecharge {
  margin: 8px;
}

.recharge-type {
  padding: 10px;
  text-align: center;
  font-size: 20px;
}

.contact {
  padding: 10px;
  text-align: center;
  font-size: 20px;
}

.pay-type {
  padding: 10px;

  text-align: center;
  font-size: 30px;
}

.discount-header {
  color: #1989fa;
  size: 6px;
}
.balance {
  color: #1989fa;
  size: 6px;
}
</style>