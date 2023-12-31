import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animated-infinity',
  templateUrl: './animated-infinity.component.html',
  styleUrls: ['./animated-infinity.component.scss']
})
export class AnimatedInfinityComponent {
  @ViewChild('animation') animation!: ElementRef;

  animate(): void {
    this.animation.nativeElement.beginElement();
  }
}
