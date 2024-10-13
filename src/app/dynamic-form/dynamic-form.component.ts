
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ConfigService} from "../services/ConfigService";
import {ActivatedRoute} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../app.config";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule,

  ],

  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
  providers:[ConfigService,HttpClientModule],
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup | undefined;
  config: any;

  constructor(private fb: FormBuilder, private http: HttpClient,
              private configService: ConfigService, private route: ActivatedRoute,public translate: TranslateService) {
    this.form = this.fb.group({});

    this.translate.setDefaultLang('en');
    // می‌توانید زبان را تغییر دهید
    this.translate.use('fa'); // به زبان فارسی تغییر دهید

  }

  ngOnInit() {
    this.loadFormConfig();
  }

  loadFormConfig() {

    // دریافت مسیر داینامیک از URL
    this.route.fragment.subscribe((fragment) => {
      debugger;
      if (fragment) {
        const url = `http://localhost:4200/${fragment}.json`; // فرض بر این است که JSON در اینجا قرار دارد
        this.configService.getFormConfig(url).subscribe(
          (data) => {
            this.config = data.form;
            this.buildForm();
            console.log('Config Loaded:', this.config);
          },
          (error) => {
            console.error('Error loading config:', error);
          }
        );
      }

    });


  }

  buildForm() {
    this.form = this.fb.group({});

    this.config.fields.forEach((field: any) => {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.minLength) validators.push(Validators.minLength(field.minLength));
      if (field.maxLength) validators.push(Validators.maxLength(field.maxLength));
      if (field.regex) validators.push(Validators.pattern(field.regex));

      this.form?.addControl(field.name, this.fb.control('', validators));
    });
  }

  onSubmit() {
    if (this.form?.valid) {
      console.log('Form Submitted:', this.form.value);
    }


  }

  changeLanguage(lang: string) {

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

  }
}

