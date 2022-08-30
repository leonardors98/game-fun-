import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './view/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
  ],
  declarations: [AppComponent, HelloComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
