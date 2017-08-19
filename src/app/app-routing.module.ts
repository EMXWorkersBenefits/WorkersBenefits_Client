import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeComponent} from './home/home.component';
import {UserPurchaseHistoryComponent} from './user-purchase-history/user-purchase-history.component';
const appRouters: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'purchaseHistory', component: UserPurchaseHistoryComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
