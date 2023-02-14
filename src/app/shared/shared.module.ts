import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitle } from './title/title.component';

@NgModule({
  declarations: [SectionTitle],
  imports: [CommonModule],
  exports: [SectionTitle],
})
export class SharedModule {}
