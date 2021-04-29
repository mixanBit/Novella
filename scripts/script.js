const body = document.getElementById('body')
let img = document.querySelectorAll('.img')

let nameText = document.querySelector('.name')

let text = document.querySelector('.text1')
let oldtext = document.querySelector('.oldtext')

let btn = document.querySelector('.btn')

let alternative = document.querySelector('.alternative');
let btn_variant = document.querySelectorAll('.btn_one');
let ID = 1;

btn.addEventListener('click', NextCase);
NextCase();

function NextCase()
{
  console.log(narrative[ID].type + " - " + ID);
  //debugger;
  if (narrative[ID].type == "say" || narrative[ID].type == undefined)
  {
    Say(ID);
  }
  else if (narrative[ID].type == "alternative")
  {
    Alternative(ID);
  }
  else if (narrative[ID].type == "endGame")
  {
    btn.style.display = 'none';
  }
}

function Say(id)
{
  oldtext.innerHTML = text.innerHTML;
  text.innerHTML = narrative[id].text;

  oldtext.classList.add('oldtext');
  setTimeout(() => {
    oldtext.classList.remove('oldtext')
  }, 1000)

  text.classList.add('text_animation');
  setTimeout(() => {
    text.classList.remove('text_animation')
  }, 1000)
  text.classList.add('visible_text');

  if (narrative[id].characterID != undefined)
  {
    nameText.innerHTML = character[narrative[id].characterID].name;
  }
  else if (narrative[id].characterName != undefined)
  {
    nameText.innerHTML = narrative[id].characterName;
  }

  if (narrative[id].spriteID != undefined)
  {
    if (narrative[id].spriteCharacterID != undefined)
    {
      img[1].src = character[narrative[id].spriteCharacterID].sprite[narrative[id].spriteID].path;
    }
    else if (narrative[id].spriteCharacterName != undefined)
    {
      img[1].src = character[GetByName(character,narrative[id].spriteCharacterName)].sprite[narrative[id].spriteID].path;
    }
    else
    {
      img[1].src = character[narrative[id].characterID].sprite[narrative[id].spriteID].path;
    }
  }
  else if (narrative[id].spriteName != undefined)
  {
    if (narrative[id].spriteCharacterID != undefined)
    {
      img[1].src = character[narrative[id].spriteCharacterID]
        .sprite[GetByName(character[narrative[id].spriteCharacterID]
          .sprite,narrative[id].spriteName)].path;
    }
    else if (narrative[id].spriteCharacterName != undefined)
    {
      img[1].src = character[GetByName(character,narrative[id].spriteCharacterName)]
        .sprite[character[GetByName(character,narrative[id].spriteCharacterName)]
          .sprite,GetByName(narrative[id].spriteName)].path;
    }
    else if (narrative[id].characterName != undefined)
    {
      let char = GetByName(character,narrative[id].characterName);
      img[1].src = character[char].sprite[GetByName(character[char].sprite,narrative[id].spriteName)].path;
    }
    else 
    {
      img[1].src = character[narrative[id].characterID].sprite[GetByName(character[narrative[id].characterID].sprite,narrative[id].spriteName)].path;
    }
  }
  else if (narrative[id].sprite != undefined)
  {
    for (let index = 0; index < narrative[id].sprite.length; index++) {
      if (narrative[id].sprite[index].characterID != undefined && narrative[id].sprite[index].spriteID != undefined)
      {
        img[index].src = character[narrative[id].sprite[index].characterID].sprite[narrative[id].sprite[index].spriteID].path;
      }
      else if (narrative[id].sprite[index].spriteID != undefined)
      {
        img[index].src = character[narrative[id].characterID].sprite[narrative[id].sprite[index].spriteID].path;
      }
      else
      {
        img[index].src = "";
      }
    }
  }

  if (narrative[id].bgID != undefined)
  {
    //body.classList.add('fon' + narrative[id].bgID);
    body.style.backgroundImage = 'url(' + BG[narrative[id].bgID].path + ')';
  }
  else if (narrative[id].bgName != undefined)
  {
    body.style.backgroundImage = 'url(' + BG[GetByName(BG,narrative[id].bgName)].path + ')';
  }

  if (narrative[id].goto != undefined)
  {
    ID = GoToParse(narrative[id].goto);
  }
  else
  {
    ID++;
  }
}

function Alternative(id)
{
  alternative.classList.add('alternative_open');
  
  btn_variant.forEach((current) => {
    current.style.visibility = "hidden";
   })
  narrative[id].variant.map( (current, index) => {
    btn_variant[index].style.visibility = "visible";
    btn_variant[index].innerHTML = current.varitable;
   })
  
  btn_variant[1].innerHTML = narrative[id].variant[1].varitable;
}

function Variant(index)
{
    alternative.classList.remove('alternative_open');
    ID = GoToParse(narrative[ID].variant[index].goto);
    NextCase();
}

function GoToParse(goto)
{
  if (goto.charAt(0) == "+") 
  {
    return Number(ID) + Number(goto.slice(1));
  }
  else if (goto.charAt(0) == "-")
  {
    return Number(ID) - Number(goto.slice(1));
  }

  return goto;
}

function GetByName(array, name)
{
  let result = 0;
  array.map( (current, index) => {
   if (current.name == name) 
   {
    result = index;
   } 
  })
  return result;
}