$(function(){
	var localStorage = window.localStorage;
	var shopCart = localStorage.getItem("shopcarts");
	var array = [];
	
	if (shopCart != null) {
		array = JSON.parse(shopCart) ;
	}
	$(".shopBtn span").text(array.length); 
	for (var i = 0; i < array.length; i++) {
		$("tbody").append(`
				<tr index="${i}">
					<td>
						<div class="check" index="${i}"></div>
						<a href="pro_details.html"><img src="${array[i].img}"></a>
					</td>
					<td class="click" index="${i}">
						<div class="text">
							<h5><a href="pro_details.html">${array[i].title}</h5>
							<h6><span>7</span>支持7天无理由退货</h6>
						</div>
						<div class="nature">
							<span>颜色：${array[i].color}</span>
							<span>尺寸：${array[i].size}</span>
						</div>
					</td>
					<td class="click" index="${i}"><p>￥<span class="price" index="${i}">${array[i].price}</span></p></td>
					<td>
						<button index="${i}"  type="button" class="minus">-</button>
						<input index="${i}"  type="text" class="val " value="${array[i].number}">
						<button index="${i}"  type="button" class="add">+</button>
					</td>
					<td class="click" index="${i}"><p>￥<span class="totalPrice" index="${i}">119</span></p></td>
					<td><h6 class="house">收藏</h6><h6 class="delete" index="${i}">删除</h6></td>
				</tr>
			`)
	}

	// 增加数量
	var count = 0;
	var totalPrice = 0;
	var shopCount =  0;
	for (var i = 0; i < $("tbody tr").length; i++) {
			var value = $($(".val")[i]).val();
			var price = $($(".price")[i]).text()*1;
			var temptotalPrice = value*price;
			$($(".totalPrice")[i]).text(returnFloat(temptotalPrice));
		}
		var allCount = $("tbody tr").length;
		$(".allCount").text(allCount)

	$(".add").on("click",function(){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val();
		var price = $($(".price")[index]).text()*1;
		value++;
		$($(".val")[index]).val(value);
		var temptotalPrice = value*price;
		$($(".totalPrice")[index]).text(returnFloat(temptotalPrice));
		if ($($(".check")[index]).hasClass("active")) {
			totalPrice += price;
			$("#totalPrice").text(returnFloat(totalPrice))
			 // shopCount++;
			 // $("#shopCount").text(shopCount)
		} 
	});
	// 减少数量
	$(".minus").on("click",function(){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val();
		var price = $($(".price")[index]).text()*1;
		if (value<= 1) {
			return;
		}
		value--;
		$($(".val")[index]).val(value);
		var temptotalPrice = value*price;
		$($(".totalPrice")[index]).text(returnFloat(temptotalPrice));
		if ($($(".check")[index]).hasClass("active")) {
			totalPrice -= price;
			$("#totalPrice").text(returnFloat(totalPrice))
			// shopCount--;
			//  $("#shopCount").text(shopCount)
		} 
	});
	// 输入时间
	$(".val").on("input",function(){
		this.value = this.value.replace(/\D/g,'');
		if (this.value == ""|| this.value ==0) {
			this.value = 1;
		}
		this.value = parseInt(this.value)
	});
	// change事件
	$(".val").on("change",function(){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val();
		var price = $($(".price")[index]).text()*1;
		var temptotalPrice = value*price;
		var temp = $($(".totalPrice")[index]).text();
		$($(".totalPrice")[index]).text(returnFloat(temptotalPrice));
		if ($($(".check")[index]).hasClass("active")) {
			totalPrice +=temptotalPrice;
			totalPrice -=temp
		}
		$("#totalPrice").text(returnFloat(totalPrice))
	});
	// 勾选事件
	$(".click,.check").on("click",function(){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val()*1;
		if ($($(".check")[index]).hasClass("active")) {
			$($(".check")[index]).removeClass("active")
			$($("tbody tr")[index]).removeClass("active")
			count--;
			// shopCount -= value
			shopCount --;
			var temptotalPrice = $($(".totalPrice")[index]).text()*1;
			totalPrice -= temptotalPrice;
		}else{
			$($(".check")[index]).addClass("active")
			$($("tbody tr")[index]).addClass("active")

			count++;
			// shopCount += value
			shopCount ++;
			var temptotalPrice = $($(".totalPrice")[index]).text()*1;
			totalPrice += temptotalPrice;
		}
		if (count == $("tbody tr").length) {
			$(".pane").addClass("active");
			$(".case").addClass("active");
		}else{
			$(".pane").removeClass("active");
			$(".case").removeClass("active");
		}
		 $("#totalPrice").text(returnFloat(totalPrice))
		 $("#shopCount").text(shopCount)
	});
	// 全选
	$(".allCheck").on("click",function(){
		if ($("tbody tr").length == 0) {
			return
		}
		if ($(".pane").hasClass("active")) {
			$(".pane").removeClass("active");
			$(".check").removeClass("active")
			$(".case").removeClass("active");
			$("tbody tr").removeClass("active");

			count = 0;
			totalPrice = 0;
			shopCount = 0;
			}else{
				$(".pane").addClass("active");
				$(".case").addClass("active");
				$("tbody tr").addClass("active");

				count = $("tbody tr").length;
				for (var i = 0; i < $("tbody tr").length; i++) {
					var value = $($(".val")[i]).val()*1;
					var temptotalPrice = $($(".totalPrice")[i]).text()*1;
					if ($($(".check")[i]).hasClass("active")) {
					}else{
					totalPrice +=temptotalPrice;
					// shopCount += value;	
					shopCount ++; 
					$($(".check")[i]).addClass("active");
					}
				}
			}
			 $("#shopCount").text(shopCount)
			 $("#totalPrice").text(returnFloat(totalPrice))
	});

	// 分类勾选
	$(".mall").on("click",function(){
		if ($("tbody tr").length == 0) {
			return
		}
		if($(".case").hasClass("active")){
			$(".case").removeClass("active");
			$(".check").removeClass("active");
			$(".pane").removeClass("active");
			$("tbody tr").removeClass("active");

			count = 0
			totalPrice = 0;
			shopCount = 0;
		}else{
			$(".case").addClass("active");
			$(".pane").addClass("active");
			$("tbody tr").addClass("active");

			count = $("tbody tr").length;
			for (var i = 0; i < $("tbody tr").length; i++) {
					var value = $($(".val")[i]).val()*1;
					var temptotalPrice = $($(".totalPrice")[i]).text()*1;
					if ($($(".check")[i]).hasClass("active")) {
					}else{
					totalPrice +=temptotalPrice;
					// shopCount += value;
					shopCount ++;	 
					$($(".check")[i]).addClass("active");
					}
				}
		}
		$("#shopCount").text(shopCount)
		$("#totalPrice").text(returnFloat(totalPrice))
	});
	$(".tip").hide()
	// 单项删除
	$(".delete").on("click",function(){
		var index = $(this).attr("index");
		var value = $($(".val")[index]).val()*1;
		layer.confirm("确认是否删除",{
			btn:['确定','取消']
		},function(){
			layer.closeAll();
			if ($($(".check")[index]).hasClass("active")) {
				count--;
				// shopCount -= value;
				shopCount --;
				$("#shopCount").text(shopCount)
				console.log(count,shopCount)
				var temp = $($(".totalPrice")[index]).text();
				totalPrice -= temp
				$("#totalPrice").text(returnFloat(totalPrice));
			}
			$($("tbody tr")[index]).remove();
			array.splice(index,1)
			if ($("tbody tr").length == 0) {
				$(".mall").remove();
				$(".tip").show();
			}
			if ( count != $("tbody tr").length || count == 0) {
				$(".pane").removeClass("active")
				$(".case").removeClass("active");
			}else{
				$(".pane").addClass("active")
				$(".case").addClass("active");
			}
			for (var i = 0; i < $("tbody tr").length; i++) {
				$($(".check")[i]).attr("index", i);
				$($(".val")[i]).attr("index", i);
				$($(".add")[i]).attr("index", i);
				$($(".minus")[i]).attr("index", i);
				$($(".delete")[i]).attr("index", i);
				$($("tbody tr")[i]).children("td").attr("index", i);
				$($(".price")[i]).attr("index", i);
				$($(".totalPrice")[i]).attr("index", i);
				$($(".click")[i]).attr("index", i);
				$($("tbody tr")[i]).attr("index", i);
			}
			var allCount = $("tbody tr").length;
			var arrayString = JSON.stringify(array);
			localStorage.setItem("shopcarts",arrayString)
			$(".allCount").text(allCount)
			$(".shopBtn span").text(array.length); 
		},function(){

		})

	});
// 选中删除
	$(".allDelete").on("click",function(){
		if (!$(".check").hasClass("active")&&$("tbody tr").length != 0) {
			layer.confirm("您还未选中任何商品,请选择",{
			btn:['确定','取消']	
			},function(){
				layer.closeAll();
			})
		}else if($(".check").hasClass("active")&&$("tbody tr").length != 0){
		layer.confirm("确认是否删除",{
			btn:['确定','取消']
		},function(){
			layer.closeAll();
		for (var i = 0; i < $("tbody tr").length; i++) {
			if ($($(".check")[i]).hasClass("active")) {
				$($("tbody tr")[i]).remove();
				array.splice(i,1)
				i = -1
			};
		};
		if ($("tbody tr").length == 0) {
			$(".mall").remove();
			$(".tip").show();
		}
		for (var i = 0; i < $("tbody tr").length; i++) {
			$($(".check")[i]).attr("index", i);
			$($(".val")[i]).attr("index", i);
			$($(".add")[i]).attr("index", i);
			$($(".minus")[i]).attr("index", i);
			$($(".delete")[i]).attr("index", i);
			$($("tbody tr")[i]).children("td").attr("index", i);
			$($(".price")[i]).attr("index", i);
			$($(".totalPrice")[i]).attr("index", i);
			$($(".click")[i]).attr("index", i);
			$($("tbody tr")[i]).attr("index", i);
		}
		$(".pane").removeClass("active");
		$(".case").removeClass("active");
		count = 0;
		shopCount = 0;
		$("#shopCount").text(shopCount)
		totalPrice = 0;
		$("#totalPrice").text(returnFloat(totalPrice))
		var allCount = $("tbody tr").length;
		var arrayString = JSON.stringify(array)
		localStorage.setItem("shopcarts",arrayString)
		$(".allCount").text(allCount)
		$(".shopBtn span").text(array.length); 
		},function(){
		})
		}
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
	if (array.length == 0) {
		$(".mall").remove();
	}

})