import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  selectedLogo: { id: number; name: string; src: string } | null = null;

  logos = [
    {
      id: 1,
      name: 'Sicope',
      src: '../../../assets/logos/sicope.png',
      url: 'https://sicope.com',
    },
    {
      id: 2,
      name: 'Sinope',
      src: '../../../assets/logos/sinope.png',
      url: 'https://sinope.com',
    },
    {
      id: 3,
      name: 'Coper',
      src: '../../../assets/logos/coper.png',
      url: 'https://caocc.ejercito.mil.co/SiwepDiper-web/faces/index.xhtml',
    },
    {
      id: 4,
      name: 'Fovid',
      src: '../../../assets/logos/fovid.png',
      url: 'https://fovid.ejercito.mil.co/Fovid-2.0/faces/index.xhtml',
    },
    {
      id: 5,
      name: 'Astra',
      src: '../../../assets/logos/astra.png',
      url: 'https://astra.com',
    },
  ];

  onClickLogo(logo: { id: number; name: string; src: string; url: string }) {
    window.open(logo.url, '_blank');
  }

  selectLogo(logo: { id: number; name: string; src: string }) {
    this.selectedLogo = logo;
  }

  closePanel() {
    this.selectedLogo = null;
  }
}