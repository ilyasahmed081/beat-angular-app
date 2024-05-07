import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  category: any = {
    title: 'Popular Categories',
    categories: [
      { name: 'Modern Edition' },
      { name: 'Professional Edition' },
      { name: 'Sport Edition' },
      { name: 'Classic Edition' },
      { name: 'Progressive Edition' },
      { name: 'Color Edition' }
    ]
  }
  // product category cards
  productCategory: any = [
    {
      id: 1,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 2,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 3,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
  ];

  // best products
  bestProducts: any = [
    {
      id: 1,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 2,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 3,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 4,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 5,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 6,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 7,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    },
    {
      id: 8,
      img: '../../../assets/img/headphone2.png',
      title: 'Fatex Product Headphone',
      info: 'There are many variations of passages of Lorem Ipsum, but the suffered',
      price: '$110.00',
    }
  ];
}
