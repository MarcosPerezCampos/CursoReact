import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //importate y ejecutate
import { App } from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const swiper = new Swiper('.swiperInicio', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   // autoplay:{delay: 3000},
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

