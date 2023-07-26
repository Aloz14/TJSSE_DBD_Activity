<script>

export default {
  name: "NavBar",

  data() {
    return {
      loggedIn: false,
      darkMode: false,
    }
  },

  methods: {
    switchMode() {
      this.darkMode = !this.darkMode;
    },

    login() {
      this.loggedIn = true;
    },

    logout() {
      this.loggedIn = false;
    }

  }
}
</script>

<template>
  <div class="nav">
    <!--  left area  -->
    <div class="logo">
      <img src="@/assets/logo.svg" width="32"/>
      <span>xxx社区</span>
    </div>

    <!--  right area  -->
    <div class="account">

      <div class="button" @click="">
        <icon-star />
        社区简介
      </div>

      <div class="button" @click="">
        <icon-email />
        联系我们
      </div>

      <a-divider direction="vertical" />

      <div class="button" @click="">
        <a-badge
            :count="5"
            dot
            :dotStyle="{ height: '4px', width: '4px', border: 'none'}"
            :offset="[2, -2]"
        >
            <icon-notification size="18px" />
        </a-badge>
      </div>

      <div class="button" @click="switchMode">
        <icon-moon v-if="darkMode" size="18px" />
        <icon-sun v-else size="18px" />
      </div>

      <div class="button" @click="">
        <icon-github size="18px" />
      </div>

      <a-popover v-if="loggedIn" trigger="click" arrow-class="none">
        <a-avatar class="button" :size="40">
          <img src="@/assets/ava.jpg" />
        </a-avatar>

        <template #content>
          <div class="menu">
            <a-button type="text" status="normal">
              <template #icon>
                <icon-settings />
              </template>

            </a-button>

            <a-button type="text" status="normal">
              <template #icon>
                <icon-idcard />
              </template>
              个人资料
            </a-button>

            <a-button type="primary" status="danger" @click="logout">
              <template #icon>
                <icon-poweroff />
              </template>
              退出登录
            </a-button>
          </div>
        </template>
      </a-popover>

      <template v-else>
        <a-button type="primary" status="success">
          注册
        </a-button>

        <a-button type="primary" status="warning" @click="login">
          登录
        </a-button>
      </template>

    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;

  height: 6vh;
  padding: 10px 15px 6px 15px;
  border-radius: 0 10px 10px 0;

  background-color: #2563eb;
  color: #eff6ff;
  font-size: 15px;

}

.logo {
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 24px;
  font-weight: 900;
}

.account {
  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 20px;

}

.button {
  cursor: pointer;

}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

</style>