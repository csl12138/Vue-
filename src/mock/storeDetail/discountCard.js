import Mock from "mockjs"

Mock.mock(/\/mockapi\/getDetail\/discountCard/, {
    "status": "success",
    "msg": "查询成功",
    "data|1-3": [{
        "title|1": ["六人套餐，提供免费WiFi", "三人套餐，提供免费WiFi"],
        "poster|1": [
            "https://p1.meituan.net/208.126/deal/cdc1c824d2f51ddc2d2a7aebcce525c458736.jpg@100w_100h_1e_1c",
            "https://p0.meituan.net/208.126/deal/1292899ad9ec025835899764f413e57471323.jpg@100w_100h_1e_1c"
        ],
        "saled|1": [Mock.Random.integer(500, 1500), Mock.Random.integer(500, 1500), Mock.Random.integer(500, 1500), Mock.Random.integer(500, 1500), Mock.Random.integer(500, 1500), Mock.Random.integer(500, 1500)],
        "nowPrice|1": [Mock.Random.integer(79, 180), Mock.Random.integer(79, 180), Mock.Random.integer(79, 180), Mock.Random.integer(79, 180), Mock.Random.integer(79, 180), Mock.Random.integer(79, 180)],
        "originPricec|1": [Mock.Random.integer(220, 400), Mock.Random.integer(220, 400), Mock.Random.integer(220, 400), Mock.Random.integer(220, 400), Mock.Random.integer(220, 400), Mock.Random.integer(220, 400)], 
        "id|+1": 12345678
    }]
})
