import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipePhonebookComponent } from './pipe-phonebook/pipe-phonebook.component';
import { PipesPipe } from './pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipePhonebookComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
