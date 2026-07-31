import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { ViewChild, ElementRef } from '@angular/core';
interface SystemItem {
  img: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-project-page1',
  imports: [RouterModule,CommonModule],
  templateUrl: './project-page1.component.html',
  styleUrl: './project-page1.component.css'
})

export class ProjectPage1Component {
@ViewChild('galleryScroll') galleryScroll!: ElementRef<HTMLDivElement>;

  scrollGallery(direction: number) {
  const el = this.galleryScroll.nativeElement;
  const scrollAmount = el.clientWidth * 0.6; // scrolls ~60% of visible width per click
  el.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
systems: SystemItem[] = [
  {
    img: '/thumbnail_gallery/Backyard Day 1 - W.jpg',
    title: 'Outdoor Living',
    description: 'Outdoor spaces combining lighting, audio, video, and seamless control.'
  },
  {
    img: '/thumbnail_gallery/Backyard Day 2 - W.jpg',
    title: 'Outdoor Living',
    description: 'Outdoor spaces combining lighting, audio, video, and seamless control.'
  },
  {
    img: '/thumbnail_gallery/Backyard Day 3  - W.jpg',
    title: 'Outdoor Living',
    description: 'Outdoor spaces combining lighting, audio, video, and seamless control.'
  },
  {
    img: '/thumbnail_gallery/Bedroom Blue 2- W Image 1.jpg',
    title: 'Entertainment Lounge',
    description: 'Designed for movie nights and gatherings with immersive audio, lighting, and centralized control.'
  },
  {
    img: '/thumbnail_gallery/Day - Bedroom 1 - Shade - W.jpg',
    title: 'Integrated Living',
    description: 'Centralized control of lighting, shading, audio, and climate creates a seamless living experience.'
  },
  {
    img: '/thumbnail_gallery/Dining Room - Day - W.jpg',
    title: 'Integrated Living',
    description: 'Centralized control of lighting, shading, audio, and climate creates a seamless living experience.'
  },
  {
    img: '/thumbnail_gallery/Golf 1 - W.jpg',
    title: 'Simulation Lounge',
    description: 'Featuring a Full Swing simulator with realistic play and integrated entertainment systems.'
  },
  {
    img: '/thumbnail_gallery/Golf 2 - W.jpg',
    title: 'Simulation Lounge',
    description: 'Featuring a Full Swing simulator with realistic play and integrated entertainment systems.'
  },
  {
    img: '/thumbnail_gallery/Golf 3 - W.jpg',
    title: 'Simulation Lounge',
    description: 'Featuring a Full Swing simulator with realistic play and integrated entertainment systems.'
  },
  {
    img: '/thumbnail_gallery/Gym 1 - W - Image.jpg',
    title: 'Integrated Living',
    description: 'Centralized control of lighting, shading, audio, and climate creates a seamless living experience.'
  },
  {
    img: '/thumbnail_gallery/Gym 5- W.jpg',
    title: 'Integrated Living',
    description: 'Centralized control of lighting, shading, audio, and climate creates a seamless living experience.'
  },
  {
    img: '/thumbnail_gallery/Kitchen - Evening - W.jpg',
    title: 'Night View',
    description: "Architectural lighting enhances the home's beauty after sunset, creating a warm and elegant atmosphere."
  },
  {
    img: '/thumbnail_gallery/Ktichen 7 - no image - W.jpg',
    title: 'Integrated Living',
    description: 'Centralized control of lighting, shading, audio, and climate creates a seamless living experience.'
  },
  {
    img: '/thumbnail_gallery/Ktichen 8 - W.jpg',
    title: 'Entertainment Lounge',
    description: 'Designed for movie nights and gatherings with immersive audio, lighting, and centralized control.'
  },
  {
    img: '/thumbnail_gallery/Lanai  2-W.jpg',
    title: 'Night View',
    description: "Architectural lighting enhances the home's beauty after sunset, creating a warm and elegant atmosphere."
  },
  {
    img: '/thumbnail_gallery/Lanai - W.jpg',
    title: 'Night View',
    description: "Architectural lighting enhances the home's beauty after sunset, creating a warm and elegant atmosphere."
  },
  {
    img: '/thumbnail_gallery/Living Room - W.jpg',
    title: 'Entertainment Lounge',
    description: 'Designed for movie nights and gatherings with immersive audio, lighting, and centralized control.'
  },
  {
    img: '/thumbnail_gallery/Night - Front 2 - W.jpg',
    title: 'Night View',
    description: "Architectural lighting enhances the home's beauty after sunset, creating a warm and elegant atmosphere."
  },
  {
    img: '/thumbnail_gallery/Theater 1 - W.jpg',
    title: 'Entertainment Lounge',
    description: 'Designed for movie nights and gatherings with immersive audio, lighting, and centralized control.'
  },
  {
    img: '/thumbnail_gallery/Vanity 2 - W.jpg',
    title: 'Hidden Technology',
    description: "The Séura Vanity TV Mirror blends technology seamlessly into the space, preserving the room's clean and sophisticated design."
  }
];

  selectedItem: SystemItem | null = null;

  openLightbox(item: SystemItem) {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedItem = null;
    document.body.style.overflow = '';
  }

}
