import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMovies = [
    {tittle: 'Skazani na Shawshank', director: 'Frank Darabont'},
    {tittle: 'Ojciec chrzestny', director: 'Francis Ford Coppola'},
    {tittle: 'Ojciec chrzestny II ', director: 'Francis Ford Coppola'},
    {tittle: 'Mroczny rycerz', director: 'Christopher Nolan'},
    {tittle: 'Dwunastu gniewnych ludzi', director: 'Sidney Lumet'}
    ];
}
