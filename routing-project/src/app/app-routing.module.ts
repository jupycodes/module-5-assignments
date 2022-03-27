import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cmp1Component } from './components/cmp1/cmp1.component';
import { Cmp2Component } from './components/cmp2/cmp2.component';
import { Cmp3Component } from './components/cmp3/cmp3.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: "cmp1", component: Cmp1Component},
  {path: "cmp2", component: Cmp2Component},
  {path: "cmp3", component: Cmp3Component},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
