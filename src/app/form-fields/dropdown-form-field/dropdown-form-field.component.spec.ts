import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFormFieldComponent } from './dropdown-form-field.component';

describe('DropdownFormFieldComponent', () => {
  let component: DropdownFormFieldComponent;
  let fixture: ComponentFixture<DropdownFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
