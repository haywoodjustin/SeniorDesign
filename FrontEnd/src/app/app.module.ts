import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { QueueListViewComponent } from './queue-list/queue-list-view/queue-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    QueueListComponent,
    QueueListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
