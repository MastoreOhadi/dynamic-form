
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as formConfig from './form-config.json'; // JSON را ایمپورت می‌کنیم
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ConfigService} from "../services/ConfigService";
import {ActivatedRoute} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
  providers:[ConfigService,HttpClientModule],
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup | undefined;
  config: any;

  constructor(private fb: FormBuilder, private http: HttpClient,
              private configService: ConfigService, private route: ActivatedRoute) {
    // this.form = this.fb.group({});
  }

  ngOnInit() {
    this.loadFormConfig();
  }

  loadFormConfig() {

    // دریافت مسیر داینامیک از URL
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const url = `http://localhost:4200/${fragment}.json`; // فرض بر این است که JSON در اینجا قرار دارد
        this.configService.getConfig(url).subscribe(
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



    // const url = '/form-config.json'; // آدرس URL خود را قرار دهید
    // this.http.get(url).subscribe(
    //   (data: any) => {
    //     this.config = data.form;
    //     this.buildForm();
    //   },
    //   (error) => {
    //     console.error('Error loading form config:', error);
    //   }
    // );
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
}

