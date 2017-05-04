import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { OthersComponent } from './others/others.component';
import { WerrrComponent } from './werrr.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    OthersComponent,
    WerrrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
