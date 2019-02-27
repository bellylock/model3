$(function(){
	$(".roll li:gt(0)").hide();
	$(".rollBtn li:lt(1)").addClass("active");
	var r;
	var i = 0;
	function cat(){
		r = setInterval(function(){
			i++;
			if (i == $(".roll li").length) {
				i = 0;
			};
			$(".roll li").hide();
			$(".rollBtn li").removeClass("active");
			$($(".roll li")[i]).show();
			$($(".rollBtn li")[i]).addClass("active");
		},3000)
	}
	$(".banner").hover(function(){
		clearInterval(r);
	},function(){
		cat();
	})
	$(".rollBtn>li").on("click",function(){
		var index = $(this).index();
		$(".roll li").hide();
		$(".rollBtn li").removeClass("active");
		$($(".roll li")[index]).show();
		$($(".rollBtn li")[index]).addClass("active");
		i = index
	})
	cat();
})