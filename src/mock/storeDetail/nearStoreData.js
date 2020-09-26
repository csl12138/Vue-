import Mock from "mockjs"

Mock.mock(/\/mockapi\/getDetail\/nearStore/, {
    "status": "success",
    "msg": "查询成功",
    "data|10": [{
        "name|1": [
            "佳乐蛋糕",
            "豪客来牛排（鼓楼名店街店）",
            "川味轩火锅（仁和路店）",
            "醉西昌藿香烧烤",
            "乡村基（泸州餐厅）",
            "美嘉乐蛋糕",
            "豪客来牛排（市府步行街店）"
        ],
        "poster|1": [
            "https://img.meituan.net//msmerchant/778a9ce877b60a8e0dba76424256a2c885318.jpg@214w_120h_1e_1c",
            "https://img.meituan.net//msmerchant/a33ed99db4bf8a3d9c6c1abc0c5f914b73641.jpg@214w_120h_1e_1c",
            "https://p1.meituan.net//bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@214w_120h_1e_1c",
            "https://img.meituan.net//msmerchant/53c301132399ffdcd3539c2cf26dcef129556.webp@214w_120h_1e_1c",
            "https://p0.meituan.net//bbia/3ca731dbb5bf60aa4c52e5e790ed208725850.jpg@214w_120h_1e_1c",
            "https://p1.meituan.net//bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@214w_120h_1e_1c"
        ],
        "score|1": [Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1), Mock.Random.float(4, 5, 1, 1)],
        "saled|1": [Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495), Mock.Random.integer(1234, 6495)],
        "price|1": [Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100), Mock.Random.integer(40, 100)],
        "id|+1": 19701201
    }]
})
