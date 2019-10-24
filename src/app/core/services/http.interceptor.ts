import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(
    private spinner: SpinnerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

    return next.handle(req)
      .pipe(
        tap(
          data => {
            console.log(data);
            this.spinner.hide();
          },
          error => {
            console.log(error.message);
            this.spinner.hide();
          }
        )
      );
  }
}
