//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
//引入用户路由
const userRouter=require("./routes/user");
/*引入路由模块*/
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(cors({
    origin:"http://localhost:63342"
}))
/*使用路由器来管理路由*/
//把用户载到/emp下
app.use("/user",userRouter);

50614567
1058575815
甘肃省酒泉市敦煌市交界处，剧玉门关西北80余公里处