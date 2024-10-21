import {Component, Input, OnInit} from '@angular/core';
import {Layout} from '../models/layout';
import {layouts} from '../constants/home.constant';
import {Field} from '../models/panel';

@Component({
  selector: 'app-view',
  template: ''
})
export class ViewComponent implements OnInit {
  @Input() inputData: any;
  protected fields: Field[] = [];
  protected layout: Layout | undefined;
  ngOnInit() {
    this.layout = layouts.find(layout => layout.key === this.inputData.layoutKey) as Layout;
    this.fields = this.layout?.panels.find(panel => panel.id === this.inputData.panelId)?.view.fields || [];
  }
}
