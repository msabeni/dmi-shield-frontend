import { Routes } from '@angular/router';

// Pages
import { CompositeComponent } from './composite/composite.component';
import { ModifyComponent } from './modify/modify.component';

export const MFormFieldsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CompositeComponent,
      }, {
        path: 'modify',
        component: ModifyComponent,
      }, {
        path: 'composite',
        component: CompositeComponent,
      }
    ],
  },
];