import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {Panel} from '../models/panel';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {

  @Input() panel: Panel | undefined;
  @Input() layoutKey: string | undefined = '';
  @Input() params: any | undefined = '';
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  public viewContainerRef: ViewContainerRef | undefined;
  @Output() closePanel = new EventEmitter<string>();
  ngOnInit(): void {
    if (this.panel?.view.component && this.viewContainerRef) {
      this.viewContainerRef.clear();
      const componentRef = this.viewContainerRef?.createComponent(this.panel?.view.component);
      const data = {panelId: this.panel?.id, layoutKey: this.layoutKey, paramsKey: this.panel.routParamKey};
      if (componentRef) {
        componentRef.instance.inputData = data;
      }
    }
  }
  onClosePanel(id: string): void {
    this.closePanel.emit(id);
  }

  protected readonly window = window;
}
