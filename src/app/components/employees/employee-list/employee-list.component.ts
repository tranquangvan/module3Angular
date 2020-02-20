import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../services/employee.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeDialogDeleteComponent } from '../employee-dialog-delete/employee-dialog-delete.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employees;
  constructor(
    public employeeService: EmployeeService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(data =>{
      this.employees = data;
      console.log(this.employees);
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeDialogDeleteComponent, {
      width: '250px',
      data: {name: "Tran Quang Van"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
