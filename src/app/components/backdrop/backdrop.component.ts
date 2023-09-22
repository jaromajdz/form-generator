import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent {
  @Output()close = new EventEmitter<any>()
  @Input()show = false
}
