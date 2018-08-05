var people = class {
	constructor() {
		this.top = 0;
		this.left = 0;
	}
	on() {
		console.log(this, this.handler)
		document.body.onkeydown = this.handler;
	}
	handler: (e) => {
		console.log(e);
		switch(e.keyCode) {
			case 37:
				this.left -= 50;
				console.log(this);
				console.log(this.top, this.left);
				document.getElementById('people').style.left = this.left + 'px';
				break;
			case 38:
				this.top += 50;
				console.log(this.top, this.left);
				document.getElementById('people').style.left = this.left + 'px';
				break;
			case 39:
				console.log('right');
				this.left += 50;
				console.log(this.top, this.left);
				document.getElementById('people').style.left = this.left + 'px';
				break;
			case 40:
				console.log('down');
				this.top -= 50;
				console.log(this.top, this.left);
				document.getElementById('people').style.left = this.left + 'px';
				break;
		}
	}
}
var a = new people();