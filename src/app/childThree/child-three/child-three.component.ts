import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-three',
  template:`
  <h3>{{childthree}}</h3>
  <b>{{companymsg}}
    <ul>
      <li *ngFor="let cname of comanyArrya ">
        {{cname}}
      </li>
    </ul>

    <p>Message from Parent to : {{ messageFromParent }}</p>

    <button (click)="sendMessageToParent()">Send Message to Parent</button>
  `

})
export class ChildThreeComponent {
  childthree='__Child-Three__'

  @Input()
  companymsg:string=''

  @Input('comanyArrya')
  comanyArrya={} as Array<string>
  
  @Output('addMsgName')
  anil=new EventEmitter<any>

  @Input() messageFromParent: any;

  @Output() messageToParent = new EventEmitter<string>();



  sendMessageToParent() {
    const newMessage = 'Message from Child-Three';
    this.messageToParent.emit(newMessage);
  }

}
