import { NgModule } from '@angular/core';
import { NgxStoredGravatarComponent } from './components/ngx-stored-gravatar.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxStoredGravatarComponent],
  exports: [NgxStoredGravatarComponent]
})
export class NgxStoredGravatarModule { }
