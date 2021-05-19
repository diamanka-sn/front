import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { AchatService } from '../../service/achat.service';
import { DepensesService } from '../../service/depenses.service';
import { ProductionService } from '../../service/production.service';
import { SanteService } from '../../service/sante.service';
import { VenteService } from '../../service/vente.service';
import { listeSante } from '../../_models/Bovins';
import { depensesMensuelle, typeDepense } from '../../_models/Depense';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Product {
  name: string;
  price: number;
  qty: number;
}
class Invoice {
  montant: string;
  type: string;
  annee: number;


  products: Product[] = [];


}
@Component({
  selector: 'ngx-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  quantiteVendu: number;
  quantiteTotal: number;
  quantiteRestante: number;
  pourcentageVente: string;
  pourcentage: string;

  venteLait: number;
  coutLait: number;
  pourcentageLait: string;
  depense: typeDepense[] = []
  sante: listeSante[] = []
  achatBovin: any;
  achataliment:any;
  constructor(private acht: AchatService, private ste: SanteService, private prod: ProductionService, private dep: DepensesService, private vente: VenteService) { }

  invoice = new Invoice();

  generatePDF() {


    let docDefinition = {
      // background: 'KoSsam',
      content: [
        {
          text: 'KoSsam',
          fontSize: 23,
          bold: true,
          alignment: 'center',
          color: 'skyblue',
        },
        {
          text: 'RAPPORT MENSUEL',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue',
        },
        {
          text: '',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              {
                text: `Rapport N° : ${((Math.random() * 1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Production',
          alignment: 'center',
          style: 'sectionHeader'
        },
        {

          table: {

            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              ['Quantité produite', 'Quantité vendue', 'Quantité restante'],
              [this.quantiteTotal + ' L', this.quantiteVendu + ' L', this.quantiteRestante + ' L'],
            ]
          }
        },
        {
          text: 'Ventes',
          alignment: 'center',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              ['Produits', 'Quantité vendue', 'Cout Vente'],
              ['Lait', this.quantiteVendu + ' L', this.coutLait + ' F cfa'],
              ['Bovin', 'quantite', 'nombre'],
            ]
          }
        },
        {
          text: 'Dépenses',
          alignment: 'center',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
              ['Type de dépense', 'Montant'],
              ...this.depense.map(p => ([p.type, p.montant + ' F cfa'])),
              ['Achats bovins',this.achatBovin + ' F cfa'],
              ['Achats aliments',this.achataliment + ' F cfa'],
           ]
          }
        },
        {
          text: 'Santé',
          alignment: 'center',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              ['Nom bovin', 'Maladies', 'Date malade'],
              ...this.sante.map(p => ([p.nom, p.maladie, p.date]))
            ]
          }
        },
        {
          text: 'Reproduction',
          alignment: 'center',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              ['Naissance', 'Veau', 'Velle'],
              ['478', 'quantite', 'nombre'],
            ]
          }
        },
        {
          columns: [
            [{ text: 'Signature', alignment: 'right', italics: true }],
          ]
        },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15, 0, 15]
        }
      }
    }
    pdfMake.createPdf(docDefinition).open();
    pdfMake.createPdf(docDefinition).download('rapport_mensuelle_' + new Date().toLocaleString() + '.pdf');

  }

  ngOnInit(): void {
    this.prod.getProductionDuMois().subscribe(
      res => {
        this.quantiteTotal = parseInt(res['2021'].map(res => res.total.toString()))

        this.prod.getVenteMoisCourant().subscribe(
          res => {
            this.quantiteVendu = parseInt(res['2021'].map(res => res.quantite.toString()))

            this.quantiteRestante = this.quantiteTotal - this.quantiteVendu

          })
      })

    this.vente.getVenteLaitMoisCourant().subscribe(
      res => {
        this.coutLait = parseInt(res['2021'].map(res => res.montant.toString()))
      })

    this.dep.getListeDepenseCourant().subscribe(
      res => {
        this.depense = res['2021']
      })
    this.ste.getListeBovinMalade().subscribe(
      res => {
        this.sante = res
      })

      this.acht.getAchatBovinMoisCourant().subscribe(
        res => {
          this.achatBovin = parseInt(res['2021'].map(res => res.montant.toString()))
        })

        this.acht.getAchatAlimentMoisCourant().subscribe(
          res => {
            this.achataliment = parseInt(res['2021'].map(res => res.montant.toString()))
          })
  }
}
