
const airFilterImg = './static/images/Airfilter.png';
const eyeCamImg = './static/images/Eyecam.png'
const faceItImg = './static/images/Faceit.png'
const todoImg = './static/images/Todo.png'
const loopStudiosImg = './static/images/Studious.png'

let cardItems = [
  {
    imgSrc: airFilterImg,
    title: 'AIRFILTER',
    desc: 'Solving the problem of poor indoor air quality by filtering the air',
    color: '#2E3947'
  },
  {
    imgSrc: eyeCamImg,
    title: 'EYECAM',
    desc: 'Product that lets you edit your favorite photos and videos at any time',
    color: '#34B7A2'
  },
  {
    imgSrc: faceItImg,
    title: 'FACEIT',
    desc: 'Get to meet your favorite internet superstar with the faceit app',
    color: '#3F2F83'
  },
  {
    imgSrc: todoImg,
    title: 'TODO',
    desc: 'A todo app that features cloud sync with light and dark mode',
    color: '#40125A'
  },
  {
    imgSrc: loopStudiosImg,
    title: 'LOOPSTUDIOS',
    desc: 'A VR experience app made for Loopstudios',
    color: '#853A4D'
  }

];

const container = document.querySelector('.card-container');

// const card = document.querySelector('.card');

cardItems.forEach((item, i) => {
  const html = `
  <div class="card " >
    <div class="card-top card-${i}">
      <img src=${item.imgSrc} class="card_img">
    </div>
    <div class="card_bottom">
      <h3 class="card_title">${item.title}</h3>
      <P class="card_content">${item.desc}</P>
    </div>
  </div>
  `

  container.insertAdjacentHTML('beforeend', html);
  const cardTop = document.querySelector(`.card-${i}`);
  cardTop.style.backgroundColor = item.color;

});
