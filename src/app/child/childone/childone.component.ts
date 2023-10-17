import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
  selector: 'childone',
  template: `

<h3>{{childTitle}}</h3>
	                        <b> {{ctMsg}}</b>
				<ul>
				 <li *ngFor = "let cname of myctArray">
				    {{cname}}
				 </li>
				</ul>
				
			        <b>{{addMsg}}</b><br/>
				<div>
					First Name:<input (input)="student.fname=getVal($event.target)" /> <br/>
					Last Name:<input (input)="student.lname=getVal($event.target)" />
					<br/> <button (click)="addStudent()">Add Student</button>
				</div>
				
				<br/><b>{{message}}</b><br/>
				<div>
					Message :<input (input)="msg=getVal($event.target)" />
					<br/> <button (click)="sendMsg()">Send</button>
				</div>	
`
})
export class ChildoneComponent {

  @Input() 
	ctMsg : string = ''; 
	
	@Input('ctArray')
	myctArray = {} as Array<string>;

        @Input('studentAddMsg') 
	addMsg : string = ''; 	
	
  	@Output('addStudentEvent') 
	addStdEvent = new EventEmitter<Student>();

  	@Output() 
	sendMsgEvent = new EventEmitter<string>();	
	
	student = new Student('', 'two');
	childTitle = '---Child One---';
	message = 'Send Message'
	msg = 'hello';
	
	addStudent() {
	      this.addStdEvent.emit(this.student);
        }	
	sendMsg() {
	      this.sendMsgEvent.emit(this.msg);
        }	
	getVal(ob: EventTarget | null) {
              return (<HTMLInputElement>ob).value;
	}
}
