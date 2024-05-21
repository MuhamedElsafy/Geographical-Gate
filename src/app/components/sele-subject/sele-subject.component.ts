import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sele-subject',
  templateUrl: './sele-subject.component.html',
  styleUrl: './sele-subject.component.scss'
})
export class SeleSubjectComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  value: number = 5;
  ngOnInit() {
      this.items = [ { label: 'الصفحه الرئيسيه', route:'home' }, { label: 'كاتلوج البيانات' , route:'data-catalog'},];
  }
}
