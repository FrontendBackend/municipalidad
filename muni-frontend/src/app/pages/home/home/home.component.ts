import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { 'image': 'http://www.municanete.gob.pe/muni/carrousel/img/FOTO1.jpg' },
    { 'image': 'http://www.municanete.gob.pe/muni/carrousel/img/FOTO2.jpg' },
    { 'image': 'http://www.municanete.gob.pe/muni/carrousel/img/FOTO3.jpg' },
    { 'image': 'http://www.municanete.gob.pe/muni/carrousel/img/FOTO4.jpg' }
  ];
}
