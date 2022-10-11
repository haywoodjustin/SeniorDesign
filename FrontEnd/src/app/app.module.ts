import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueComponent } from './queue/queue.component';
import { AddSongComponent } from './add-song/add-song.component';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ToastModule } from 'primeng/toast'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    AddSongComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    TableModule, 
    ToastModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
