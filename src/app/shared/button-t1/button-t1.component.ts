import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-t1',
  imports: [],
  templateUrl: './button-t1.component.html',
  styleUrl: './button-t1.component.css'
})
export class ButtonT1Component {
  @Input()
  public text: string = '';

  @Input()
  public type: string = 'button';

  @Input()
  public disabled: boolean = false;

  @Input()
  public class: string = '';
}
