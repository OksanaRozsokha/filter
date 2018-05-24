import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterTableModule } from './filter-table/filter-table.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FilterTableModule
  ],
  exports: [FilterTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
