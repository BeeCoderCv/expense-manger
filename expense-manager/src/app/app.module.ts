import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { MyObserverComponent } from './my-observer/my-observer.component';
import { NavComponent } from './nav/nav.component';
import { OthersComponent } from './others/others.component';
import { ExpenseEntryService } from './expense-entry.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemAddComponent } from './item-add/item-add.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    MyObserverComponent,
    NavComponent,
    OthersComponent,
    ItemEditComponent,
    ItemViewComponent,
    ItemAddComponent,
    LoginComponent,
    LogoutComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ExpenseEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
