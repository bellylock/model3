$(function(){
	// 切换class
	$(".text p span").on("click",function(){
		$(".text p span").removeClass("active");
		$(this).addClass("active");
	});
	$(".text h6 p").on("click",function(){
		$(".text h6 p").removeClass("active");
		$(this).addClass("active");
	});
	$(".stages span").on("click",function(){
		$(".stages span").removeClass("active");
		$(this).addClass("active");
	});
	
	// 输入框数量增减
	$(".add").on("click",function(){
		var value = $(".num").val();
		var val = $("form p .a").text()*1;
		if (value>=val) {
			return
		}else{

		value++;
		$(".num").val(value);
		}
	});
	$(".minus").on("click",function(){
		var value = $(".num").val();
		if (value<=1) {
			return;
		}
		value--;
		$(".num").val(value);
	});
	$(".num").on("input",function(){
		this.value = this.value.replace(/\D/g,'');
		if (this.value == ""||this.value == 0) {
			this.value = 1;
		};
		this.value = parseInt(this.value)
		var val = $("form p .a").text()*1;
		// console.log(this.value,val)
		if (this.value >= val) {
			// console.log(0);
			this.value = val;
		}
	});
	// 勾选
	$(".title ul .pane").on("click",function(){
		$(".title ul .pane span").toggleClass("active")
	});
	// 加入购物车
	$(".addSuccess").css({"display":"none"})
	$(".cart").on("click",function(){
		 var r;
		$(".addSuccess").fadeIn(); 
		r = setTimeout(function(){
		$(".addSuccess").fadeOut();
		},1000)
		var localStorage = window.localStorage;
		var shopCart = localStorage.getItem("shopcarts");
		if (shopCart == null) {
			var array = [];
			var obj = {
				img :$(".smallImg:first").attr("src"),
				title :$(".text h3").text(),
				color :$(".text p span.active").text(),
				size :$(".text h6 p.active").text(),
				price : $(".prices").text(),
				number :$(".num").val()
			};
			array.push(obj);
			var arrayString = JSON.stringify(array);
			localStorage.setItem("shopcarts",arrayString)
		}else{
			var shopCart = JSON.parse(shopCart);
			var obj = {
				img :$(".smallImg:first").attr("src"),
				title :$(".text h3").text(),
				color :$(".text p span.active").text(),
				size :$(".text h6 p.active").text(),
				price : $(".prices").text(),
				number :$(".num").val()
			};
			shopCart.push(obj);
			var arrayString = JSON.stringify(shopCart);
			localStorage.setItem("shopcarts",arrayString);
		}
		console.log(array,arrayString,shopCart)
		var value = $(".shopBtn span").text();
		value++
		$(".shopBtn span").text(value);
	});
	//左右无缝滚动图
	var liWidth = $(".smallPic ul li").innerWidth();
	var len = $(".smallPic ul li").length;
	var ulWidth = liWidth*len;
	$(".smallPic ul").width(ulWidth*3);
	var n = 4;
	var boxWidth = liWidth*n;
	$(".smallPic .box").width(boxWidth);
 	$(".smallPic .box ul li:lt(4)").clone().insertAfter(".smallPic .box ul li:last");
	$(".arrowLeft").on("click",function(){
		if(!$(".smallPic ul").is(":animated")){
			prev();
		}
	});
	$(".arrowRight").on("click",function(){
		if(!$(".smallPic ul").is(":animated")){
		next();
	}
	});
	var left = $(".smallPic ul").css("left").replace("px","")*1;
	var i = left/liWidth;
	$($(".smallPic ul li")[i]).addClass("active")
	var r;
	total();
	function total(){
		r = setInterval(function(){
			next();
		},2000)
	}
	
	$(".smallPic").hover(function(){
		clearInterval(r);
	},function(){
		total();
	})
	$(".smallImg").hover(function(){
		var smallImageSrc = $(this).attr("src");
		$(".bigImage").attr("src",smallImageSrc);
		$(".smallPic ul li").removeClass("active")
		$(this).parent("a").parent("li").addClass("active")
	},function(){})
		function prev(){
			var left = $(".smallPic ul").css("left").replace("px","")*1;
			if (left == 0) {
				$(".smallPic ul").css({"left":-liWidth*len})
				$(".smallPic ul").animate({"left": "+="+liWidth})
			}else{
				$(".smallPic ul").animate({"left": "+="+liWidth})
			}
			var i = left/liWidth;
			if (i != 0) {
				i = -i
				var src = $($(".smallPic ul li")[i-1]).children("a").children(".smallImg").attr("src");
				$(".bigImage").attr("src",src);
				$(".smallPic ul li").removeClass("active")
				$($(".smallPic ul li")[i-1]).addClass("active")
			}else{
				i = len-1;
				var src = $($(".smallPic ul li")[i]).children("a").children(".smallImg").attr("src");
				$(".bigImage").attr("src",src);
				$($(".smallPic ul li")[i]).addClass("active")

			}
		}
	function next(){
			var left = $(".smallPic ul").css("left").replace("px","")*1;
			if (left < - liWidth*len) {
				$(".smallPic ul").css({left:0})
				$(".smallPic ul").animate({left: "-="+liWidth})
			}else{
				$(".smallPic ul").animate({left: "-="+liWidth})
			}
			var i = -(left/liWidth)
			var src = $($(".smallPic ul li")[i+1]).children("a").children(".smallImg").attr("src");
			$(".bigImage").attr("src",src);
			$(".smallPic ul li").removeClass("active")
			if (i == 5) {
				i = 0;
			}
			$($(".smallPic ul li")[i+1]).addClass("active")
		}
	// 上下无缝滚动
	var liHeigth = $(".look .box ul li").innerHeight();
	var n =3;
	var len = $(".look .box ul li").length;
	var ulHeigth = liHeigth*len;
	$(".look ul").height(ulHeigth);
	var boxHeigth = liHeigth*n;
	$(".look .box").height(boxHeigth);
	$(".look .box ul li:lt("+ n +")").clone().insertAfter(".look .box ul li:last");
	var a;
	autoPlay();
	function autoPlay(){
		a = setInterval(function(){
			down();
		},4000)
	}
	$(".look").hover(function(){
		clearInterval(a);
	},function(){
		autoPlay();
	});


	$(".down").on("click",function(){
		if(!$(".look .box ul").is(":animated")){
			down();
		}
	});
	$(".up").on("click",function(){
		if(!$(".look .box ul").is(":animated")){
			up();
		}
	});
	function down(){
			var top = $(".look .box ul").css("top").replace("px",'');
			if (top<=-liHeigth*len) {
				$(".look .box ul").css({"top":0});
				$(".look .box ul").animate({"top":"-="+liHeigth});
			}else{
				$(".look .box ul").animate({"top":"-="+liHeigth});
			}
	}
	function up(){
			var top = $(".look .box ul").css("top").replace("px",'');
			if (top == 0) {
				$(".look .box ul").css({"top":-liHeigth*len});
				$(".look .box ul").animate({"top":"+="+liHeigth});
			}else{
				$(".look .box ul").animate({"top":"+="+liHeigth});
			}
	}
	$(".assess").hide();
	$(".proList").hide();
	$(".spec li:lt(1)").addClass("active")
	$(".proIntroduce").on("click",function(){
		$(".assess").hide();
		$(".proList").hide();
		$(".proDetails").show();
	})
	$(".porComment").on("click",function(){
		$(".assess").show();
		$(".proList").hide();
		$(".proDetails").hide();
	})
	$(".norms").on("click",function(){
		$(".assess").hide();
		$(".proList").show();
		$(".proDetails").hide();
	})
	$(".spec li").on("click",function(){
		$(".spec li").removeClass("active");
		$(this).addClass("active");
	})
	$(".title ul .only").on("click",function(){
		$(".title ul .only span").toggleClass("active")
	});
})