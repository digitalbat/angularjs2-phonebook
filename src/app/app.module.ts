import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './register/list/list.component';
import { AddComponent } from './register/add/add.component';
import { routing } from './app.routes';
import { UserService} from './register/shared/user.service';
import { SearchPipe } from './register/list/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
