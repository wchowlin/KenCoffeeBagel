import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PlainComponent } from './plain/plain.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ken Coffe & Bagels';
  constructor(public dialog: MatDialog){}
  
  openDialog(): void{
    let dialogRef = this.dialog.open(PlainComponent,{    
    height: '450px',
    width: '390px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog is closed');
    });
  }
  public goodbye : string;
  public setDataFromPlain(data)
  {
    this.goodbye = data;
  }
  
}
