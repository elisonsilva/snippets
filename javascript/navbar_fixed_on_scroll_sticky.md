# Make bootstrap navbar fixed on scroll (sticky top)
Ref. [[1](https://bootstrap-menu.com/detail-fixed-onscroll.html)]

## HTML
```html
<header>
<div class="bg-warning py-2"> 
 Some top header info 
</div>

<nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-primary">
 <div class="container">
 	 <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="main_nav">
	<ul class="navbar-nav ms-auto">
		<li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
		<li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
    <li class="nav-item"><a class="nav-link" href="#"> Menu item </a></li>
	</ul>
  </div> <!-- navbar-collapse.// -->
 </div> <!-- container-fluid.// -->
</nav>
</header>
```

## CSS
```css
	.fixed-top {
	    top: -40px;
	    transform: translateY(40px);
	    transition: transform .3s;
	}
```

## Javascript
```javascript
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
// DOMContentLoaded  end
```