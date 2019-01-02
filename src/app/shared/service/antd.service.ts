import { Injectable } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AntdService {

  constructor(private model: NzModalService, private message: NzMessageService) { }

  showModal(nzTitle, nzContent, type, nzOnOk = () => {}, nzOnCancel = () => {}) {
    this.model[type]({ nzTitle, nzContent, nzOnOk, nzOnCancel });
  }

  showMessage(msg, type = 'success', nzDuration = 1500) {
    this.message[type](msg, { nzDuration });
  }

}
