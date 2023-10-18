import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildoneComponent } from './child/childone/childone.component';
import { ChildtwoComponent } from './child/childtwo/childtwo.component';
import { ChildThreeComponent } from './childThree/child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule {

  addtwo(){
    console.log("This is add Module");
    
  }
 }
