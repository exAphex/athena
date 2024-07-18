import { Routes } from '@angular/router';
import { GetDecisionComponent } from './get-decision/get-decision.component';
import { RiskpolicyComponent } from './riskpolicy/riskpolicy.component';
import { SessioninteractionComponent } from './sessioninteraction/sessioninteraction.component';

export const routes: Routes = [
    {
        path: '',
        component: GetDecisionComponent,
        title: 'Home page',
    },
    {
      path: 'riskPolicy',
      component: RiskpolicyComponent,
      title: 'Risk Policy',
    },
    {
      path: 'sessionInteraction',
      component: SessioninteractionComponent,
      title: 'Session Interaction',
    },
];
