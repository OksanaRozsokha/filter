import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() tag;
  @Output() chooseTag = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  filterTable() {
    this.chooseTag.emit();
  }

}
