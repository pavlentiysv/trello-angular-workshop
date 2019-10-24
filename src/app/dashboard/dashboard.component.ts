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
  newBoardTitle: string;
  boards: Board[];

  constructor(
    private boardService: BoardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBoards();
  }

  async newBoard(): Promise<void> {
    await this.boardService.createBoard(this.newBoardTitle);
    this.getBoards();
  }

  async deleteBoard(boardId: string): Promise<void> {
    await this.boardService.deleteBoard(boardId);
    this.getBoards();
  }

  viewBoard(boardId: string): void {
    this.router.navigate([`board/${boardId}`]);
  }

  private async getBoards(): Promise<void> {
    const response = await this.boardService.getBoards().toPromise();
    this.boards = response.boards;
  }

}
