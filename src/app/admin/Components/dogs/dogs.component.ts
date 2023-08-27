import { Component } from '@angular/core';
import { DogsService } from '../../../dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {

  randomImage: string = '';

  constructor(private dogsService: DogsService) {}

  getRandomImage() {
    this.dogsService.getRandomImage().subscribe(
      (response: any) => {
        this.randomImage = response.message;
      },
      (error) => {
        console.error('Error fetching random image:', error);
      }
    );
  }
}
