import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
// Route Configuration
export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: MovieComponent }
];

export const appRoutingProvider: ModuleWithProviders = RouterModule.forRoot(routes);