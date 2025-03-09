import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {dispatchersData, dispatchersData2} from "../../mock.data";

@Component({
  selector: 'app-dispatch-reward-system',
  imports: [NgForOf, NgOptimizedImage],
  templateUrl: './dispatch-reward-system.component.html',
  styleUrl: './dispatch-reward-system.component.scss',
  standalone: true
})
export class DispatchRewardSystemComponent {
  dispatchersData2 = dispatchersData2;
}
