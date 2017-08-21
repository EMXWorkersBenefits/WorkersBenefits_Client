import { Component, OnInit } from '@angular/core';
import {UserPurchaseHistory} from '../models/user-purchase-history.model';

@Component({
  selector: 'app-user-purchase-history',
  templateUrl: './user-purchase-history.component.html',
  styleUrls: ['./user-purchase-history.component.css']
})
export class UserPurchaseHistoryComponent implements OnInit {

  purchases: UserPurchaseHistory[] = [
    new UserPurchaseHistory(
      'ספטמבר במונטנגרו',
      '/assets/img/montenegro.jpg',
      'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
      'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
      '03-5527341',
      true,
      3999,
      50,
      '555'
    ),
    new UserPurchaseHistory(
      'מנוי שנתי למגוון חדרי כושר ברחבי הארץ',
      '/assets/img/gym.jpg',
      'כניסה ב-15 ₪, או מנוי חודשי ב-89 ₪ בלבד! ' +
      'כולל חדר כושר ומבחר חוגים. עד לשעה 23:00',
      '03-5527341',
      true,
      249,
      15,
      '555'
    ),
    new UserPurchaseHistory(
      'ארוחה זוגית במסעדת ברנזה ',
      '/assets/img/food.jpg',
      'מסעדת ברנזה של המסעדן הראל בלו משיקה תפריט קיץ חדש ' +
      'ומציעה ארוחה זוגית ב-229 ₪ או ארוחת פרמיום זוגית ב- 329 ₪.' +
      ' תקף 7 ימים בשבוע, מלאי השוברים מוגבל !',
      '03-5527341',
      false,
      199,
      35,
      '555'
    ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
