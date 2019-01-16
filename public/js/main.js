/**
 * Created by hi on 2018/12/13.
 */
$("[data-trigger=dropdown]")
    .parent()
    .mouseover(function(){
        $(this).children(":last-child").show();
    })
    .mouseleave(function(){
        $(this).children(":last-child").hide()
    })
    .children(":last-child").hide();