var play_state = {
	create: function(){
		var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_key.onDown.add(this.jump,this);
		this.pipes = game.add.group();
		this.pipes.createMultiple(20,'pipe');
		this.timer = this.game.time.events.loop(1500,this.add_row_of_pipes, this);
		this.bird = this.game.add.sprite(100,245,'bird');
		this.bird.body.gravity.y=1000;
		this.bird.anchor.setTo(-0.2,0.5);


	},





}