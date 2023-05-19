// get the element menu hamburger
const menu__container = document.getElementById('menu__container');
const menu__items = document.getElementById('menu__items');
const menu__hamburger = document.getElementById('menu__hamburger');
const menu__item__header = document.getElementById('menu__item__header');
let computed = getComputedStyle(menu__items);
const img__section1 = document.getElementById('img__section1');
let imgOriginal = img__section1.getAttribute('src');
let transitionOriginalMenuContainer = menu__container.style.transition;
let transitionOriginalItem = menu__items.style.transition;

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


window.addEventListener('load', function () {
    if (this.innerWidth > 768) {
        img__section1.setAttribute('src', './assets/images/image-web-3-desktop.jpg');
        menu__items.style.opacity = 1;
        menu__items.style.opacity = 1;
        menu__container.style.opacity = 1;
        menu__container.style.color = 'rgb(0, 0, 0);';
        menu__container.style.transform = types.transformX0;
        menu__items.style.transform = types.transformX0;
        menu__container.style.backgroundColor = 'rgb(255, 255, 255);';

        return;
    }
    console.log('escucha resize')
    img__section1.setAttribute('src', imgOriginal);
    menu__items.style.transition = 'none';
    menu__container.style.transition = 'none';
    menu__items.style.opacity = 0;
    menu__container.style.opacity = 0;
    menu__container.style.transform = types.transformXNegative;
    menu__items.style.transform = types.transformXNegative;
    menu__container.style.backgroundColor = 'background-color: rgba(0, 0, 0, 0.3);';

});
window.addEventListener('resize', function () {
    if (this.innerWidth < 768) {
        img__section1.setAttribute('src', imgOriginal);
        menu__items.style.transition = 'none';
        menu__container.style.transition = 'none';
        menu__items.style.opacity = 0;
        menu__container.style.opacity = 0;
        menu__container.style.backgroundColor = 'background-color: rgba(0, 0, 0, 0.3);';
        menu__container.style.transform = types.transformXNegative;
        return;
    }
    console.log('escucha resize')
    menu__items.style.opacity = 1;
    menu__container.style.opacity = 1;
    menu__container.style.color = 'rgb(0, 0, 0);';
    menu__container.style.backgroundColor = 'rgb(255, 255, 255) !important;';
    menu__container.style.transform = types.transformX0;
    menu__items.style.transform = types.transformX0;
    img__section1.setAttribute('src', './assets/images/image-web-3-desktop.jpg');
});




const showMenu = () => {
    document.body.style.overflow = "hidden";
    menu__items.style.opacity = 1;
    menu__items.style.transition = transitionOriginalItem;
    menu__container.style.opacity = 1;
    menu__container.style.transition = transitionOriginalMenuContainer;

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
    menu__items.style.opacity = 0;
    menu__container.style.opacity = 0;
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