import {AfterViewInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {Description} from '../../models/description.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ContentChildren('frame') children: QueryList<any[]>;
  descriptions: Description[] = [
    new Description('ארוחה זוגית במסעדת Branja התל אביבית במתחם שרונה',
      'מסעדת ברנזה של המסעדן הראל בלו משיקה תפריט קיץ חדש ומציעה ארוחה זוגית בת 8 מנות',
      39),
    new Description('מנוי שנתי למגוון חדרי כושר ברחבי הארץ',
      'מנוי שנתי לחדרי הכושר המובילים בארץ בהנחות של עד כ- 40%',
      299),
    new Description('ספטמבר במונטנגרו',
      'חבילת נופש הכוללת טיסות הלוך וחזור ו-4 לילות במלון לבחירה ע"ב חצי פנסיון ',
      2999),
  ];
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








