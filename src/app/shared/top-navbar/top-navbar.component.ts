import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-navbar',
	templateUrl: './top-navbar.component.html',
	styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	stopPro(event) {
		event.stopPropagation();
		return false;
	}

	onFullScreen(event) {
		event.preventDefault();
		this.exitFullscreen();
		let
			el = <any>document.documentElement
			, rfs =
				el.requestFullScreen
				|| el.webkitRequestFullScreen
				|| el.mozRequestFullScreen
			;

		rfs.call(el);
	}

	exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			// } else if (document.mozCancelFullScreen) {
			//   document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}
