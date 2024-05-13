import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data-catalog',
  templateUrl: './data-catalog.component.html',
  styleUrl: './data-catalog.component.scss'
})
export class DataCatalogComponent implements OnInit {

  items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [ { label: 'الصفحه الرئيسيه', route:'home' }, { label: 'كاتلوج البيانات' , route:'data-catalog'},];
    }
 
}
