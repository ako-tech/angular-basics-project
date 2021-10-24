import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p class="code">404</p>
    <p>Esta página no existe</p>
    <a routerLink="/">Volver al inicio</a>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 64px;
      }
      .code {
        font-weight: 600;
        font-size: 5rem;
      }

      a {
        margin-top: 32px;
        color: #5e00ea;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
