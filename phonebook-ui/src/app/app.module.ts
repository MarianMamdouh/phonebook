import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { JumiaPhonebookDashboardComponent } from './jumia-phonebook-dashboard/jumia-phonebook-dashboard.component';
import { CustomerService } from './services/customer.service';
import { Loader } from './services/loader.service';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JumiaPhonebookDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    FormsModule
  ],
  providers: [CustomerService,
  Loader],
  bootstrap: [AppComponent]
})
export class AppModule { }
