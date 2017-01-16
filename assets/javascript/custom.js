document.addEventListener("DOMContentLoaded", function() {
  var year = new Date().getFullYear()
  document.getElementById('current-year').innerHTML = year

  windowHeight = window.innerHeight
  height = windowHeight + 'px'

  home = document.getElementById('home')
  services = document.getElementById('services')
  clippers = document.getElementById('clippers')

  home.style.height = height
  services.style.height = height
  clippers.style.height = (windowHeight * 0.6) + 'px'

});
