const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  // Promise hell //
  /* alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => {
        alice2.animate(aliceTumbling, aliceTiming).finished
            .then (() => {
                alice3.animate(aliceTumbling, aliceTiming)
            })
    }) */

// Promise chain
/*
alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() => alice2.animate(aliceTumbling, aliceTiming).finished )
    .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
    .catch(() => console.error(`Could not animate Alice: ${error}`));
    */

// Async and Await
async function animateAlice() {
    const animateAlice1 = alice1.animate(aliceTumbling, aliceTiming);
    await animateAlice1.finished;
    const animateAlice2 = alice2.animate(aliceTumbling, aliceTiming);
    await animateAlice2.finished;
    const animateAlice3 = alice3.animate(aliceTumbling, aliceTiming);
};
animateAlice()