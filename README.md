

 
# ngx-stored-gravatar    
 A component that stores the gravatar image in the local storage of the browser. This comes in handy particularly in the cases where avatars may show up repeatedly, for instance, in a chat component.    

![sample](https://i.ibb.co/nrzFwqP/gravatar.png)
   
## Installation    
 Install `ngx-stored-gravatar` via NPM, using the command below:    
    
### NPM    
 ```shell 
 npm install --save ngx-stored-gravatar 
 ```    
    
## Getting started    
 Import the `NgxStoredGravatarModule` in your root application module `AppModule` or any other module you need to use the component:    
    
```typescript    
 import { BrowserModule } from  '@angular/platform-browser'; 
 import { NgModule } from  '@angular/core';    
 import {CommonModule} from '@angular/common';
 import { AppComponent } from './app.component';    
 import {NgxStoredGravatarModule} from 'ngx-stored-gravatar';    
 @NgModule({    
  declarations: [    
		 AppComponent
		  ],  
  imports: [    
		 BrowserModule,
		 CommonModule, 
		 // Import NgxStoredGravatarModule 
		 NgxStoredGravatarModule 
		 ],  
  providers: [],    
  bootstrap: [AppComponent] 
}) 
export class AppModule { }    
 ``` 

## Using it in a component 

After importing the `NgxStoredGravatarModule`, you can use the `ngxStoredGravatar` component as below:    
    
```html 
<ngx-stored-gravatar    
[email]="'test@gmail.com'" 
[name]="'John Doe'" 
[useLocalStore]="true" 
[size]="300" 
[style]="styleSettings">
</ngx-stored-gravatar> 

<ngx-stored-gravatar [email]="'test@gmail.com'"></ngx-stored-gravatar> 
``` 

## Demo

Click [here](https://stackblitz.com/edit/ngx-stored-gravatar) to see a few variety of the component. The `style` input can be used to completely modify the style of the image/text.

![usage](https://i.ibb.co/wJpJj3g/1123.png)


## Input Parameters  
 
  |   Attribute   |      Type      | Required  | Default |                                              Description                              |  
| ------------- | ----------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------- |  
| `email`          | *string* | requried | (*empty string*)| Email associated with the Gravatar. |  
| `name`            | *string* | optional | (*empty string*) | If the Gravatar is not found, the first name & the last name supplied via `name` will be used as a fallback.                                                     |  
| `useLocalStore` | *boolean* | optional | `true`      | If `false`, Gravatar image will nt be stored in the browser's local storage.    |  
| `size`           | *number* | optional | `200`         | Size of the Gravatar image that is retrieved. This does not necessarily mean the size displayed in the UI.                                                                          |  
| `style`          | *object* | optional | `{ 'width': '60px', 'height': '60px', 'display': 'flex', 'align-items': 'center', 'justify-content': 'center', 'border-radius': '50%', 'border': '1px solid rgba(0,0,0,.10)', 'background': '#fafafa', 'color': '#aaaaaa', 'text-transform': 'uppercase', 'font-weight': 'normal', 'font-size': '13px', 'line-height': 'normal' }`          | An object suitable for the `ngStyle` directive that is applied on the image.                                  
  
  
  
  
## License 
 This project is licensed under the MIT License.
