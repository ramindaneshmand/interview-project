import {ChangeDetectorRef, Injectable} from '@angular/core';
import {Panel} from '../models/panel';
import {Layout} from '../models/layout';

@Injectable({providedIn: 'root'})
export class LayoutService {
  panels: Panel[] = [];
  layout: Layout | undefined;
  private cdr: ChangeDetectorRef;

  constructor(ChangeDetectorRef: ChangeDetectorRef) {
    this.cdr = ChangeDetectorRef;
  }

  setupPanels(panels: Panel[], param: {[key: string]: string}): void {
    this.panels = panels;
    panels.forEach((panel: Panel) => {
      if (!panel.hasParent) {
        panel.calculatedWidth = panel.width;
      }
      panel.visible = param.hasOwnProperty(panel.routParamKey) && !!param[panel.routParamKey];
      if (panel.visible && panel.hasParent) {
        this.openChildPanel(panel.id);
      }
    })
  }

  openChildPanel(id: string): void {
    const childPanel: Panel | undefined = this.panels.find(p => p.id === id);
    const panel: Panel | undefined = this.panels.find(p => p.id === childPanel?.id);
    if (childPanel && panel) {
      panel.calculatedWidth = panel.width - childPanel.width;
      childPanel.calculatedWidth = childPanel.width;
      this.cdr.detectChanges();
    }
  }

  closeChildPanel(id: string): void {
    const childPanel: Panel | undefined = this.panels.find(p => p.id === id);
    const parentPanel: Panel | undefined = this.panels.find(p => p.id === childPanel?.parentId);
    if (childPanel && parentPanel) {
      childPanel.visible = false;
      parentPanel.calculatedWidth = parentPanel.width;
      this.cdr.detectChanges();
    }
  }

  private findChild(id: string): Panel | undefined {
    return this.panels.find(panel => panel.parentId === id);
  }
}
