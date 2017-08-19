export class UserPurchaseHistory {
  public deal: string;
  public img: string;
  public purchased: boolean;
  public price: number;
  public discount: number;
  public expires: string;
  constructor (
    deal: string,
    img: string,
    purchased: boolean,
    price: number,
    discount: number,
    expires: string) {
    this.deal = deal;
    this.img = img;
    this.purchased = purchased;
    this.price = price;
    this.discount = discount;
    this.expires = expires;
  }
}
