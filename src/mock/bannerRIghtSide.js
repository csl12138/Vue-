import Mock from "mockjs";

// "status": "success",
//     "msg": "成功",
//     "data": [{
//         "type":"food",
//         "name":"美食",
//         "items":[{
//           "title":"美食",
//           "items":["代金券","甜点饮品","火锅","自助餐","小吃快餐"]
//         }]
//       },{
//         "type":"takeout",
//         "name":"外卖",
//         "items":[{
//           "title":"外卖",
//           "items":["美团外卖"]
//         }]
//       },{
//         "type":"hotel",
//         "name":"酒店",
//         "items":[{
//           "title":"酒店星级",
//           "items":["经济型","舒适/三星","高档/四星","豪华/五星"]
//         }]
//       }]

Mock.mock("/mockapi/getBannerSideList", {
    "status": "success",
    "msg": "查询成功",
    "data|16": [{
        "name|1": ["美食", "外卖", "酒店", "民宿", "猫眼电影", "机票 / 火车票", "休闲娱乐 / KTV", "生活服务", "亲子 / 儿童乐园 / 幼教"],
        "icon|1": ["el-icon-fork-spoon", "el-icon-tableware", "el-icon-suitcase", "el-icon-coin", "el-icon-bicycle", "el-icon-cloudy-and-sunny", "el-icon-coffee"],
        "iconColor|1": ["#FFB500", "#FF4081", "#03A9F4", "#00BF96", "#FF8200"],
        "hot|1": [true, false, false, false, false],
        "id|+1": 999,
        "items|1-3": [{
            "title|1": ["机票", "火车票", "热映电影", "外卖", "酒店星级"],
            "items": ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐", "经济型", "舒适/三星", "高档/四星", "豪华/五星", "小妇人", "阿里巴巴与神灯"],
            "id|+2": 10086
        }]
    }]
})
