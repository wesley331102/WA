var ingFlag = true

function editImg() {   
    if (document.getElementById("imageId").src.includes("ch.jpg")) {
        document.getElementById("imageId").src="./src/img/chm.jpg";
    } else {
        document.getElementById("imageId").src="./src/img/ch.jpg";
    }
}

function homePage() {
    let x = document.getElementById("main-page");
    let y = document.getElementById("education-page");
    let z = document.getElementById("portfolio-page");
    let w = document.getElementById("delicacy-page");
    let xb = document.getElementById("main-but");
    let yb = document.getElementById("education-but");
    let zb = document.getElementById("portfolio-but");
    let wb = document.getElementById("delicacy-but");
    if (x.style.display !== "block") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      w.style.display = "none";
      xb.style.fontWeight = "bold";
      yb.style.fontWeight = "normal";
      zb.style.fontWeight = "normal";
      wb.style.display = "normal";
    }
}

function educationPage() {
    let x = document.getElementById("main-page");
    let y = document.getElementById("education-page");
    let z = document.getElementById("portfolio-page");
    let w = document.getElementById("delicacy-page");
    let xb = document.getElementById("main-but");
    let yb = document.getElementById("education-but");
    let zb = document.getElementById("portfolio-but");
    let wb = document.getElementById("delicacy-but");
    if (y.style.display !== "block") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      w.style.display = "none";
      xb.style.fontWeight = "normal";
      yb.style.fontWeight = "bold";
      zb.style.fontWeight = "normal";
      wb.style.display = "normal";
    }
}

function portfolioPage() {
    let x = document.getElementById("main-page");
    let y = document.getElementById("education-page");
    let z = document.getElementById("portfolio-page");
    let w = document.getElementById("delicacy-page");
    let xb = document.getElementById("main-but");
    let yb = document.getElementById("education-but");
    let zb = document.getElementById("portfolio-but");
    let wb = document.getElementById("delicacy-but");
    if (z.style.display !== "block") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      w.style.display = "none";
      xb.style.fontWeight = "normal";
      yb.style.fontWeight = "normal";
      zb.style.fontWeight = "bold";
      wb.style.display = "normal";
    }
}

function delicacyPage() {
    let x = document.getElementById("main-page");
    let y = document.getElementById("education-page");
    let z = document.getElementById("portfolio-page");
    let w = document.getElementById("delicacy-page");
    let xb = document.getElementById("main-but");
    let yb = document.getElementById("education-but");
    let zb = document.getElementById("portfolio-but");
    let wb = document.getElementById("delicacy-but");
    if (w.style.display !== "block") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      w.style.display = "block";
      xb.style.fontWeight = "normal";
      yb.style.fontWeight = "normal";
      zb.style.fontWeight = "normal";
      wb.style.display = "bold";
    }
}

var imgDict = {
    1: "./src/img/1.jpg",
    2: "./src/img/2.jpg",
    3: "./src/img/3.jpg",
    4: "./src/img/4.jpg",
    5: "./src/img/5.jpg",
    6: "./src/img/6.jpg",
    7: "./src/img/7.jpg",
    8: "./src/img/8.jpg",
}

var leftButElement = document.getElementById("leftButton");
var rightButElement = document.getElementById("rightButton");

function leftBut() {
    var temp = document.getElementById("myImg").src;
    temp = temp.substr(temp.length - 5, temp.length);
    temp = Number(temp[0])
    temp -= 1
    if (temp == 0) {
        alert("No Previous image!!!");
    } else {
        document.getElementById("myImg").src = imgDict[temp];
    }
}

function rightBut() {
    var temp = document.getElementById("myImg").src;
    temp = temp.substr(temp.length - 5, temp.length);
    temp = Number(temp[0])
    temp += 1
    if (temp == 9) {
        alert("No Next image!!!");
    } else {
        document.getElementById("myImg").src = imgDict[temp];
    }
}
