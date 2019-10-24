import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Board } from '../models/board.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private apiService: APIService
  ) { }

  getBoards(): Observable<any> {
    return this.apiService.get('boards');
  }

  async deleteBoard(boardId: string): Promise<void> {
    await this.apiService.delete(`boards/${boardId}`).toPromise();
  }

  async createBoard(title: string): Promise<void> {
    await this.apiService.post('boards', { title }).toPromise();
  }
}
