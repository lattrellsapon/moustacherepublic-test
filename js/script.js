const myCartLabel = document.getElementById('my-cart-label');
const itemsToBuy = document.getElementById('items-to-buy');
const addToCartButton = document.getElementById('add-to-cart-button');
const selectSmall = document.getElementById('select-small');
const selectMedium = document.getElementById('select-medium');
const selectLarge = document.getElementById('select-large');
const myCart = document.getElementById('my-cart');
const userMessage = document.getElementById('user-message');
const smallBox = document.getElementById('small');
const mediumBox = document.getElementById('medium');
const largeBox = document.getElementById('large');
const sizeChosen = document.getElementById('size-chosen');
const gridMobileSmall = document.getElementById('grid-mobile-small');
let notidfyUserDiv = document.getElementById('notify-user');
let quantity = document.getElementById('quantity');

// Current item count
let currentItems = 0;
let isSelected = false;
let itemSizeSelected;

myCartLabel.addEventListener('mouseover', showItems);
itemsToBuy.addEventListener('mouseleave', hideItems);

const shirt = {
  size: ['S', 'M', 'L'],
  price: '$75.00'
};

function showItems() {
  itemsToBuy.style.visibility = 'visible';
  // gridMobileSmall.style.visibility = 'visible';
  if (currentItems > 0) {
    gridMobileSmall.style.visibility = 'visible';
  }
}

function hideItems() {
  itemsToBuy.style.visibility = 'hidden';
  gridMobileSmall.style.visibility = 'hidden';
}

function checkCurrentItems() {
  if (currentItems === 0) {
    const notifyUser = document.createElement('div');
    notifyUser.innerHTML = 'You currrently do not have items in your cart';
    notidfyUserDiv.appendChild(notifyUser);
  } else {
    notidfyUserDiv.style.visibility = 'hidden';
  }
}

checkCurrentItems();

function setSizeToSmall() {
  sizeChosen.innerHTML = ` S`;
  sizeChosen.style.color = '#222222';
  sizeChosen.style.fontWeight = 'bold';
}

function clearSize() {
  sizeChosen.innerHTML = ' ';
}

function addSmallRow() {
  quantity.innerHTML = currentItems;
}

const selectSmallItem = e => {
  e.preventDefault();
  itemSizeSelected = shirt.size[0];
  console.log(itemSizeSelected);
  if (isSelected === false) {
    console.log('item is selected');
    isSelected = true;
    smallBox.style.border = '2px solid #222222';
    setSizeToSmall();
  } else {
    isSelected = false;
    console.log('item was unselected');
    clearSize();
    itemSizeSelected = 'None Chosen';
    console.log(itemSizeSelected);
    smallBox.style.border = '1px solid #cccccc';
  }
  console.log(`The currest size is ${itemSizeSelected}`);
  return itemSizeSelected;
};

const addItemToTheCart = () => {
  if (itemSizeSelected === 'S') {
    currentItems++;
    myCart.innerHTML = `<i class="fas fa-shopping-cart" id="cart-img"></i> ( ${currentItems} )`;
    myCart.style.marginLeft = '5px';
    notidfyUserDiv.style.display = 'none';
    addSmallRow();
  } else {
    userMessage.innerHTML = 'This item is currently out of stock.';
    userMessage.style.color = '#C90000';
  }
};

const showItemsInMobile = e => {
  e.preventDefault();
  if (currentItems > 0) {
    gridMobileSmall.style.visibility = 'visible';
    itemsToBuy.style.visibility = 'visible';
    itemsToBuy.style.top = '5%';
    itemsToBuy.style.left = '30%';
    itemsToBuy.style.display = 'block';
    itemsToBuy.style.width = '250px';
    // itemsToBuy.style.position = 'static';
  } else {
    alert('Please add an item to your chart.');
  }
};

const outOfStock = e => {
  e.preventDefault();
  sizeChosen.innerHTML = ` Out of stock`;
  sizeChosen.style.color = '#C90000';
  sizeChosen.style.fontWeight = 'bold';
  itemSizeSelected = 'Out Of Stock';
  currentItems = 0;
};

selectSmall.addEventListener('click', selectSmallItem);
selectMedium.addEventListener('click', outOfStock);
selectLarge.addEventListener('click', outOfStock);

addToCartButton.addEventListener('click', addItemToTheCart);
myCart.addEventListener('click', showItemsInMobile);
