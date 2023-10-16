import { Component } from '@angular/core';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageCarousel';

 

  image = [
    "https://images.squarespace-cdn.com/content/v1/5ca7eb2aa56827a4cf407fd9/1592754110428-9MZPBFUVS6CT6VNNSN02/20190417224211_IMG_6180+%281%29.jpg?format=1000wng",
    "https://en.idei.club/uploads/posts/2023-06/1687614860_en-idei-club-p-cafe-aesthetic-dizain-1.jpg",
    "https://barstoolsfurniture.com/wp-content/uploads/2018/12/Never-Coffee-In-Portland-Is-An-Aesthetic-Dream-Of-Modern-Design_3.jpg"
  ]
}