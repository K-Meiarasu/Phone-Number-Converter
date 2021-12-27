import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-phonebook',
  templateUrl: './pipe-phonebook.component.html',
  styleUrls: ['./pipe-phonebook.component.css']
})
export class PipePhonebookComponent implements OnInit {

  num:any
  code:any
  button=false
  get(){
    this.button=true
  }
  info(){
    var text="+7 - Russia\n+27 - South Africa\n+32 - Belgium\n+54 - Argentina\n+65 - Singapore\n+91 - India\n+351 - Portugal"
    alert(text)
    return;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
