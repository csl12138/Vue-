import Mock from "mockjs"

Mock.mock(/\/mockapi\/getDetail\/recommend/, {
    "status": "success",
    "msg": "查询成功",
    "data": {
        "imgs|6": [{
            "img|1": [
                "https://p0.meituan.net/bbia/1ccf48f1035c894712f417e2a795eab9748457.png@130w_130h_1e_1c",
                "https://qcloud.dpfile.com/pc/Q5QiVcU0Q7jYFY6W4HjDEyDK87mJruIpxam3HJSyDPRJ8lr6EZXNPKlGPLcTXkPu5g_3Oo7Z9EXqcoVvW9arsw.jpg",
                "https://p0.meituan.net/dealwatera/2197fe9da57b569319a418002df9b9be1683550.jpeg@130w_130h_1e_1c",
                "https://qcloud.dpfile.com/pc/Q5QiVcU0Q7jYFY6W4HjDEyDK87mJruIpxam3HJSyDPRJ8lr6EZXNPKlGPLcTXkPu5g_3Oo7Z9EXqcoVvW9arsw.jpg"
            ],
            "info|1": [
                {
                    "name|1": ["肥牛", "手打虾滑", "现切拼盘", "麻辣牛肉"],
                    "price|1": [Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70), Mock.Random.integer(30, 70)]
                }
            ],
            "id|+1": 4567
        }],
        "dishes": ["现摘蘑菇", "蔬菜", "抄手", "极品鹅菌肝", "麻辣鸡", "海鲜拼盘", "春色满园", "什锦刺身", "中粮特供午餐肉", "蛋酥糍粑", "鲜鸭肠", "香菜鲜肉丸", "银耳汤"]
    }
})
