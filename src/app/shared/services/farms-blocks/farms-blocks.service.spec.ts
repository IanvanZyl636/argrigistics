import { TestBed } from '@angular/core/testing';

import { FarmsBlocksService } from './farms-blocks.service';

describe('FarmsBlocksService', () => {
  let service: FarmsBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmsBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
