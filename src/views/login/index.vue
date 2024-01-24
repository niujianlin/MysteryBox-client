<template>
  <div>
    <van-nav-bar title="缤纷盲盒" class="page-nav-bar">
      <template #left>
        <van-icon name="cross" size="18" @click="this.$router.back()" />
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-form>
      <van-field name="用户名" placeholder="用户名" left-icon="manager" />
      <van-field
        type="password"
        name="userpwd"
        placeholder="密码"
        left-icon="lock"
      />
    </van-form>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.page-nav-bar {
  background-color: paleturquoise;
}
</style>