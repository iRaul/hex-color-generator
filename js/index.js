  const btn = document.querySelector('.change-color-btn');
  const hexColor = document.querySelector('.hex-color');

  let newColor;

  const generate = () => {
    newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

    if(newColor.length < 7) {
      generate();
    }
  }

  btn.addEventListener('click', () => {
    generate();

    document.body.style.backgroundColor = newColor;
    btn.style.color = newColor;
    hexColor.value = newColor;
  })
