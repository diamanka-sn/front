import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbThemeService, NbColorHelper } from '@nebular/theme';


//pdf 
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { RapportService } from '../../../service/rapport.service';

@Component({
  selector: 'ngx-periode',
  templateUrl: './periode.component.html',
  styleUrls: ['./periode.component.scss']
})
export class PeriodeComponent implements OnInit {
  @ViewChild('content', { static: false }) el!: ElementRef;
  form = new FormGroup({
    dateDebut: new FormControl('', Validators.required),
    dateFin: new FormControl('', Validators.required),
  })
  themeSubscription: any;


  data: any;
  options: any;

  constructor(private theme: NbThemeService, private rapport: RapportService) { }
  dateRapport: any;
  ngOnInit(): void {
    this.dateRapport = new Date().toLocaleString();
  }
  dateDebut = "";
  dateFin = "";
  resultatDebut = ""
  achetes: any;

  //dates
  error: any = { isError: false, errorMessage: "" }
  rapportPeriode() {
    this.dateDebut = this.dateDebut
    this.dateFin = this.dateFin


    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.rapport.getDetailAliment(this.dateDebut, this.dateFin).subscribe(res => {
        this.achetes = parseInt(res[0].achetes.toString())
        console.log(res)
        console.log(this.achetes)
        this.data = {
          labels: ['Aliments', 'Bovin'],
          datasets: [{
            data: [this.achetes, 200000],
            backgroundColor: [colors.primaryLight, colors.successLight],
          }],
        };



        this.options = {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
          legend: {
            labels: {
              fontColor: chartjs.textColor,
            },
          },
        };
      })
    })

  }

  compareToDate() {
    if (new Date(this.form.controls['dateFin'].value) < new Date(this.form.controls['dateDebut'].value)) {
      this.error = { isError: true, errorMessage: 'La date de fin ne doit pas etre inferieure à la date de debut' }
    }
  }
  telechargerPdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("rapport_periodique_" + new Date().toLocaleString() + ".pdf");
      }
    })


  }


}
