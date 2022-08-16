let btn = document.querySelector('.collapsible__button');
let collapseBlock = document.querySelector('.collapsible__content');
let collapsibleActionVisible = document.querySelector('.collapsible__action--visible')
let collapsibleActionHidden = document.querySelector('.collapsible__action--hidden')

let show = false;

collapsibleActionVisible.style.display = "none";
collapseBlock.style.opacity = 0;

let collapseAnimationKey = new KeyframeEffect(
  collapseBlock, [
    { opacity: 0 },
    { transform: 'translateY(0%)' },
    { transform: 'translateY(100%)' },
    { opacity: 1 }
  ],
      { duration: 300, fill: 'forwards' }
);

let collapseAnimation = new Animation(collapseAnimationKey, document.timeline);

collapseAnimation.reverse();

function animationShow() {
  collapsibleActionHidden.style.display = "none";
  collapsibleActionVisible.style.display = "block";
  collapseAnimation.reverse();
  show = true;
  collapseBlock.style.opacity = 1;
}

function animationClose() {
  collapsibleActionHidden.style.display = "block";
  collapsibleActionVisible.style.display = "none";
  collapseAnimation.reverse();
  show = false;
  collapseBlock.style.opacity = 0;
}

btn.addEventListener("click", () => {
  if (show == true) {
    animationClose();
  } else {
    animationShow();
  }
});