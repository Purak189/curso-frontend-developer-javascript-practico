const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', () => {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
});

burguerMenu.addEventListener('click', () => {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener('click', () => {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
});

const productList = [];
productList.push({
  name: 'Mouse Gamer Acer',
  price: 120,
  image: 'https://images.pexels.com/photos/19012038/pexels-photo-19012038/free-photo-of-tecnologia-moderno-raton-equipo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Dron',
  price: 1400,
  image: 'https://images.pexels.com/photos/19131319/pexels-photo-19131319/free-photo-of-drone-volando-de-cerca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Mando PS4',
  price: 450,
  image: 'https://images.pexels.com/photos/1082810/pexels-photo-1082810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Teclado',
  price: 700,
  image: 'https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Macbook Pro',
  price: 3400,
  image: 'https://images.pexels.com/photos/577560/pexels-photo-577560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Iphone 12',
  price: 2400,
  image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Teclado Gamer',
  price: 350,
  image: 'https://images.pexels.com/photos/4792716/pexels-photo-4792716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const img = document.createElement('img');
    img.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfo.append(productInfoDiv,productFigure);
    productFigure.appendChild(productFigureImg);
  
    productCard.append(img, productInfo);
  
    cardContainer.appendChild(productCard);
  }
}
renderProducts(productList);