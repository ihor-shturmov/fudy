import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Restaurants} from "../../types/restaurant";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {MatSortModule, Sort} from "@angular/material/sort";
import {ApiResponseMeta} from "../../../types/api-response";

@Component({
  selector: 'app-restaurants-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, RouterLink, MatPaginatorModule, MatSortModule],
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsListComponent {
  @Input() restaurants!: Restaurants;
  @Input() meta!: ApiResponseMeta | null;

  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() changePage: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  readonly displayedColumns: string[] = ['name', 'address', 'website', 'status', 'action'];
}
