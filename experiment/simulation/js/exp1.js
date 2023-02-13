	var ctx = null;
	var canvas;
	var xCo = new Array();
	var yCo = new Array();
	var uni = new Array();
	var uni1 = new Array();
	var uni2 = new Array();
	var uni3 = new Array();
	var uni4 = new Array();
	var newco = new Array();
	var count = 0;
	var coordinates = new Array();
		
	$(document).ready(function(){
	$("#canvas").click(function(e){
	getPosition(e);
	});
        $("#calculate").click(function() {		
        var id = $('input[name="operation"]:checked').val();
        if (count == 4){
				if (id == "addition") addition();
				else if (id == "substraction") substraction();
				else if (id == "union") union();
				else if (id == "intersection") intersection();
         } 
		 
		 else if(count < 4) {
			 if(id == "complement" && count == 2) {
				 complement();
				 
			 }
				 else if(id == "complement" && count<2){
				 alert("You need 2 points");	
				
			 }			 
			 else {
				alert("You need 4 points");	 
			 }
		 }
        });<!---------------- End of calculate click function----------------!>
		
	var selected_id = "addition";
	$('input[name="operation"]').click(function() {
	var current_id = $(this).attr("id");
	if (selected_id == current_id) {
	//DO nothing	
	} else {
	selected_id = current_id;
			clr();
	}
		});<!---------------- End of canvas click function----------------!>
	});<!---------------- End of ready function----------------!>
	var pointSize = 5;
	window.onload = function () {
	canvas = document.getElementById("canvas"),
	ctx = canvas.getContext('2d'),
	transX = canvas.width * 0.5,
	transY = canvas.height * 0.835;
	ctx.translate(transX, transY);
	ctx.fillRect(0, - transY, 1, canvas.height); //vertical Axis
	ctx.fillRect( - transX, 0, canvas.width, 1); //Horizantal Axis
	canvas.onmousemove = function(e) {
	var pos = getMousePos(canvas, e);
	// out.innerHTML = 'X:' + pos.x + ' Y:' + pos.y;
	}
	drawGrid('deep gray', 45, 45);
	drawVerticalAxisTicks();
	drawHorizontalAxisTicks();
	label();
                };
  <!--------------end of axis translation----------->
  function getPosition(event){
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left - transX;
        var y = event.clientY - rect.top - transY;
        drawCoordinates(x, y);
  }
  function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        //alert(rect+"    "+evt.clientX+"    "+rect.left+"     "+transX);
        return {
        x: evt.clientX - (rect.left + 0.5) - transX,
                y: evt.clientY - rect.top - transY
    };
  }
<!--------------end of mousepos---------------------->
  function drawGrid(color, stepx, stepy) {
		ctx.fillStyle = "white";
		ctx.fillRect( - 450, 450, ctx.canvas.width, ctx.canvas.height);
		ctx.lineWidth = 0.5;
		ctx.strokeStyle = color;
		for (var i = - 450; i < ctx.canvas.width; i += stepx) {
		ctx.beginPath();
		ctx.moveTo(i, - 450);
		ctx.lineTo(i, ctx.canvas.height);
		ctx.stroke();
  }

  for (var i = -450; i < ctx.canvas.height; i += stepy) {
		ctx.beginPath();
		ctx.moveTo( - 450, i);
		ctx.lineTo(ctx.canvas.width, i);
		ctx.stroke();
   }
 } 
<!------------------------end of drawGrid------------------------>
  function drawVerticalAxisTicks() {
		var deltaX;
		for (var i = 1; i < 2; ++i) {
		ctx.beginPath();
		if (i % 5 === 0)
		deltaX = 10 / 2;
		else
		deltaX = 10 / 2;
		ctx.moveTo(0, -460 + i * 100);
		ctx.lineTo(0 + deltaX + 5, - 460 + i * 100);
		ctx.stroke();
    }
  }
 function drawHorizontalAxisTicks() {
		var deltaY;
		for (var i = 1; i < 45; ++i) {
		ctx.beginPath();
		if (i % 5 === 0)
		deltaY = 10 / 2;
		else
		deltaY = 10 / 2;
		ctx.moveTo( - 472.5 + i * 22.5, 0);
		ctx.lineTo( - 472.5 + i * 22.5, deltaY);
		ctx.stroke();
   }
  }
<!------------------------------end of draw Axis Ticks------------------------------>
  function label()
  {
		var num = ['-18', '-16', '-14', '-12', '-10', '-08', '-06', '-04', '-02', ' 0 ', ' 02', ' 04', ' 06', ' 08', ' 10', ' 12', ' 14', ' 16', ' 18'],
		x, w, i = 0;
		var z = - 475;
		ctx.fillStyle = "blue";
		ctx.font = "15px Verdana";
		for (i = 0; i < num.length; i++){
		ctx.fillText(num[i], z + 55, 0 + 20);
		z += 45;
  }
		var num= ['1'],
		y,w,j= 0;
		ctx.fillStyle="blue";
		ctx.font="15px Verdana";
		for(j=0;j<num.length;j++){
		ctx.fillText(num[j], 0 + 10, - 455 + 100);
    }
    }
    <!-------------------------------end of labeling axis----------------------------------->
  function drawCoordinates(x,y){
		var ctx = document.getElementById("canvas").getContext("2d");
		var operation = $("input[name='operation']:checked").val();
		if (operation == "complement") {
		if (count == 2)
		return false;
		}
		if((y >= -2 && y <= 2) && count<=3) {
		var temp = x;
		x = Math.abs(x) - 0.5;
		var remainder = x % 22.5; // 24
		var quotient = parseInt(x / 22.5); // 9
		// alert(x+"    "+remainder+"     "+quotient);
		var leftVal = Math.abs(quotient) * 22.5; // 225
		var rightVal = leftVal + 22.5; //250
		var diff1 = Math.abs(leftVal - x);
		var diff2 = Math.abs(rightVal - x);
		var xCo;
		quotient = Math.abs(quotient);
		if (diff1 < diff2) {
		xCo = leftVal;
        }
		else {
        xCo = rightVal;
        }
		if(Math.sign(temp) == -1) xCo = -1 * xCo;//   -1 * 45 == -45
		coordinates[count] = xCo;
		arrangeCoordinates();
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc(xCo, 0, pointSize, 0, Math.PI * 2, true);
		ctx.fill();
    if (count==1)
    {
		var mid1 = (coordinates[0] + coordinates[1]) / 2;
		ctx.beginPath();
		ctx.moveTo(coordinates[1], 0);
		ctx.lineTo(mid1, - 360);
		ctx.lineTo(coordinates[0], 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "blue";
		ctx.stroke();
    }
    if (count==3)
    {
		var mid2 = (coordinates[2] + coordinates[3]) / 2;
		ctx.beginPath();
		ctx.moveTo(coordinates[3], 0);
		ctx.lineTo(mid2, - 360);
		ctx.lineTo(coordinates[2], 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "green";
		ctx.stroke();
    }	 
	if(count == 4) $("#coor").val(coordinates);
    count++;
    } 
	else {
     return 0;
         }
    }
    <!---------------------------------------------end of draw coordinates----------------------------------------->
    function arrangeCoordinates() {
                var radioVal = $("input[name=operation]:checked").val();
                if (count == 1) {
        if (coordinates[0] > coordinates[1]) {
        var temp = coordinates[0];
                coordinates[0] = coordinates[1];
                coordinates[1] = temp;
    }
    }
    if(count == 3) {
                if (coordinates[2] > coordinates[3]) {
        var temp = coordinates[2];
                coordinates[2] = coordinates[3];
                coordinates[3] = temp;
    }
    }
    newco=coordinates;
    }

    function addition(){
		clearCanvas();
		var x1 = coordinates[0];
		var x2 = coordinates[1];
		var x3 = coordinates[2];
		var x4 = coordinates[3];
		var add1 = x1 + x3;
		var add2 = x2 + x4;
		var mid3 = (add1 + add2) / 2;
		ctx.beginPath();
		ctx.moveTo(add2, 0);
		ctx.lineTo(mid3, - 360);
		ctx.lineTo(add1, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
    }
    <!-------------------------------------------end of addition----------------------------------------------->
    function substraction(){
		clearCanvas();
		var x1 = coordinates[0];
		var x2 = coordinates[1];
		var x3 = coordinates[2];
		var x4 = coordinates[3];
		var sub1 = (x1) - (x4);
		var sub2 = (x2) - (x3);
		var mid4 = (sub1 + sub2) / 2;
		ctx.beginPath();
		ctx.moveTo(sub2, 0);
		ctx.lineTo(mid4, - 360);
		ctx.lineTo(sub1, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
    }
    <!---------------------------------end of substraction---------------------------------------->
    function complement(){
		clearCanvas();
		var x1 = coordinates[0];
		var x2 = coordinates[1];
		if (count == 2){
		var mid5 = (x1 + x2) / 2;
		ctx.beginPath();
		ctx.moveTo(x2, - 360);
		ctx.lineTo(mid5, 0);
		ctx.lineTo(x1, - 360);
		ctx.moveTo(x1, - 360);
		ctx.lineTo( - 450, - 360);
		ctx.moveTo(x2, - 360);
		ctx.lineTo(450, - 360);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
    }
    else
    {
                return false; }
    }  
    <!------------------------------------end of complement-------------------------------------->

    function union(){
		clearCanvas();
		var x1 = coordinates[0];
		var x2 = coordinates[1];
		var x3 = coordinates[2];
		var x4 = coordinates[3];
		var p1 = newco[0];
		var p2 = newco[1];
		var p3 = newco[2];
		var p4 = newco[3];
		var m1 = (p1 + p2) / 2;
		var m2 = (p3 + p4) / 2;
	if (p1 > p3 && p4 > p2) {
    if (m1 < m2) {
        uni1 = math.intersect([p3, 0], [m2, - 360], [p1, 0], [m1, - 360]);
		uni2 = math.intersect([p3, 0], [m2, - 360], [p2, 0], [m1, - 360]);
		var x5 = uni1[0];
		var y5 = uni1[1];
		var x6 = uni2[0];
		var y6 = uni2[1];
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(x5, y5);
		ctx.lineTo(m1, - 360);
		ctx.lineTo(x6, y6);
		ctx.lineTo(m2, - 360);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
    } 
    else if(m1>m2) {
		uni1 = math.intersect([p1, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		uni2 = math.intersect([p2, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		var x5 = uni1[0];
		var y5 = uni1[1];
		var x6 = uni2[0];
		var y6 = uni2[1];
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(m2, - 360);
		ctx.lineTo(x5, y5);
		ctx.lineTo(m1, - 360);
		ctx.lineTo(x6, y6);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
    }
    else if(m1==m2){
		var mid6 = (p3 + p4) / 2;
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(mid6, - 360);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
    }
    }
	else if(p1<p3 && p4<p2) {
        if (m1 < m2) {
        uni3 = math.intersect([p3, 0], [m2, - 360], [p2, 0], [m1, - 360]);
		uni4 = math.intersect([p4, 0], [m2, - 360], [p2, 0], [m1, - 360]);
		var x7 = uni3[0];
		var y7 = uni3[1];
		var x8 = uni4[0];
		var y8 = uni4[1];
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(m1, - 360);
		ctx.lineTo(x7, y7);
		ctx.lineTo(m2, - 360);
		ctx.lineTo(x8, y8);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
                     }
	else if(m1>m2) {
		uni3 = math.intersect([p1, 0], [m1, - 360], [p3, 0], [m2, - 360]);
		uni4 = math.intersect([p1, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		var x7 = uni3[0];
		var y7 = uni3[1];
		var x8 = uni4[0];
		var y8 = uni4[1];
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(x7, y7);
		ctx.lineTo(m2, - 360);
		ctx.lineTo(x8, y8);
		ctx.lineTo(m1, - 360);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            }
	else if(m1==m2) {
		var mid7 = (p1 + p2) / 2;
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(mid7, - 360);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            }
            }
	else if(p1>p3) {
		uni = math.intersect([m1, - 360], [p1, 0], [p4, 0], [m2, - 360]);
		var x5 = uni[0];
		var y5 = uni[1];
		ctx.beginPath();
		ctx.moveTo(m1, - 360);
		ctx.lineTo(p2, 0);
		ctx.moveTo(x5, y5);
		ctx.lineTo(m1, - 360);
		ctx.moveTo(m2, - 360);
		ctx.lineTo(x5, y5);
		ctx.moveTo(p3, 0);
		ctx.lineTo(m2, - 360);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            }
	else  {
		uni = math.intersect([m1, - 360], [p2, 0], [p3, 0], [m2, - 360]);
		var x5 = uni[0];
		var y5 = uni[1];
		ctx.beginPath();
		ctx.moveTo(m1, - 360);
		ctx.lineTo(p1, 0);
		ctx.moveTo(x5, y5);
		ctx.lineTo(m1, - 360);
		ctx.moveTo(m2, - 360);
		ctx.lineTo(x5, y5);
		ctx.moveTo(p4, 0);
		ctx.lineTo(m2, - 360);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            }
            }
            <!----------------------------------------end of union----------------------------------->
 function intersection(){
		clearCanvas();
		var x1 = coordinates[0];
		var x2 = coordinates[1];
		var x3 = coordinates[2];
		var x4 = coordinates[3];
		var p1 = newco[0];
		var p2 = newco[1];
		var p3 = newco[2];
		var p4 = newco[3];
		var m1 = (p1 + p2) / 2;
		var m2 = (p3 + p4) / 2;
      if (p1 > p3 && p4 > p2) {
      if (m1 < m2) {
		uni1 = math.intersect([p3, 0], [m2, - 360], [p1, 0], [m1, - 360]);
		uni2 = math.intersect([p3, 0], [m2, - 360], [p2, 0], [m1, - 360]);
		var x5 = uni1[0];
		var y5 = uni1[1];
		var x6 = uni2[0];
		var y6 = uni2[1];
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(x5, y5);
		ctx.lineTo(x6, y6);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            } 
       else if(m1>m2) {
		uni1 = math.intersect([p1, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		uni2 = math.intersect([p2, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		var x5 = uni1[0];
		var y5 = uni1[1];
		var x6 = uni2[0];
		var y6 = uni2[1];
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(x5, y5);
		ctx.lineTo(x6, y6);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            }
       else if(m1==m2){
		var mid6 = (p3 + p4) / 2;
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(mid6, - 360);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
            }
            }
	   else if(p1<p3 && p4<p2) {
       if (m1 < m2) {
		uni3 = math.intersect([p3, 0], [m2, - 360], [p2, 0], [m1, - 360]);
		uni4 = math.intersect([p4, 0], [m2, - 360], [p2, 0], [m1, - 360]);
		var x7 = uni3[0];
		var y7 = uni3[1];
		var x8 = uni4[0];
		var y8 = uni4[1];
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(x7, y7);
		ctx.lineTo(x8, y8);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
                    } 
	   else if(m1>m2) {
		uni3 = math.intersect([p1, 0], [m1, - 360], [p3, 0], [m2, - 360]);
		uni4 = math.intersect([p1, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		var x7 = uni3[0];
		var y7 = uni3[1];
		var x8 = uni4[0];
		var y8 = uni4[1];
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(x7, y7);
		ctx.lineTo(x8, y8);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
                    }
	   else if(m1==m2) {
		var mid7 = (p1 + p2) / 2;
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(mid7, - 360);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
                    }
                    }
	   else if(p1>p3) {
		uni = math.intersect([p1, 0], [m1, - 360], [p4, 0], [m2, - 360]);
		var x5 = uni[0];
		var y5 = uni[1];
		ctx.beginPath();
		ctx.moveTo(p1, 0);
		ctx.lineTo(x5, y5);
		ctx.lineTo(p4, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
                    } 
	    else  {
		uni = math.intersect([p3, 0], [m2, - 360], [m1, - 360], [p2, 0]);
		var x5 = uni[0];
		var y5 = uni[1];
		ctx.beginPath();
		ctx.moveTo(p3, 0);
		ctx.lineTo(x5, y5);
		ctx.lineTo(p2, 0);
		ctx.lineWidth = 3;
		ctx.strokeStyle = "red";
		ctx.stroke();
              }
                    }
  <!--------------------------------------end of intersection------------------------------------------>
 function redrawPoints() {
		ctx.fillStyle = "blue";
		ctx.beginPath();
		for (i = 0; i < 4; i++) {
        ctx.arc(coordinates[i], 0, pointSize, 0, Math.PI * 2, true);
		ctx.fill();
                    }
		var mid1 =	(coordinates[0]+ coordinates[1])/2;
		ctx.beginPath();
		ctx.moveTo(coordinates[1],0);
		ctx.lineTo(mid1,-360);
		ctx.lineTo(coordinates[0],0);
		ctx.lineWidth=3;
		ctx.strokeStyle="blue";
		ctx.stroke();
		var mid2 =	(coordinates[2]+ coordinates[3])/2;
		ctx.beginPath();
		ctx.moveTo(coordinates[3],0);
		ctx.lineTo(mid2,-360);
		ctx.lineTo(coordinates[2],0);
		ctx.lineWidth=3;
		ctx.strokeStyle="green";
		ctx.stroke();
                    }
   <!-------------------------------------end of redraw points--------------------------------------->
 function clearCanvas() {
		ctx.clearRect( - 450, - 450, canvas.width, canvas.height);
		ctx.fillRect(0, - transY, 1, canvas.height); //vertical Axis
		ctx.fillRect( - transX, 0, canvas.width, 1); //Horizantal Axis
		drawGrid('black', 45, 45);
		drawVerticalAxisTicks();
		drawHorizontalAxisTicks();
		label();
		redrawPoints();
                    }
   <!-------------------------------------end of clear canvas--------------------------------------->
 function clr() {
		ctx.clearRect( - 450, - 450, canvas.width, canvas.height);
		ctx.fillRect(0, - transY, 1, canvas.height); //vertical Axis
		ctx.fillRect( - transX, 0, canvas.width, 1); //Horizantal Axis
		drawGrid('black', 45, 45);
		drawVerticalAxisTicks();
		drawHorizontalAxisTicks();
		label();
		coordinates.length = 0;
		count = 0;
                    }
                    <!-------------------------------------end of clear button--------------------------------------->

