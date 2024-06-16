import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items: { title: string, content: string }[] = [];
  selectedItem: number = -1;

  toggleItem(index: number) {
    this.selectedItem = this.selectedItem === index ? -1 : index;
  }
}
