import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/core/models/board.model';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {
  newBoardTitle: string;
  boards: Board[];

  constructor(
    private router: Router,
    private boardService: BoardService
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
