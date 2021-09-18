import { VtLibService } from './vt-lib.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VTInterceptor implements HttpInterceptor {

  constructor(private VtLibService: VtLibService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.VtLibService.setJWT('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwZXJzb25hTmF0dXJhbCI6eyJydXQiOiI1MDIxNjc4IiwiZGlnaXRvIjoiMCJ9LCJwZXJzb25hRW1wcmVzYSI6eyJydXQiOiI2MDEwODAwMCIsImRpZ2l0byI6IjEifSwicnV0IjoiNTAyMTY3OCIsImRpZ2l0b1ZlcmlmaWNhZG9yIjoiMCIsImlkU2VzaW9uIjoidGVzdCIsImlhdCI6MTYzMDUwODg1MSwiZXhwIjoxNjMwNTA5MDkxLCJjYW5hbCI6InRlc3QifQ.3sDkBgox8dvGluv-e90SVuzMSAJ8eSbZHl4gANdOE6g');

    return next.handle(request);
  }
}
