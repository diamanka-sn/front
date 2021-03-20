import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ngx-detail-bovin',
  template:  `
  <div [ngStyle]="getMyStyles()" class="skelt-load loader"></div>
`,
  styleUrls: ['./detail-bovin.component.css']
})
export class DetailBovinComponent implements OnInit {

  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;

  constructor() { }

  ngOnInit() {
  }

  getMyStyles() {
    const myStyles = {
        'width.px': this.Cwidth ? this.Cwidth : '',
        'height.px': this.Cheight ? this.Cheight : '',
        'border-radius': this.circle ? '50%' : ''
    };
    return myStyles;
}

}
