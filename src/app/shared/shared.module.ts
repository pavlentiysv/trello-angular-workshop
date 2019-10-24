import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PasswordPipe } from './pipes/password.pipe';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PasswordPipe,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    PasswordPipe,
    HttpClientModule,
    MaterialModule,
    HeaderComponent
  ]
})
export class SharedModule { }
