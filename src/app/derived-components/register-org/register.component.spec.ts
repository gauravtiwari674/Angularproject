import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: OrgRegisterComponent;
  let fixture: ComponentFixture<OrgRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
