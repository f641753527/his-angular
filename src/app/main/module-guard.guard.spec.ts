import { TestBed, async, inject } from '@angular/core/testing';

import { ModuleGuardGuard } from './module-guard.guard';

describe('ModuleGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleGuardGuard]
    });
  });

  it('should ...', inject([ModuleGuardGuard], (guard: ModuleGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
