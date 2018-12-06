import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInstallerAccessTokenComponent } from './get-installer-access-token.component';

describe('GetInstallerAccessTokenComponent', () => {
  let component: GetInstallerAccessTokenComponent;
  let fixture: ComponentFixture<GetInstallerAccessTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInstallerAccessTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInstallerAccessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
