import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Aliment: string;
  Quantite:number;

}
@Component({
  selector: 'ngx-consommation-jour',
  templateUrl: './consommation-jour.component.html',
  styleUrls: ['./consommation-jour.component.scss']
})
export class ConsommationJourComponent {

 
  customColumn = 'Aliment';
  defaultColumns = ['Quantite'];
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
      data: { Aliment: 'Cereales', Quantite:  779 },
    }, {
      data: { Aliment: 'Mais', Quantite:  737 },
    }, {
      data: { Aliment: 'ALiment Vache laitiere', Quantite:  737 },
    }, 
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

}
