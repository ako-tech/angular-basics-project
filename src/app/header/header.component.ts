import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleCartVisibility = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }
}
