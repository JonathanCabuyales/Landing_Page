// get the element menu hamburger
const menu__container = document.getElementById('menu__container');
const menu__items = document.getElementById('menu__items');
const menu__hamburger = document.getElementById('menu__hamburger');
const menu__item__header = document.getElementById('menu__item__header');
let computed = getComputedStyle(menu__items);
const img__section1 = document.getElementById('img__section1');
let imgOriginal = img__section1.getAttribute('src');

console.log(imgOriginal)

const types = {
    left: 'left',
    center_right: 'center-right',
    center_left: 'center_left',
    right_left: 'right-left',
    opacity: 0,
    transformXpositive: 'translateX(110%)',
    transformX0: 'translateX(0%)',
    transformXNegative: 'translateX(-110%)',
}


window.addEventListener( 'load', function(){
    if(this.innerWidth > 768){
        img__section1.setAttribute('src', './assets/images/image-web-3-desktop.jpg');
        return;
    }
    img__section1.setAttribute('src', imgOriginal);
}); 
window.addEventListener( 'resize', function(){
    if(this.innerWidth < 768){
        img__section1.setAttribute('src', imgOriginal);
        return;
    }
    img__section1.setAttribute('src', './assets/images/image-web-3-desktop.jpg');
}); 




const showMenu = () => {
    document.body.style.overflow = "hidden";
    if (menu__container.dataset.translate == types.left) {
        removePropertyAsign('right', 'left', 'start');
        showHide(0, types.transformX0, types.center_right);
        return;
    }
    
    if (menu__container.dataset.translate == types.center_left) {
        removePropertyAsign('left', 'right', 'end');
        showHide(0, types.transformX0, types.right_left)
        return;
    }
}


const hideMenu = () => {
    document.body.style.overflow = "auto";
    if (menu__container.dataset.translate == types.center_right) {
        showHide(1, types.transformXpositive, types.center_left);
        return;
    }
    if (menu__container.dataset.translate == types.right_left) {
        showHide(1, types.transformXNegative, types.left);
        return;

    }
}

const showHide = (opacity, transform, translateTo) => {
    menu__hamburger.style.opacity = opacity;
    menu__items.style.transform = transform;
    menu__container.style.transform = transform;
    menu__container.dataset.translate = translateTo;
}

const removePropertyAsign = (removeProperty, property, textAlign) => {
    menu__items.style.removeProperty(removeProperty);
    menu__items.style.top = 0;
    menu__items.style[property] = 0;
    menu__item__header.style.textAlign = textAlign;
}