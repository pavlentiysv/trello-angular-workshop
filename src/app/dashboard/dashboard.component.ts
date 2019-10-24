import { Component, OnInit } from '@angular/core';

import { BoardService } from '../core/services/board.service';
import { Board } from '../core/models/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
