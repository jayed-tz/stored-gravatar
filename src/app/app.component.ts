import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stored-gravatar';
  styleSettings = {
    'width': '60px',
    'height': '60px',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': '50%',
    'border': '1px solid rgba(0,0,0,.10)',
    'background': '#fafafa',
    'color': '#aaaaaa',
    'text-transform': 'uppercase',
    'font-weight': 'normal',
    'font-size': '13px',
    'line-height': 'normal'
  };
}
