import {Component, Injector, OnInit} from '@angular/core';
import {ViewComponent} from '../view.component';
import {ConnectorService} from '../connector.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-view',
  providers: [ConnectorService],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss'
})
export class ListViewComponent extends ViewComponent implements OnInit {

  list: any[] = [];
  showList = false;
  displayedColumns: string[] = [];
  constructor(private connectorService: ConnectorService, private injector: Injector, private route: Router) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    console.log('ngOnInit');
    if (this.layout?.state) {
      this.connectorService.setSetEntity(this.layout.state, this.injector)
    }
    this.fields.forEach(field => {
      this.displayedColumns.push(field.key);
    });
    this.connectorService.connect()?.subscribe(data => {
      this.list = data;
      this.showList = true;
    });
    this.connectorService.getAll();
  }
  selectRow(row: any): void {
    this.route.navigate([`home/${row.id}`])
  }

  protected readonly window = window;
}
