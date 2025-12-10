// 文章数据库
const ARTICLES = {
    "daiyu": {
        title: "黛玉葬花的美学意蕴",
        author: "社团研究组",
        date: "2025-11-20",
        image: "assets/images/daiyuzanghua.jpg",
        summary: "葬花不仅是惜花，更是对生命归宿的哲学思考...",
        content: `<p>“花谢花飞花满天，红消香断有谁怜？”这首《葬花吟》不仅是林黛玉感叹身世的悲歌...</p><p>（此处省略长文）...</p>`
    },
    "jinling": {
        title: "金陵十二钗命运解读",
        author: "熊副社长",
        date: "2025-11-25",
        image: "assets/images/jinglingshierchai.jpg",
        summary: "判词中的隐喻，早已注定了众人的结局...",
        content: `<p>金陵十二钗正册中的十二位女性，各自代表着不同的人生轨迹...</p>`
    },
    "poetry": {
        title: "红楼诗词艺术特色",
        author: "何社长",
        date: "2025-11-28",
        image: "assets/images/shici.jpg",
        summary: "字字珠玑，句句血泪，解析红楼诗词之美...",
        content: `<p>《红楼梦》中的诗词歌赋不仅是情节的点缀...</p>`
    }
};

// 问答题库 (用于 quiz.html)
const QUIZ_DATA = [
    {
        q: "“假作真时真亦假”的下一句是？",
        options: ["无为有处有还无", "万境归空都是梦", "白茫茫大地真干净"],
        a: 0
    },
    {
        q: "贾宝玉佩戴的玉叫什么名字？",
        options: ["冷香丸", "通灵宝玉", "补天石"],
        a: 1
    },
    {
        q: "林黛玉的别号是？",
        options: ["蘅芜君", "枕霞旧友", "潇湘妃子"],
        a: 2
    }
];
