import { Component } from '@angular/core';
import { InputsComponent } from "./inputs/inputs.component";
import { ButtonComponent } from "../stories/button.component";

@Component({
  selector: 'app-root',
  imports: [InputsComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'storybook';

  test() {
    console.log("test");
    
  }
}
