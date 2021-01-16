import {ApplicationRef, DoBootstrap, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DatabaseCmpComponent } from "../database-cmp/database-cmp.component";
import { UIToolsComponent } from "../uitools/uitools.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DatabaseCmpComponent,
    UIToolsComponent
  ]
  // bootstrap:    [ AppComponent ]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(refAppRef:ApplicationRef){
    
  }
}
