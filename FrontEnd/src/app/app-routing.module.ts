import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
  { path: '', component: QueueComponent},
  { path: 'addSong', component: AddSongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
