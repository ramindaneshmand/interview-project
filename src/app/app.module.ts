import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RootStateModule} from './state/root-state.module';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {PanelComponent} from './panel/panel.component';
import {ViewComponent} from './views/view.component';
import {ListViewComponent} from './views/list-view/list-view.component';
import {AppRoutingModule} from './app-routes.module';
import {MatTableModule} from '@angular/material/table';
import {FormViewComponent} from './views/form-view/form-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormFieldComponent} from './form-fields/form-field.component';
import {MatInputModule} from '@angular/material/input';
import {TextBoxFormFieldComponent} from './form-fields/text-box-form-field/text-box-form-field.component';
import {TextAreaFormFieldComponent} from './form-fields/text-area-form-field/text-area-form-field.component';
import {DropdownFormFieldComponent} from './form-fields/dropdown-form-field/dropdown-form-field.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PanelComponent,
    ViewComponent,
    ListViewComponent,
    FormViewComponent,
    FormFieldComponent,
    TextBoxFormFieldComponent,
    TextAreaFormFieldComponent,
    DropdownFormFieldComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RootStateModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
  constructor() {
  }
}
