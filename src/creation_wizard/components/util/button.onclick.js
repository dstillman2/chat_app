const onTransitionEnd = (button, fn, e) => {
  const btnAnimationElement = button.children[0];

  const resetStyles = () => {
    btnAnimationElement.style.width = '';
    btnAnimationElement.style.height = '';
    btnAnimationElement.style.transform = '';
    btnAnimationElement.style.transition = '';
    btnAnimationElement.style.opacity = 1;

    btnAnimationElement.removeEventListener('transitionend', resetStyles);

    fn(e);
  };

  return resetStyles;
};

const onButtonClick = (e, fn) => {
  e.preventDefault();

  const button = e.currentTarget;
  const btnAnimationElement = button.children[0];

  const btnPositionRelViewport = button.getBoundingClientRect();

  btnAnimationElement.style.width = '5px';
  btnAnimationElement.style.height = '5px';
  btnAnimationElement.style.left = e.clientX - btnPositionRelViewport.left;
  btnAnimationElement.style.top = e.clientY - btnPositionRelViewport.top;
  btnAnimationElement.style.transform = 'scale(30)';
  btnAnimationElement.style.opacity = 0;
  btnAnimationElement.style.transition = 'transform 0.2s ease-out, opacity 0.2s linear';

  btnAnimationElement.addEventListener(
    'transitionend',
    onTransitionEnd(button, fn, e),
  );
};

export default onButtonClick;
