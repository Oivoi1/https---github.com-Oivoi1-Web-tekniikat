let number = 2
let test = "Muuttujan number arvo on " + number +" ";

let test2 = `Muuttujan number arvo on ${ number }`;

//document.write("tästä alkaa testitulostus: ")
//document.write(test)
//document.write(test2)

let loadCount = 0;
let cookie = document.cookie;


document.cookie="loadCount=1";

// Evästeiden käsittely w3schoolista haeuttu
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }
  
  function getCookie(cname) {
      // Lisää nimen perään =-merkki
    let name = cname + "=";
    // Pilkotaan merkkijono "loadCount; test=1" arrayhyn puolipisteiden kohdalat -> ca[0] loadCount=1
    let ca = document.cookie.split(';');
    // Loopataan array läpi
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      // Tsekataan löytyykö annetulla nimellä evästettä
      if (c.indexOf(name) == 0) {
          // Palautetaan evästeen arvo
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
      // Haetaan loadCOunt-evästeen arvo
    let loadCount = getCookie("loadCount");
    if (loadCount != "") {
        // Arvo löytyi
        // Kasvatetaan arvoa
  loadCount++
    } else {
        // Arvoa ei löytynyt
        // Asetetaan arvoksi 1
        loadCount =1;
        
        
      }
      // Päivitä arvo evästeeseen
      setCookie("loadCount", loadCount)
    }
  let loadCount = checkCookie();
  // Näytetään latausmäärä sivulla
  document.write("Sivu ladattu " + loadCount + " kertaa")
 