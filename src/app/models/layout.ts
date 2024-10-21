import {Panel} from './panel';
import {EntityCollectionServiceBase} from '@ngrx/data';
import {Type} from '@angular/core';

export interface Layout {
  key: string;
  label: string;
  panels: Panel[];
  state:Type<EntityCollectionServiceBase<any>>;
}
