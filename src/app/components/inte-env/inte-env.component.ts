import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inte-env',
  imports: [CommonModule],
  templateUrl: './inte-env.component.html',
  styleUrl: './inte-env.component.css'
})
export class InteEnvComponent {
currentSlide = 0;

slides = [

{
  number: '01',

  image: '/slide1.jpg',

  title: 'Intelligent Spaces.',

  description1:
  'Technology should simplify daily life, not complicate it.',

  description2:
  'Lighting, audio, video, climate, shading, and control systems work together seamlessly  across residential and commercial spaces alike—creating environments that are intuitive, comfortable, and effortless to use.',

  description3:
  'Every element is thoughtfully integrated into the architecture, allowing technology to enhance the experience without competing for attention.'
},

{
  number: '02',

  image: '/slide2.jpg',

  title: 'Lighting & Atmosphere.',

  description1:
  'Lighting, climate, and control into one seamless system.',

  description2:
  'Lighting is designed around how a space is used—thoughtful control and layered illumination create environments that feel intuitive, supporting comfort, functionality, and visual balance.',

  description3:
  'For indoor/outdoor spaces, lighting control systems pair LED illumination with overhead infrared heaters, extending comfortable use well past sunset for year-round entertaining. '
},

{
  number: '03',

  image: '/slide3.jpg',

  title: 'Entertainment Lounge.',

  description1:
  'Designed for entertaining, recreation, and meaningful connection.',

  description2:
  'We design entertainment spaces for enjoying music, watching the big game, hosting guests, or unwinding at the end of the day—bringing people together with comfort and ease.',

  description3:
  'Our audio, video, lighting, and control systems work quietly in the background, supporting multi-display video walls and whole-home audio without competing for attention.'
},
{
  number:'04',

  image:'slide4.jpg',

  title:'Architectural Audio.',

  description1:
  'We integrate speaker systems into the architecture itself—concealed in ceilings, walls, and cabinetry—to deliver consistent, high-quality sound without visual interruption.',

  description2:
  `Even a subwoofer can live built into an island or millwork, filling a kitchen, living space, or gathering area with rich, full sound while leaving the room's design untouched.`,

  // description3:
  // 'Heard throughout the space, never competing with it.'
},

{
  number:'05',

  image:'slide5.jpg',

  title:'Security & Privacy.',

  description1:
  'Peace of mind, built into the property.',

  description2:
  'We design security and access systems that protect a property without making it feel guarded—automated gates, keypad and card access control, and perimeter lighting that work together quietly at the edge of the home. ',

  description3:
  'Cameras, sensors, and monitoring integrate into daily life, giving homeowners visibility and control from anywhere, day or night.'
},

{
  number:'06',

  image:'slide6.jpg',

  title:'Outdoor Environments.',

  description1:
  'Exterior spaces deserve the same level of consideration.',

  description2:
  'We extend audio, lighting, and control beyond the interior—supporting fire features, weatherproof displays, landscape speakers, and pool and patio lighting with the same thoughtful design as the rest of the home.',

  description3:
  'Every system is built into the landscape itself, not applied on top of it.'
},

{
  number:'07',

  image:'slide7.jpg',

  title:'Simulation Lounge.',

  description1:
  'Engineered for performance, practice, and entertainment.',

  description2:
  'We build golf and sports simulation rooms using Full Swing simulation technology, precision lighting, and immersive audio create a club-quality experience.',

  description3:
  'Integrated Video, audio, lighting, and control systems work together, turning practice into performance and downtime into entertainment.'
}



];

goToSlide(index:number){

this.currentSlide=index;

}

nextSlide(){

this.currentSlide=
(this.currentSlide+1)%this.slides.length;

}

prevSlide(){

this.currentSlide=
(this.currentSlide-1+this.slides.length)%this.slides.length;

}


ngOnInit(){

// setInterval(()=>{

// this.nextSlide();

// },5000)

}
}