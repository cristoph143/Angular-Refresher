import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
