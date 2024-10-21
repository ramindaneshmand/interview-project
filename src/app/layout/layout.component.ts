import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Layout} from '../models/layout';
import {layouts} from '../constants/home.constant';
import {Panel} from '../models/panel';
import {LayoutService} from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  layout: Layout | null = null;
  panels: Panel[] = [];
  private layoutService: LayoutService;
  params: any;
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.layoutService = new LayoutService(cdr)
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.layout = layouts.find(layout => layout.key === params['module']) as Layout;
        this.panels = this.layout?.panels ?? [];
        this.params = params;
        this.layoutService.setupPanels(this.panels, params);
        this.layoutService.layout = this.layout;
      }
    )
  }

  closePanel(id: string): void {
    this.layoutService.closeChildPanel(id);
  }

  protected readonly window = window;
}
