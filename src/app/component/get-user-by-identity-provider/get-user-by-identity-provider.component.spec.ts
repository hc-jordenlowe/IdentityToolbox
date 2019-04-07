import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByIdentityProviderComponent } from './get-user-by-identity-provider.component';

describe('GetUserByIdentityProviderComponent', () => {
  let component: GetUserByIdentityProviderComponent;
  let fixture: ComponentFixture<GetUserByIdentityProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserByIdentityProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserByIdentityProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
