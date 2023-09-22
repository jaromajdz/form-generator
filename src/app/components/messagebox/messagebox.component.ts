import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.scss']
})
export class MessageboxComponent {

  @Input()message!: string
  @Input()set open(op: boolean){
    if(op){
      this.openBoxHandler()
    }else{
      this.closeBoxHandler()
    }
  }

  showBox = false

  openBoxHandler(){
    this.showBox = true
  }

  closeBoxHandler(){
    this.showBox = false
  }

}
