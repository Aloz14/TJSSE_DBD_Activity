import Mock from 'mockjs';

Mock.mock('/asset/activities', 'get', {
  'activities|10': [                                                            // 生成10个活动数据
    {
      'act_name': '@ctitle(5, 10)',                                             // 随机生成中文标题，长度在5到10之间
      'act_time': '@date("yyyy-MM-dd")',                                        // 随机生成日期，格式为"yyyy-MM-dd"
      'act_address': '@city(true)',                                             // 随机生成城市名
      'act_participants': '@integer(50, 200)',                                  // 随机生成参加人数，范围在50到200之间
      'act_photoURL': '@image("200x150", "@color", @color, "@ctitle(3, 5)")',   // 随机生成图片URL，尺寸为200x150，背景色为随机颜色，标题为3到5个中文字符
    },
  ],
});

Mock.mock('/asset/activitiy', 'get', {
  'activity':                                                           
    {
      'act_name': '@ctitle(5, 10)',                                             // 随机生成中文标题，长度在5到10之间
      'act_time': '@date("yyyy-MM-dd")',                                        // 随机生成日期，格式为"yyyy-MM-dd"
      'act_address': '@city(true)',                                             // 随机生成城市名
      'act_participants': '@integer(50, 200)',                                  // 随机生成参加人数，范围在50到200之间
      'act_content': '@cparagraph(1, 3)',                                       // 随机生成1到3个中文段落
      'act_photoURL': '@image("200x150", "@color", @color, "@ctitle(3, 5)")',   // 随机生成图片URL，尺寸为200x150，背景色为随机颜色，标题为3到5个中文字符
    },
  
});

