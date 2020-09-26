import Mock from "mockjs"

Mock.mock("/mockapi/getRecommendList", {
    "status": "success",
    "msg": "查询成功",
    "data|15": [{
        "poster|1": ["//p1.meituan.net/apiback/9c1ac951c967ccd93f28f05f80c5ca08118281.jpg@267w_150h_1e_1c", "//p1.meituan.net/msmerchant/110bf6d3bfb49bd7b0dc9329a7676af9434773.jpg@267w_150h_1e_1c", "//p1.meituan.net/wedding/f5855290132331f22723a1a472daff8791568.jpg@267w_150h_1e_1c", "//p0.meituan.net/msmerchant/68011097a11fc48940193b88edc7af337997795.jpg@267w_150h_1e_1c", "//p0.meituan.net/bbia/39e18908b60814581056a6ce325425a1139241.jpg@267w_150h_1e_1c"],
        "name|1": ["海之幸味（水井沟店）", "style私人订制美发连锁（佳乐金街店）", "名师名店美容美发（钟鼓楼店）", "HiSen嗨森蛋糕", "藏炭烧肉屋", "一只酸奶牛（天远广场店）", "味之绝美蛙鱼头火锅（泸州店）"],
        "score|1": [Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1)],
        "comments|1": [Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000), Mock.Random.integer(300, 2000)],
        "address|1": ["钟鼓楼", "迎晖路", "百子图", "佳乐金街"],
        "price|1": [Mock.Random.integer(100, 500), Mock.Random.integer(100, 500), Mock.Random.integer(100, 500), Mock.Random.integer(100, 500), Mock.Random.integer(100, 500), Mock.Random.integer(100, 500), Mock.Random.integer(100, 500), Mock.Random.integer(100, 500)],
        "id|+1": 2013
    }]
})
