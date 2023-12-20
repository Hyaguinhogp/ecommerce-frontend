import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  src = '../../../assets/'

  categories = [
    {
      name: 'Tenis casuais',
      img: this.src + 'category-tenis.png'
    },
    {
      name: 'Tenis esportivos',
      img: this.src + 'category-tenis.png'
    },
    {
      name: 'Sapatos',
      img: this.src + 'category-tenis.png'
    },
    {
      name: 'Relógios',
      img: this.src + 'category-tenis.png'
    },
    {
      name: 'Chuteiras',
      img: this.src + 'category-tenis.png'
    },
  ]
}
