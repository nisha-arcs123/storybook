import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputSizesComponent } from "../input-sizes/input-sizes.component";

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, InputSizesComponent],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  /** Placeholder text */
  @Input() label = 'Type something...';

  /** Input size classes */
  @Input() inputClass: 'input' | 'select' | 'validation' | 'search' | 'upload' = 'input';

  /** Optional background color */
  @Input() backgroundColor?: string;

  @Input() closefucn? : any

  /** Output event when clicked */
  @Output() onClick = new EventEmitter<Event>();
}
