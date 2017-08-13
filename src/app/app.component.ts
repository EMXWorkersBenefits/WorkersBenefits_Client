import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divSliderRight', [
      state('0', style({
        transform: 'translateX(0)',
        height: '100px',
        weight: '50px',
        'box-sizing': 'border-box',
        'background-image': 'url(\'../assets/img/pepperoni_pizza.jpg\')'
      })),
      state('1', style({
        transform: 'translateX(-100%)',
        height: '100px',
        weight: '50px',
        'box-sizing': 'border-box',
        'background-image': 'url(\'../assets/img/pepperoni_pizza.jpg\')'
      })),
      transition('1 => 0', animate(1000)),
      transition('0 => 1', animate(1000))
    ]),
    trigger('divSliderLeft', [
      state('0', style({
        transform: 'translateX(100%)',
        height: '100px',
        weight: '50px',
        'box-sizing': 'border-box',
        'background-image': 'url(\'../assets/img/1781937_10204849196845614_7554504073966669421_n.jpg\')'
      })),
      state('1', style({
        transform: 'translateX(0)',
        height: '100px',
        weight: '50px',
        'box-sizing': 'border-box',
        'background-image': 'url(\'../assets/img/1781937_10204849196845614_7554504073966669421_n.jpg\')'
      })),
      transition('1 => 0', animate(1000)),
      transition('0 => 1', animate(1000))
    ])
    // trigger('divSlider', [
    //     state('0', style({
    //       // backgroundColor: 'red',
    //       transform: 'translateX(0)',
    //       height: '100px',
    //       weight: '200px',
    //       'box-sizing': 'border-box',
    //       'background-image': 'url(\'../assets/img/pepperoni_pizza.jpg\')'
    //   })),
    //     state('1', style({
    //       transform: 'translateX(0px)',
    //       height: '100px',
    //       weight: '200px',
    //       'box-sizing': 'border-box',
    //       'background-image': 'url(\'../assets/img/1781937_10204849196845614_7554504073966669421_n.jpg\')'
    //     })),
    //   transition('0<=>1' , animate(1000))
    //   ])
  ]
})
export class AppComponent {
  state = '0';

  onAnimate() {
    this.state === '0' ? this.state = '1' : this.state = '0';
  }
}


