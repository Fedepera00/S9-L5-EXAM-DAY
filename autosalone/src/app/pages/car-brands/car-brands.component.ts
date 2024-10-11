import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { iCar } from '../../models/iCar';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.scss'],
})
export class CarBrandsComponent implements OnInit {
  brand: string = '';
  brandCars: iCar[] = [];

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.brand = params.get('brand') || '';
      this.loadCars();
    });
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((data: iCar[]) => {
      this.brandCars = data.filter(
        (car) => car.brand.toLowerCase() === this.brand.toLowerCase()
      );
    });
  }
}
