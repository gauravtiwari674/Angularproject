import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationLoginComponent } from './organisation-login.component';

describe('OrganisationLoginComponent', () => {
  let component: OrganisationLoginComponent;
  let fixture: ComponentFixture<OrganisationLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganisationLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
