import Mock from "mockjs"

Mock.mock("/mockapi/searchRes/filterSectionInit?type=food", {
  "status": "success",
  "msg": "查询成功",
  "data": [{
      "title": "分类",
      "choosen": [{
        "name": "美食",
        "type": "food",
        "id": 0,
        "sublist|4-8": [{
            "name|1": ["烤肉", "特色菜", "面包", "甜点", "火锅", "自助餐", "小吃", "快餐"],
            "id|+1": 1201
        }] 
      }, {
        "name": "休闲娱乐",
        "type": "funny",
        "id": 1,
        "sublist|1-2": [{
            "name|1": ["ktv", "茶馆"],
            "id|+1": 20
        }]
      }, {
        "name": "生活服务",
        "id": 2,
        "type": "life"
      }]
    },
    {
      "title": "区域",
      "choosen|3-5": [{
        "name|1": ["推荐商圈", "江阳区", "纳溪区", "龙马潭区", "泸县", "合江县"],
        "type": "area",
        "id|+1": 100860,
        "sublist|6-10": [{
            "name|1": ["水井沟", "大山坪", "市政府/天益广场", "百子图", "钟鼓楼", "迎晖路", "市中心"],
            "id|+1": 136 
        }]
      }]
    },
    {
        "title": "用餐时段",
        "choosen|3-4": [{
            "name|1": ["早餐", "午餐", "下午茶", "晚餐", "夜宵"],
            "id|+1": 11
        }]
    },
    {
        "title": "餐厅服务",
        "choosen|3-4": [{
            "name|1": ["不限", "买单", "在线点餐", "外卖", "送餐", "预订", "在线排队"],
            "id|+1": 31
        }]
    },
    {
        "title": "用餐人数",
        "choosen|3-4": [{
            "name|1": ["单人餐", "双人餐", "3~4人", "5~10人", "10人以上"],
            "id|+1": 41
        }]
    }
  ]
})
