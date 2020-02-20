import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeeAddComponent } from './components/employees/employee-add/employee-add.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeDialogDeleteComponent } from './components/employees/employee-dialog-delete/employee-dialog-delete.component';
const routes:Routes = [
  {path: '',component:HomeComponent},
  {path: 'employee-list',component:EmployeeListComponent},
  {path: 'employee-add',component:EmployeeAddComponent},

  {path: '**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, EmployeeListComponent, EmployeeAddComponent, EmployeeDialogDeleteComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
