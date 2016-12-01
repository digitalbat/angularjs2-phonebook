import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent }    from './register/list/list.component';
import { AddComponent }    from './register/add/add.component';

export const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'new', component: AddComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
