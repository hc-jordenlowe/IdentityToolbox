import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiResourceComponent } from './get-api-resource.component';

describe('GetApiResourceComponent', () => {
  let component: GetApiResourceComponent;
  let fixture: ComponentFixture<GetApiResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetApiResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
