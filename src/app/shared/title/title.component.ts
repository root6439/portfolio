import { Component } from '@angular/core';

@Component({
  selector: 'section-title',
  template: `
    <div class="section-title">
      <div class="title-line"></div>
      <h2>
        <ng-content></ng-content>
      </h2>
      <div class="title-line"></div>
    </div>
  `,
})
export class SectionTitle {}
