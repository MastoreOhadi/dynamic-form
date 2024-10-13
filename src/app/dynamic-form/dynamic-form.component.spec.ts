import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormComponent } from './dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '../services/ConfigService';
import {of, Subject} from 'rxjs';
import {ActivatedRoute} from "@angular/router";

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;
  let configService: jasmine.SpyObj<ConfigService>;

  beforeEach(async () => {
    configService = jasmine.createSpyObj('ConfigService', ['getFormConfig']);
    const mockActivatedRoute = {
      fragment: of('form-config') // Emit "form-config" as the fragment
    };
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        DynamicFormComponent // Importing the standalone component here
      ],
      providers: [
        { provide: ConfigService, useValue: configService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
