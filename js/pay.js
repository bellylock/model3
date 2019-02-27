$(function(){
	$(".password").on("click",function(){
		var index = $(this).attr("index");
		$(this).blur();
		for (var i = 0; i < $(".password").length; i++) {

			if ($($(".password")[i]).val() == "") {
				$($(".password")[i]).focus();
				return;
			}else if(i ==  $(".password").length-1){
				$($(".password")[i]).focus();
			}
		}
	})
	$(".password").on("input",function(){
		this.value = this.value.replace(/[^\d]/g,"");
		if (this.value == "") {
			return;
		}
		var index = $(this).attr("index");
		$(this).blur();
		$($(".password")[index*1+1]).focus();
	});
	$(".password").on("keydown",function(){
		var index = $(this).attr("index");
		if (event.keyCode == 8) {
			if ($($(".password")[index]).val() != "") {
				$($(".password")[index]).val() == "";
			}else{
				$($(".password")[index*1-1]).value == "";
				$(this).blur();
				$($(".password")[index*1-1]).focus();
			}
			if (index == 0) {
				$(this).focus();
			}
		}

	});
	$(".btn").on("click",function(){
				layer.confirm("确认是否支付", {
				  btn: ['支付','不支付'] 
				},function(){
					layer.closeAll();
					location.href = "pay_success.html"
				},function(){
					location.href = "pay_failure.html";
				});
	});
	$(".way li").on("click",function(){
		$(".way li").removeClass("active")
		$(this).addClass("active")
		var imgSrc = $(this).children("img").attr("src");
		$(".thumb").attr("src",imgSrc);
	});
})