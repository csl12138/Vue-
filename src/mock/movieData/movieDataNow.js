import Mock from "mockjs"

Mock.mock("/mockapi/getMovieData?type=now", {
    "status": "success",
    "msg": "查询成功",
    "id|+2": 55,
    "data|10": [{
        "type": "now",
        "iMax": {
            "isIMAX|1": [true, false, false, false, false],
            "img": "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png" 
        },
        "poster|1": [
            "//p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c",
            "//p1.meituan.net/moviemachine/7e6118993dbf0f304ac1dad4667fddda207318.jpg@267w_371h_1e_1c",
            "//p1.meituan.net/movie/cdb164c203fc0c2465278ddd165e91c84503798.jpg@267w_371h_1e_1c",
            "//p1.meituan.net/moviemachine/27e15446e9e4999fa54bbad940b5a8363531802.jpg@267w_371h_1e_1c",
            "//p1.meituan.net/movie/396a1e77ff4ef838a1c697ffbc71a8bb2730189.jpg@267w_371h_1e_1c",
            "//p0.meituan.net/moviemachine/f0eb865d1cf85d3f939baaf3f9a44c251442128.jpg@267w_371h_1e_1c"
        ],
        "name|1": ["电力之战", "荞麦疯长", "八佰", "我在时间尽头等你", "小妇人", "信条"],
        "score|1": [Mock.Random.float(6, 9, 1, 1), Mock.Random.float(6, 9, 1, 1), Mock.Random.float(6, 9, 1, 1), Mock.Random.float(6, 9, 1, 1), Mock.Random.float(6, 9, 1, 1), Mock.Random.float(6, 9, 1, 1)]
    }]
})
