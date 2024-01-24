<template>
  <div>
    <div class="name">My</div>
    <van-grid :column-num="2" clickable>
      <van-grid-item icon="star-o" text="收藏" style="color: #eb5253" />
      <van-grid-item icon="clock-o" text="历史" style="color: #eb5253" />
    </van-grid>
    <!-- 消息通知与退出登录 -->

    <van-cell title="我的订单" value="内容" is-link />
    <van-cell title="小智同学" value="内容" is-link />
    <van-cell title="退出登录" class="logout-cell" />
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.logout-cell {
  text-align: center;
  color: #d86262;
  height: 120px;
  margin-top: 9px;
}
</style>