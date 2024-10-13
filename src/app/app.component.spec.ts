import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ConfigService} from "./services/ConfigService";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";

describe('AppComponent', () => {
  let translateServiceMock: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {

    translateServiceMock = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
      DynamicFormComponent,
        TranslateModule.forRoot()
      ],
      providers: [
        ConfigService,
        { provide: TranslateService, useValue: translateServiceMock }
       ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dynamic-form-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dynamic-form-app');
  });

});
