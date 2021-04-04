import { Component, OnInit } from '@angular/core';
import { MaladieService } from '../../../service/maladie.service';
import { bovinMalade } from '../../../_models/Maladie';

@Component({
  selector: 'ngx-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  p: number = 1;

  malades : bovinMalade [] = []
  constructor(private ml: MaladieService) { }

  ngOnInit(): void {
    this.ml.getConsultationFeme().subscribe((response) => {
      this.malades = response;
      console.log(this.malades)
    })
  }


}
