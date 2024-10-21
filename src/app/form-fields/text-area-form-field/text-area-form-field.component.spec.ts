import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaFormFieldComponent } from './text-area-form-field.component';

describe('TextAreaFormFieldComponent', () => {
  let component: TextAreaFormFieldComponent;
  let fixture: ComponentFixture<TextAreaFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
