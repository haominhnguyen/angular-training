import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenicatorService } from '../../../core/services/authenicator.service';

@Component({
  selector: 'fsoft-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listData : MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'username', 'password', 'avatar', 'role', 'isActivated', 'defaultPage'];

  constructor(
    private authenService : AuthenicatorService
  ) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.initListUser();
  }

  /**
   * This function apply filter in list user.
   * @param filterValue input for filter
   */
  applyFilter(filterValue : string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Init list user in screen users list
   */
  initListUser() {
    this.authenService.getAllUser().subscribe(
      list => {
        this.listData = new MatTableDataSource(list),
        this.listData.sort = this.sort,
        this.listData.paginator = this.paginator
      }
    );
  }
}
