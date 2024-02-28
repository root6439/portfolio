import { Component } from '@angular/core';
import { SectionTitle } from '../shared/components/title/title.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [SectionTitle]
})
export class AboutComponent {

}
