'use strict';

var petsOners = prompt('do you own pets( if yes enter yes if not enter no)');
var result;
var value;


if (petsOners === 'yes') {
  value = 'wonderful , you are animal lover'
} else {   value = 'welcome in our web';
}
document.write('<h5>' + value + '</h5>');
var Name = prompt('what is your pet name?');
document.write('beautiful' + Name);

var phone = prompt('Please enter your phone number');

if (phone === null || phone === '') {
  result = 'User cancelled the submit. ';
} else {
  result = 'thank';
}

function showOrder() {


  var Order = prompt('what kind of pets you like to have ?');

  while (Order !== 'cats' && Order !== 'dogs') {
    Order = prompt('please choose cats or dogs');
  }
  var Item = '';

  var NoofORder = prompt('how many pets do you want ?');

  for (var i = 0; i < NoofORder; i = i + 1) {
    if (Order === 'cats' || Order === 'dogs') {
      Item = Item + '<img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg">';
    } else if (Order === 'dogs') {
      Item = Item + '<img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/04/13/istock-1031307988.jpg?w968h681">';
    }
  }
  return Item;
}
showOrder();

