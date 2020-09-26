import Mock from "mockjs"

Mock.mock("/mockapi/getInnData?type=zjj", {
    "status": "success",
    "msg": "查询成功",
    "data|6": [{
        "type": "zjj",
        "id|+2": 555,
        "poster|1": [
            "http://p0.meituan.net/iphoenix/ab3c19b267eeaab3b68d59d2d07c0b6e194258.jpg@740w_416h_1e_1c",
            "https://img.meituan.net/phoenix/b405a53b2b1c7afe7c0df9ff9813ca36325996.jpg@740w_416h_1e_1c",
            "https://img.meituan.net/phoenix/da36ae53485891ef4682886553a4df291025088.jpg@740w_416h_1e_1c",
            "https://img.meituan.net/phoenix/5c5b95894e44d5d47cc1b32d06d18d61701603.jpg@740w_416h_1e_1c",
            "https://img.meituan.net/phoenix/ea30dc24cd2eb8f09e9243dc15c450082182980.jpg@740w_416h_1e_1c",
            "http://p0.meituan.net/iphoenix/176df6a3ab9335fb671b42bfcab1bad12084201.jpg@740w_416h_1e_1c"
        ],
        "title|1": ["恩施halo你好民宿/新天地/金桂大道/茶城/火车站/机场/女儿城/土司城", "栖迟.民宿No1屋内全是房东亲手打造绿色花园 谈心 温馨浪漫 蓝天白云 超大投影仪 ，提供导游服务及包车服务带你玩遍恩施", "【幕宿】庸城之恋•情侣出游  | 天门山景区直线100米 | 免费品茶 | 提供旅游讲解 | 请直接预订 不满意放心退"],
        "desc": "整套1居室|可住2人",
        "price|1": [Mock.Random.integer(80, 400), Mock.Random.integer(80, 400), Mock.Random.integer(80, 400), Mock.Random.integer(80, 400), Mock.Random.integer(80, 400), Mock.Random.integer(80, 400), Mock.Random.integer(80, 400)]
    }]
})
