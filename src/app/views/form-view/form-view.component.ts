import {Component, Injector, OnInit} from '@angular/core';
import {ViewComponent} from '../view.component';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ConnectorService} from '../connector.service';
import {take} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormField, FormService} from './form.service';
import {Panel} from '../../models/panel';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  providers: [ConnectorService, FormService],
  styleUrl: './form-view.component.scss'
})
export class FormViewComponent extends ViewComponent implements OnInit {

  formData: any = {};
  form: FormGroup | undefined;
  formFields: FormField[] = [];
  panel: Panel | null = null;
  id: string = '';

  constructor(private router: ActivatedRoute,
              private connectorService: ConnectorService,
              private injector: Injector,
              private formService: FormService,
              private route: Router) {
    super();
  }

  public override ngOnInit() {
    super.ngOnInit();
    if (this.layout?.state) {
      this.connectorService.setSetEntity(this.layout.state, this.injector)
      this.panel = this.layout.panels.find(panel => panel.id === this.inputData.panelId) as Panel;
      console.log(this.panel.calculatedWidth)
    }
    const subscription = this.router.params.subscribe(params => {
      this.id = params[this.inputData.paramsKey];
      if (this.id && this.id !== 'new') {
        this.getData(this.id);
      } else if (this.id === 'new') {
        this.generateForm();
      }
    })
  }
  save(): void {
    if (this.id !== 'new') {
      this.connectorService.update(this.form?.value)?.subscribe(
        response => {
          this.formData = response;
          console.log(this.form);
          this.form?.markAsPristine();
        }
      );
    } else if (this.id === 'new') {
      this.connectorService.add(this.form?.value)?.subscribe(
        response => {
          this.route.navigate([`home/${response.id}`]);
        }
      );
    }
  }

  private getData(id: string): void {
    this.connectorService.getDetail(id)?.subscribe(data => {
      this.formData = data;
      this.generateForm();
    });
  }
  private generateForm(): void {
    const formDetails = this.formService.generateForm(this.fields, this.formData);
    this.form = formDetails.form;
    this.formFields = formDetails.formFields;
  }
}
