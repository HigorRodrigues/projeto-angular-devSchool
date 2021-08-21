import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const material = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule
];

const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...material,
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
