import {Component, Injector, OnInit} from '@angular/core';
import {FormFieldComponent} from '../form-field.component';

@Component({
  selector: 'app-text-area-form-field',
  templateUrl: './text-area-form-field.component.html',
  styleUrl: './text-area-form-field.component.scss'
})
export class TextAreaFormFieldComponent extends FormFieldComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  public override ngOnInit() {
    super.ngOnInit();
  }
}
