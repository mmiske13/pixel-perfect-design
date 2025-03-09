import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {dispatchersData} from "../../mock.data";

@Component({
  selector: 'app-dispacth-ranking',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './dispatch-ranking.component.html',
  styleUrl: './dispatch-ranking.component.scss',
  standalone: true
})
export class DispatchRankingComponent {
  dispatchersData = dispatchersData
}
