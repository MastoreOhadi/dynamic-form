import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule ,FormBuilder, FormGroup} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ReactiveFormsModule , DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'dynamic-form-app';
  constructor(private translate: TranslateService) {}


  ngOnInit() {
    // تنظیم زبان پیش‌فرض به فارسی
    this.translate.setDefaultLang('fa');
    this.translate.use('fa'); // بارگذاری زبان فارسی
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}

