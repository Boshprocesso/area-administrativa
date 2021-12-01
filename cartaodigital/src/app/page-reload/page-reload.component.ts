import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-reload',
  templateUrl: './page-reload.component.html',
  styleUrls: ['./page-reload.component.css']
})
export class PageReloadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
