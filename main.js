var canvas=new fabric.Canvas('myCanvas')
// Create canvas variable
 block_y=1;
 block_x=1;



var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(img){
		block_image_object=img;

		block_image_object.scaleToWidth(block_image_width)
		block_image_object.scaleToWidth(block_image_height)

		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);//can we add line 24 after line 25?
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		block_image_width = 200;
		block_image_height =200;
		new_image('rr1.png');
		console.log('r')

	}
	if(keyPressed == '71')
	{
		block_x = 200;
		block_image_width = 100;
		block_image_height =200;
		new_image('gr.png');
		console.log('g')
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		block_image_width = 200;
		block_image_height =200;
		new_image('yr.png');
		console.log('y')
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_image_width = 200;
		block_image_height =200;
		block_x = 600;
		new_image('pr.png');
		console.log('p')
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		block_image_width = 450;
		block_image_height =500;
		new_image('br.png');
		console.log('b')
		
	// upload blue ranger
	}
	if(keyPressed == '32')
	{
		block_x = 0;
		block_y = 0;
		block_image_width = 450;
		block_image_height =1100;	
		new_image('prback.jpg');
		console.log('b')
		
	// upload blue ranger
	}
}

