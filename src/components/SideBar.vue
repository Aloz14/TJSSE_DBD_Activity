<script>
export default {
  name: "SideBar",

  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },


  },
}
</script>

<template>
  <a-menu mode="pop" show-collapse-button style="height: 100%;">
    <router-link to="/home">
      <a-menu-item key="1" class="menu-item" >
        <icon-home class="icon" />
        <span style="text-align: center">首页</span>
      </a-menu-item>
    </router-link>

    <router-link to="/friends">
      <a-menu-item key="2" class="menu-item">
        <icon-user-group class="icon" />
        <span style="text-align: center">好友</span>
      </a-menu-item>
    </router-link>

    <router-link to="/activities">
      <a-menu-item key="3" class="menu-item">
        <icon-storage class="icon" />
        <span style="text-align: center">活动</span>
      </a-menu-item>
    </router-link>

  </a-menu>
</template>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  gap: 10px;

  height: 50px;
  font-size: 16px;
}

.icon {
  font-size: 20px;
  margin-bottom: 2px;
}
</style>