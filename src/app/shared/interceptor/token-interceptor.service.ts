import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { LoadinService } from "../services/loadin.service";
import { finalize, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  // constructor() {}
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   let token: any = localStorage.getItem("userToken");
  //   let tokenizedreq = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   return next.handle(tokenizedreq);
  // }
  constructor(private loadingService: LoadinService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = localStorage.getItem('userToken');

    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    this.loadingService.show();

    return next.handle(tokenizedReq).pipe(
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
