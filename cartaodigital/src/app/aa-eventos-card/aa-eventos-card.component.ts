import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aa-eventos-card',
  templateUrl: './aa-eventos-card.component.html',
  styleUrls: ['./aa-eventos-card.component.css']
})
export class AaEventosCardComponent implements OnInit {
  @Input() objeto!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
