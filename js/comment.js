$(function(){
	$(".msg ul li").eq(0).children("img").on("click",function(){
		var src = ("img/star.png");
		var aIndex = $(this).parent().attr("index");
		var index = $(this).attr("index")*1;
		$(".msg ul li").eq(0).children("img").attr("src","img/star_pic.png")
		for (var i = 0; i < (index + 1); i++) {
		$($(".msg ul li").eq(0).children("img")[i]).attr("src",src)
			switch(i){
			case 0:
			console.log($($("ul li")[aIndex]));
			 $(".msg ul li").eq(0).children("span").text("差")
			break;
			case 1:
			$(".msg ul li").eq(0).children("span").text("一般")
			break;
			case 2:
			$(".msg ul li").eq(0).children("span").text("满意");
			break;
			case 3:
			$(".msg ul li").eq(0).children("span").text("好")
			break;
			case 4:
			$(".msg ul li").eq(0).children("span").text("非常好")
			break;
			}
		}
	})
	$(".msg ul li").eq(1).children("img").on("click",function(){
		var src = ("img/star.png");
		var aIndex = $(this).parent().attr("index");
		var index = $(this).attr("index")*1;
		$(".msg ul li").eq(1).children("img").attr("src","img/star_pic.png")
		for (var i = 0; i < (index + 1); i++) {
		$($(".msg ul li").eq(1).children("img")[i]).attr("src",src)
			switch(i){
			case 0:
			console.log($($("ul li")[aIndex]));
			 $(".msg ul li").eq(1).children("span").text("差")
			break;
			case 1:
			$(".msg ul li").eq(1).children("span").text("一般")
			break;
			case 2:
			$(".msg ul li").eq(1).children("span").text("满意");
			break;
			case 3:
			$(".msg ul li").eq(1).children("span").text("好")
			break;
			case 4:
			$(".msg ul li").eq(1).children("span").text("非常好")
			break;
			}
		}
	})
	$(".msg ul li").eq(2).children("img").on("click",function(){
		var src = ("img/star.png");
		var aIndex = $(this).parent().attr("index");
		var index = $(this).attr("index")*1;
		$(".msg ul li").eq(2).children("img").attr("src","img/star_pic.png")
		for (var i = 0; i < (index + 1); i++) {
		$($(".msg ul li").eq(2).children("img")[i]).attr("src",src)
			switch(i){
			case 0:
			console.log($($("ul li")[aIndex]));
			 $(".msg ul li").eq(2).children("span").text("差")
			break;
			case 1:
			$(".msg ul li").eq(2).children("span").text("一般")
			break;
			case 2:
			$(".msg ul li").eq(2).children("span").text("满意");
			break;
			case 3:
			$(".msg ul li").eq(2).children("span").text("好")
			break;
			case 4:
			$(".msg ul li").eq(2).children("span").text("非常好")
			break;
			}
		}
	})
	$(".msg input").hide();
	$(".comment .msg a").on("click",function(){
		$("#upload").click();
	})
})