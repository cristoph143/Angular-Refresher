import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() checked: boolean = false;
}
