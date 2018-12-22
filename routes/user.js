/**
 * Created by hi on 2018/12/18.
 */
//导入express 文件
const express=require("express");
//导入数据库连接
const pool=require("../pool.js");
//创建空路由
const router=express.Router();
//实现用户登录
router.post("/login",(req,res)=>{
    var obj=req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    if(!$uname){
        res.send(req.body);
        return;
    }
    if(!$upwd){
        res.send({code:302,msg:+"密码不能为空"});
        return;
    }
    pool.query("select * from ht_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
        if(err) throw err;
    if(result.length>0){
        res.send("1"); //代表登录成功
    }else{
        res.send("0");//代表登录失败  用户名和密码错误
    }
   });
});
module.exports=router;