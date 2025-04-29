import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  /** Placeholder text */
  @Input() label = 'Type something...';

  /** Input size classes */
  @Input() inputClass: 'simple-input' | 'label-input' | 'with-icon' = 'simple-input';

  // @Input() borderRadius ?: number=4;
  // @Input() height ?: number = 28;
  // /** Optional background color */
  // @Input() backgroundColor?: string;


  /** Output event when clicked */
}
