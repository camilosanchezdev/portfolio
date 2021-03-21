import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificadosService {
  constructor() {}
  certificados = [
    {
      id: 8,
      name: 'Java',
      certificador: 'SoloLearn',
      image: './../../../assets/certificados/sololearn java.png',
      logo: './../../../assets/logos/java.png',
      date: 'March - 2021',
    },
    {
      id: 7,
      name: 'Learn Git course',
      certificador: 'Codecademy',
      image: './../../../assets/certificados/codecademy learn git course.png',
      logo: './../../../assets/logos/git.png',
      date: 'February - 2021',
    },
    {
      id: 6,
      name: 'PhaserJs - Video games',
      certificador: 'Codecademy',
      image:
        './../../../assets/certificados/codecademy create video games with phaserjs skill path.png',
      logo: './../../../assets/logos/phaser.png',
      date: 'September - 2020',
    },
    {
      id: 5,
      name: 'Learn jQuery Course',
      certificador: 'Codecademy',
      image:
        './../../../assets/certificados/codecademy learn jquery course.png',
      logo: './../../../assets/logos/jquery.png',
      date: 'September - 2020',
    },
    {
      id: 4,
      name: 'SQL Fundamentals course',
      certificador: 'SoloLearn',
      image:
        './../../../assets/certificados/sololearn sql fundamentals course.png',
      logo: './../../../assets/logos/sql.png',
      date: 'June - 2020',
    },
    {
      id: 3,
      name: 'PHP Tutorial Course',
      certificador: 'SoloLearn',
      image: './../../../assets/certificados/sololearn php tutorial.png',
      logo: './../../../assets/logos/php.png',
      date: 'June - 2020',
    },

    {
      id: 2,
      name: 'C# Tutorial course',
      certificador: 'SoloLearn',
      image:
        './../../../assets/certificados/sololearn c sharp tutorial course.png',
      logo: './../../../assets/logos/c sharp.png',
      date: 'May - 2020',
    },

    {
      id: 1,
      name: 'Responsive Web Design',
      certificador: 'FreeCodeCamp',
      image:
        './../../../assets/certificados/freecodecamp responsive web design.png',
      logo: './../../../assets/logos/freecodecamp.png',
      date: 'March - 2020',
    },
  ];
  certificadoPorId(id): String {
    for (let i = 0; i < this.certificados.length; i++) {
      if (this.certificados[i]['id'] === id)
        return this.certificados[i]['image'];
    }
  }
}
