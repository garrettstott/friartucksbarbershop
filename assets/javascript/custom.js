document.addEventListener("DOMContentLoaded", function() {
  var year = new Date().getFullYear()
  document.getElementById('current-year').innerHTML = year

  windowHeight = window.innerHeight
  height = windowHeight + 'px'

  home = document.getElementById('home')
  theShop = document.getElementById('the-shop')
  services = document.getElementById('services')
  clippers = document.getElementById('clippers')

  console.log(height)
  home.style.height = height
  theShop.style.height = height
  services.style.height = height
  clippers.style.height = (windowHeight * 0.6) + 'px'

});
