import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { iCar } from '../../models/iCar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carsArray: iCar[] = [];
  brands = ['Audi', 'Fiat', 'Ford'];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((data: iCar[]) => {
      this.carsArray = this.getRandomCars(data, 6);
    });
  }

  getRandomCars(cars: iCar[], num: number): iCar[] {
    const shuffled = cars.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
}
