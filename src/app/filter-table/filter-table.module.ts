import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableSkeletonComponent } from './table-skeleton/table-skeleton.component';
import { TableItemComponent } from './table-item/table-item.component';
import { TableDataService } from './table-data.service';
import { TagComponent } from './table-item/tag/tag.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TableSkeletonComponent],
  declarations: [TableSkeletonComponent, TableItemComponent, TagComponent],
  providers: [TableDataService]
})
export class FilterTableModule { }
