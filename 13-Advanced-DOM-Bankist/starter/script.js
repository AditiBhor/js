'use strict';

///////////////////////////////////////
// Modal window
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal));
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
//selecting elements
const header=document.querySelector('.header');
const allSection=document.querySelectorAll('.section');
console.log(allSection);//gives nodelist which dont update isself according to dom

document.getElementById('section--1');
const allButton=document.getElementsByTagName('button');
console.log(allButton);//gives HTMLCollection which update isself according to dom

console.log(document.getElementsByClassName('btn'));
//creating and inserting elements
//.insertAdjacentHTML

const message=document.createElement('div');
message.classList.add('cookie-message');
//message.textContent='we use cookies !!!😴';
message.innerHTML='we use cookies !!!😴 <button class="btn btn--close-cookie">got it!</button>';
//header.prepend(message);
header.append(message);

//delete elements
document.querySelector('btn--close-cookie').addEventListener('click',function()
{
  //message.remove();
  message.parentElement.removeChild(message);
})
*/





/*
//style
message.style.backgroundColor='#37383d';
message.style.width='120%';
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+40+'px';

document.documentElement.style.setProperty('--color-primary','orangered');

//attiribute
const logo=document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

//non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('compony','Bankist');

console.log(logo.src);//gives absolute address
console.log(logo.getAttribute('src'));//gives relative address

const link=document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attribute
console.log(logo.CDATA_SECTION_NODE.versionNumber);

//classes
*/





/*
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('.click',function(e)
{
  const s1coords=section1.getBoundingClientRect();//will gives co-ordinates
  console.log(s1coords)
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (x/y)',window.pageXOffset,pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //scrolling
  // window.scrollTo(s1coords.left+window.pageXOffset,
  //   s1coords.top+window.pageYOffset);

  //   window.scrollTo(
  //     {
  //         left:s1coords.left+window.pageXOffset,
  //         top:s1coords.top+window.pageYOffset,
  //         behavior:'smooth',
  //     });
    section1.scrollIntoView({behavior:'smooth'});
});
*/




/*

//page navigation but not efficient
document.querySelector('.nav__link').forEach(function(el)
{
  el.addEventListener('click',function(e)
  {
    e.preventDefault();
    const id=this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    });
  });
});
*/






/*
//page navigation but efficient
//1.add event listener to common parent element
//2.determine what element originated the event

document.querySelector('.nav__links').addEventListener('click',function(e)
{
  e.preventDefault();
  //matching strategy
  if(e.target.classList.contains('nav__link'))
  {
    const is=e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior:'smooth'
    });
  }

});
*/





/*
//1 way to use eventListener
const h1=document.querySelector('h1');
h1.addEventListener('mouseenter',function(e)
{
  alert('addEventListener:greet!you are reading the heading ');
});
h1.onmouseenter=function(e)
{
  alert('addEventListener:greet!you are reading the heading ');
};


//2 way to use eventListener
const h1=document.querySelector('h1');
const alertH1=function(e)
{
  alert('addEventListener:greet!you are reading the heading ');
  //h1.removeEventListener('mouseenter',alertH1);//when we want to listen to event only once..then full remove in the function
};
h1.addEventListener('mouseenter',alertH1);
setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);
*/





/*
const randomInt=(min,max)=>
Math.floor(Math.random()*(max-min+1)+min);

const randomColor=()=>
`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor(0,255));

document.querySelector('.nav__link').addEventListener('click',function(e)
{
  this.style.backgroundColor=randomColor();
  console.log('LINK',e.currentTarget===this);


//stop propagation
e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click',function(e)
{
 this.style.backgroundColor=randomColor();
  console.log('CONTAINER',e.target,e.currentTarget);
});

document.querySelector('.nav__link').addEventListener('click',function(e)
{
  this.style.backgroundColor=randomColor();
  console.log('NAV',e.target,e.currentTarget);
});
*/





/*
//dom traversing
const h1=document.querySelector('h1');

//going downwards:child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);//gives node list
console.log(h1.children);//gives htmlcollection
h1.firstElementChild.style.color='white';
h1.lastElementChild.style.color='orangered';

//going upwards:parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background='var(--gradient-secondary)';
h1.closest('.h1').style.background='var(--gradient-primary)';

//going sideways:siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
*/




/*
//tabbed component

const tabs=document.querySelectorAll('.oprations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operation__content');

tabsContainer.addEventListener('click',function(e)
{
  const clicked=e.target.closest('.operation__tab');
  console.log(clicked);
  //guard clause
  if(!clicked)return;
 //remove active classes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'))
   //active tab
  clicked.clicked.add('.opration__tab--active');
//active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

*/







/*
//menu fade animation
//1 way
const nav=document.querySelector('.nav');
nav.addEventListener('mouseover',function(e)
{
  if(e.target.classList.contains('nav__link'))
  {
    const link=e.target;
    const siblings=link.closet('.nav').querySelector('.nav__link');
    const logo=link.closet('.nav').querySelector('.img');

    siblings.forEach(el=>{
      if(el!==link)el.styl.opacity=0.5;
    });
    logo.style.opacity=0.5;
  }
});
nav.addEventListener('mouseout',function(e)
{
  if(e.target.classList.contains('nav__link'))
  {
    const link=e.target;
    const siblings=link.closet('.nav').querySelector('.nav__link');
    const logo=link.closet('.nav').querySelector('.img');

    siblings.forEach(el=>{
      if(el!==link)el.styl.opacity=1;
    });
    logo.style.opacity=1;
  }
});




//2 way
const handleHover=function(e)
{
  if(e.target.classList.contains('nav__link'))
  {
    const link=e.target;
    const siblings=link.closet('.nav').querySelector('.nav__link');
    const logo=link.closet('.nav').querySelector('.img');

    siblings.forEach(el=>{
      if(el!==link)el.styl.opacity=this;//this refers opacity which is passed in function at the time of calling //bind(this)
    });
    logo.style.opacity=this;
  }
};
//passing "argument into handler"
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));
*/









/*
//sticky navigation
const initialCoords=section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll',function(e)
{
  console.log(this.window.screenY);
  if(this.window.screenY>initialCoords.top)this.nav.classList.add('sticky')
  else nav.classList.remove('sticky')
});
*/










/*
//sticky navigation:Intersection observer API
//1way
const obsCallback=function(entries,observer)
{
  entries.forEach(entry=>
    {
      console.log(entry);
    });
};
const obsOptions={
  root:null,
  threshold:0.1
};
const observer=new IntersectionObserver();
observer.observe(section1);

//2 way
const header=document.querySelector('.header');
const stickyNav=function(entries)
{
  const [entry]=entries;
  if(!entry.isIntersecting)
  nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver=new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`
});*/









/*
//reveal sections
const allSection=document.querySelectorAll('section')
const revealSection=function(entries,observer)
{
  const[]
}
const sectionObserver=new IntersectionObserver(revealSection,{})
allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('.section--hidden');
});
//remanning
*/





/*
//Lazy Loading images
const imgTargets=document.querySelectorAll('img[data-src]');
console.log(imgTargets);
const loadImg=function(entries,observer)
{
  const [entry]=entries;
  console.log(entry);
  if(!entry.isIntersecting)return;
  //replace src with data-src
  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener('load',function()
  {
    entry.target.classList.remove('lazy-img');
  });
  observer.unObserver(entry.target);
};
const imgObserver=new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
  rootMargin:'200px',
});
imgTargets.forEach(img=>imgObserver.observe(img));
*/











//slider
const slider=function(){
const slide=document.querySelectorAll('.slide');
const btnLeft=document.querySelector('.slider__btn--left');
const btnRight=document.querySelector('.slider__btn--right');
const dotContainer=document.querySelector('.dots');
let curSlide=0;
const maxSlide=slides.length;
//const slider=document.querySelector('.slider');
//slider.style.transform='scale(0.4) translateX(-800px)';
//slider.style.overflow='visible';
//slides.forEach((s,i)=>(s.style.transform=`translateX(${100*i}%`));
//0%,100%,200%,300%

const createDots=function()
{
slides.forEach(function(_,i)
{
  dotContainer.insertAdjacentElement('beforeend',`<button class="dots__dot" data-slider="${i}"></button>`)
})
};

//function
createDots();

const activateDot=function(slide)
{
  document.querySelectorAll('.dots__dot').forEach(dot=>classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slider="${slide}"]`).classList.add('dots__dot--active');

};
activateDot(0);
const goToSlide=function(slide)
{
  slides.forEach(
    (s,i)=>(s.style.transform=`translateX(${100
    *(i-curSlider)}%)`));
}
goToSlide(0)
//next slide
const nextSlide=function()
{
  if(curSlide===maxSlide-1)
  {
    curSlide=0;  
  }
  else{
    curSlide++;
  }
  curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
}
const prevSlide=function()
{
  if(curSlider===0)
  {
    curSlide=maxSlide-1;
  }
  curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
}

const init=function()
{
  goToSlide(0);
  createDots();
  activateDot(0)
}

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);
//curSlide=1:-100%,0%,100%,200%




//buding silider with arrow keys on keyboard

document.addEventListener('keydown',function(e)
{
  console.log(e);
  if(e.key==='ArrowLeft')
  prevSlide();
  e.key==='ArrowRight'&& nextSlide();
})


dotContainer.addEventListener('click',function(e)
{
  if(e.target.classList.contains('dots__dot'))
  {
    const slide=e.target.dataset.slide;
    //console.log('DO')
    goToSlide(slide);
    activateDot(curSlide);
  }
})

}
slider();





