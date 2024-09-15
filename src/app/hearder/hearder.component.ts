import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-hearder',
  standalone: true,
  imports: [],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 450) {
      navbar?.classList.add("navbar-fixed");
    } else {
      navbar?.classList.remove("navbar-fixed");
    }
  }

}
