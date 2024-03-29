import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user/user.component';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
