var theta, x, y;
var opac;
var flag;
var c;
/*var img;*/
var a = Math.ceil(3*Math.random(0,1));
var b = Math.ceil(3*Math.random(0,1));

function setup(){
	var cnv = createCanvas(windowWidth, windowHeight);
	var x1 = 0;
	var y1 = 0;
	cnv.position(0, 0);
	cnv.style('z-index', '-1');
	background(20);
	theta = 0;
	x = 0;
	y = 0;
	opac = 0;
	flag = 0;
	c = color(255, 255, 255, 127);
	/*img = loadImage("precedents.png");*/
}

function draw(){
	if(flag < 6000){
		theta = theta % 360;
		x = x % 200;
		y = y % 300;
		opac = opac%100;
		for (var i = 0; i < 9; i+=2) {
			for (var j = 0; j < 9; j+=2) {
				push();
				translate((i+1)*width/10, (j+1)*height/6);

				switch(j){
					case 0 : stroke(96,177,228);break;
					case 2 : stroke(255,223,0);break;
					case 4 : stroke(210);break; 
					case 6 : stroke(255, 211, 0); break;
					default: stroke(0, 0, 0); break;
				}
				
				strokeWeight(1);	
				point((width/15)*sin(((j+2)/2)*a*x)*cos(((i+2)/2)*y/b)*sin(a*theta), (width/15)*cos(((12-j)/a)*b*x)*sin(((10-i)/a)*y)*cos(b*theta));
				//point((120*cos(theta)-10*cos(6*theta))*sin(((j+2)/2)*x)*cos(((i+2)/2)*y), (120*sin(theta) - 10*cos(6*theta))*cos(((i+2)/2)*x)*sin(((j+2)/2)*y));
				pop();
			}
		}


		/*fill(255, opac/10);
		textSize(70);
		textFont("Arial");
		text("P L A Y M A T H", windowWidth/2 - 250, windowHeight/2 + 20);

		var c = color(255, 255, 255);
		//c[3] = 0.5;
		fill(c, 30);
		rect(windowWidth/2 - 350, windowHeight/2 +50, 700, 400);
		
		fill(0);
		textSize(20);
		textFont("Arial");
		textAlign(LEFT, RIGHT);
		text("Mathematics is an interesting subject to many but boring to whole lot of others. This is mainly due to the fact that it is difficult to visualize mathematical concepts mentally hence making it complex to grasp the subject. This project is an attempt to make learning mathematics fun and at the same time exploring the subject to a much wider applications. The particular topic of interest is geometry and trignometry. Various trignometric and geometric equations are built to visualize their movement in 2D space. The patterns hence formed can be used as elements of graphic design or textile design. Tools like Processing and p5.js are used to achieve the results.", windowWidth/2 - 300, windowHeight/2 +100, 600, 600);
		*/
		/*image(img, windowWidth/2 - 300, windowHeight/2 + 500);*/

		/*fill(c);
		rect(windowWidth/2 - 330, 150, 700, 800, 10);*/

		theta +=0.05;
		x+=0.02;
		y+=0.05;
		opac+=2;
		frameRate(1000);
		flag+=1;
	}
	
}