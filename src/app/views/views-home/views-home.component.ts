import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# 位使用者' },
    { value: 900, label: '收入' },
    { value: 50, label: '評論' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: '長椅',
      description: '這是一個很棒的沙發',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: '梳妝台',
      description: '這是可以收納東西的梳妝台',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
