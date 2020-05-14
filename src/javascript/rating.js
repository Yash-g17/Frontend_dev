let x;

function color1() {
    document.getElementById("star1").style.color = "yellow";
}

function color2() {
    document.getElementById("star1").style.color = "yellow";
    document.getElementById("star2").style.color = "yellow";
}

function color3() {
    document.getElementById("star1").style.color = "yellow";
    document.getElementById("star2").style.color = "yellow";
    document.getElementById("star3").style.color = "yellow";
}

function color4() {
    document.getElementById("star1").style.color = "yellow";
    document.getElementById("star2").style.color = "yellow";
    document.getElementById("star3").style.color = "yellow";
    document.getElementById("star4").style.color = "yellow";
}

function color5() {
    document.getElementById("star1").style.color = "yellow";
    document.getElementById("star2").style.color = "yellow";
    document.getElementById("star3").style.color = "yellow";
    document.getElementById("star4").style.color = "yellow";
    document.getElementById("star5").style.color = "yellow";
}

function normalColor1() {
    document.getElementById("star1").style.color = "black";
}

function normalColor2() {
    document.getElementById("star1").style.color = "black";
    document.getElementById("star2").style.color = "black";
}

function normalColor3() {
    document.getElementById("star1").style.color = "black";
    document.getElementById("star2").style.color = "black";
    document.getElementById("star3").style.color = "black";
}

function normalColor4() {
    document.getElementById("star1").style.color = "black";
    document.getElementById("star2").style.color = "black";
    document.getElementById("star3").style.color = "black";
    document.getElementById("star4").style.color = "black";
}

function normalColor5() {
    document.getElementById("star1").style.color = "black";
    document.getElementById("star2").style.color = "black";
    document.getElementById("star3").style.color = "black";
    document.getElementById("star4").style.color = "black";
    document.getElementById("star5").style.color = "black";
}

function clicked() {
    let i;
    for (i = 1; i <= x; i++) {
        document.getElementById("star" + i).style.color = "yellow";
    }
    for (i; i <= 5; i++) {
        document.getElementById("star" + i).style.color = "black";
    }
    console.log(x);
    document.getElementById("star1").removeEventListener("mouseover", color1);
    document.getElementById("star2").removeEventListener("mouseover", color2);
    document.getElementById("star3").removeEventListener("mouseover", color3);
    document.getElementById("star4").removeEventListener("mouseover", color4);
    document.getElementById("star5").removeEventListener("mouseover", color5);
    document.getElementById("star1").removeEventListener("mouseout", normalColor1);
    document.getElementById("star2").removeEventListener("mouseout", normalColor2);
    document.getElementById("star3").removeEventListener("mouseout", normalColor3);
    document.getElementById("star4").removeEventListener("mouseout", normalColor4);
    document.getElementById("star5").removeEventListener("mouseout", normalColor5);
    let myObj = { blog_name: "ok", rating: x, UID: "ok" };
    let myJSon = JSON.stringify(myObj);
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", URL, true);
    send(myJSon);
} {
    document.getElementById("star1").addEventListener("mouseover", color1);
    document.getElementById("star2").addEventListener("mouseover", color2);
    document.getElementById("star3").addEventListener("mouseover", color3);
    document.getElementById("star4").addEventListener("mouseover", color4);
    document.getElementById("star5").addEventListener("mouseover", color5);
    document.getElementById("star1").addEventListener("mouseout", normalColor1);
    document.getElementById("star2").addEventListener("mouseout", normalColor2);
    document.getElementById("star3").addEventListener("mouseout", normalColor3);
    document.getElementById("star4").addEventListener("mouseout", normalColor4);
    document.getElementById("star5").addEventListener("mouseout", normalColor5);
}