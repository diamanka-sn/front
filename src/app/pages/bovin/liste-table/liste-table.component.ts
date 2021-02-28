import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Nom: string;
  dateNaissance: string;
  race: string;
  phase: string;

}
 
@Component({
  selector: 'ngx-liste-table',
  templateUrl: './liste-table.component.html',
  styleUrls: ['./liste-table.component.scss']
})
export class ListeTableComponent {

  customColumn = 'Nom';
  defaultColumns = ['dateNaissance', 'race', 'phase'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  row: number;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { Nom: 'pouye', dateNaissance: '17 fev 2019', phase: '-', race: 'holsain' },
    }, {
      data: { Nom: 'modou', dateNaissance: '05 Avr 2018', phase: 'gestation', race: 'Monbeliar' },
    }, {
      data: { Nom: 'sagna', dateNaissance: '14 Dec 2020', phase: 'non gestation', race: 'Monbeliar' },
    }, {
      data: { Nom: 'badiane', dateNaissance: '14 Jan 2020', phase: 'non gestation', race: 'holsain' },
    }, {
      data: { Nom: 'sarr', dateNaissance: '14 Juin 2020', phase: '-', race: 'Monbeliar' },
    },
    {
      data: { Nom: 'sarr', dateNaissance: '14 Juin 2020', phase: '-', race: 'Monbeliar' },
    }, {
      data: { Nom: 'momo', dateNaissance: '14 Juin 2020', phase: '-', race: 'Holsain ' },
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  options = [
    { value: 'Vache', label: 'Vache' },
    { value: 'taureau', label: 'Taureau' },
    { value: 'veau', label: 'Veau' },
    { value: 'tout', label: 'Tout' },
  ];
  details(row:number){
    alert("je suis un details d'un bovin en particulier")
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle (click)="details()">
      je suis un detaails
    </nb-tree-grid-row-toggle>
  `,
})
export class FsIconComponent {
  @Input() phase: string;
  @Input() expanded: boolean;
  details(){
    console.log('l\'ensemble des details concernant un bovin en particulier')
  }
}
