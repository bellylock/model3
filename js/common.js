$(function(){
	var localStorage = window.localStorage;
	var shopCart = localStorage.getItem("shopcarts");
	var array = [];
	if (shopCart == null) {
		array = [];
	}else{
		array = JSON.parse(shopCart) ;
	}
	$(".shopBtn span").text(array.length);
	$(".goods").hide();
	$(".menu .title").on("click",function(){
		$(".goods").slideToggle();
	}); 
})