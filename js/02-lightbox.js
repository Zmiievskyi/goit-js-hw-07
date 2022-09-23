import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = document.querySelector(".gallery");

const markupItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
   <img class="gallery__image" src=${preview} alt=${description} title=${description}/>
 </a>
`
  )
  .join("");

refs.innerHTML = markupItem;

const onClick = (event) => {
  event.preventDefault();

  const { target } = event;
  if (!target.dataset.source) return;
};

refs.addEventListener("click", onClick);

var lightbox = new SimpleLightbox(".gallery a", {/*attr: true*/});
