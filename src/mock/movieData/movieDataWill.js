import Mock from "mockjs"

Mock.mock("/mockapi/getMovieData?type=will", {
    "status": "success",
    "msg": "查询成功",
    "id|+2": 55,
    "data|10": [{
        "type": "will",
        "iMax": {
            "isIMAX|1": [true, false, false, false, false],
            "img": "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png" 
        },
        "poster|1": [
            "//p0.meituan.net/moviemachine/6554ceed4564bde3b9138250c45540b75648263.jpg@267w_371h_1e_1c",
            "//p0.meituan.net/movie/8d157177b89861caa42905c192ed05711630386.jpg@267w_371h_1e_1c",
            "//p1.meituan.net/movie/41d222686f37e7b6b312079e8a4651f22058796.jpg@267w_371h_1e_1c",
            "//p0.meituan.net/moviemachine/464ea0b89ea8265c2b18c4c3ebe5f8274585629.jpg@267w_371h_1e_1c",
            "//p1.meituan.net/movie/4ac79d270ca721faf5dd366ba996f46a832427.jpg@267w_371h_1e_1c",
            "//p0.meituan.net/movie/1a8fb14251e4e8b0578eeed69704b9584993617.jpg@267w_371h_1e_1c"
        ],
        "name|1": ["假面饭店", "谁说我们不会爱", "阿里巴巴与神灯", "新愚公移山", "未知嫌疑人", "闺蜜心窍"],
        "number|1": [Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427), Mock.Random.integer(1304, 8427)]
    }]
})
