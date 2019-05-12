import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxStoredGravatarModule} from '../../projects/ngx-stored-gravatar/src/lib/components/ngx-stored-gravatar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxStoredGravatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
