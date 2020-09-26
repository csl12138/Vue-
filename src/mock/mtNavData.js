import Mock from "mockjs"

Mock.mock("/mockapi/getMtNavList", {
    "status": "success",
    "msg": "查询成功",
    "data|3": [{
        "title|1": ["热门城市", "热门分类", "周边热门"],
        "items": ["酒店", "美食", "休闲娱乐", "运动健身", "母婴亲子", "本地购物", "摄影写真", "生活服务", "成都", "泸州", "学习培训", "宴会", "结婚", "合江县运动健身", "宠物"],
        "id|+1": 1998
    }]
})
