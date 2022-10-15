const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  let random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went on a walk. They stumbled upon trees with doors, each door with a different symbol. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Dr. Finklestein saw the whole thing, but did nothing about it as they were busy building a new au pair that weighs 300 pounds, and they got crushed.'
const insertX = ['Oogie Boogie', 'Bone Daddy', 'Sandy Claws']
const insertY = ['Christmas Town', 'Easter Town', 'St. Patricks Day Town']
const insertZ = ['celebrated the holiday among the people of the town', 'researched the festivities, then returned to Halloween Town to appropriate the holiday', 'pieced together a catchy tune to capture the essence of the holiday']

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll (':insertx:',xItem);
    newStory = newStory.replaceAll (':inserty:',yItem);
    newStory = newStory.replaceAll (':insertz:',zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll ('Dr. Finklestein', name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature = Math.round((94-32)*5/9) + ' centigrade';
    newStory = newStory.replaceAll ('300 pounds', weight);
    newStory = newStory.replaceAll ('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}