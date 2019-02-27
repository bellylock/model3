$(function(){
	$(".wait li").on("click",function(){
		$(".wait li").removeClass("active")
		$(this).addClass("active")
	})
	$(".pay").hide();
	$(".deliver").hide();
	$(".receipt").hide();
	$(".comment").hide();
	$(".wait li").eq(0).on("click",function(){
	$(".list").show();
	$(".pay").hide();
	$(".deliver").hide();
	$(".receipt").hide();
	$(".comment").hide();

	})
	$(".wait li").eq(1).on("click",function(){
	$(".deliver").show();
	$(".list").hide();
	$(".pay").hide();
	$(".comment").hide();
	})
	$(".wait li").eq(2).on("click",function(){
	$(".receipt").show();
	$(".list").hide();
	$(".pay").hide();
	$(".deliver").hide();
	$(".comment").hide();
	})
	$(".wait li").eq(3).on("click",function(){
	$(".comment").show();
	$(".list").hide();
	$(".pay").hide();
	$(".deliver").hide();
	$(".receipt").hide();
	})
})