import { TestBed } from '@angular/core/testing';
import { LocalstorageService } from './localstorage.service';

describe('LocalStorage service', async () => {
  let service: LocalstorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService],
    });
    service = TestBed.get(LocalstorageService);
  });

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getAccessToken: (): string => {
        // @ts-ignore
        return store.token;
      },
      setAccessToken: (keyStorage: string = 'token', token: string) => {
        // @ts-ignore
        store[keyStorage] = `${token}`;
      },
      clearAccessToken: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getAccessToken);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setAccessToken);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.clearAccessToken);
  });

  it('should create Localstorage service', () => {
    // inject([LocalstorageService], (service: LocalstorageService) => {
    expect(service).toBeTruthy();
    // });
  });

  it('should store the token in LocalStorage', () => {
    service.setAccessToken('my_token');
    expect(localStorage.getItem('token')).toEqual('my_token');
  });

  it('should return token from localStorage', () => {
    localStorage.setItem('token', 'my_token');
    expect(service.getAccessToken()).toEqual('my_token');
  });

  it('should clear localStorage', () => {
    service.clearAccessToken();
    expect(service.getAccessToken()).toBeUndefined();
  });
});
