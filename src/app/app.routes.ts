import { ProjectPage3Component } from './components/projects/project-page3/project-page3.component';
import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { ApproachComponent } from './components/approach/approach.component';
import { InteEnvComponent } from './components/inte-env/inte-env.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { InsightsComponent } from './components/insights/insights.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectPage1Component } from './components/projects/project-page1/project-page1.component';
import { ProjectPage2Component } from './components/projects/project-page2/project-page2.component';

export const routes: Routes = [

  { path: '', redirectTo: '/hero', pathMatch: 'full' },

  { path: 'hero', component: HeroComponent },

  { path: 'approach', component: ApproachComponent },

  { path: 'inte-envirement', component: InteEnvComponent },

  { path: 'projects', component: ProjectsComponent },

  { path: 'Professional', component: ProfessionalComponent },

  { path: 'Insights', component: InsightsComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'project-1', component: ProjectPage1Component },

  { path: 'project-2', component: ProjectPage2Component },

  { path: 'project-3', component: ProjectPage3Component },

  { path: '**', redirectTo: '' }
];
