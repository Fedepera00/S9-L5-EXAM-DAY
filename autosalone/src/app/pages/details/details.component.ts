import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { iCar } from '../../models/iCar';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  car: iCar | undefined;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carsService.getCars().subscribe((cars: iCar[]) => {
        this.car = cars.find((car) => car.id === id);
      });
    }
  }
}
