import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgOptimizedImage, RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true
})
export class AppComponent {
}
