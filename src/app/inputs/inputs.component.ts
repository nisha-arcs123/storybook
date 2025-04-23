import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  /** Placeholder text */
  @Input() label = 'Type something...';

  /** Input size classes */
  @Input() inputClass: 'input' | 'label' | 'login' = 'input';

  /** Optional background color */
  @Input() backgroundColor?: string;

  /** Output event when clicked */
  @Output() onClick = new EventEmitter<Event>();
}
