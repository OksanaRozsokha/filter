import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css'],
})

export class TableItemComponent implements OnInit {  
  @Input() title;
  @Input() count;
  @Input() tags;
  
  displayTableTr = true;
  

  constructor() { }

  ngOnInit() {
    
  } 

}
