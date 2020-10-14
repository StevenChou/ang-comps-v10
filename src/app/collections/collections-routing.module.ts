import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsHomeComponent } from './collections-home/collections-home.component';

// 子路由
const routes: Routes = [
  { path: '', component: CollectionsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
