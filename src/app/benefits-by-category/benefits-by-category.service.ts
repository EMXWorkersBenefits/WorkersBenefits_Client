import {Subject} from 'rxjs/Subject';
import {BenefitsByCategory} from '../models/benefits-by-category.model';
export class BenefitsByCqategoryService {
  benefits: BenefitsByCategory[][] = [
    [
      new BenefitsByCategory(
        'ספטמבר במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
      new BenefitsByCategory(
        'בטן-גב ביוון',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
      new BenefitsByCategory(
        'ספטמבר במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
      new BenefitsByCategory(
        'ספטמבר במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
    ],
    [
      new BenefitsByCategory(
        'ספטמבר,.nnm,n. במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
      new BenefitsByCategory(
        'ספטמבר במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
      new BenefitsByCategory(
        'ספטמבר במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
      new BenefitsByCategory(
        'ספטמבר במונטנגרו',
        '/assets/img/montenegro.jpg',
        2199,
        2899,
        this.calculateDiscount( 2199 , 2899),
        'מסלול בן 7/8 ימים ע"ב חצי פנסיון, כולל טיסות, ' +
        'מלון על קו החוף, מדריך וסיורים, החל מ-3,146 ₪ לאדם!',
        '12.10.17',
        'Jan 5, 2018 15:37:25'
      ),
    ]

  ];
  expireSubject = new Subject();
  getBenefits() {
    return this.benefits.slice();
  }
  calculateDiscount(ourPrice: number, normalPrice: number) {
    return ( Math.round((ourPrice / normalPrice) * 100));
  }

}
