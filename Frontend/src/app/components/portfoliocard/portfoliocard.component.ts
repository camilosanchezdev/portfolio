import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosService } from '../../services/proyectos.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-portfoliocard',
  templateUrl: './portfoliocard.component.html',
  styleUrls: ['./portfoliocard.component.css'],
})
export class PortfoliocardComponent implements OnInit {
  progressSpinner: boolean = false;
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
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  currentImage: string = '';
  routeNumber: string;
  screenshots: any = [
    // 'https://raw.githubusercontent.com/camilosanchezdev/dentalclinic/main/screenshots/screenshot-1.png',
    // 'https://raw.githubusercontent.com/camilosanchezdev/dentalclinic/main/screenshots/screenshot-4.png',
    // 'https://raw.githubusercontent.com/camilosanchezdev/dentalclinic/main/screenshots/screenshot-3.png',
    // 'https://raw.githubusercontent.com/camilosanchezdev/dentalclinic/main/screenshots/screenshot2.png',
    // 'https://raw.githubusercontent.com/camilosanchezdev/dentalclinic/main/screenshots/screenshot5.png',
  ];
  proyecto = {
    title: '',
    screenshot_main: '',
    category: '',
    technologies: [],
    body: '',
    github: '',
    demo: '',
    screenshots: [],
  };
  responsiveOptions = [
    // {
    //   breakpoint: '900px',
    //   numVisible: 1,
    //   numScroll: 1,
    // },
    // {
    //   breakpoint: '768px',
    //   numVisible: 1,
    //   numScroll: 1,
    // },
    // {
    //   breakpoint: '560px',
    //   numVisible: 1,
    //   numScroll: 1,
    // },
  ];
  constructor(
    private modal: NgbModal,
    private proyectosService: ProyectosService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.routeNumber = params['id'];
    });
    this.progressSpinner = true;
    this.proyectosService.getProyectById(this.routeNumber).subscribe(
      (data) => this.handleProyecto(data),
      (error) => console.log(error)
    );
  }
  handleProyecto(data): void {
    this.progressSpinner = false;
    this.proyecto.title = data[0].title;
    this.proyecto.body = data[0].body;
    this.proyecto.category = data[0].categoria;
    this.proyecto.demo = data[0].demo;
    this.proyecto.github = data[0].github;
    this.proyecto.screenshot_main = data[0].screenshot_main;

    data[1].forEach((element) => {
      this.proyecto.screenshots.push(element.name);
    });
    data[2].forEach((element) => {
      this.proyecto.technologies.push(element[0].name);
    });
  }
  verImagen(imagen): void {
    this.currentImage = imagen;
    this.modal.open(this.modalContent, { size: 'lg' });
  }
}
