(function(){
	function Painter(id){
		var canvasEle= document.getElementById(id);
		canvasEle.width=innerWidth;
		canvasEle.height=innerHeight;
		this.context=canvasEle.getContext("2d");
		//console.log(this)
		this.context.strokeStyle="black"
		
		//创建线性渐变的方法->CanvasGradient类型的对象
//		var linearGradient= this.context.createLinearGradient(0,0,innerWidth,innerHeight);
//		linearGradient.addColorStop(0,"skyblue")
//		linearGradient.addColorStop(0.4,"white")
//		linearGradient.addColorStop(1,"green")
//		//添加渐变颜色
//		this.context.strokeStyle=linearGradient;
		
		this.drowLine();
	};
	Painter.prototype.drowLine=function(){
		var self=this;
		//console.log(this.context)
		this.context.canvas.addEventListener("mousedown",startAction)
		this.context.canvas.addEventListener("mouseup",endAction)
		function startAction(event){
			//如果没有使用橡皮就是画线
			if(!self.isClear){
				self.context.beginPath()
				self.context.moveTo(event.pageX,event.pageY)
				self.context.stroke();
			}
			self.context.canvas.addEventListener("mousemove",moveAction)
		}
		function endAction(){
			self.isClear=false
			self.context.canvas.removeEventListener("mousemove",moveAction)
		}
		function moveAction(event){
			if (self.isClear) {
				self.context.clearRect(event.pageX-8,event.pageY-8,30,30)
			    return
			}
			self.context.lineTo(event.pageX,event.pageY)
			self.context.stroke();
		}
	};
	Painter.prototype.setLine=function(width){//线条宽度
		this.context.lineWidth=width;
	}
	Painter.prototype.isRoundline=function(isRound){//线条边缘形状
		this.context.lineCap=isRound?"round":"butt";
	}
	Painter.prototype.setLineColor=function(color){//线条颜色
		this.context.strokeStyle=color;
	}
	Painter.prototype.save=function(){
		return this.context.canvas.toDataURL()
	}
	Painter.prototype.cla=function(){
		this.context.clearRect(0,0,innerWidth,innerHeight)
	}
	Painter.prototype.eraser=function(event){
		//this.drowLine()
		this.isClear=true;
	}
	
	window.Painter=Painter;
})()
