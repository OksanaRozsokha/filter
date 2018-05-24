import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { Table } from '../table';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css'],
})

export class TableItemComponent implements OnInit {
  table: Table[] = [];
  
  constructor(private tableData: TableDataService) { }

  ngOnInit() {
    this.tableData.getTableData().subscribe(data => this.table = data);
  } 

}
