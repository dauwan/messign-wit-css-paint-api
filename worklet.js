class SolidColorPainter {
	static get inputProperties() { return ['--solid-color', '--animation-tick']; }
	
	
	

    paint(ctx, size, props, args) {
		const bgColor = props.get('--solid-color').toString();
		let tick = props.get('--animation-tick').toString();
		const post_effects = ['screen','overlay', 'lighten','soft-light','luminosity'
								];
		const all_effects = ['color','hard-light','luminosity','multiply',
								'darken','color-burn',
								'lighten','soft-light','difference','hue','saturation','color-dodge','overlay','source-over','color-dodge','screen','overlay','source-in','source-out','source-atop','destination-over','destination-in',
								'destination-out','destination-atop','lighter','copy', 'xor','exclusion'];
         
		var x;
		var y;
		var len_effects = post_effects.length;
		var rand_index = 0;
		var random_effect = '';
		if (tick > 1){tick = 1;}
		if (tick<0){tick = 0;}
		var angulo = 0;
		
		//for (var i=0;i<200;i++)
		for (var i=0;i<100;i++)
		{			
			if (Math.random()>0.5)
			{ var multiplier = -1;}
			else{ var multiplier = 1;}
			let mhvc = Math.random() * (2 - 0);	
			
			ctx.resetTransform();
			/*TRANSFORMATION*/			
			ctx.setTransform(mhvc*Math.random(), multiplier*Math.random(), multiplier*Math.random(), mhvc*Math.random(), multiplier*Math.random(),multiplier*Math.random());
			ctx.filter = `blur(${Math.floor(Math.random() * (40 - 0)) }px)`;
		
			angulo = Math.floor(Math.random() * (360 - 0) + 0);
			 
			if (angulo < 0){angulo += 360;}
			x = Math.floor(Math.random() * (size.width - 0) + 40);
			y = Math.floor(Math.random() * (size.height - 0) + 40);
			var gradient = ctx.createRadialGradient(x, y, Math.random(), x, y, angulo);
			gradient.addColorStop(Math.random(), `rgb(${Math.floor(Math.random() * (256 - 0) + 0)},${Math.floor(Math.random() * (256 - 0) + 0)},${Math.floor(Math.random() * (256 - 0) + 0)})`);
	        gradient.addColorStop(Math.random(), `rgb(${Math.floor(Math.random() * (256 - 0) + 0)},${Math.floor(Math.random() * (256 - 0) + 0)},${Math.floor(Math.random() * (256 - 0) + 0)})`);
	        gradient.addColorStop(Math.random(), `rgb(${Math.floor(Math.random() * (256 - 0) + 0)},${Math.floor(Math.random() * (256 - 0) + 0)},${Math.floor(Math.random() * (256 - 0) + 0)})`);
	        ctx.fillStyle = gradient;
			
			//draws a circle with random parameters
			let radio = Math.floor(Math.random() * (120 - 0) + 0);		
			ctx.beginPath();
			ctx.arc(x, y, radio, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.fill();

			rand_index = Math.floor(Math.random() * (len_effects - 0) + 0);
			random_effect = post_effects[rand_index];
			ctx.globalCompositeOperation = random_effect;		
			ctx.fill();
			
			 
			
			x = Math.floor(Math.random() * (size.width - 0) + 40);
			y = Math.floor(Math.random() * (size.height - 0) + 40);			
			
		}
		 
		
    }
}

registerPaint('solid-color', SolidColorPainter);
