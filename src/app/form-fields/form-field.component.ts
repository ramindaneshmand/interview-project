import {Component, Injector, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from '@angular/forms';
import {FormField} from '../views/form-view/form.service';

@Component({
  selector: 'app-form-field',
  template: ''
})
export class FormFieldComponent implements OnInit {

  @Input() formField: FormField | undefined;
  form: FormGroup | undefined;
  controlContainer: ControlContainer;
  constructor(public injector: Injector) {
    this.controlContainer = injector.get(ControlContainer);
  }
  ngOnInit() {
    this.form = this.controlContainer.control as FormGroup;
  }
}
