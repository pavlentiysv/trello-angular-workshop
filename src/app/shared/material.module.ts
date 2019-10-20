import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MaterialModule {}
