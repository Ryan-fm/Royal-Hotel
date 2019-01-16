/**
 * Created by web on 2018/12/18.
 */
$(function(){
  $.ajax({
      url:"http://localhost:63342/public/footer.html",
      type:"get",
      success:function(res){
              $("<link rel='stylesheet' href='../public/css/footer.css'>").appendTo("head");
              $(res).replaceAll("#footer");
      }
  })
});
