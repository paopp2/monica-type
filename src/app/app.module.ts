import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextSourceComponent } from './text-type/text-source/text-source.component';
import { TextInputComponent } from './text-type/text-input/text-input.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    TextSourceComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
