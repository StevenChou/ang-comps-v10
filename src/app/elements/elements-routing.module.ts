import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';

// 子路由
const routes: Routes = [{ path: '', component: ElementsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
