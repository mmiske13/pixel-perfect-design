import { Routes } from '@angular/router';
import {DispatchRankingComponent} from "./dispacth-ranking/dispatch-ranking.component";
import {DispatchRewardSystemComponent} from "./dispatch-reward-system/dispatch-reward-system.component";
import {SetTargetModalComponent} from "./set-target-modal/set-target-modal.component";

export const routes: Routes = [
    { path: 'dispatch-ranking', component: DispatchRankingComponent },
    { path: 'dispatch-reward-system', component: DispatchRewardSystemComponent },
    { path: 'set-target-modal', component: SetTargetModalComponent },
];
