import { TestBed } from '@angular/core/testing';

import { RemotefilesInterceptor } from './remotefiles.interceptor';

describe('RemotefilesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RemotefilesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RemotefilesInterceptor = TestBed.inject(RemotefilesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
