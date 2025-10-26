let rangBtn = document.getElementById("rangbtn");
let ranBtn = document.getElementById("ranbtn");
let fangBtn = document.getElementById("fangbtn");
let zaiBtn = document.getElementById("zaibtn");
let jiaBtn = document.getElementById("jiabtn");


function openRanginfo() {
    rangBtn.classList.add("open-popup");
}

function openRaninfo() {
    ranBtn.classList.add("open-popup");
}

function openFanginfo() {
    fangBtn.classList.add("open-popup");
}

function openZaiinfo() {
    zaiBtn.classList.add("open-popup");
}

function openJiainfo() {
    jiaBtn.classList.add("open-popup");
}

function closeinfo() {
    if (rangBtn.classList.contains("open-popup")) {
        rangBtn.classList.remove("open-popup");
    } else if (ranBtn.classList.contains("open-popup")) {
        ranBtn.classList.remove("open-popup");
    } else if (fangBtn.classList.contains("open-popup")) {
        fangBtn.classList.remove("open-popup");
    } else if (zaiBtn.classList.contains("open-popup")) {
        zaiBtn.classList.remove("open-popup");
    } else if (jiaBtn.classList.contains("open-popup")) {
        jiaBtn.classList.remove("open-popup")
    }
}


let ostNum = 0;

let next = document.getElementById('ostNext');
let back = document.getElementById('ostBack')
let ostBg = ['assets/ost1bg.jpg', 'assets/ost1bg.jpg', 'assets/ost3bg.jpg', 'assets/ost4bg.jpg', 'assets/ost5bg.jpg'];
let ostImg = ['assets/ost1.jpg', 'assets/ost2.jpg', 'assets/ost3.jpg', 'assets/ost4.jpg', 'assets/ost5.jpg'];
let ostTitle = ['我想我会', "遇见克莱因蓝", "Graduation Message", "耳喃 ", "你是不是也想和我一起走走"];
let ostSinger = ['-尹露浠 (Yin Luxi)', '-章熙梦',"-孟凡明", "-PIggy","-酸月亮"]

let Title = document.getElementById('title');
let Img = document.getElementById('ostImg');
let Bg = document.querySelector('.ostBg');
let Singer = document.getElementById('singer')

next.addEventListener('click', function () {
  ostNum++;

  if (ostNum >= ostTitle.length) {
    ostNum = 0;
  }

  Title.innerText = ostTitle[ostNum];
  Singer.innerText = ostSinger[ostNum];
  Img.src = ostImg[ostNum];
  Bg.style.backgroundImage = `url('${ostBg[ostNum]}')`;
});

back.addEventListener('click', function(){
    ostNum--;

    if(ostNum<0){
        ostNum= ostTitle.length-1;
    }

    Title.innerText = ostTitle[ostNum];
  Singer.innerText = ostSinger[ostNum];
  Img.src = ostImg[ostNum];
  Bg.style.backgroundImage = `url('${ostBg[ostNum]}')`;
});
