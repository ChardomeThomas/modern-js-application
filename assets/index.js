import { displayCharactersCards } from "./js/displayCharacters.js";
import { openCharacterCard } from "./js/openCharacter.js";
import { createImage } from "./js/createImage.js";
import { createCharacter } from "./js/createCharacter.js";
import { editCharacter } from "./js/editCharacter.js";
import { deleteCharacter } from "./js/deleteCharacter.js";

let callAllFunctions = displayCharactersCards();

callAllFunctions.then(() => {
  openCharacterCard();
  createImage();
  createCharacter();
  editCharacter();
  deleteCharacter();
});
