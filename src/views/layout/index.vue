<template>
  <div>
    <van-nav-bar title="缤纷礼盒" />

    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="search" to="/hall">展柜</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/lotto">开盒</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss">
</style>