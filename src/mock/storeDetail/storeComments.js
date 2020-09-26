import Mock from "mockjs"

Mock.Random.extend({
    imgs () {
        const imgs = [
            "https://p0.meituan.net/shaitu/e9092f0e3e481e940cb3af3f79cf00a54103050.jpg",
            "https://p0.meituan.net/shaitu/9195cab9e4d90fa9057d1f6bc05c443b2568536.jpg",
            "https://p0.meituan.net/shaitu/c6adf0faf858e41865a017a6b30990cb60012.jpg",
            "https://p0.meituan.net/shaitu/d065c63d36a0750ea7610d682a3617d82713163.jpg"
        ]
        return this.pick(imgs, 0, 4)
    }
})

Mock.mock(/\/mockapi\/getDetail\/comments/, {
    "status": "success",
    "msg": "查询成功",
    "data|50-100": [{
        "name|1": [Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname()],
        "score|1": [Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1), Mock.Random.float(3, 4, 1, 1)],
        "date|1": [Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date(), Mock.Random.date()],
        "comments|1": [
            "很美好的饭食，感受到了开心的味道",
            "今天中午又来到麻辣空间吃饭啦，熟悉的味道还是那么好吃，服务一如既往的热情哪个酸奶超级好喝，味道好吃安逸安逸哦，菜品哪个什么牛肉现场切嫩嫩的哦，美洋洋服务非常热情值得推荐一家泸州火锅",
            "此次用餐总体来说不错，觉得比较认可的地方有：份量充足、服务到位、环境优美、菜品丰富。开心果服务态度非常好，酸奶美味。",
            "非常喜欢这个味儿，服务非常好，环境不错 服务很贴心",
            "很满意的一次就餐体验，整体评价的话我觉得：配菜合理、服务到位、菜品丰富、环境优美、口味不错、份量充足。",
            "这次就餐整体感觉很赞，比较满意的方面有：份量充足、服务到位、菜品丰富。 开心果的服务非常满意。"
        ],
        "resp|1": [
            "感谢小主的好评，一看就和小主确认过眼神，期待与小主再次相遇！",
            "亲爱的顾客，感谢您对我们店铺的评价与支持，当我们的用心制作的菜品得到你的肯定的时候，是我们最开心的时刻，期待您下次光临小店哦。",
            "我们掌柜的说了，如果今天没有100个子好评就要打动我的腿，呵呵，你可得救救我，帮我美言几句哦。",
            "感谢🙏小主对我们服务的肯定，您满意就是我们的初心，下一次来的时候记得找他们服务哦，天气变化大注意添加衣服，带太阳☀伞哦"
        ],
        "imgs|1": [Mock.Random.imgs(), Mock.Random.imgs(), Mock.Random.imgs(), Mock.Random.imgs(), Mock.Random.imgs(), Mock.Random.imgs()],
        "good|1": [Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120), Mock.Random.integer(20, 120)],
        "id|+1": 10086111
    }] 
})
