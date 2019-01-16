/**
 * Created by hi on 2018/12/19.
 */
$(function() {
    $(":text").blur(function () {
        var reg = /^[\w\4e00-\u9fa5]{6,9}\$/;
        vail($(this), reg, "tips:only 6-9bits");
        //用正则对用户名进行规范
    });
    function vail($txt, reg, msg) {
        var $val = $txt.val();
        //判断用户名和密码是否符合要求
        var bool = reg.test($val);
        if (!bool) {
            $txt.parent().next().children().html(`${msg}
        `)
            ;
        } else {
            return true;
        }
    }
    $(":password").blur(function () {
        var reg = /^[0-9]{6,9}$/;
        vail($(this), reg, "tips:only 6~9bits")
    });
    $("#c4").click(function(e) {
        if (!vail($(this), reg, "tips:only 6-9bits") || !vail($(this), reg, "tips:only 6~9bits")) {
            e.preventDefault();
        } else {
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
                        alert("密码错误~");
                    }
                }
            })
        };
    });
    //用正则判断用户名和密码是否符合要求
});

