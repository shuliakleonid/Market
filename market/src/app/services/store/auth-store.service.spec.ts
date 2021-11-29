import { async, TestBed } from '@angular/core/testing';
import { AuthStoreService } from './auth-store.service';

describe('AuthStoreService', () => {
  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AuthStoreService],
    });
  }));
});
