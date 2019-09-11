import "./styles.css";

const interval = 3;

(() => {
  const $box = document.querySelector(".box");
  const $copy = $box.querySelector(".copy");
  const $span = $copy.querySelector("span");
  const { first, last } = $box.dataset;
  const steps = [first, last];

  let current = 0;

  next(0);

  function next(nextIndex) {
    current = nextIndex;

    if (current > steps.length - 1) {
      current = 0;
    }

    $span.innerHTML = steps[current];

    const { clientWidth: width } = $copy;

    $box.setAttribute("style", `width: ${width}px`);
  }

  setInterval(() => {
    next(current + 1);
  }, interval * 1000);
})();
