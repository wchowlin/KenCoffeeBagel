import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCheckboxModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { PlainComponent } from './plain/plain.component';


@NgModule({
  declarations: [
    AppComponent,
    PlainComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ],
  entryComponents: [
    PlainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
