$(function(){
	// 切换class
	$(".address ul li").on("click",function(){
		$(".address ul li").removeClass("active");
		$(this).addClass("active");
	});
	// 输入框实现增减
	var shopTotalprice = 0;
		for (var i = 0; i < $("tbody tr").length; i++) {
			shopTotalprice += $($(".totalPrice")[i]).text()*1

		}
	var tempFavourable =  $(".favourable").text()*1;
	var tempWay =  $(".way").text()*1;
	var tempTotalPrice = shopTotalprice + tempFavourable + tempWay;
	$("#totalPrice").text(returnFloat(tempTotalPrice))
	$(".totalPrices").text(returnFloat(tempTotalPrice))
	console.log(shopTotalprice,tempTotalPrice)
	$(".add").on("click",function(){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val()*1;
		var price = $($(".price")[index]).text()*1;
		var totalPrice =  $($(".totalPrice")[index]).text()*1;
		console.log(tempFavourable,tempWay,totalPrice)
		value++;
		$($(".val")[index]).val(value);
		totalPrice = value*price;
		$($(".totalPrice")[index]).text(totalPrice)
		shopTotalprice += price;
		var tempTotalPrice = shopTotalprice + tempFavourable + tempWay;
		$("#totalPrice").text(returnFloat(tempTotalPrice))
		$(".totalPrices").text(returnFloat(tempTotalPrice))
	});
	$(".minus").on("click",function(){
		console.log(1)
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val()*1;
		var price = $($(".price")[index]).text()*1;
		var totalPrice =  $($(".totalPrice")[index]).text()*1;
		if (value <= 1) {
			return;
		}
		value--;
		$($(".val")[index]).val(value);
		totalPrice = value*price;
		$($(".totalPrice")[index]).text(totalPrice)
		shopTotalprice -= price;
		var tempTotalPrice = shopTotalprice + tempFavourable + tempWay;
		$("#totalPrice").text(returnFloat(tempTotalPrice))
		$(".totalPrices").text(returnFloat(tempTotalPrice))
	});
	$(".val").on("input",function (){
		this.value = this.value.replace(/\D/g,'')
		if (this.value == ""||this.value == 0) {
			this.value = 1;
		}
		this.value = parseInt( this.value)
	});
	$(".val").on("change",function (){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val()*1;
		var price = $($(".price")[index]).text()*1;
		var temp = $($(".totalPrice")[index]).text();
		totalPrice = value*price;
		$($(".totalPrice")[index]).text(totalPrice);
		shopTotalprice += totalPrice;
		shopTotalprice -= temp;
		var tempTotalPrice = shopTotalprice + tempFavourable + tempWay;
		$("#totalPrice").text(returnFloat(tempTotalPrice))
		$(".totalPrices").text(returnFloat(tempTotalPrice))
	});
	// 保留两位小数点
	function returnFloat(value){
	 var value=Math.round(parseFloat(value)*100)/100;
	 var xsd=value.toString().split(".");
	 if(xsd.length==1){
	 value=value.toString()+".00";
	 return value;
	 }
	 if(xsd.length>1){
	 if(xsd[1].length<2){
	  value=value.toString()+"0";
	 }
	 return value;
	 }
	}
	$(".postage").hide();
	$(".preferential button").on("click",function(){
		console.log(1)
	$(".postage").slideToggle();

	})
})