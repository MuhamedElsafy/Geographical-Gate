import { Component } from '@angular/core';

@Component({
  selector: 'app-data-set-details',
  templateUrl: './data-set-details.component.html',
  styleUrl: './data-set-details.component.scss'
})
export class DataSetDetailsComponent {
  value: number = 4;
  visible: boolean = false;
  value2!: string;
  showDialog() {
      this.visible = true;
  }
}
