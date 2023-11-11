function burst(cracker) {
    cracker.classList.add('burst');
    setTimeout(() => {
      cracker.classList.remove('burst');
    }, 500);
  }
  