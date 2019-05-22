import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomAccessTokenComponent } from './get-custom-access-token.component';

describe('GetCustomAccessTokenComponent', () => {
  let component: GetCustomAccessTokenComponent;
  let fixture: ComponentFixture<GetCustomAccessTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomAccessTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomAccessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
