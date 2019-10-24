import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BoardComponent,
    BoardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
