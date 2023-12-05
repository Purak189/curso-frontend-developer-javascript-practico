const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail'); 
const productDetailClose = document.querySelector('.product-detail-close');

/* Variables para manejar filtros*/
const categorias = ['Ropas', 'Tecnologia', 'Muebles', 'Juguetes', 'Otros']
const filtroTodo = document.querySelector('.filtroTodo');
const filtroTodoMobil = document.querySelector('.filtroTodoMobil');

const filtros = categorias.map(categoria => document.querySelector(`.filtro${categoria}`));
const filtrosMobil = categorias.map(categoria=> document.querySelector(`.filtro${categoria}Mobil`));

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
  productDetail.classList.add('inactive');
});

productDetailClose.addEventListener('click', () => {
  productDetail.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
});

/* Funciones de filtro */
filtroTodo.addEventListener('click', () => {
  renderProducts();
});
filtroTodoMobil.addEventListener('click', () => {
  mobileMenu.classList.add('inactive');
  renderProducts();
});

categorias.forEach((categoria, index) => {
  const filtro = filtros[index];
  const filtroMobil = filtrosMobil[index];
  
  filtro.addEventListener('click', () => {
    renderProducts(categoria.toLowerCase());
  });

  filtroMobil.addEventListener('click', () =>{
    mobileMenu.classList.add('inactive');
    renderProducts(categoria.toLowerCase());
  });
});

async function cargarProductos() {
  const response = await fetch('productos.json');
  const data = await response.json();
  return data;
}

async function renderProducts(categorias){
  const productos = await cargarProductos();

  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  for (const product of productos){
    if(!categorias || product.categoria == categorias){
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
      img.addEventListener('click', () => {
        if(productDetail.classList.contains('inactive')){
          productDetail.classList.remove('inactive');
        }
      });
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
}

renderProducts();