import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
   popularList: Array<Object>;
    searchStr: string;
    searchRes: Array<Object>;

    constructor(private _movieService: MoviesService) {
        this._movieService.getPopular().subscribe(res => {
            this.popularList = res.results;
            console.log(this.popularList);
        });

    }

  ngOnInit() {
  }

}
