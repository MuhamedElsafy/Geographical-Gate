import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  value: number = 5;
  ngOnInit() {
      this.items = [ { label: 'الصفحه الرئيسيه', route:'home' }, { label: 'كاتلوج البيانات' , route:'data-catalog'},];
  }
}
