import {Component, OnInit} from '@angular/core';
import {MoviesSerciveService} from './movies-sercive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesSerciveService]
})
export class AppComponent implements OnInit {
  private service: MoviesSerciveService;
  topMovies: any;
  bottomMovies: any;

  constructor(service: MoviesSerciveService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.topMovies = this.service.getTopMovies();
    this.bottomMovies = this.service.getBottomMovies();
  }
}
