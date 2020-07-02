import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.scss']
})
export class VideoPlayComponent implements OnInit, AfterViewInit {
  playerVolume = 0.5;
  playerPlaybackRate = 1;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('progressFilled') progressFilled: ElementRef;
  @ViewChild('progress') progress: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.videoplayer.nativeElement.addEventListener('timeupdate', () => {
      const progressPercent = (this.videoplayer.nativeElement.currentTime / this.videoplayer.nativeElement.duration) * 100;
      // 利用 flex-basis 改變 progressbar 長度
      this.progressFilled.nativeElement.style.flexBasis = progressPercent + '%';

    });
    this.progress.nativeElement.addEventListener('click', (e) => {

      console.log(e);
      console.log(e.offsetX, this.progress.nativeElement.offsetWidth, this.videoplayer.nativeElement.duration);
      const timeAtProgressBar = (e.offsetX /  this.progress.nativeElement.offsetWidth) * this.videoplayer.nativeElement.duration;

      this.videoplayer.nativeElement.currentTime = Number(timeAtProgressBar);
    });
  }
  toggleVideo() {

    const playOrPause = this.videoplayer.nativeElement.paused ? 'play' : 'pause';
    console.log(playOrPause);
    this.videoplayer.nativeElement[playOrPause]();

}
volumeChange(){
  console.log(this.playerVolume);
  this.videoplayer.nativeElement.volume = this.playerVolume;
}

playbackRateChange(){
  this.videoplayer.nativeElement.playbackRate  = this.playerPlaybackRate;
}

 openFullscreen() {
  if ( this.videoplayer.nativeElement.requestFullscreen) {
    this.videoplayer.nativeElement.requestFullscreen();
  } else if ( this.videoplayer.nativeElement.mozRequestFullScreen) { /* Firefox */
    this.videoplayer.nativeElement.mozRequestFullScreen();
  } else if ( this.videoplayer.nativeElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    this.videoplayer.nativeElement.webkitRequestFullscreen();
  } else if ( this.videoplayer.nativeElement.msRequestFullscreen) { /* IE/Edge */
    this.videoplayer.nativeElement.msRequestFullscreen();
  }
}
}
