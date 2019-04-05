import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetClientComponent } from './reset-client.component';

describe('ResetClientComponent', () => {
  let component: ResetClientComponent;
  let fixture: ComponentFixture<ResetClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
