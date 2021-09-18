import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VtLibService {
  private apiResponse: any = 'asrfsdijfrewio';
  private jwt: string = '';

  constructor(private http: HttpClient) {
    console.log('se inicio tokenService')
   }

  async setApiResponse(page = 1){
    let url = `https://jsonmock.hackerrank.com/api/article_users?page=${page}`;
    this.apiResponse = await this.http.get<any>(url).toPromise();
  }

  getapiResponse(){
    return this.apiResponse;
  }

  setJWT(jwt: string){
    this.jwt = jwt;
  }

  getJWT(){
    return this.jwt;
  }
}
