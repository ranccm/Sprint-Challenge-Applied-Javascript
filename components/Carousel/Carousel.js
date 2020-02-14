/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const caroEntry = document.querySelector('.carousel.container');

function createCarousel(){
  const
    carousel = document.createElement('div');
    lButton = document.createElement('div');
    mountains = document.createElement('div');  
    computer = document.createElement('div');
    trees = document.createElement('div');
    turn = document.createElement('div');
    rButton = document.createElement('div');

    carousel.classList.add('carousel');
    lButton.classList.add('left-button');
    rButton.classList.add('right-button');

    mountains.innerHTML = "<img src=./assets/carousel/mountains.jpeg>";
    computer.innerHTML = "<img src=./assets/carousel/computer.jpeg>";
    trees.innerHTML = "<img src=./assets/carousel/trees.jpeg>";
    turn.innerHTML = "<img src=./assets/carousel/turntable.jpeg>";

    carousel.appendChild(mountains);
    carousel.appendChild(computer);
    carousel.appendChild(trees);
    carousel.appendChild(turn);

    return carousel;
}

caroEntry.appendChild(createCarousel());
