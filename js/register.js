	$(function(){
		var aa = document.querySelector("#vCode");
		var code1 = new vCode(aa,{
		    len: 4,             
		    bgColor: "#959595", 
		    colors: [           
		        '#DDDDDD',
		        '#DDFF77',
		        '#77DDFF',
		        '#99BBFF',
		        '#7700BB',
		        '#EEEE00',
		        '#000507',
		        '#980023',
		        '#50001a',
		    ]
		});
		$(".kuang,.check>p").on("click",function(){
			$(".kuang").toggleClass("active")
		})
	})	