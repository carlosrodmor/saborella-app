import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontTesterComponent } from '../../components/font-tester/font-tester.component';

@Component({
  selector: 'app-font-test',
  standalone: true,
  imports: [CommonModule, FontTesterComponent],
  template: `
    <div class="font-test-page">
      <app-font-tester></app-font-tester>
    </div>
  `,
  styles: [
    `
      .font-test-page {
        padding: 2rem 0;
        background-color: var(--color-bg);
        min-height: 100vh;
      }
    `,
  ],
})
export class FontTestComponent {}
