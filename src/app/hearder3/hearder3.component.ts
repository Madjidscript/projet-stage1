import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hearder3',
  standalone: true,
  imports: [],
  templateUrl: './hearder3.component.html',
  styleUrls: ['./hearder3.component.css']
})
export class Hearder3Component implements OnInit {

  text:string="photos gratuite"
  selectedOptions: string = 'tendance';
  constructor(private router:Router){}
  ngOnInit() {
    
  }

  onSelectChanges(event: Event) {
    event.preventDefault
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOptions = selectElement.value;
    console.log('Selected value:', this.selectedOptions);
    if (this.selectedOptions== "tendance") {
      this.text="photo gratuite"
    } else {
      this.text='Nouvelle photo'
    }
    console.log("on hooo",this.text)
    return this.text
  }

  tendance(){
    this.router.navigate(["/photos"])
  }
  Nouveau(){
    this.router.navigate(["/photos-new"])
  }
 

}
