<script>
import NavBar from "@/components/NavBar.vue"
import SideBar from "@/components/SideBar.vue"

export default {
  components: {
    NavBar,
    SideBar,
  },

}

</script>

<template>
  <html>
    <header>
      <NavBar />
    </header>

    <main>
      <div class="side">
        <SideBar />
      </div>

      <div class="content">
        <router-view />
      </div>

    </main>
  </html>

</template>

<style scoped>
* {
  user-select: none;
}

html {
  display: flex;
  flex-direction: column;
  gap: 0;

  width: 100vw;
  height: 100vh;
  background-color: #dbeafe;
  font-family: 'Noto Sans SC', sans-serif;
}

header {
  flex-basis: 6%;
}

main {
  display: flex;
  flex-direction: row;
  gap: 0;

  flex-basis: 94%;
}

.side {
  flex-basis: 10%;
}

.content {
  flex-basis: 90%;
  height: 100%;
}

</style>
