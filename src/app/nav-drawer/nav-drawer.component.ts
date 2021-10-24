import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.closeDrawer.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
