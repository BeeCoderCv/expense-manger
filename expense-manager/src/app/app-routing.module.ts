import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyObserverComponent } from './my-observer/my-observer.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { OthersComponent } from './others/others.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [

            { path: 'others', component:  ExpenseEntryComponent},
  // { path: 'others', component:  OthersComponent},
            {
            path: 'expenses/detail/:id',
            component: ItemViewComponent
            },
            { path: 'login', component: LoginComponent },
            { path: 'logout', component: LogoutComponent },
            {
            path: 'edit/:id',
            component: ItemEditComponent, 
            },
            {
              path: 'add',
              component: ItemAddComponent
            },
  { path: 'home', component: OthersComponent ,  canActivate: [ExpenseGuard]},
  { path: 'list', component: ExpenseEntryListComponent },
  { path: 'observers', component: MyObserverComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent } // Wildcard route for a 404 page
  //   ExpenseEntryComponent,
  //   ExpenseEntryListComponent,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
