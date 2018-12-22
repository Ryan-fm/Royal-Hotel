/**
 * Created by hi on 2018/12/13.
 */
$(function(){
    $("li.menu").mouseover(function(){
        $("ul.sub").show();
    });
    $("li.menu").mouseleave(function(){
        $("ul.sub").hide();
    });
});
