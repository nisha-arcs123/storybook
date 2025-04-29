import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-sizes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-sizes.component.html',
  styleUrls: ['./input-sizes.component.scss']
})
export class InputSizesComponent {
  /** Placeholder text */
  @Input() label = 'Type something...';

  /** Input size classes */
  @Input() inputClass: 'very-small' | 'small' | 'medium' | 'large' | 'extra-large' | 'xxl' = 'very-small';

  @Input() borderRadius ?: number=4;
  @Input() height ?: number = 28;
  /** Optional background color */
  @Input() backgroundColor?: string;


  /** Output event when clicked */
}
