/**
 * Created by hi on 2018/12/19.
 */
$(function(){
    $("#c4").click(function(){
        $.ajax({
            url: "http://localhost:3000/user/login",
            type: "post",
            data: {
                uname: uname.value,
                upwd: upwd.value
            },
            dataType: "json",
            success: function (result) {
                if (result == "1") {
                    location.href = "index.html";
                } else {
                    alert("密码错误");
                }
            }
        })
    })
});