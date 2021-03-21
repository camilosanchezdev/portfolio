import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogcertificado',
  templateUrl: './dialogcertificado.component.html',
  styleUrls: ['./dialogcertificado.component.css'],
})
export class DialogcertificadoComponent implements OnInit {
  constructor(public dialogRef: MatDialog) {}

  ngOnInit(): void {}
}
