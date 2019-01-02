import { TestBed } from '@angular/core/testing';

import { AntdService } from './antd.service';

describe('AntdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntdService = TestBed.get(AntdService);
    expect(service).toBeTruthy();
  });
});
