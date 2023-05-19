# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![active-states](./design/active-states.jpg)
![desktop design](./design/desktop-design.jpg)
![Mobile menu](./design/mobile-menu.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Mobile-first workflow
- JavaScript
- Flexbox
- CSS Grid
- Semantic HTML5 markup
- CSS custom properties


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="popular__section__content">
  <figure class="popular__section__img">
    <img src="./assets/images/image-retro-pcs.jpg" alt="Retro pc" class="section__img--popular">
  </figure>
  <div class="popular__section__text">
    <h2 class="popular__section__number">01</h2>
    <h3 class="popular__section__title">Reviving Retro PCs</h3>
    <p class="popular__section__paragraph">What happens when old PCs are given modern upgrades?</p>
  </div>
</div>
```
```css
.main{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(fit-content, 1fr);
    gap: 35px 25px;
    grid-template-areas:
    "section1 section1 section2"
    "section1 section1 section2"
    "section3 section3 section3";
}
```
```js
window.addEventListener( 'resize', function(){
    if(this.innerWidth > 768){
        img__section1.setAttribute('src', '../assets/images/image-web-3-desktop.jpg');
        return;
    }
    img__section1.setAttribute('src', imgOriginal);
});
```

### Continued development

I realized that I need to practice my CSS skills because Javascript I believe that in every project I am doing I keep improving and using the resources better to keep growing.



### Useful resources

- [JavaScript Info](https://javascript.info/) - I used this website for sizing and scrolling en js
- [Dev Docs](https://devdocs.io/) - Similar to the first one.
- [MDN](https://developer.mozilla.org/en-US/) - I used this website for Css because I forgot how to use one particular property


## Author

- Website - [Jonathan Cabuyales]
- Frontend Mentor - [@JonathanCabuyales](https://www.frontendmentor.io/profile/JonathanCabuyales)

## Acknowledgments

I think the biggest part was deciding whether to use flexbox or grid because I was thinking about mobile development first and mobile design was different from dektop design and I had to rewrite the code from flexbox to grid was not defficult but it was laborious. The best part was that I was enjoying doing this challenge.
