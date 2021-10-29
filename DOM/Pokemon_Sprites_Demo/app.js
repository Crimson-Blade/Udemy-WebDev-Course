
const container = document.querySelector('#container');
for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement('div');
  const span = document.createElement('span');
  span.append(`#${i}`);
  const newImg = document.createElement('img');
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(span);
  container.appendChild(pokemon);
}