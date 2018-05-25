import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TableDataService {
  private _url: string = '/assets/table.json';

  constructor(private http: HttpClient) { }

  getTableData(): Observable<Table[]> {
    return this.http.get(this._url).pipe(map(data => {
      console.log(data)
      let tableData = data['tableData'];
      return tableData.map(function(table: any) {
        console.log(table.title, table.count, table.tags) 
        return {title: table.title, count: table.count, tags: table.tags};
      });
    })
      
    )
  }

 
}
