import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fsoft-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
