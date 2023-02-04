
///////////////////////////////////////////////////////////////////////////////
// MODULE xx : MODULE TEMPLATE  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// VARIABLES                    ///////////////////////////////////////////////
// Adding Events Listeners      ///////////////////////////////////////////////
// HTML DOM CONNECTION          ///////////////////////////////////////////////
// METHODS                      ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// MODULE 00 : GENERAL UI CONFIG  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// COPIED-PASTED
// SIZING THE WINDOW //////////////////////////////////////////////////////////

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// COPIED-PASTED
// SWIPE ACTIONS (Mobile) /////////////////////////////////////////////////////

let currentScreen = "main";
const mainMenu = document.getElementsByClassName("main-menu")[0];
const right = document.getElementsByClassName("right-sidebar")[0];
const left = document.getElementsByClassName("left-sidebar")[0];

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    // console.log("current ; ", currentScreen)
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        //console.log(xUp, yUp)
        if ( xDiff > 0 ) {
            /* right swipe */ 
            if (currentScreen == "main") {
              mainMenu.classList.add("open-main-menu")
              right.classList.add("open-right")

              currentScreen = "right"
              
            } else if (currentScreen == "left") {
              left.classList.remove("open-left")

              currentScreen = "main"
            }
        } else {
          /* left swipe */
            if (currentScreen == "main") {
              left.classList.add("open-left")

              currentScreen = "left"
            
            } else if (currentScreen == "right") {
              right.classList.remove("open-right")
              //mainMenu.classList.remove("open-main-menu")
              
              currentScreen = "main"
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
          /* down swipe */ 
          //nextCB()
        } else { 
          /* up swipe */
          //privCB()
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

// TOGGLE LEFT MENU

function handleLeftMenuToggle(evt){
  left.classList.toggle("open-left-desktp");
}
document.getElementById("left-menu-button").addEventListener('click', handleLeftMenuToggle, false);


///////////////////////////////////////////////////////////////////////////////
// MODULE 01 - 02 //  Configs diff  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Configs ////////////////////////////////////////////////////////////////////

// Normalized arabic characters (Needed pricipaly in search) : Mybe need to be moved to seach module
var arabicNormChar = {
  ک: "ك",
  ﻷ: "لا",
  لا: "ل",
  ؤ: "و",
  ی: "ى",
  ئ: "ى",
  أ: "ا",
  إ: "ا",
  آ: "ءا",
  ٱ: "ا",
  ٳ: "ا",
  "ِ": "",
  "ْ": "",
  "ُ": "",
  "َ": "",
  "ّ": "",
  "ٍ": "",
  "ً": "",
  "ٌ": "",
  "ٓ": "",
  "ٰ": "",
  "ٔ": "",
  "�": "",
};

// root folder for rawis folders
const rootSource = 'qurans';

// Availaible Quran Versions (Riwaiat or Torok) : Configurations
const rawis = {
  R111: "NafiQalown1",
  R112: "NafiQalown2",
  R113: "NafiQalown3",
  R114: "NafiQalown4",
  R121: "NafiWarshALAzraq",
  R122: "NafiWarshAspahani",

  R2: "IbnKatheer",
  R21: "IbnKatheerAlBazzi",
  R22: "IbnKatheerQunbol",
  
  R3: "AlBasri",
  R311: "AlBasriAlDoori1",
  R312: "AlBasriAlDoori2",
  R32: "AlBasriAlSoosi",

  R4: "IbnAmmer",
  R41: "IbnAmmerHisham",
  R42: "IbnAmmerIbnthkwan",

  R5: "Aseem",
  R51: "Aseem1Shouba",
  R521: "AseemHafsa1",
  R522: "AseemHafsa2",

  R6: "Hamza",
  R611: "HamzaKhalf1",
  R612: "HamzaKhalf2",
  R621: "HamzaKhallad1",
  R622: "HamzaKhallad2",
  
  R71: "ALKisaai1",
  R711: "ALKisaaiAlLayth1",
  R712: "ALKisaaiAlDoori1",
  R72: "ALKisaai2",
  R721: "ALKisaaiAlLayth2",
  R722: "ALKisaaiAlDoori2",

  R8: "AbuJaafar",
  R81: "AbuJaafarIbnWardan",
  R82: "AbuJaafarIbnjamaz",

  R9: "Yaqub",
  R91: "YaqubRuways",
  R92: "YaqubRooh",

  R10: "Khalaf10",
  R101: "Khalaf10Eshaq",
  R1021: "Khalaf10Idrees1",
  R1022: "Khalaf10Idrees2",
};

// Availaible Quran Versions (Riwaiat or Torok) : Configurations - Up/Down Navigations
const rawArr = ["R111", "R112", "R113", "R114", "R121", "R122", "R2", "R21", "R22", "R3", "R311", "R312", "R32", "R4", "R41", "R42", "R5", "R51", "R521", "R522", "R6", "R611", "R612", "R621", "R622", "R71", "R711", "R712", "R72", "R721", "R722", "R8", "R81", "R82", "R9", "R91", "R92", "R10", "R101", "R1021", "R1022"];

// Last page for each moshaf :
// NEED TO BE ARRANGED IN ONE CONFIG OBJ
const rawLastPageNumArr = {
  R111: 630,
  R112: 630,
  R113: 630,
  R114: 630,
  R121: 635,
  R122: 630,

  R2: 630,
  R21: 630,
  R22: 630,

  R3: 636,
  R311: 636,
  R312: 636,
  R32: 636,

  R4: 631,
  R41: 631,
  R42: 631,

  R5: 630,
  R51: 626,
  R521: 624,
  R522: 624,

  R6: 634,
  R611: 634,
  R612: 634,
  R621: 634,
  R622: 634,

  R71: 631,
  R711: 631,
  R712: 631,
  R72: 631,
  R721: 631,
  R722: 631,

  R8: 632,
  R81: 632,
  R82: 632,

  R9: 628,
  R91: 628,
  R92: 628,

  R10: 626,
  R101: 627,
  R1021: 626,
  R1022: 627,
};


const linesCustomStyles = {
  p1l2: 'padding: 41.2% 23% 0 24%;',
  p1l3: 'padding: 0 16% ;',
  p1l4: 'padding: 0 11% ;',
  p1l5: 'padding: 0 9% ;',
  p1l6: 'padding: 0 12% ;',
  p1l7: 'padding: 0 21% ;',
  p1l8: 'padding: 0 34% 44% 34%',

  p2l3: 'padding: 53% 15% 0;',
  p2l4: 'padding: 2% 11% 0 ;',
  p2l5: 'padding: 0 10% ;',
  p2l6: 'padding: 0 13% ;',
  p2l7: 'padding: 0 22% ;',
  p2l8: 'padding: 0 35% 44% 35%',
  
  p50l3: 'padding-top: 28.5%;',
  
  p77l2: 'padding-top: 15.5%;',
  p106l8: 'padding-top: 25.3%;', // middle sura + basmala
  
  p128l3: 'padding-top: 28.5%;', // header sura + basmala

  p151l3: 'padding-top: 28.5%;',

  p177l3: 'padding-top: 27.5%; padding-bottom: 1%;',

  p187l2: 'padding-top: 15.5%;',

  p207l14: 'padding-bottom: 15.5%;', // header at the buttom

  p208l2: 'padding-top: 15%;', // basmala at the header

  p221l6: 'padding-bottom: 10%;', 

  p221l9 : 'padding-top: 16%;', 

  p235l8 : 'padding-bottom: 16.5%;', 
  p235l11 : 'padding-top: 8.5%;', 

  p249l3: 'padding-top: 28%;',

}



// HTML DOM CONNECTION  ///////////////////////////////////////////////////////

// page
const privouos = document.getElementById("privouos");
const next = document.getElementById("next");
const page = document.getElementById("page");

const raw = document.getElementsByClassName("raw");
const imge = document.getElementById("imge");

// search : controls
const search = document.getElementById("search");
const searchbox = document.getElementById("searchbox");
const searchboxInput = document.getElementById("searchbox-input");

// search : filter
const filter = document.getElementById("filter");
const filterAndSelector = document.getElementById("filterAndSelector");
const filterParts = document.getElementById("filter-parts");
const isJuzaChecked = document.getElementById("part-juza");
const isHizbChecked = document.getElementById("part-hizb");
const isSuraChecked = document.getElementById("mart-sura");

// search : results
const results = document.getElementById("results");
const resultsButtons = document.getElementsByClassName("result_button");

// riwaiat filter (right menu)
const imamsList = document.getElementById("imams-list");

//
const quranGrid = document.getElementById("quran");

///////////////////////////////////////////////////////////////////////////////
// MODULE 02 : Init App  //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

var isPageLoaded = false;
var selectedRawi = "R111";
var selectedPage = -3//;79; // -3
var isSearchOpen = true;

// METHODS  ///////////////////////////////////////////////////////////////////

// update attribute value
const updateElement = (element, prop, value) => {
  if (element) element[prop] = value;
};

const getPath = () => {
  var decalage = parseInt(selectedPage) + 4;
  return `${rootSource}\\${rawis[selectedRawi]}\\${("0000" + decalage).slice(-4)}.jpg`;
};

// Adding Events Listeners  ///////////////////////////////////////////////////

// Dom loaded
window.addEventListener("DOMContentLoaded", (e) => {
  isPageLoaded = true;
  filterIndexCmd(); // To hide the lines showed based on DOM loaded elements based on the checked options
  
  // restore saved settings : rawi and page
  let savedRawi = window.localStorage.getItem('rawi')
  if (savedRawi != null && savedRawi != ''){
    selectedRawi = savedRawi
  }
  raw[selectedRawi].classList.add("raw-selected");

  let savedPage = window.localStorage.getItem('page')
  if (savedPage){
    selectedPage = savedPage
  }
  updatePage();
});

///////////////////////////////////////////////////////////////////////////////
// MODULE 02 : Quran page  ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// METHODS  ///////////////////////////////////////////////////////////////////

const imageLoaded = () => {
  const width = currentImage.naturalWidth
  const height = currentImage.naturalHeight
  // ctx.canvas.width = width - 170
  ctx.canvas.width = width
  ctx.canvas.height = height
  ctx.drawImage(currentImage, 0, 0, width, height);

  // close the loading block
  loading.classList.remove("loading-on")
};



const imageCantBeLoaded = () => {
  updateImgDisplay('404')

  // close the loading block
  loading.classList.remove("loading-on")
};

  const updateImgDisplay = (type = null) => {
  if (type == "404") {
    currentImage.src = ".\\src\\assets\\images\\peace-be-upon-him.jpg"
    loading.classList.add("loading-on")
    return;
  }
  loading.classList.add("loading-on")
  currentImage.src = getPath();
};



const getLastPageForRawiOrCurrentOne = (rawi = null) => {
  if (rawi != null){
    return rawLastPageNumArr[rawi] - 4
  }
  return rawLastPageNumArr[selectedRawi] - 4
}

var ab = []
const bc = []

const updatePage = (updateDisplay = true) => {

  // only for div /////////////////////////

  for (a of document.getElementsByClassName("range")){
    ab.push(a.value)
  }

  bc.push({page: selectedPage - 1, width : ab })
  ab = []
  // console.log(bc)

  // only for dev ended ///////////////////
  
  // save data
  window.localStorage.setItem('page', selectedPage);

  /* -!- */

  // update the current page number
  if (isPageLoaded) {
    updateElement(page, "value", selectedPage);
  }

  // update the image source
  if (updateDisplay) {
    updateImgDisplay();
  }

  // gridQuran managment :
  // updateGridDisplay();
};

const nextCB = () => {
  //debugger;

  if (selectedPage == getLastPageForRawiOrCurrentOne()) {
    selectedPage = -3;
  } else {
    selectedPage = parseInt(selectedPage) + 1;
  }
  updatePage();
};

const privCB = () => {

  // if the page is the last page of the current Rawi Moshaf version then :
  if (selectedPage == -3) {
    selectedPage = getLastPageForRawiOrCurrentOne();
  } else {
    selectedPage = selectedPage - 1;
  }
  updatePage();
};

const goToPageCmd = (e) => {
  const value = parseFloat(e.target.value);
  const lPage = getLastPageForRawiOrCurrentOne()

  // ! update the page if the user don't play with the input ie : if not let the last correct displayed page
  if (value >= -3 && value <= lPage) {
    selectedPage = value;
  }
  // if the input is empty told the user
  else if (isNaN(value) || value == "" || value == "-"){
    updateImgDisplay("404")
    selectedPage = -3;
    updateGridDisplay()
    return;
  }

  // if the request comes from the left menu (when chooseing something from fahras) 
  // and we are in a mobile screen then close the bar 
  if (e.code == undefined && left.classList.contains("open-left") && currentScreen == "left"){
    currentScreen = "main"
    left.classList.remove("open-left")
  }

  updatePage();
};

const goToPageFromSearchCmd = (e) => {
  const page = parseFloat(e.target.dataset.page);
  const aya = parseFloat(e.target.dataset.targetaya);
  const lPage = getLastPageForRawiOrCurrentOne()

  // even if we assume the the glassory values are correct but I will check the values !
  
  if (page >= -3 && page <= lPage) {
    selectedPage = page;
    selectedAya = aya;
  }
  // if the input is empty told the user
  else if (isNaN(page) || page == "" || page == "-"){
    updateElement(imge, "src", "404.jpg");
    selectedPage = -3;
    updateGridDisplay()
    return;
  }

  // close the left side bar where the page updated from search 
  if(left.classList.contains("open-left") && currentScreen == "left"){
    currentScreen = "main"
    left.classList.remove("open-left")
  }

  updatePage();
};

const updateRawCmd = (e) => {
  const newRawId = e.target.id;

  // if selected page for the old rawi is sup then the last page for new rawi
  // (that means the new rawi does not have the equivalent number page)
  // then change the page number
  let lpfNewRawi = getLastPageForRawiOrCurrentOne(newRawId)
  if (selectedPage > lpfNewRawi){
    selectedPage = lpfNewRawi
    updatePage(null,false) // we will update the Image only once using the updateImgDisplay() func
  }

  // remove privous selected effect
  raw[selectedRawi].classList.remove("raw-selected");
  selectedRawi = newRawId;
  window.localStorage.setItem('rawi', newRawId)
  // add selected effect
  raw[selectedRawi].classList.add("raw-selected");

  // close the riht side bar where the rawi have been choosed
  if(right.classList.contains("open-right") && currentScreen == "right"){
    currentScreen = "main"
    right.classList.remove("open-right")
  }


  updateImgDisplay();
};

const updateRawArrICmd = (newRaw) => {
  raw[selectedRawi].classList.remove("raw-selected");
  selectedRawi = newRaw;
  window.localStorage.setItem('rawi', newRawId)
  raw[selectedRawi].classList.add("raw-selected");

  updateImgDisplay();
};

// Adding Events Listeners  ///////////////////////////////////////////////////

// rawi of rawis when click declanch updateRawCmd
for (rawi of raw) {
  rawi.addEventListener("click", updateRawCmd);
}

privouos.addEventListener("click", privCB);
// when click on next button
next.addEventListener("click", nextCB);

// when write new page in buttom page bar
page.addEventListener("keyup", goToPageCmd);

// VARIABLES  /////////////////////////////////////////////////////////////////
const loading = document.getElementById("loading");
const currentImage = new Image();
currentImage.onload = imageLoaded;
currentImage.onerror = imageCantBeLoaded;

const ctx = document.getElementById("imge").getContext("2d");




///////////////////////////////////////////////////////////////////////////////
// MODULE 03 : Search & Filter search request  ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

// METHODS  ///////////////////////////////////////////////////////////////////


// simplify text before using it in search
const simplifyArabic = (str) => {
  return str
    .replace(/[^\u0000-\u007E]/g, function (a) {
      var retval = arabicNormChar[a];
      if (retval == undefined) {
        retval = a;
      }
      return retval;
    })
    .normalize("NFKD")
    .toLowerCase();
};

// search for Aya and update the result menu
const searchAya = (text) => {
  const normalized = simplifyArabic(text);
  results.innerHTML = "";

  QURAN.find((line) => {
    let r = line.contentSimple.search(normalized);
    if (r != -1) {
      results.insertAdjacentHTML(
        "beforeend",
        `
      <div>
        <p>${line.content}</p>
        <span>صفحة <b>${line.pageNumber}</b></span>  
        <span>سورة <b>${line.suraName}</b></span>  
        <span>آية <b>${line.number}</b></span>  
        <button class="result_button" data-page="${line.pageNumber}" data-targetAya="${line.number}">إنتقل</button>
      </div>
      `
      );
    }
  });
};

// write search string and control search string and add click (links) events in the result
const searchboxInputUpdatedCmd = (e) => {
  const value = !e ? null : e.target.value;
  // validation : we will escape it for now
  if (!value || value.length == 0) {
    // open glassory or let it open
    if (filter.classList.contains("filter-closed")) {
      filter.classList.remove("filter-closed");
    }
    if (!results.classList.contains("filter-closed")) {
      results.classList.add("filter-closed");
    }
  } else {
    if (!filter.classList.contains("filter-closed")) {
      filter.classList.add("filter-closed");
    }
    if (results.classList.contains("filter-closed")) {
      results.classList.remove("filter-closed");
    }
  }

  if (!value || value.length < 3) {
    return;
  }
  // search
  searchAya(value);

  for (resultButton of resultsButtons) {
    resultButton.addEventListener("click", goToPageFromSearchCmd);
  }
};

// filtering search request //

// search for keyword in a string (with simplification)
const matchFilter = (string, keyword) => {
  const normalized_keyword = simplifyArabic(keyword);
  const normalized_string = simplifyArabic(string);
  const result = normalized_string.search(normalized_keyword);
  if (result != -1) {
    return true;
  }
  return false;
};

// Hide/show the index lines based on the checked options
const filterIndexCmd = (e) => {
  // when check and unckeck

  // reset : show every line
  for (option of filterAndSelector.options) {
    option.classList.remove("hide");
  }

  // hide / show
  for (option of filterAndSelector.options) {
    if (option.dataset.part == "juza" && !isJuzaChecked.checked) {
      option.classList.add("hide");
    }

    if (option.dataset.part == "hizb" && !isHizbChecked.checked) {
      option.classList.add("hide");
    }

    if (option.dataset.part == "sura" && !isSuraChecked.checked) {
      option.classList.add("hide");
    }
  }

  // when search using keyboard

  if (e && e.type == "keyup") {
    // if text is null or empty
    if (!e.target.value) {
      return;
    }
    // after passing by checkbox filter, in this pipe we filter the rest by checking if its match the text
    for (option of filterAndSelector.options) {
      if (!option.classList.contains("hide") && !matchFilter(option.innerHTML, e.target.value)) {
        option.classList.add("hide");
      }
    }
  }
};

// Adding Events Listeners  ///////////////////////////////////////////////////

searchboxInput.addEventListener("keyup", searchboxInputUpdatedCmd);
filterAndSelector.addEventListener("change", goToPageCmd);
isJuzaChecked.addEventListener("change", filterIndexCmd);
isHizbChecked.addEventListener("change", filterIndexCmd);
isSuraChecked.addEventListener("change", filterIndexCmd);
filterParts.addEventListener("keyup", filterIndexCmd);

///////////////////////////////////////////////////////////////////////////////
// MODULE 03 : Quran Versions / Riwaiat filter  ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

// METHODS  ///////////////////////////////////////////////////////////////////

// Adding Events Listeners  ///////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// MODULE 99 : LAST : Windows Keyboard binding  ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// when click up down prevent the default scroll bar behavoir (so we can keep under the eye what the selected rawi)
window.addEventListener("keydown", (e) => {
  // return

  if ((e.code == "ArrowUp" || e.code == "ArrowDown") && e.target !="input.range") {
    e.preventDefault();
    imamsList.scroll(0, raw[selectedRawi].getBoundingClientRect().top);
  }
});

// when click on a button :
window.addEventListener("keyup", (e) => {

  // right / left => change the page
  if (e.code == "ArrowRight") {
    privCB();
  } else if (e.code == "ArrowLeft") {
    nextCB();
  } 
  // return
  
  // up down switch between Quran Versions / or riwiat / or rawis
  if (e.code == "ArrowDown") {
    // get the following rawi
    let nextItem = "a1";

    let index = rawArr.indexOf(selectedRawi);
    if (index >= 0 && index < rawArr.length - 1) {
      nextItem = rawArr[index + 1];
    } else {
      nextItem = rawArr[0];
    }
    // update selected rawi button
    updateRawArrICmd(nextItem);
  } else if (e.code == "ArrowUp") {
    // get the following rawi
    let index = rawArr.indexOf(selectedRawi);
    let privousItem = "a1";

    if (index > 0 && index <= rawArr.length - 1) {
      privousItem = rawArr[index - 1];
    } else {
      privousItem = rawArr[rawArr.length - 1];
    }
    // update selected rawi button
    updateRawArrICmd(privousItem);
  } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(e.key)) {
    /* -!- */
    // need to detec the zone when its have been writed if not a text box => then change the page
  } else {
    /* -!- */
    // need to detec the zone when its have been writed if not a text box => search in Quran
    // if (isSearchOpen){
    //     searchboxInput.focus();
    // }
  }
});

///////////////////////////////////////////////////////////////////////////////
/////////////////////////// END OF WORKING FUATURES ///////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////// NEW MODULES : IN DEV PHASE //////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// MODULE 04 : Page Grid Overlay  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

var currentPageAyats;
var selectedAya;

// var currentPageLines = document.querySelectorAll("[data-aya-number=12]");
var selectedLine = null;

// Adding Events Listeners  ///////////////////////////////////////////////////

const handelAyaPart = (element) => {
  // better to add all event listents in one loop
  element.addEventListener("mouseenter", (e) => {
    currentPageAyats.forEach((aya) => {
      if (aya.dataset.ayanumber == e.target.dataset.ayanumber) {
        aya.classList.add("aya-hovered");
      }
    });
  });

  element.addEventListener("mouseleave", (e) => {
    currentPageAyats.forEach((aya) => {
      if (aya.dataset.ayanumber == e.target.dataset.ayanumber) {
        aya.classList.remove("aya-hovered");
      }
    });
  });

  element.addEventListener("click", (e) => {
    currentPageAyats.forEach((aya) => {
      if (aya.dataset.ayanumber == e.target.dataset.ayanumber) {
        if (selectedAya) {
          // clear the privous selection
          currentPageAyats.forEach((aya) => {
            if (aya.dataset.ayanumber == selectedAya) {
              aya.classList.remove("aya-selected");
            }
          });
        }

        /*
        if (selectedLine) {
          // clear the privous selection
          currentPageLines.forEach((line) => {
            if (line.dataset.line == selectedLine) {
              line.classList.remove("line-selected");
            }
          });
          selectedLine = null;
        }*/
        currentPageAyats.forEach((aya) => {
          if (aya.dataset.ayanumber == e.target.dataset.ayanumber) {
            aya.classList.add("aya-selected");
          }
        });
        selectedAya = aya.dataset.ayanumber;
      }
    });
  });

  element.children[0].children[0].addEventListener('input', e => {
    element.children[0].children[0].value = e.target.value
    // element.children[0].children[1].max = e.target.value
    element.dataset.ayaendposition = e.target.value// element.children[0].children[2]. = e.target.value
  })
};

// const hamish = document.getElementById("hamish").addEventListener("click", ()=>{
// })

// METHODS  ///////////////////////////////////////////////////////////////////
// line template
const lineTemplate = (lineNumber, ayaParts) => {
  let cs = linesCustomStyles[`p${selectedPage}l${lineNumber}`]
           &&  linesCustomStyles[`p${selectedPage}l${lineNumber}`]
  return cs ? `<div id="${lineNumber}" style="${cs}">${ayaParts}</div>`:
   `<div id="${lineNumber}">${ayaParts}</div>`;
}

// ayaPart template
const linePartTemplate = (data) => `<div ${(selectedAya && data.ayaNumber == selectedAya) && "class='aya-selected'"} id="${data.ayaId}-${data.ayaNumber}-${data.lineNumber}" data-aya data-ayaId="${data.ayaId}" data-ayaNumber="${data.ayaNumber}" data-ayaSuraNumber="${data.suraNumber}" data-ayaLineNumber="${data.lineNumber}"  data-ayaEndPosition="${data.lineWidth}">
  <div class="meter">
    <input class="range" type='number' min="0" max="100" value="${data.lineWidth}">
  </div>
</div>`;

// update the Grid UI
const updateGrid = (ayat) => {

  // reset template content
  quranGrid.innerHTML = "";

  const newLines = {};

  for (aya of ayat) {
    for (coveredLine of aya.coveredLines) {
      if (!newLines[coveredLine.lineId]) {
        newLines[coveredLine.lineId] = [{ ayaId: aya.id, ayaNumber: aya.number, suraNumber: aya.suraNumber, lineNumber: coveredLine.lineId, lineWidth: coveredLine.width }];
      } else {
        newLines[coveredLine.lineId].push({ ayaId: aya.id, ayaNumber: aya.number, suraNumber: aya.suraNumber, lineNumber: coveredLine.lineId, lineWidth: coveredLine.width });
      }
    }
  }

  // prepare html to render
  for (const line in newLines) {
    var lineParts = "";
    for (lineParte of newLines[line]) {
      lineParts += linePartTemplate(lineParte);
    }
    // insertion
    quranGrid.insertAdjacentHTML("beforeend", lineTemplate(line, lineParts));
  }

  /*
  // insert the ayats data
  var lineNumber = null;
  var lineParts = ''

  for (aya of ayat) {
    // if we detect that we passed to a new line, therefore insert the current line
    if(lineNumber != aya.lineNumber && lineNumber != null){
      // insertion
      quranGrid.insertAdjacentHTML(
        "beforeend",
        line(lineNumber, lineParts)
        );
      
      // reset variables
      lineParts = ''
    }
    
    lineNumber = aya.coveredLines;
    lineParts += ayaPart(aya.id, aya.suraNumber, aya.coveredLines, aya.aya_part_width)
  }
  */
};

// updating the grid logic
const updateGridDisplay = () => {
  return;
  // show the grid
  if (quranGrid.classList.contains("quranGrid-closed")) {
    quranGrid.classList.remove("quranGrid-closed");
  }

  // update the grid layout for the current page ayat
  const ayat = QURAN.filter((aya) => {
    return aya.pageNumber == selectedPage;
  });


  if (!ayat || ayat == []) {
    if (!quranGrid.classList.contains("quranGrid-closed")) {
      quranGrid.classList.add("quranGrid-closed");
    }
  } else {
    updateGrid(ayat);
    currentPageAyats = document.querySelectorAll("[data-aya]");
    for (ayaOrAyaPart of currentPageAyats) {
      handelAyaPart(ayaOrAyaPart);
    }
  }
};
