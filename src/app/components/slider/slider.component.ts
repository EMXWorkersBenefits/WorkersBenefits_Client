import {AfterViewInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ContentChildren('frame') children: QueryList<any[]>;
  index = 0;
  isPlaying = false;
  images: String[] = ['/assets/img/food.jpg', '/assets/img/gym.jpg', '/assets/img/montenegro.jpg'];
  timeout;
  delay = 4000;
  ngOnInit() {
    this.play();
    // console.log(Object.keys(this));
  }
  ngAfterViewInit() {
    // console.log(this.children);
  }

  selectImage(index: number) {
    this.index = index;
  }
  play () {
    this.isPlaying = true;
    this.timeout = setTimeout(this.slide.bind(this), this.delay);
  }
  slide () {
    if (this.isPlaying) {
      this.forward();
      this.timeout = setTimeout(this.slide.bind(this), this.delay);
    }
  }
  forward () {
    this.index = this.index + 1 >= this.images.length ? 0 : this.index + 1;
  }
  backword () {
    this.index = this.index - 1 === 0 ? this.images.length : this.index - 1;
  }
}








