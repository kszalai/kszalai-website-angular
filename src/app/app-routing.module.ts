import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatabasePrinciplesComponent } from './pages/database-principles/database-principles.component';
import { WebProgrammingComponent } from './pages/web-programming/web-programming.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '231', component: WebProgrammingComponent },
  { path: '471', component: DatabasePrinciplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
