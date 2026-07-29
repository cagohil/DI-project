import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  imports: [CommonModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {


  activeCategory = 'ALL';

  blogs = [

    {
      category:'DESIGN INTEGRATION',
      image:'living1.jpg',
      title:"Technology should disappear. The experience shouldn't.",
      description:'Why the best spaces make technology invisible—yet indispensable.',
      date:'MAY 2, 2024',
      read:'6 MIN READ'
    },

    {
      category:'PROJECT INSIGHTS',
      image:'profssional-top.png',
      title:'Planning for greatness: Technology in pre-construction',
      description:'How early technology planning prevents compromise.',
      date:'APR 18, 2024',
      read:'5 MIN READ'
    },

    {
      category:'TECHNOLOGY',
      image:'slide3.jpg',
      title:'The hidden backbone of every smart home',
      description:'Infrastructure matters more than the devices it supports.',
      date:'MAR 27, 2024',
      read:'4 MIN READ'
    },

    {
      category:'INDUSTRY PERSPECTIVES',
      image:'/slide1.jpg',
      title:'The collaboration advantage',
      description:'Why aligned teams deliver exceptional integrated environments.',
      date:'MAR 5, 2024',
      read:'4 MIN READ'
    },

    {
      category:'DESIGN INTEGRATION',
      image:'/Theater_project2.jpg',
      title:'Beyond the AV room: Designing immersive experiences',
      description:'Creating atmosphere and experience throughout the home.',
      date:'FEB 15, 2024',
      read:'6 MIN READ'
    },

    {
      category:'TECHNOLOGY',
      image:'/Vanity 2.jpg',
      title:'Lighting control is more than convenience',
      description:'How intelligent lighting elevates mood and wellbeing.',
      date:'JAN 28, 2024',
      read:'4 MIN READ'
    }

  ];



  get filteredBlogs(){

    if(this.activeCategory==='ALL'){

      return this.blogs;

    }

    return this.blogs.filter(
      x=>x.category===this.activeCategory
    );

  }


}
