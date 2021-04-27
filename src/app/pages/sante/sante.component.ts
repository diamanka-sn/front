import { Component, OnInit } from '@angular/core';
import { SanteService } from '../../service/sante.service';

@Component({
  selector: 'ngx-sante',
  templateUrl: './sante.component.html',
  styleUrls: ['./argon.scss']
})


export class SanteComponent implements OnInit {
  nombreMaladie: number;
  bovinMalade: number;
  bovinMort: number;
  bovinGuerri: number;
  constructor(private snte: SanteService) { }

  ngOnInit(): void {
    this.snte.getNombreMaldie().subscribe(res => {
      this.nombreMaladie = parseInt(res.toString());
    })

    this.snte.getNombreBovinMalade().subscribe(res => {
      this.bovinMalade = parseInt(res.toString());
    })

    this.snte.getNombreBovinMort().subscribe(res => {
      this.bovinMort = parseInt(res.toString());
    })

    this.snte.getNombreBovinGuerri().subscribe(res => {
      this.bovinGuerri = parseInt(res.toString());
    })
  }

}
