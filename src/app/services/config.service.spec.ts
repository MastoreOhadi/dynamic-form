import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigService } from './ConfigService';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService],
    });

    service = TestBed.inject(ConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('باید فایل config را با موفقیت بارگذاری کند', () => {
    const mockConfig = { submitLabel: 'ارسال', fields: [] };

    service.getFormConfig('/assets/form-config.json').subscribe((config) => {
      expect(config).toEqual(mockConfig);
    });

    const req = httpMock.expectOne('/assets/form-config.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockConfig);
  });

  it('باید با خطای 404 شکست بخورد', () => {
    service.getFormConfig('/assets/form-config.json').subscribe({
      error: (err) => {
        expect(err.status).toBe(404);
      },
    });

    const req = httpMock.expectOne('/assets/form-config.json');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });
});
