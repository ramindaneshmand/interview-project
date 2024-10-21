import {Component, Injector, OnInit} from '@angular/core';
import {FormFieldComponent} from '../form-field.component';
import {ConnectorService} from '../../views/connector.service';

@Component({
  selector: 'app-dropdown-form-field',
  templateUrl: './dropdown-form-field.component.html',
  styleUrl: './dropdown-form-field.component.scss'
})
export class DropdownFormFieldComponent extends FormFieldComponent implements OnInit {

  /*lov: any[] = []*/
  constructor(injector: Injector/*, private connectorService: ConnectorService*/) {
    super(injector);
  }

  public override ngOnInit() {
    super.ngOnInit();
  }

}
