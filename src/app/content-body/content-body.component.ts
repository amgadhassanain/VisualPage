import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {


  listItems: any[] = ['Overview', 'Setup', 'Get Started', 'User Guide', 'Node.js', 'TypeScript', 'Python', 'Java'];

  constructor() { }

  ngOnInit() {
  }

}
