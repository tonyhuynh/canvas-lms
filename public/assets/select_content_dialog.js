var INST;
$(document).ready(function(){var h=$("#select_context_content_dialog");attachAddAssignment($("#assignments_select .module_item_select"));INST=INST||{};INST.selectContentDialog=function(c){var f=c.for_modules,e=c.select_button_text||"Add Item",d=c.holder_name||"module",a=c.dialog_title||"Add Item to Module";h.data("submitted_function",c.submit);h.find(".context_module_content").showIf(f);h.find(".holder_name").text(d);h.find(".add_item_button").text(e);if(f){var i=$("#content_tag_services").empty();$.getUserServices("BookmarkService",
function(j){for(var b in j){service=j[b].user_service;$service=$("<a href='#' class='bookmark_service no-hover'/>");$service.addClass(service.service);$service.data("service",service);$service.attr("title","Find links using "+service.service);var g=$("<img/>");g.attr("src","/images/"+service.service+"_small_icon.png");$service.append(g);$service.click(function(k){k.preventDefault();$.findLinkForService($(this).data("service").service,function(l){$("#content_tag_create_url").val(l.url);$("#content_tag_create_title").val(l.title)})});
i.append($service);i.append("&nbsp;&nbsp;")}})}$("#select_context_content_dialog #external_urls_select :text").val("");$("#select_context_content_dialog #context_module_sub_headers_select :text").val("");$("#select_context_content_dialog").dialog("close").dialog({autoOpen:true,title:a,width:400}).dialog("open");$("#select_context_content_dialog").dialog("option","title",a)};$("#select_context_content_dialog .cancel_button").click(function(){$("#select_context_content_dialog").dialog("close")});$("#select_context_content_dialog .item_title").keycodes("return",
function(){$(this).parents(".module_item_option").find(".add_item_button").click()});$("#select_context_content_dialog .add_item_button").click(function(){$("#select_context_content_dialog").getTemplateData({textValues:["context_module_id"]});var c=$("#add_module_item_select").val(),f=function(d){$("#select_context_content_dialog").dialog("close");var a=h.data("submitted_function");a&&$.isFunction(a)&&a(d)};if(c=="external_url"){var e={"item[type]":$("#add_module_item_select").val(),"item[id]":$("#select_context_content_dialog .module_item_option:visible:first .module_item_select").val(),
"item[title]":$("#select_context_content_dialog .module_item_option:visible:first .module_item_select option:selected").text(),"item[indent]":$("#content_tag_indent").val()};e["item[url]"]=$("#content_tag_create_url").val();e["item[title]"]=$("#content_tag_create_title").val();f(e)}else if(c=="context_module_sub_header"){e={"item[type]":$("#add_module_item_select").val(),"item[id]":$("#select_context_content_dialog .module_item_option:visible:first .module_item_select").val(),"item[title]":$("#select_context_content_dialog .module_item_option:visible:first .module_item_select option:selected").text(),
"item[indent]":$("#content_tag_indent").val()};e["item[title]"]=$("#sub_header_title").val();f(e)}else $("#select_context_content_dialog .module_item_option:visible:first .module_item_select option:selected").each(function(){var d=$(this),a={"item[type]":c,"item[id]":d.val(),"item[title]":d.text(),"item[indent]":$("#content_tag_indent").val()};if(a["item[id]"]=="new"){$("#select_context_content_dialog").loadingImage();d=$("#select_context_content_dialog .module_item_option:visible:first .new .add_item_url").attr("href");
var i=$("#select_context_content_dialog .module_item_option:visible:first").getFormData(),j=function(b){$("#select_context_content_dialog").loadingImage("remove");var g=null,k;for(k in b)g=b[k];a["item[id]"]=g.id;a["item[title]"]=$("#select_context_content_dialog .module_item_option:visible:first .item_title").val();a["item[title]"]=a["item[title]"]||g.display_name;b=$(document.createElement("option"));b.val(g.id).text(a["item[title]"]);$("#"+a["item[type]"]+"s_select").find(".module_item_select option:last").before(b);
f(a)};a["item[type]"]=="attachment"?$.ajaxJSONFiles(d,"POST",i,$("#module_attachment_uploaded_data"),function(b){j(b)},function(){$("#select_context_content_dialog").loadingImage("remove");$("#select_context_content_dialog").errorBox("Failed to Create new Item")}):$.ajaxJSON(d,"POST",i,function(b){j(b)},function(){$("#select_context_content_dialog").loadingImage("remove");$("#select_context_content_dialog").errorBox("Failed to Create new Item")})}else f(a)})});$("#add_module_item_select").change(function(){$("#select_context_content_dialog .module_item_option").hide();
$("#"+$(this).val()+"s_select").show().find(".module_item_select").change()}).change();$("#select_context_content_dialog .module_item_select").change(function(){$(this).val()=="new"?$(this).parents(".module_item_option").find(".new").show().focus().select():$(this).parents(".module_item_option").find(".new").hide()}).change()});
