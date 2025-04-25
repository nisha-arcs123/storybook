import { Component } from '@angular/core';
import { InputsComponent } from "./inputs/inputs.component";

@Component({
  selector: 'app-root',
  imports: [ InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storybook';

  test() {
    console.log("test");
    
  }
}
