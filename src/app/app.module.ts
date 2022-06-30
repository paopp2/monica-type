import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { TextSourceComponent } from './text-type/text-source/text-source.component';
import { TextInputComponent } from './text-type/text-input/text-input.component';
import { TextTypeComponent } from './text-type/text-type.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    TextTypeComponent,
    TextSourceComponent,
    TextInputComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
