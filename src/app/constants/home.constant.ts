import {Layout} from '../models/layout';
import {ListViewComponent} from '../views/list-view/list-view.component';
import {ExampleEntityService} from '../state/example/example.entity.service';
import {FormViewComponent} from '../views/form-view/form-view.component';
import {Validators} from '@angular/forms';

export const HOME_URL = 'home';
export const layouts: Layout[] = [
  {
    key: 'home',
    label: 'Interview',
    state: ExampleEntityService,
    panels: [
      {
        id: '1', label: 'List',
        width: 99, view: {
          component: ListViewComponent,
          label: 'List',
          fields: [
            {id: '1', key: 'name', label: 'Name'},
            {id: '2', key: 'description', label: 'Description'},
            {id: '3', key: 'successLogLabel', label: 'Label if Suppressed'},
            {id: '4', key: 'failureLogLabel', label: 'Label if Not Suppressed'},
            {id: '5', key: 'version', label: 'Version'},
            {id: '6', key: 'status', label: 'Status'},
          ]
        },
        routParamKey: 'module',
        hasParent: false,
        visible: true
      },
      {
        id: '2', label: 'Form',
        width: 39, view: {
          component: FormViewComponent,
          label: 'Form',
          fields: [
            {id: '1', key: 'id', label: 'Id', view: 'hidden'},
            {id: '2', key: 'name', label: 'Name', view: 'text-box', hasValidation: true, validation: Validators.required},
            {id: '3', key: 'description', label: 'Description', view: 'text-area'},
          ]
        },
        hasParent: true,
        routParamKey: 'moduleId',
        parentId: '1',
        visible: false
      }
    ]
  }
];
