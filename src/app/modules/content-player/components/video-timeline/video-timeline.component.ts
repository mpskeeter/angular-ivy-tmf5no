import {
	Component,
  ElementRef,
	EventEmitter,
	HostListener,
	Input,
	Output,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoDuration } from '../../models';

@Component({
	selector: 'app-video-timeline',
	templateUrl: './video-timeline.component.html',
})
export class VideoTimelineComponent {
	@Input() duration: Partial<VideoDuration> = {};
	@Input() playing: boolean = false;
	@Output() clicked: EventEmitter<Partial<VideoDuration>> = new EventEmitter<
		Partial<VideoDuration>
	>();
	@Output() playingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  preview: HTMLImageElement;
  previewImgNumber: number = -1;

  @ViewChild('previewImage')
  set previewImage(el: ElementRef) {
    this.preview = el.nativeElement;
  }

	@HostListener('mousedown', ['$event'])
	mousedown($event: MouseEvent) {
		this.toggleScrubbing($event);
	}

	@HostListener('mousemove', ['$event'])
	mousemove($event: MouseEvent) {
		this.handleTimelineUpdate($event);
	}

	@HostListener('mouseup', ['$event'])
	mouseup($event: MouseEvent) {
		this.clicked.emit(this.duration);
		if (this.isScrubbing) this.toggleScrubbing($event);
	}

	@HostListener('document:keydown', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		switch (event.key.toLowerCase()) {
			case 'arrowleft':
			case 'j':
				this.skip(-5);
				break;
			case 'arrowright':
			case 'l':
				this.skip(5);
				break;
		}
	}

	isScrubbing: boolean = false;
	wasPaused: boolean = !this.playing;

	get percentage() {
		return 100 - this.duration.percent;
	}

	// get side() {
	// 	return 'right-[' + this.percentage + ']';
	// 	// return 'right-[' + this.percentage + ']';
	// }

	// get before() {
	// 	return 'before:' + this.side;
	// }

	// get after() {
	// 	return 'after:' + this.side;
	// }

  constructor(public domSanitizer: DomSanitizer) {}

	getPercent(event: MouseEvent) {
		var target = event.target as HTMLElement;
		const rect = target.getBoundingClientRect();

		this.duration.percent =
			Math.min(Math.max(0, event.x - rect.x), rect.width) / rect.width;

		this.duration.currentTime = this.duration.totalTime * this.duration.percent;
	}

	skip(duration) {
		this.duration.currentTime += duration;
		this.clicked.emit(this.duration);
	}

	toggleScrubbing(event: MouseEvent) {
		this.getPercent(event);
		this.isScrubbing = (event.buttons & 1) === 1;

		if (this.isScrubbing) {
			this.wasPaused = !this.playing;
			this.playing = false;
			this.playingChange.emit(this.playing);
		} else {
			if (!this.wasPaused) {
				this.playing = true;
				this.playingChange.emit(this.playing);
			}
		}

		this.handleTimelineUpdate(event);
	}

	handleTimelineUpdate(event: MouseEvent) {
    this.previewImgNumber = Math.max(
      1,
      Math.floor(this.duration.currentTime)
    );

		if (this.isScrubbing) {
			this.getPercent(event);
			event.preventDefault();
			this.clicked.emit(this.duration);
		}
	}
}
