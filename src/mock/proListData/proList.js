import Mock from "mockjs"

Mock.Random.extend({
    marks () {
        const marks = ["火锅", "烤肉", "小吃", "自助餐", "江阳区", "龙马潭区", "水井沟", "百子图", "早餐", "午餐", "下午茶", "晚餐", "夜宵", "不限", "买单", "在线点餐", "外卖", "单人餐", "双人餐", "3~4人", "5~10人", "10人以上"];
        return this.pick(marks, 8, 15);
    }
})
Mock.mock(/\/mockapi\/getProLists/, "get", {
    "status": "success",
    "msg": "查询成功",
    "data|5": [{
        "id|+1": 19981,
        "name|1": ["贤合庄卤味火锅（泸州店）", "余味火锅（大山坪店）", "爸爸炒料牛排老火锅（水井沟店）", "重庆菜园坝老火锅", "刘掌门鲜货火锅（杜家街店）", "麻辣空间（水井沟店）", "香佰里鲜货火锅（钟鼓楼店）", "小龙坎老火锅（水井沟店）"],
        "poster|1": [
            "//p0.meituan.net/msmerchant/61450bf86a754a592e19604bee505984114737.jpg@275w_156h_1e_1c",
            "//p0.meituan.net/bbia/71903504_1591523114675.jpeg@275w_156h_1e_1c",
            "//p0.meituan.net/msmerchant/8fc99bd4017c557d7f3a5144e70b75dd1098313.jpg",
            "//p0.meituan.net/deal/a05347187f69fffdce71f827fe8536ce121433.jpg@275w_156h_1e_1c",
            "//p0.meituan.net/msmerchant/b16e9306dbdc931965eb068eeb4ca7af278609.jpg@275w_156h_1e_1c",
            "//p0.meituan.net/msmerchant/68011097a11fc48940193b88edc7af337997795.jpg@275w_156h_1e_1c",
            "//p1.meituan.net/mogu/31bd465703cc755540c80fbedca9285c51703.jpg@275w_156h_1e_1c"
        ],
        "mark|1": [Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks(), Mock.Random.marks()],
        "score|1": [Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1)],
        "comments|1": [Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500), Mock.Random.integer(800, 3500)],
        "desc|1": ["川味火锅|大山坪/市政府/天益广场", "四川火锅|佳乐世纪城"],
        "address|1": ["江阳区春华路一段佳乐金街万象区", "江阳区建设路裕华苑旁（招商银行下行30米）", "江阳区新马路198号1层2单元1号"],
        "avg|1": [Mock.Random.integer(39, 160), Mock.Random.integer(39, 160), Mock.Random.integer(39, 160), Mock.Random.integer(39, 160), Mock.Random.integer(39, 160), Mock.Random.integer(39, 160)],
        "discount|1-4": [{
            "id|+1": 11981,
            "title|1": ["100元代金券1张，可叠加", "3-4人火锅套餐", "150元代金券1张，可叠加3张"],
            "price|1": [Mock.Random.integer(40, 80), Mock.Random.integer(40, 80), Mock.Random.integer(40, 80), Mock.Random.integer(40, 80), Mock.Random.integer(40, 80)],
            "origin|1": [Mock.Random.integer(280, 450), Mock.Random.integer(280, 450), Mock.Random.integer(280, 450), Mock.Random.integer(280, 450), Mock.Random.integer(280, 450), Mock.Random.integer(280, 450)],
            "saled|1": [Mock.Random.integer(100, 600), Mock.Random.integer(100, 600), Mock.Random.integer(100, 600), Mock.Random.integer(100, 600), Mock.Random.integer(100, 600), Mock.Random.integer(100, 600), Mock.Random.integer(100, 600)]
        }]
    }]
})
