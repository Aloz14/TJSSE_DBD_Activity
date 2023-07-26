
<script>
import axios from 'axios';
export default {
  name: "detailes",
  data() {
    return {
      activity: {},
    }
  },
  mounted() {
    // 在挂载时拉取数据
    this.fetchActivity();
  },
  methods:{
    fetchActivity() {
      axios.get('/asset/activitiy') 
        .then(response => {
          const tmp = response.data.activity;
          console.log("response.data");
          console.log(response.data);
          this.activity = {
            // 重命名字段
            src: tmp.act_photoURL,
            title: tmp.act_name,
            time: tmp.act_time,
            join: tmp.act_participants,
            content: tmp.act_content,
          };
          console.log(this.activity);
        })
        .catch(error => {
          console.error('Error fetching activity:', error);
        });
    },
  }
}
</script>

<template>
  <div class="box">
    <a-card style="border-radius: 0.8rem;" >
      <a-row :gutter="50">
        <a-col :span="50">
          <div class="banner">
                <img class="image"
                     :src="activity.src"
                     alt="photo">
          </div>
        </a-col>
        <a-col :span="50">
          <div class="info">
            <a-row style="align-items: center;width: 500px;">
              <img src="@/assets/ava.jpg" alt="avatar" class="hero"/>
              <div class="username">欧西给</div>  
              <button class="focusOn" @click="">关注</button>  
            </a-row>
            <div class="main-content">
              <a-row style="margin-top: 20px;">
                <h2>{{ activity.title }}</h2>   
              </a-row>
              <a-row>
                <p>{{ activity.content }}</p> 
              </a-row>
              <a-row>
                <time class="time">{{ activity.time }}</time> 
              </a-row>
              <hr/>
              <div class="comments"> 
                <a-empty description="现在还没有评论" />
              </div>
            </div>
          </div>
          <a-input
              v-model="content" class="comment-input" type="text" placeholder="说点什么..."
              :prefix-icon="Edit" @keyup.enter="" clearable 
          /> 
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  left: 200px;
  top: 40px;
  border-radius: 0.8rem;
  width: 1200px;
  height: 600px;
}

.banner {
  width: 600px;
  border-radius: 0.8rem;
}

.username {
  margin-left: 15px;
}

.focusOn {
  position: absolute;
  right: 10px;
  padding: 0.6rem 0.8rem;
  color: white;
  background-color: red;
  border: 0;
  border-radius: 0.8rem;
}

.focusOn:hover {
  background-color: #fd5656;
}

.image {
  width: 600px;
  height: 600px;
  border-radius: 0.8rem;
}

.main-content::-webkit-scrollbar {
  width: 0.1em; /* 设置滚动条宽度为0.1em */
  background-color: transparent; /* 设置滚动条背景颜色为透明 */
}

.main-content {
  height: 450px;
  overflow-y: scroll;
}

.time {
  font-size: 12px;
  color: #999;
}

.comment-input {
  position: absolute;
  bottom: 1.5em;
  width: 500px;
}

.hero {
  width: 50px;
  border-radius: 50%;
  border: 1px solid white;
  
}

</style>