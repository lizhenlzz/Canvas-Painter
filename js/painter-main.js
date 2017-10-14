(function(){
	
	function init(){
		var panter= new Painter("box")
		panter.setLine(5);
		panter.isRoundline(true);
		//panter.setLineColor("red")
		//设置工具栏的隐藏和出现
		var toolView=document.querySelector(".tool")
		document.querySelector(".openbutton").onclick=function(){
			toolView.style.display=toolView.style.display=="block"?"none":"block";
		}
		//画笔宽度
		document.querySelector("input[type=range]").value=panter.context.lineWidth*2;
		document.querySelector("input[type=range]").onchange=function(){
			panter.setLine(this.value/2);
		}
		//画笔颜色
		document.querySelector("input[type=color]").onchange=function(){
			panter.setLineColor(this.value)
		}
		//清屏
		document.querySelector("input[type=button]").onclick=function(){
			panter.cla()
		}
		//下载
		var download=document.querySelector(".download")
		download.onclick=function(){
			var url=panter.save()
			download.href=url;
		}
//		document.querySelector("p").onclick=function(){
//			document.body.style.cursor="url(guang.png),pointer";
//			panter.setLineColor("skyblue")
//			panter.eraser()
//			panter.linewidth(30)
//		}
        //橡皮檫
        document.querySelector("p").onclick=function(){
        	//document.body.style.cursor="url(guang.png),pointer";
        	panter.eraser()
        }
	}
	init()
})()
