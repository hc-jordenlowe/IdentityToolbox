import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdentityResourceComponent } from './get-identity-resource.component';

describe('GetIdentityResourceComponent', () => {
  let component: GetIdentityResourceComponent;
  let fixture: ComponentFixture<GetIdentityResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdentityResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdentityResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
