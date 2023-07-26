<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home")
  },
}
</script>

<template>
  <div class="home">
    <div class="profile">
      <img src="@/assets/ava.jpg" alt="avatar" class="hero"/>
      <div class="name">欧西给</div>
      <div class="motto">啊米浴说的道理</div>
      <div class="follow">
        <div>
          <span style="margin-right: 4px; color: #404040">关注</span>
          <span>100</span>
        </div>
        <div>
          <span style="margin-right: 4px; color: #404040">粉丝</span>
          <span>100</span>
        </div>
      </div>

      <a-descriptions :column="1">
        <a-descriptions-item>
          <icon-user :size="16" /> <span style="font-size: 16px">学生</span>
        </a-descriptions-item>

        <a-descriptions-item>
          <icon-location :size="16" /> <span style="font-size: 16px">上海</span>
        </a-descriptions-item>

        <a-descriptions-item>
          <icon-email :size="16" />
          <span style="font-size: 16px">
            123456789@qq.com
          </span>
        </a-descriptions-item>
      </a-descriptions>

      <div class="modify">
        <a-button type="outline"><icon-pen-fill style="margin-right: 8px;" /> 修改个人资料</a-button>
      </div>

      <a-divider type="dashed" :margin="24"/>

      <div style="font-size: 20px">标签</div>
      <div class="tags">
        <div class="tag">test data</div>
        <div class="tag">test test data</div>
        <div class="tag">test test test data</div>
        <div class="tag">test</div>
        <div class="tag">test test data</div>
        <div class="tag">test data</div>
        <a-button type="dashed" @click="">
          <icon-plus />
        </a-button>
      </div>
    </div>

    <div class="assets">
      <a-tabs>
        <a-tab-pane key="1">
          <template #title>
            <icon-calendar/> 参加活动
          </template>

          <a-scrollbar type="embed" style="height: 648px; overflow: auto;">
            <div class="activities">
              <div class="activity">
                <img class="img" src="@/assets/photo.png" alt="photo">
                <div style="display: flex; justify-content: space-between">
                  <div class="left">
                    <div class="title">xxx活动</div>
                    <div class="time">2023-7-1</div>
                  </div>
                  <div class="right">
                    参加人数: 999
                  </div>
                </div>
              </div>

              <div class="activity">
                <img class="img" src="@/assets/photo.png" alt="photo">
                <div style="display: flex; justify-content: space-between">
                  <div class="left">
                    <div class="title">xxx活动</div>
                    <div class="time">2023-7-1</div>
                  </div>
                  <div class="right">
                    参加人数: 999
                  </div>
                </div>
              </div>

              <div class="activity">
                <img class="img" src="@/assets/photo.png" alt="photo">
                <div style="display: flex; justify-content: space-between">
                  <div class="left">
                    <div class="title">xxx活动</div>
                    <div class="time">2023-7-1</div>
                  </div>
                  <div class="right">
                    参加人数: 999
                  </div>
                </div>
              </div>

              <div class="activity">
                <img class="img" src="@/assets/photo.png" alt="photo">
                <div style="display: flex; justify-content: space-between">
                  <div class="left">
                    <div class="title">xxx活动</div>
                    <div class="time">2023-7-1</div>
                  </div>
                  <div class="right">
                    参加人数: 999
                  </div>
                </div>
              </div>

              <div class="activity">
                <img class="img" src="@/assets/photo.png" alt="photo">
                <div style="display: flex; justify-content: space-between">
                  <div class="left">
                    <div class="title">xxx活动</div>
                    <div class="time">2023-7-1</div>
                  </div>
                  <div class="right">
                    参加人数: 999
                  </div>
                </div>
              </div>

            </div>
          </a-scrollbar>


        </a-tab-pane>
        <a-tab-pane key="2">
          <template #title>
            <icon-clock-circle/> 关注列表
          </template>
          Content of Tab Panel 2
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #title>
            <icon-user/> 粉丝列表
          </template>
          Content of Tab Panel 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.home {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.test {
  border: 1px solid red;
}

.profile {
  background-color: #f0f9ff;
  height: 90%;
  margin-left: 16px;
  flex-basis: 30%;
  border-radius: 16px;
  padding: 12px;

  display: flex;
  flex-direction: column;
}

.assets {
  background-color: #f0f9ff;
  height: 90%;
  margin-right: 16px;
  padding: 16px;

  flex-basis: 62%;

  border-radius: 18px;
}

.hero {
  width: 180px;
  border-radius: 50%;
  border: 1px solid white;
  margin: 16px auto;
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin: 12px auto;
}

.motto {
  font-size: 16px;
  color: #a6a6a6;
  margin: 12px auto;
}

.follow {
  display: flex;
  gap: 24px;
  margin: 12px auto;
}

.modify {
  margin: 12px auto;
}

.tags {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  .tag {
    background-color: #f5f5f5;
    border: 1px solid #a3a3a3;
    padding: 4px 6px;
    border-radius: 4px;

    color: #737373;
  }
}



.activities {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0 auto;

  .activity {
    flex-basis: calc(33% - 20px);
    height: 200px;

    margin: 8px 0;
    padding: 8px 4px;
    border-radius: 12px;
    border: 1px solid #bae6fd;
    background-color: #e0f2fe;

    .img {
      width: 180px;
      margin: 8px auto;
      display: block;
      border-radius: 8px;

    }

    .left {
      margin-left: 8px;

      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .right {
      margin-right: 8px;
    }
  }
}
</style>