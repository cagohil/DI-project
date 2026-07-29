import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
export interface Project {
  category: string;
  title: string;
  description: string;
  location: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [RouterModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [

    {
      category: 'PRIVATE RESIDENCE',
      title: 'Northlawn Retreat',
      description: 'Architectural Lighting, Audio, & Connected Living ',
      location: 'Birmingham, Michigan',
      image: './project1.jpg',
      link: '/project-1'
    },

    {
      category: 'PRIVATE RESIDENCE',
      title: 'M1 Concourse – Private Automotive Entertainment Suite',
      description: 'COMING SOON',
      location: '**',
      image: './project2.jpg',
    },

    {
      category: 'PRIVATE RESIDENCE',
      title: 'Professional Environments',
      description: 'COMING SOON',
      location: '**',
      image: './project3.jpg',
    }

  ];


}
