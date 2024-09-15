import { Component, OnInit } from '@angular/core';
import { HearderComponent } from '../hearder/hearder.component';
import { MatIconModule } from '@angular/material/icon';
import { GalerieComponent } from '../galerie/galerie.component';
import { FormsModule } from '@angular/forms';
import { Hearder3Component } from '../hearder3/hearder3.component';



@Component({
  selector: 'app-tendance-photo',
  standalone: true,
  imports: [HearderComponent,MatIconModule,GalerieComponent,FormsModule,Hearder3Component],
  templateUrl: './tendance-photo.component.html',
  styleUrl: './tendance-photo.component.css'
})
export class TendancePhotoComponent implements OnInit {
  selectedOption: string = 'images';
  ngOnInit(): void {
    
  }


  onSelectChange(event: Event) {
  
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOption = selectElement.value;
    console.log('Selected value:', this.selectedOption);
    console.log("onnnnn",this.selectedOption)
    return this.selectedOption
  }

}
