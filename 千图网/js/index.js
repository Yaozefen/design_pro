 //获取画布元素
 var canvas = document.getElementById("my_mark");
 //绘制环境（我称为“画笔”）
 var cxt = canvas.getContext("2d");

 //画一个实体方块---fillRect(x,y,w,h);
 cxt.fillRect(50, 50, 100, 100);

 //画出一个空心方块---strokeRect(x,y,w,h);
 cxt.strokeRect(200, 200, 100, 100);
 //cxt.strokeRect(200.5,200.5,100,100);