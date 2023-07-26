<script>
import Detailes from "@/views/Detailes.vue"
import axios from 'axios';

export default {
  name: "Activities",
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    // 在挂载时拉取数据
    this.fetchActivities();
  },
  methods:{
    showdetail(){
      console.log("转到活动详细界面");
      this.$router.push("/Detailes");
    },
    fetchActivities() {
      axios.get('/asset/activities')  // 这里的URL仅供测试使用，要使用只需连接到数据库即可
        .then(response => {
          // 这里从数据库拉取数据，如果返回了超过9条数据，只取前9条
          console.log(response.data.activities);
          this.activities = response.data.activities.slice(0, 9).map(activity => {
            return {
              // 重命名字段
              id: activity.id,
              src: activity.act_photoURL,
              title: activity.act_name, 
              time: activity.act_time,
              join: activity.act_participants,
            };
          });
          console.log(this.activities);
        })
        .catch(error => {
          console.error('Error fetching activities:', error);
        });
    },
  }
}
</script>

<template>
 <a-scrollbar type="embed" style="height: 648px; overflow: auto;">
            <div class="activities">
              <div v-for="activity in activities" :key="activity.id" class="activity">
                <img class="img" :src="activity.src" alt="photo" @click="showdetail">
                <div style="display: flex; justify-content: space-between">
                  <div class="left">
                    <div class="title">活动名：{{activity.title}}</div>
                    <div class="time">活动时间：{{activity.time}}</div>
                  </div>
                  <div class="right">
                    <div class="title">参与人数：{{activity.join}}</div>
                  </div>
                </div>
              </div>
            </div>
  </a-scrollbar>
</template>

<style lang="scss" scoped>
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