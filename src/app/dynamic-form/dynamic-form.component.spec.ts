import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormComponent } from './dynamic-form.component';
import { ConfigService } from '../services/ConfigService';
import { of } from 'rxjs';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;
  let configService: ConfigService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
      ],
      providers: [ConfigService],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    configService = TestBed.inject(ConfigService);
  });

  it('باید فرم را با فیلدهای پیکربندی نمایش دهد', () => {
    const mockConfig = {
      submitLabel: 'ارسال',
      fields: [
        { name: 'name', type: 'text', title: 'نام', description: 'نام خود را وارد کنید', errorMessage: 'نام لازم است' },
      ],
    };

    spyOn(configService, 'getFormConfig').and.returnValue(of(mockConfig));
    fixture.detectChanges(); // اجرای change detection

    const input = fixture.nativeElement.querySelector('input[formControlName="name"]');
    expect(input).toBeTruthy();
    expect(input.placeholder).toBe('نام خود را وارد کنید');
  });

  it('باید پیام خطا را نمایش دهد وقتی فیلد نام نامعتبر است', () => {
    const mockConfig = {
      submitLabel: 'ارسال',
      fields: [
        { name: 'name', type: 'text', title: 'نام', description: 'نام خود را وارد کنید', errorMessage: 'نام لازم است' },
      ],
    };

    spyOn(configService, 'getFormConfig').and.returnValue(of(mockConfig));
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('input[formControlName="name"]');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const error = fixture.nativeElement.querySelector('mat-error');
    expect(error.textContent).toContain('نام لازم است');
  });
});
