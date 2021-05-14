import { Component, OnInit } from '@angular/core';
import { CertificadosService } from '../../services/certificados.service';
import { Inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  _certificados = [];
  constructor(
    public dialog: MatDialog,
    public certificados: CertificadosService
  ) {
    this._certificados = certificados.certificados;
  }
  openDialog(numeroCertificado) {
    const imagen = this.certificados.certificadoPorId(numeroCertificado);
    const dialogRef = this.dialog.open(DialogCertificado, {
      data: {
        number: imagen,
      },
    });
  }
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit(): void {}
}
@Component({
  selector: 'app-dialogcertificado',
  templateUrl: '../dialogcertificado/dialogcertificado.component.html',
})
export class DialogCertificado implements OnInit {
  _imagen: String = '';
  _numeroCertificado: number;
  constructor(
    public dialogRef: MatDialogRef<DialogCertificado>,
    public certificados: CertificadosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this._imagen = data.number;
  }
  ngOnInit(): void {}
  closeCertificado(): void {
    this.dialogRef.close();
  }
}
