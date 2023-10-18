import { Component } from '@angular/core';
import { Student } from 'src/app/student';

@Component({
	selector: 'app-root',
	template: `
	                       <h1>{{parentTitle}}</h1>
				<childone
					[ctMsg]="cityMsg" 				
					[ctArray]="cityArray"	
					[studentAddMsg]="stdAddMsg" 						
				    (addStudentEvent) = "saveData($event)"
					(sendMsgEvent) = "printMsg($event)"	>
				</childone>
				<p>Name: {{stdFullName}}</p>				
				<p>Message: {{msg}}</p>	
				<childtwo
					[studentMsg] = "stdMsg"				
					[stdLeader] = "stdLeaderObj" 
					(addNumberEvent) = "printSum($event)" >
				</childtwo>
				<p>Sum: {{sum}}</p>	
				<button (click)="sendMessageToChild()">Send Message to Child-three </button>
				<child-three [companymsg]="companymsg" [messageFromParent]="message" [comanyArrya]="comanyArrya"  (click)="sendMessageToChild()"></child-three>				
	          `
})
export class ParentComponent {
	parentTitle = 'Parent Component';

	//Property for child component one
	cityMsg = 'Indian City Names';
	cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
	stdAddMsg = 'Add Student';

	//Property for child component two
	stdMsg = 'Student Leader Detail';
	stdLeaderObj = new Student('Narendra', 'Modi');

	//Property used in parent
	stdFullName = '';
	sum = '';
	msg = '';
	isReq=true;

	saveData(std: Student) {
		this.stdFullName = std.fname + ' ' + std.lname;
   console.log("stdFullName",this.stdFullName);
    
	}
	printSum(res: any) {
		this.sum = res;
	}
	printMsg(msg: string) {
		this.msg = msg;
	}

	companymsg='infosysy,sss,yyyy'
	comanyArrya=['infosys','IBM','camgimini']
	message: string = 'Hello from Parent';
	sendMessageToChild() {
		this.message = 'New message from Parent';
		console.log("send message From Parent");
		
	  }
} 