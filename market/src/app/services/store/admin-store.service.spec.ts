import { async, TestBed } from '@angular/core/testing';
import { AdminStoreService } from './admin-store.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminApiUrl } from '../../constants/route-constant';

describe('Admin-store service', () => {
  let service: AdminStoreService;
  let http: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminStoreService],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(AdminStoreService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should create AdminStoreService', function () {
    expect(service).toBeTruthy();
  });

  it('should add product', function () {
    const product = new FormData();
    service.addProduct(product);
    const req = http.expectOne(`${AdminApiUrl}add`);
    expect(req.request.method).toEqual('POST');
  });
});
