import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MessageDialogComponent } from './messages/message-dialog/message-dialog.component';
import { SnackbarDialogComponent } from './messages/snackbar-dialog/snackbar-dialog.component';

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
    ...components,
    MessageDialogComponent,
    SnackbarDialogComponent
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
