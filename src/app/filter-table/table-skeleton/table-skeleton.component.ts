import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { Table } from '../table';

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styleUrls: ['./table-skeleton.component.css']
})
export class TableSkeletonComponent implements OnInit {
  table: Table[] = [];  

  constructor(private tableData: TableDataService) { }

  ngOnInit() {
    this.tableData.getTableData().subscribe(data => this.table = data);    
  }
  
}
