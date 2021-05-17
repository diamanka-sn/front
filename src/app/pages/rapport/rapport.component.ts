import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ProductionService } from '../../service/production.service';
import { VenteService } from '../../service/vente.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Product {
  name: string;
  price: number;
  qty: number;
}
class Invoice {
  customerName: string;
  address: string;
  contactNo: number;
  email: string;

  products: Product[] = [];
  additionalDetails: string;

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
  constructor(private prod: ProductionService, private vente: VenteService) { }

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
            widths: ['*', '*', '*', '*'],
            body: [
              ['Quantité produite', 'Quantité vendue', 'Quantité restante', 'pourcentage'],
              [this.quantiteTotal + ' litres', this.quantiteVendu + ' litres', this.quantiteRestante + ' litres', this.pourcentageVente],
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
            widths: ['*', '*', '*', '*'],
            body: [
              ['Produits', 'Quantité vendue', 'Cout Vente', 'Pourcentage'],
              ['Lait', this.venteLait + ' litres', this.coutLait + ' F cfa', '2'],
              ['Bovin', 'quantite', 'nombre', '2'],
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
            widths: ['auto', '*', 'auto', 'auto'],
            body: [
              ['Type de dépense', 'libellé', 'Cout dépense', 'Date dépense'],
              ['478', 'quantite', 'nombre', '2'],
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
            widths: ['auto', '*', 'auto', 'auto'],
            body: [
              ['Maladies', 'Nombre Bovins atteint', 'Nombre bovin Mort', 'Nombre bovin guerri'],
              ['478', 'quantite', 'nombre', '2'],
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

  }

  ngOnInit(): void {
    this.prod.getProductionDuMois().subscribe(
      res => {
        this.quantiteTotal = parseInt(res['2021'].map(res => res.total.toString()))

        this.prod.getVenteMoisCourant().subscribe(
          res => {
            this.quantiteVendu = parseInt(res['2021'].map(res => res.quantite.toString()))
            this.quantiteRestante = this.quantiteTotal - this.quantiteVendu
            this.pourcentageVente = this.quantiteVendu / this.quantiteTotal * 100 + '%'
          })
      })
    this.prod.getVenteMoisCourant().subscribe(
      res => {
        this.venteLait = parseInt(res['2021'].map(res => res.quantite.toString()))
      })
    this.vente.getVenteLaitMoisCourant().subscribe(
      res => {
        this.coutLait = parseInt(res['2021'].map(res => res.montant.toString()))
      })
  }
}
