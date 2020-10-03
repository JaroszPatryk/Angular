import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesSerciveService {
  private topMovies = [
    {title: 'The Shawshank Redemption', director: 'Frank Darabont'},
    {title: 'The Godfather', director: 'Francis Ford Coppola'},
    {title: 'The Godfather: Part II', director: 'Francis Ford Coppola'},
    {title: 'The Dark Knight', director: 'Christopher Nolan'},
    {title: '12 Angry Men', director: 'Sidney Lumet'},
  ];
  private bottomMovies = [
    {title: 'Totalny kataklizm', director: 'Jason Friedberg, Aaron Seltzer'},
    {title: 'Superdzieciaki: Geniusze w pieluchach II', director: 'Bob Clark'},
    {title: 'Kod Adi K.O.Z.', director: 'Celal Çimen'},
    {title: 'Manos - Ręce przeznaczenia', director: 'Harold P. Warren'},
    {title: 'Ptakodemia', director: 'James Nguyen'},

  ];

  constructor() {
  }

  public getTopMovies(): any{
    return this.topMovies;
  }

  public getBottomMovies(): any{
    return this.bottomMovies;
  }
}
