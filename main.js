const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', () => {
  aside.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
});

burguerMenu.addEventListener('click', () => {
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener('click', () => {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
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
  image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
  image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Teclado Gamer',
  price: 350,
  image: 'https://images.pexels.com/photos/4792716/pexels-photo-4792716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
/*
      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
for (product of productList){
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

  const productFigure = document.createElement('figure');
  
  const productFigureImg = document.createElement('img');
  img.setAttribute('src', './icons/bt_add_to_cart.svg');
}