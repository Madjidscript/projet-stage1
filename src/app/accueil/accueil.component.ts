import { Component, OnInit } from '@angular/core';
import { HearderComponent } from '../hearder/hearder.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { GalerieComponent } from '../galerie/galerie.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HearderComponent,MatIconModule,GalerieComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  selectedOption: string = '';
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }
 

  

  onSelectChange(event: Event) {
    event.preventDefault
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    console.log('Selected value:', this.selectedOption);
    return this.selectedOption
  }
 

}
