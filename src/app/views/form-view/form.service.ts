import {Injectable} from '@angular/core';
import {FormControl, FormGroup, UntypedFormGroup} from '@angular/forms';
import {Field} from '../../models/panel';

@Injectable()
export class FormService {
  generateForm(fields: Field[], data: any): {form: FormGroup, formFields: FormField[]} {
    const formFields: FormField[] = [];
    fields.forEach(field => {
      formFields.push(new FormField(
        field.id, field.key, field.label, field.view ? field.view : 'text-box', field, data[field.key], field.options,
        field.hasValidation, field.validation
      ));
    });
    return {form: this.toFormGroup(formFields), formFields};
  }

  private toFormGroup(formFields: FormField[]): UntypedFormGroup {
    const group: any = {};
    formFields.forEach(formField => {
      group[formField.key] = new FormControl(!formField.value ? null : formField.value/*, formField.hasValidation ? formField.validation : null*/);
    });
    return new FormGroup(group);
  }
}

export class FormField {
  constructor(public id: string,
              public key: string,
              public label: string,
              public view: string,
              public field: Field,
              public value: any,
              public options?: any,
              public hasValidation?: boolean,
              public validation?: any) {
  }
}
