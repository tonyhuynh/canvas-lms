var outcomes={ratingCounter:0,updateOutcome:function(a,b){if(!b||b.length===0)b=$("#outcome_"+a.id);if(!b||b.length===0){b=$("#outcome_blank").clone(true).removeAttr("id");$("#outcomes .outcome_group:first").append(b.show());$("#outcomes .outcome_group:first").sortable("refresh")}a.asset_string=$.underscore("learning_outcome_"+a.id);b.find("textarea.description").val(a.description);b.fillTemplateData({data:a,id:"outcome_"+a.id,htmlValues:["description"],hrefValues:["id"]});b.addClass("loaded");b.find(".rubric_criterion .rating:not(.blank)").remove();
if(a.data&&a.data.rubric_criterion){for(var c in a.data.rubric_criterion.ratings){var e=a.data.rubric_criterion.ratings[c],d=b.find(".rubric_criterion .rating.blank:first").clone(true).removeClass("blank");outcomes.ratingCounter++;d.find(".description").text(e.description);d.find(".points").text(e.points);b.find(".add_holder").before(d.show())}b.find(".mastery_points").text(a.data.rubric_criterion.mastery_points);b.find(".points_possible").text(a.data.rubric_criterion.points_possible)}if(a.permissions){b.find(".edit_outcome_link").showIf(a.permissions.update&&
f);var f=a.context_code==$("#find_outcome_dialog .context_code").text();b.find(".really_delete_outcome_link").showIf(f);b.find(".remove_outcome_link").showIf(!f)}return b},sizeRatings:function(){},hideEditOutcome:function(){$("#edit_outcome_form textarea").editorBox("destroy");var a=$("#outcomes #edit_outcome_form").prev(".learning_outcome");$("body").append($("#edit_outcome_form").hide());a.attr("id")=="outcome_new"?a.remove():a.show()},editOutcome:function(a,b){if(a&&a.length>0&&!a.hasClass("loaded"))a.find(".show_details_link").triggerHandler("click",
function(){outcomes.editOutcome(a,b)});else{outcomes.hideEditOutcome();if(!a||a.length===0){a=$("#outcome_blank").clone(true).attr("id","outcome_new");if(!b||b.length==0)b=$("#outcomes .outcome_group:first");b.append(a.show());b.sortable("refresh")}var c=$("#edit_outcome_form");c.attr("action",a.find(".edit_outcome_link").attr("href"));c.attr("method","PUT");if(a.attr("id")=="outcome_new"){c.attr("action",$("#outcome_links .add_outcome_url").attr("href"));c.attr("method","POST")}var e=a.getTemplateData({textValues:["short_description",
"description","mastery_points"]});e.description=a.find("textarea.description").val()||a.find("textarea.description").html();c.fillFormData(e,{object_name:"learning_outcome"});c.find("#outcome_include_rubric_example").attr("checked",true).change();c.find(".rubric_criterion .rating:not(.blank)").remove();a.find(".rubric_criterion .rating:not(.blank)").each(function(){c.find("#outcome_include_rubric_example").attr("checked",true);var d=c.find(".rubric_criterion .rating.blank:first").clone(true).removeClass("blank"),
f=$(this).getTemplateData({textValues:["description","points"]}),g=outcomes.ratingCounter++;d.find(".outcome_rating_description").val(f.description).attr("name","learning_outcome[rubric_criterion][ratings]["+g+"][description]");d.find(".outcome_rating_points").val(f.points).attr("name","learning_outcome[rubric_criterion][ratings]["+g+"][points]");c.find(".add_holder").before(d.show())});c.find(".mastery_points").val(e.mastery_points);c.find("#outcome_include_rubric_example").change();a.after(c.show());
a.hide();c.find(":text:visible:first").focus().select();c.find("textarea").editorBox()}},deleteOutcome:function(a){a.confirmDelete({message:"Are you sure you want to remove this learning outcome?",url:a.find(".delete_outcome_link").attr("href"),success:function(){$(this).slideUp(function(){$(this).remove()})}})},updateOutcomeGroup:function(a,b){if(!b||b.length===0)b=$("#group_"+a.id);if(!b||b.length===0){b=$("#group_blank").clone(true).removeAttr("id");$("#outcomes .outcome_group:first").append(b.show());
$("#outcomes .outcome_group:first").sortable("refresh");b.sortable(outcomes.sortableOptions);$(".outcome_group").sortable("option","connectWith",".outcome_group")}a.asset_string=$.underscore("learning_outcome_group_"+a.id);b.find("textarea.description").val(a.description);b.fillTemplateData({data:a,id:"group_"+a.id,hrefValues:["id"],htmlValues:["description"]});return b},hideEditOutcomeGroup:function(){$("#edit_outcome_group_form textarea").editorBox("destroy");var a=$("#outcomes #edit_outcome_group_form").prev(".outcome_group");
$("body").append($("#edit_outcome_group_form").hide());a.attr("id")=="group_new"?a.remove():a.show()},editOutcomeGroup:function(a){outcomes.hideEditOutcomeGroup();if(!a||a.length===0){a=$("#group_blank").clone(true).attr("id","group_new");$("#outcomes .outcome_group:first").append(a.show());$("#outcomes .outcome_group:first").sortable("refresh");a.sortable(outcomes.sortableOptions);$(".outcome_group").sortable("option","connectWith",".outcome_group")}var b=$("#edit_outcome_group_form");b.attr("action",
a.find(".edit_group_link").attr("href"));b.attr("method","PUT");if(a.attr("id")=="group_new"){b.attr("action",$("#outcome_links .add_outcome_group_url").attr("href"));b.attr("method","POST")}var c=a.getTemplateData({textValues:["title","description"]});c.description=a.find("textarea.description").val();b.fillFormData(c,{object_name:"learning_outcome_group"});a.after(b.show());a.hide();b.find(":text:visible:first").focus().select();b.find("textarea").editorBox()},deleteOutcomeGroup:function(a){a.confirmDelete({message:"Are you sure you want to remove this learning outcome group and all its outcomes?",
url:a.find(".delete_group_link").attr("href"),success:function(){$(this).slideUp(function(){$(this).remove()})}})},sortableOptions:{handle:".reorder_link",connectWith:".outcome_group",items:".learning_outcome,.outcome_group",axis:"y",update:function(a,b){var c=$(b.item).parent().closest(".outcome_group"),e=c.children(".header").getTemplateData({textValues:["asset_string","id"]}).id,d=[],f={};c.children(".learning_outcome,.outcome_group").each(function(){var g=$(this).children(".header").getTemplateData({textValues:["asset_string"]}).asset_string;
d.push(g)});for(c=0;c<d.length;c++)f["ordering["+d[c]+"]"]=c;e=$.replaceTags($("#outcome_links .reorder_items_url").attr("href"),"id",e);$.ajaxJSON(e,"POST",f,function(){},function(){})}}};
$(document).ready(function(){$("#outcome_information_link").click(function(a){a.preventDefault();$("#outcome_criterion_dialog").dialog("close").dialog({autoOpen:false,title:"Learning Outcome Criterion",width:400}).dialog("open")});$(".show_details_link,.hide_details_link").click(function(a,b){a.preventDefault();var c=$(this).closest(".learning_outcome");if($(this).hasClass("show_details_link"))if(c.hasClass("loaded"))c.addClass("expanded");else{var e=$(this);e.text("loading details...");var d=c.find("a.short_description").attr("href");
$.ajaxJSON(d,"GET",{},function(f){e.text("show details");outcomes.updateOutcome(f.learning_outcome,c);c.addClass("expanded");b&&$.isFunction(b)&&b()},function(){e.text("details failed to load, please try again")})}else c.removeClass("expanded")});$(".outcome_group:visible").each(function(){$(this).sortable(outcomes.sortableOptions)});$(".delete_group_link").click(function(a){a.preventDefault();outcomes.deleteOutcomeGroup($(this).closest(".outcome_group"))});$(".edit_group_link").click(function(a){a.preventDefault();
outcomes.editOutcomeGroup($(this).closest(".outcome_group"))});$("#find_outcome_dialog .select_outcomes_link").click(function(a){a.preventDefault();$("#find_outcome_dialog .select_outcome_checkbox:checked").each(function(){var b=$(this).parents(".outcomes_dialog_select").getTemplateData({textValues:["id"]}).id,c=$("#outcome_dialog_"+b);b=c.getTemplateData({textValues:["id"]}).id;var e=$("#outcomes .outcome_group:first > .header").getTemplateData({textValues:["id"]}).id;b=$.replaceTags($("#find_outcome_dialog .add_outcome_url").attr("href"),
"learning_outcome_id",b);b=$.replaceTags(b,"learning_outcome_group_id",e);e=c.getTemplateData({textValues:["id","short_description","description"]});e.permissions={};c=outcomes.updateOutcome(e);$("html,body").scrollTo(c);c.loadingImage();$("#find_outcome_dialog").dialog("close");$.ajaxJSON(b,"POST",{},function(d){c.loadingImage("remove");outcomes.updateOutcome(d.learning_outcome)},function(){c.loadingImage("remove");c.remove()})})});$(".edit_outcome_link").click(function(a){a.preventDefault();outcomes.editOutcome($(this).parents(".learning_outcome"))});
$(".delete_outcome_link").click(function(a){a.preventDefault();outcomes.deleteOutcome($(this).parents(".learning_outcome"))});$(".add_outcome_link").click(function(a){a.preventDefault();a=$(this).closest(".outcome_group");if(a.length==0)a=null;outcomes.editOutcome(null,a)});$(".add_outcome_group_link").click(function(a){a.preventDefault();outcomes.editOutcomeGroup()});$("#edit_outcome_group_form .cancel_button").click(function(){outcomes.hideEditOutcomeGroup()});$("#edit_outcome_form .cancel_button").click(function(){outcomes.hideEditOutcome()});
$("#find_outcome_dialog .outcomes_dialog_select").click(function(a){if(!($(a.target).closest("input").length>0)){a.preventDefault();$("#find_outcome_dialog .outcomes_dialog_select.selected_side_tab").removeClass("selected_side_tab");$(this).addClass("selected_side_tab");a=$(this).getTemplateData({textValues:["id"]}).id;$("#find_outcome_dialog").find(".outcomes_dialog_outcome").hide().end().find("#outcome_dialog_"+a).show()}});$(".find_outcome_link").click(function(a){var b=$("#find_outcome_dialog");
a.preventDefault();b.dialog("close").dialog({autoOpen:true,width:600,height:350,title:"Find Existing Outcome"}).dialog("open");if(!b.hasClass("loaded")){b.find(".loading_message").text("Loading outcomes...");a=b.find(".outcomes_url").attr("href");$.ajaxJSON(a,"GET",{},function(c){b.find(".loading_message").remove();c.length===0&&b.find(".loading_message").text("No outcomes found");for(var e in c){var d=c[e].learning_outcome,f=b.find(".outcomes_dialog_select.blank:first").clone(true);f.fillTemplateData({data:d}).removeClass("blank");
b.find(".outcomes_dialog_outcomes_select").append(f.show());f=b.find(".outcomes_dialog_outcome.blank:first").clone(true);f.removeClass("blank");f.data("outcome",d);f.find(".criterion.blank").hide();d.outcome_total=d.points_possible;f.fillTemplateData({data:d,htmlValues:["description"],id:"outcome_dialog_"+d.id});b.find(".outcomes_dialog_outcomes").append(f)}b.find(".outcomes_dialog_holder").show();b.find(".outcomes_dialog_outcomes_select .outcomes_dialog_select:visible:first").click();b.addClass("loaded")},
function(){b.find(".loading_message").text("Loading outcomes failed, please try again")})}});$("#edit_outcome_form").formSubmit({processData:function(a){a.learning_outcome_group_id=$(this).closest(".outcome_group").find(".header").first().getTemplateData({textValues:["id"]}).id;return a},beforeSubmit:function(){var a=$(this).prev(".outcome");a.attr("id")=="outcome_new"&&a.attr("id","outcome_adding");$(this).loadingImage()},success:function(a){$(this).loadingImage("remove");outcomes.updateOutcome(a.learning_outcome,
$(this).prev(".learning_outcome"));outcomes.hideEditOutcome()},error:function(a){$(this).loadingImage("remove");$(this).formErrors(a)}});$("#edit_outcome_group_form").formSubmit({processData:function(a){var b=$(this).parent().closest(".outcome_group").children(".header").getTemplateData({textValues:["id"]}).id;a["learning_outcome_group[learning_outcome_group_id]"]=b;return a},beforeSubmit:function(){var a=$(this).prev(".outcome_group");a.attr("id")=="group_new"&&a.attr("id","group_adding");$(this).loadingImage()},
success:function(a){$(this).loadingImage("remove");outcomes.updateOutcomeGroup(a.learning_outcome_group,$(this).prev(".outcome_group"));outcomes.hideEditOutcomeGroup()},error:function(a){$(this).loadingImage("remove");$(this).formErrors(a)}});$("#edit_outcome_form .switch_views_link").click(function(a){a.preventDefault();$("#edit_outcome_form textarea:first").editorBox("toggle")});$("#outcome_include_rubric_example").change(function(){var a=$(this).parents("form");a.find(".rubric_criterion").showIf($(this).attr("checked"));
a.find(".outcome_rating_points:first").blur();a.find(".outcome_criterion_title").val()||a.find(".outcome_criterion_title").val(a.find(".outcome_short_description").val());if(a.find(".rating:not(.blank)").length===0){var b=a.find(".rating.blank:first").clone(true).removeClass("blank"),c=outcomes.ratingCounter++;b.find(".outcome_rating_description").val("Exceeds Expectations").attr("name","learning_outcome[rubric_criterion][ratings]["+c+"][description]");b.find(".outcome_rating_points").val("5").attr("name",
"learning_outcome[rubric_criterion][ratings]["+c+"][points]");a.find(".add_holder").before(b.show());c=outcomes.ratingCounter++;b=a.find(".rating.blank:first").clone(true).removeClass("blank");b.find(".outcome_rating_description").val("Meets Expectations").attr("name","learning_outcome[rubric_criterion][ratings]["+c+"][description]");b.find(".outcome_rating_points").val("3").attr("name","learning_outcome[rubric_criterion][ratings]["+c+"][points]");a.find(".add_holder").before(b.show());c=outcomes.ratingCounter++;
b=a.find(".rating.blank:first").clone(true).removeClass("blank");b.find(".outcome_rating_description").val("Does Not Meet Expectations").attr("name","learning_outcome[rubric_criterion][ratings]["+c+"][description]");b.find(".outcome_rating_points").val("0").attr("name","learning_outcome[rubric_criterion][ratings]["+c+"][points]");a.find(".add_holder").before(b.show());a.find(".mastery_points").val("3")}a.find(".outcome_rating_points:first").blur()});$("#edit_outcome_form .outcome_rating_points").blur(function(){var a=
0;$(this).val(parseFloat($(this).val()));$("#edit_outcome_form .rating:not(.blank) .outcome_rating_points").each(function(){var b=parseFloat($(this).val(),10);if(b)a=Math.max(b,a)});$("#edit_outcome_form .points_possible").text(a)});$("#edit_outcome_form .mastery_points").blur(function(){$(this).val(parseFloat($(this).val())||0)});$("#edit_outcome_form .add_rating_link").click(function(a){a.preventDefault();a=$(this).parents("table").find("tr.rating:visible:first").clone(true).removeClass("blank");
if(a.length===0)a=$(this).parents("table").find("tr.rating.blank").clone(true).removeClass("blank");$(this).parents("table").find(".criterion_title").after(a.show());var b=outcomes.ratingCounter++;a.find(".outcome_rating_description").attr("name","learning_outcome[rubric_criterion][ratings]["+b+"][description]");a.find(".outcome_rating_points").attr("name","learning_outcome[rubric_criterion][ratings]["+b+"][points]");a.find(".outcome_rating_points").val(parseFloat(a.find(".outcome_rating_points").val(),
10)+1);a.find(".outcome_rating_points:first").blur();outcomes.sizeRatings()});$("#edit_outcome_form .delete_rating_link").click(function(a){a.preventDefault();$(this).parents("tr").remove();outcomes.sizeRatings()})});