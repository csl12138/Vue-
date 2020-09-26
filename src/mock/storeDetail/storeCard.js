import Mock from "mockjs"

Mock.mock(/\/mockapi\/getDetail\/storeInfo/, {
    "status": "success",
    "msg": "查询成功",
    "data": {
        "title": "麻辣空间（领秀滨江旗舰店）",
        "score": 5,
        "avg": 83,
        "address": "江阳区酒城大道3段10号领秀滨江2号楼202号",
        "phone": "0830-2620588",
        "worktime": "周一至周日 10:00-00:30",
        "services|2": [{
            "img|1": [
                "https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png",
                "https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png"
            ],
            "id|+1": 1234,
            "text|1": ["停车位", "提供wifi"]
        }],
        "poster": "https://img.meituan.net/msmerchant/68011097a11fc48940193b88edc7af337997795.jpg@380w_214h_1e_1c",
        "tag": [
            "https://img.meituan.net/msmerchant/f4b1666445355ab3a32bd01ec432a52f1404946.jpg@92w_50h_1e_1c",
            "https://img.meituan.net/msmerchant/46f4db4b4ff6d4e7f2ef4c259d42eeb1485484.jpg@92w_50h_1e_1c",
            "https://img.meituan.net/msmerchant/0ee8c53829ef23768a0e3d397ec72c81137800.jpg@92w_50h_1e_1c"
        ]
    }
})
