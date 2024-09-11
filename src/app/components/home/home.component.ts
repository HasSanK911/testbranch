import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyTestbranchComponent } from './why-testbranch/why-testbranch.component';
import { TransparencyComponent } from './transparency/transparency.component';
import { NewPosibilitiesComponent } from './new-posibilities/new-posibilities.component';
import { TemplatesComponent } from './templates/templates.component';
import { StartWithUsComponent } from './start-with-us/start-with-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, 
    WhyTestbranchComponent, 
    TransparencyComponent, 
    NewPosibilitiesComponent, 
    TemplatesComponent,
  StartWithUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
