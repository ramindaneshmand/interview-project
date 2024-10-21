import {Type} from '@angular/core';
import {ViewComponent} from '../views/view.component';

export interface Panel {
  label: string;
  view: View;
  id: string;
  hasParent: boolean;
  parentId?: string;
  width: number;
  calculatedWidth?: number;
  routParamKey: 'module' | 'moduleId';
  visible: boolean;
}

export interface View {
  component: Type<ViewComponent>;
  label: string;
  fields: Field[];
}

export interface Field {
  key: string;
  id: string;
  label: string;
  view?: string;
  options?: any,
  hasValidation?: boolean;
  validation?: any;
}
