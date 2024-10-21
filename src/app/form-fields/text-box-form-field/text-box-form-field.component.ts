import {Component, Injector, OnInit} from '@angular/core';
import {FormFieldComponent} from '../form-field.component';
import {ConnectorService} from '../../views/connector.service';
@Component({
  selector: 'app-text-box-form-field',
  templateUrl: './text-box-form-field.component.html',
  styleUrl: './text-box-form-field.component.scss'
})
export class TextBoxFormFieldComponent extends FormFieldComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  public override ngOnInit() {
    super.ngOnInit();
  }
}
