import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    HomeComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AgGridModule,
	BrowserAnimationsModule,
 FormsModule,
 ReactiveFormsModule,
 
	
	 MatDialogModule, 
    MatButtonModule,
	MatInputModule,
	MatIconModule,
	MatFormFieldModule,
	NgbModule,
	MatDatepickerModule,
	MatNativeDateModule,
	HttpClientModule,	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
