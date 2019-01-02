import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../ngxs/app.state';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { reject } from 'q';
import { AntdService } from './antd.service';

class Response{
  data: any;
  errcode: number;
  errmsg: string;
  msgid: string;
  notices: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  @Select(AppState.get_token) token$;

  token: string;

  constructor(private store: Store, private http: HttpClient, private antd: AntdService) {
    this.token$.subscribe((data) => {
      this.token = data;
    });
  }

  post(url, params = {}, config = { needToken: true }) {
    const data = {  // 公共数据结构
      head: {
        accessToken: config.needToken ? this.token : '',
        lastnotice: 0,
        msgid: '',
      },
      body: params,
    };

    return new Promise((resolve, relect) => {
      this.http.post(url, data).pipe(
        catchError((res) => of([]))
      ).subscribe((res: Response) => {
        if (!res) {
          // 服务器异常
          this.antd.showModal('错误', '后台服务器异常', 'error');
          reject();
          return;
        }
        if (res.errcode === 0) {
          resolve(res.data);
          return;
        }
        this.antd.showMessage(res.errmsg, 'error', 1500);
        reject();
      });
    });
  }
}
