import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: '設計師', employed: true },
    { name: 'Jill', age: 26, job: '工程師', employed: false },
    { name: 'Elyse', age: 25, job: '工程師', employed: true },
  ];
  headers = [
    { key: 'employed', label: '受僱' },
    { key: 'name', label: '姓名' },
    { key: 'age', label: '年齡' },
    { key: 'job', label: '工作' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
