$( document ).ready(function() {
  var digits = installedValue.toString().length;
  var initialValue = new Array(digits + 1).join('8');
  var odometer = new Odometer({ el: $('.odometer')[0], theme: 'train-station', value: initialValue, format: 'ddddddd' });
  odometer.render();
  setInterval(function(){ $('.odometer').html(installedValue);}, 1000);
});

function refreshCounter(){
  document.querySelector('.odometer').innerHTML = 0;
  document.querySelector('.odometer').innerHTML = installedValue;
}
