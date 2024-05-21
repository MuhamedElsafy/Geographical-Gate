import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [InputIconModule, IconFieldModule, FormsModule, NgForOf],
})
export class HomeComponent {
  
  constructor() {}

  mainTask: string[] = [
    'الاشجار(Tree)',
    'مستجمعات المياه ( watersheds)',
    'تحركات الرمال (Sand Movement)',
    'عد الاشجار (Tree Counting)',
    'توازن المياة (Water Balance)',
    'كشف التغيير (Change Detection)',
    'منصة ادارة (Mangament Platform)',
    'كشف التغيير (Change Detection)',
  ];

  mainTask2: string[] = [
    'التصنيفات (Classifications)',
    'حرائق الغابات (Wildfire)',
    'مستكشف الغطاء الأرضي (Land Cover)',
    'مستكشف لاندسات (Landsat Explorer)',
    'الجفاف (Drought)',
    'منصة التشجير (Afforestation Platform)',
    'منصة NCVC الجغرافية',
    'تطبيق تحليل NCVC',
  ];

 

  
}
