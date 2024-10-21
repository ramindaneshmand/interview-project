import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxFormFieldComponent } from './text-box-form-field.component';

describe('TextBoxFormFieldComponent', () => {
  let component: TextBoxFormFieldComponent;
  let fixture: ComponentFixture<TextBoxFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBoxFormFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
