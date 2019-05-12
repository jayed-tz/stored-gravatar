import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStoredGravatarComponent } from './ngx-stored-gravatar.component';

describe('NgxStoredGravatarComponent', () => {
  let component: NgxStoredGravatarComponent;
  let fixture: ComponentFixture<NgxStoredGravatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStoredGravatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStoredGravatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
