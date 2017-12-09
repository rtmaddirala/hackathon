const getjscolor = document.querySelector('.jscolor');
document.querySelector("#shirtDiv").style.backgroundColor = `#${getjscolor.value}`;
getjscolor.addEventListener('change', function(){
    this.style['color'] = `#${this.value}`;
    document.querySelector("#shirtDiv").style.backgroundColor = `#${this.value}`;
});
const shirtOptionsData = [
    {img_index:1,fpath:'img/crew_front.png',bpath:'img/crew_back.png'},
    {img_index:2,fpath:'img/mens_longsleeve_front.png',bpath:'img/mens_longsleeve_back.png'},
    {img_index:3,fpath:'img/mens_hoodie_front.png',bpath:'img/mens_hoodie_back.png'},
    {img_index:4,fpath:'img/womens_crew_front.png',bpath:'img/womens_crew_back.png'},
    ];
const shirtOptions = document.querySelector('#shirtOptions');
shirtOptions.addEventListener('change',function(){
    var [getShirtDetail] = shirtOptionsData.filter(shirt => shirt.img_index == this.value);
    document.querySelector("#tshirtFacing").src = getShirtDetail.fpath;
});
const fontData = [
    {
      "font_text": ""
    },
    {
      "font_text": "Andale Mono"
    },
    {
      "font_text": "Arial"
    },
    {
      "font_text": "Arial Black"
    },
    {
      "font_text": "Arial Narrow"
    },
    {
      "font_text": "Arial Rounded MT Bold"
    },
    {
      "font_text": "Avant Garde"
    },
    {
      "font_text": "Baskerville"
    },
    {
      "font_text": "Big Caslon"
    },
    {
      "font_text": "Bodoni MT"
    },
    {
      "font_text": "Book Antiqua"
    },
    {
      "font_text": "Brush Script MT"
    },
    {
      "font_text": "Calibri"
    },
    {
      "font_text": "Calisto MT"
    },
    {
      "font_text": "Cambrio"
    },
    {
      "font_text": "Candara"
    },
    {
      "font_text": "Century Gothic"
    },
    {
      "font_text": "Consolas"
    },
    {
      "font_text": "Copperplate"
    },
    {
      "font_text": "Courier New"
    },
    {
      "font_text": "Didot"
    },
    {
      "font_text": "Franklin Gothic Medium"
    },
    {
      "font_text": "Futura"
    },
    {
      "font_text": "Garamond"
    },
    {
      "font_text": "Geneva"
    },
    {
      "font_text": "Georgia"
    },
    {
      "font_text": "Gill Sans"
    },
    {
      "font_text": "Goudy Old Style"
    },
    {
      "font_text": "Helvetica"
    },
    {
      "font_text": "Hoefler Text"
    },
    {
      "font_text": "Impact"
    },
    {
      "font_text": "Lucida Bright"
    },
    {
      "font_text": "Lucida Console"
    },
    {
      "font_text": "Lucida Sans Typewriter"
    },
    {
      "font_text": "Lucida Grande"
    },
    {
      "font_text": "Monaco"
    },
    {
      "font_text": "Optima"
    },
    {
      "font_text": "Palatino"
    },
    {
      "font_text": "Papyrus"
    },
    {
      "font_text": "Perpetua"
    },
    {
      "font_text": "Rockwell"
    },
    {
      "font_text": "Rockwell Extra Bold"
    },
    {
      "font_text": "Segoe UI"
    },
    {
      "font_text": "Tahoma"
    },
    {
      "font_text": "Times New Roman"
    },
    {
      "font_text": "Trebuchet MS"
    },
    {
      "font_text": "Verdana"
    }
  ];
  const fontfamily = document.querySelector('#font-family');
  fontfamily.addEventListener('click', function(){
      const fontMarkup = `${fontData.map(font => `<li><a tabindex=-1 href="javascript:void(0)" id="${font.font_text}" class="fontType">${font.font_text}</a></li>`).join('')}`;
      document.querySelector('#font-menu').innerHTML = fontMarkup;
  });

