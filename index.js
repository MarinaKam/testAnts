document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('main');
  const ctx = canvas.getContext('2d');
  const steps = 200;
  const antsCount = 3;

  const stepsArray = Array.apply(null, new Array(steps)).map(Number.prototype.valueOf, 0);

  for (let i = 0; i < steps; i++) {
    stepsArray[i] = Array.apply(null, new Array(steps)).map(Number.prototype.valueOf, 0);
  }

  const direction = [ 0, 1, 2, 3, 0 ];

  const dx = [ steps / 2, steps * 3 / 4, steps / 4 ];
  const dy = [ steps / 2, steps / 4, steps * 3 / 4 ];

  const coloursMap = [ 'green', 'blue', 'red'];

  const ant = (num) => {
    if ((++stepsArray[dx[num]][dy[num]]) === 1) {
      direction[num]--;
      ctx.fillStyle = coloursMap[num];
      ctx.fillRect(dx[num] * antsCount, dy[num] * antsCount, antsCount, antsCount);
    } else {
      direction[num]++;
      stepsArray[dx[num]][dy[num]] = 0;
      ctx.clearRect(dx[num] * antsCount, dy[num] * antsCount, antsCount, antsCount);
    }

    if (direction[num] === -1) {
      direction[num] = 3;
    }

    if (direction[num] === 4) {
      direction[num] = 0;
    }

    if (direction[num] === 0) {
      dx[num]++;
    } else if (direction[num] === 1) {
      dy[num]++;
    } else if (direction[num] === 2) {
      dx[num]--;
    } else if (direction[num] === 3) {
      dy[num]--;
    }

    if (dx[num] === -1) {
      direction[num] = 3;
      dx[num] = 0;
    } else if (dy[num] === -1) {
      direction[num] = 0;
      dy[num] = 0;
    } else if (dx[num] === steps) {
      dx[num] = steps - 1;
      direction[num] = 1;
    } else if (dy[num] === steps) {
      dy[num] = steps - 1;
      direction[num] = 2;
    }
  };

  for (let i = 0; i < 3; i++) {
    setInterval(ant, 0, i);
  }
});
