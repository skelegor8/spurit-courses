let btn = document.querySelector('.collapsible__button');
let collapseBlock = document.querySelector('.collapsible__content');

let collapseAnimationKey = new KeyframeEffect(
  collapseBlock, [
    { transform: 'translateY(0%)' }, 
    { transform: 'translateY(100%)' }
  ],
      { duration: 3000, fill: 'forwards' }
);
let collapseAnimation = new Animation(collapseAnimationKey, document.timeline);

function animation(event) {
  btn.addEventListener("click", animation);
  collapseAnimation.play();
}

btn.addEventListener("click", animation);