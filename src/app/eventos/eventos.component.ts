import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1,
      tema: 'Angular',
      Local: 'São Paulo'
    },
    {
      EventoId: 2,
      tema: 'Angular, dotnet',
      Local: 'RJ'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
