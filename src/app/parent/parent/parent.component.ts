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
} 