import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxStoredGravatarModule} from '../../projects/ngx-stored-gravatar/src/lib/ngx-stored-gravatar.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxStoredGravatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
