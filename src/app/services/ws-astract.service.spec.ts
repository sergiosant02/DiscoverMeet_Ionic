import { TestBed } from '@angular/core/testing';

import { WsAstractService } from './ws-astract.service';

describe('WsAstractService', () => {
  let service: WsAstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsAstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
