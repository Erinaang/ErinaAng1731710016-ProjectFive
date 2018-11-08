import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gedhe1731710075';
  loadedFeature='recipe';

  onNavigate(feature:string){
    this.loadedFeature=feature;
    
  }
}
