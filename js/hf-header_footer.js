function header(index){
var strVar = "";
    strVar += "";
    strVar += "      <div class=\"well clearfix\">";
    strVar += "      <div class=\"header \">";
    strVar += "      <ul class=\"header_ul \">";
    strVar += "      <li class=\"active\"><a href=\"hf_login.html#pos\" >登录<\/a><\/li>";
    strVar += "                 <li><a href=\"hf_register.html#pos_reg\"  >注册<\/a><\/li>";
    strVar += "                 <li class=\"persan\">您好！<a href=\"hf_personal-center.html\"  >林大帅<\/a><\/li>";    
     strVar += "                <li><a href=\"hf_my-order-all.html\"  id=\"\" >我的订单<\/a><\/li>";
     strVar += "                <li><a href=\"hf_shopping-cart.html\"  id=\"\" >购物车<em>0<\/em><\/a><\/li>";
    strVar += "     <\/ul>";                     
    strVar += "     <a href=\"hf_index.html\" class=\"logo_box \"><img src=\"./images/logo.png\" width=\"91\" height=\"100\"><\/a>";
    strVar += "     <div class=\"header_search\"><form action=\"\"><input type=\"submit\" value=\"搜索\" class=\"input\" ><p class=\"search_icon\"><\/p><div class=\"big_bg\"> <input type=\"text\" value=\"\" class=\"input_box\"/><\/div><\/form><\/div>";

    strVar += "     <\/div>";
    strVar += "      <\/div>";
    strVar += "     <div class=\"header_nav header_a clearfix\">";
    strVar += "     <ul class=\"nav_ul\" >";
    strVar += "    <li ><a href=\"hf_index.html\"  >首页<\/a><\/li><li ><a href=\"hf_product-classify.html\"  >产品款式<\/a><\/li><li class=\"\"><a href=\"hf_marriage.html\"  >婚嫁<\/a><\/li>";

    strVar += "  <li class=\"\"><a href=\"hf_custom-made.html\"  >定制<\/a><\/li><li ><a href=\"hf_brand.html\"  >品牌<\/a><\/li><li class=\"\"><a href=\"hf_service.html\"  >服务<\/a><\/li>";

    strVar += "  <li class=\"\"><a href=\"hf_activity.html\"  >会员活动<\/a><\/li><li ><a href=\"hf_encyclopedia.html\"  >珠宝百科<\/a><\/li><li class=\"li09\"><a href=\"hf_relation.html\"  >联系我们<\/a><\/li>";

    strVar += "      <\/ul>";
    strVar += "     <\/div>"    
    strVar += "    ";

    var headerId = document.getElementById('new_header');
    headerId.innerHTML = strVar;
    $('.nav_ul li').eq(index).addClass("active");
}
function sides(){
    var strVar = "";
    strVar += "    <div class=\"btn btn_relat \">";
    strVar += "       <a class=\"relation\" href=\"javasrcpit:void(0)\"><\/a>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"btn btn_top\">";
    strVar += "       <a class=\"go_top\" href=\"javasrcpit:void(0)\"><\/a>";
    strVar += "    <\/div>";    
    strVar += "       ";    
    strVar += " ";     

    var sidesId = document.getElementById('izl_rmenu');
    sidesId.innerHTML = strVar;
}
function new_footers(){
    var strVar = "";
    strVar += "<div class=\"foot clearfix\" >";
    strVar += "<div class=\"foot_part1\">";
    strVar += "<ul class=\"ul_first\">";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >您的奥迪<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >走进森马<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >购物指南<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >品牌故事<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >售后服务<\/a><\/li>";
    strVar += "<li class=\"no_width\"><a href=\"javasrcpit:void(0)\" class=\"a_title\" >联系我们<\/a><\/li>";
    strVar += "<\/ul> ";

    strVar += " <ul class=\"ul_first ul_second\">";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >4S服务<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >促销优惠<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >购物流程<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >品牌故事<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >售后服务条例<\/a><\/li>";
    strVar += "<li class=\"no_width\"><a href=\"javasrcpit:void(0)\" class=\"a_title\" >招商加盟<\/a><\/li>";

    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >优惠<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >赠送通知<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >支付方式<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >品牌故事<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >品牌文化<\/a><\/li>";
    strVar += "<li class=\"no_width\"><a href=\"javasrcpit:void(0)\" class=\"a_title\" >网站地图<\/a><\/li>";

    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >奥迪精品<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" ><\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >配送说明<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >品牌活动<\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" >退换货说明<\/a><\/li>";
    strVar += "<li class=\"no_width\"><a href=\"javasrcpit:void(0)\" class=\"a_title\" >线下网点<\/a><\/li>";  

    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" ><\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" ><\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" ><\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" ><\/a><\/li>";
    strVar += "<li><a href=\"javasrcpit:void(0)\" class=\"a_title\" ><\/a><\/li>";
    strVar += "<li class=\"no_width\"><a href=\"javasrcpit:void(0)\" class=\"a_title\" >在线预约<\/a><\/li>";          
    strVar += "<\/ul> ";
    strVar += " <\/div>";
    strVar += " <div class=\"foot_last\">";
    strVar += "<ul class=\"ul_nav\"> ";
    strVar += "<li><a class=\"a_box\" href=\"javasrcpit:void(0)\">门店查询<\/a><\/li> ";
    strVar += "<li><a class=\"a_box\" href=\"javasrcpit:void(0)\">隐私政策<\/a><\/li> ";
    strVar += "<li><a class=\"a_box\" href=\"javasrcpit:void(0)\">联系我们<\/a><\/li> ";
    strVar += "<li><a class=\"a_box\" href=\"javasrcpit:void(0)\">网站地图<\/a><\/li> ";
    strVar += "<li class=\"li_last\"><span class=\"a_box\">400-1691-118<\/span><\/li> ";

    strVar += "    <\/ul> ";
    strVar += "<p class=\"foot_bottom\">COPYRIGHT © 2016 KIMBERLITE DIAMOND 广ICP备11008681号<\/p> ";
    strVar += " <\/div>";

   strVar += "   <div class=\"er_wei\"> ";
    strVar += "  <p class=\"erWei_box1\"><img src=\"./images/weic_img.gif\" width=\"86\" height=\"86\" >安卓</p> ";
    strVar += "  <p class=\"erWei_box1\"><img src=\"./images/weic_img.gif\" width=\"86\" height=\"86\" >微信商城</p> ";

    strVar += "<p class=\"erWei_box2\"><img src=\"./images/app_img.gif\" width=\"86\" height=\"86\" >APP</p> ";
 
    strVar += " <\/div>";

    strVar += " <\/div>";
    var footerId = document.getElementById('footer');
    footerId.innerHTML = strVar;
}


$(function(){
    header(header_index);new_footers();sides();
});

