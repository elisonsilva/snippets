# Create an Image modal with JavaScript!

Ref. [[1](https://dev.to/salehmubashar/create-an-image-modal-with-javascript-2lf3)] [[2](https://owlcation.com/stem/javascript_gallery)]

prefer: https://dimsemenov.com/plugins/magnific-popup/

## HTML
```html
<div class="main">
    <h1>Gallery</h1>
    <div class="gallery">
        <div class="gallery__item">
            <a href="https://picsum.photos/400">
                <img src="https://picsum.photos/200" />
            </a>
        </div>
        <div class="gallery__item">
            <a href="https://picsum.photos/400">
                <img src="https://picsum.photos/200" />
            </a>
        </div>
        <div class="gallery__item">
            <a href="https://picsum.photos/400">
                <img src="https://picsum.photos/200" />
            </a>
        </div>
        <div class="gallery__item">
            <a href="https://picsum.photos/400">
                <img src="https://picsum.photos/200" />
            </a>
        </div>
    </div>
</div>
```
---
## Style

```css
.modalImg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.733);
    margin-top: -1px;
    animation: zoom 0.3s ease-in-out;
    z-index: 9999999;
}

@keyframes zoom {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.modalImg img {
        width: 100%;
    object-fit: cover;
    max-width: 100%;
    height: auto;
}
.closeBtn {
    color: rgba(255, 255, 255, 0.87);
    font-size: 25px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    background: rgb(0, 0, 0, .8);
    padding: 3px 6px;
    border: 1px solid rgb(0, 0, 0,.1);
    box-shadow: 1px 2px 5px rgb(0, 0, 0, .2);
}

.closeBtn:hover {
    color: rgb(255, 255, 255);
}

.divImage{
max-width: 1140px;
    min-width: 320px;
    padding: 15px;
    margin: 0 auto;
    position: fixed;
}
.prevBtn,
.nextBtn{
    position: absolute;
    font-size: 25px;
    color: #fff;
    top: 50%;
    transform: translate(-0%, -50%);
background: rgb(0, 0, 0, .8);
    padding: 3px 6px;
    border: 1px solid rgb(0, 0, 0,.4);
    box-shadow: 1px 2px 5px rgb(0, 0, 0, .2);
}
.prevBtn{left: 30px;}
.nextBtn{right: 30px;}
```
---
## Javascript
```javascript
const images = document.querySelectorAll(".carousel-item img");
let imgIndex
let imgSrc;

// get images src onclick
images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        e.preventDefault();
        imgSrc = e.target.src;
        imgParent = e.target.parentNode.getAttribute('href');
        //run modal function
        imgModal(imgParent);
        //index of the next image
        imgIndex = i;
        return false;
    });
});

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modalImg");
    //add modal to the parent element 
    document.querySelector("body").append(modal);

    const divImage = document.createElement("div");
    divImage.setAttribute("class", "divImage");
    
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    
    
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    //next and previous buttons
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
    // change the src of current image to the src of next image
    nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg())
    };
    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
    // change the src of current image to the src of pevious image
    prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg())
    }
    divImage.append(prevBtn, newImage, closeBtn, nextBtn);
    modal.append(divImage);
};

//next image function
let nextImg = () => {
    imgIndex++;
    //check if it is the the last image
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    //return src of the new image
    return images[imgIndex].src;
};

//previous image function
let prevImg = () => {
    imgIndex--;
    console.log(imgIndex);
    //check if it is the first image
    if (imgIndex < 0) {
        imgIndex = images.length - 1
    }
    //return src of previous image
    return images[imgIndex].src
}

```