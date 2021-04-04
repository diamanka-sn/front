import { Component, OnInit } from '@angular/core';
import { MaladieService } from '../../../service/maladie.service';
import { bovinGueri } from '../../../_models/Maladie';

@Component({
  selector: 'ngx-maladie-detecter',
  templateUrl: './maladie-detecter.component.html',
  styleUrls: ['./maladie-detecter.component.scss']
})
export class MaladieDetecterComponent implements OnInit {
  guerrie: bovinGueri[] = []
  nbreGuerrie : any;
  constructor(private ml: MaladieService) { }

  ngOnInit(): void {
    this.ml.getGueriFeme().subscribe((response) => {
      this.guerrie = response;
    })

    this.ml.getNombreGueri().subscribe((response) => {
      this.nbreGuerrie = response;
    })
  }

}
