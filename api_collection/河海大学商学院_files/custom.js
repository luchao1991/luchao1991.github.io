$(function() {
	/***get-img-links***/
	$("#banner a").each(function() {
		$img = $(this).find("img");
        $("#slider").append('<a href="'+$(this).attr("href")+'" target="_blank"'+' ><img src="'+$img.attr("src")+'" width="1000" height="380" title="'+$(this).attr("title")+'" /></a>');
    });
	$(".submenu, .supmenu").hide();
	$(".menulist .menuitem, .nav li").hover(function(){
		 $(this).siblings().removeClass("cur");
		 $(this).addClass("cur");
		 $(this).children("a:first-child").addClass("selected");
		 $(this).children(".submenu").slideDown(240);
         $(this).children(".supmenu").show();
		},function(){
			$(this).removeClass("cur");
			$(this).children("a:first-child").removeClass("selected");
			$(this).children(".supmenu").hide();
			$(this).children(".submenu").slideUp(180);
			});
	/***mail**/
	$(".switch").click(function(){
			$(".mailslist").slideToggle(100);
		    if($(this).hasClass("up")){
				$(this).removeClass("up");
				}else{
					$(this).addClass("up");
					};
	});
	$(".mailslist li").hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		},function(){
			$(this).removeClass("on");
			});
	$(".mailslist li").click(function(){
		var $str=$(this).attr("id");
		$(".mailslist").slideUp(100);
		$("#mailname").text($(this).text());
		$(".mailname").removeAttr("selected");
		$('.'+ $str).attr("selected","selected");
		$(".switch").removeClass("up");
		});
});