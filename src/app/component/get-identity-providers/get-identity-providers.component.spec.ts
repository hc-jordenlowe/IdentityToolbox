import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdentityProvidersComponent } from './get-identity-providers.component';

describe('GetIdentityProvidersComponent', () => {
  let component: GetIdentityProvidersComponent;
  let fixture: ComponentFixture<GetIdentityProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdentityProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdentityProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
