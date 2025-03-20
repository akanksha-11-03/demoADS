/* eslint-disable no-plusplus */
export default function abc(block) {
  block.classList.add('my-class');
  for (let i = 0; i < document.getElementsByClassName('my-class')[0].children.length; i++) {
    document.getElementsByClassName('my-class')[0].children[i].classList.add(`row-${i}`);
    for (let j = 0; j < document.getElementsByClassName(`row-${i}`)[0].children.length; j++) {
      document.getElementsByClassName(`row-${i}`)[0].children[j].classList.add(`row-col${j}`);
    }
  }
}
