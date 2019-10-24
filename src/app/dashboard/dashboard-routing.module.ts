import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board-list/board-list.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'boardlist',
        pathMatch: 'full'
      },
      {
        path: 'board/:id',
        component: BoardComponent
      },
      {
        path: 'boardlist',
        component: BoardListComponent
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
