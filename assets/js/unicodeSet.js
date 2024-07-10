
document.getElementById('icon_content').innerHTML = iconSet;
const icons = [];
const glyphElements = document.querySelectorAll("glyph");
for (const glyphElement of glyphElements) {
   const unicode = glyphElement.getAttribute("unicode");
   const dataName = glyphElement.getAttribute("data-name");

   unicode ? icons.push({ unicode, dataName }) : null;
}

const iconContent = document.getElementById('icon_content');
for (const icon of icons) {
   const iconElement = document.createElement('span');
   iconElement.classList.add('icon');
   iconElement.setAttribute('data-unicode', icon.unicode);

   let stringOfLetters = "";
   for (let i = 0; i < icon.unicode.length; i++) {
      stringOfLetters += '\\' + icon.unicode.charCodeAt(i).toString(16).padStart(4, '0');
   }
  
   iconElement.innerHTML = icon.dataName ? (stringOfLetters + '<br>' + icon.dataName) : stringOfLetters;
   iconContent.appendChild(iconElement);
}