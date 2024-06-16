import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: { label: string, content: string }[] = [];
  selectedTab: number = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
