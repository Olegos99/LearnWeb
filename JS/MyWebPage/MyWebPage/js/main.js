function DarkMode() {


    var color = document.getElementsByTagName("h1")[0].style.color ;


    if (color == "black") {
        document.body.style.background = "#1e1e1e"; 
        document.getElementsByTagName("h1")[0].style.color = "#fff";
        var pElements = document.getElementsByTagName("p");

        document.getElementById("ModeButton").innerHTML = "LightMode";
        

        for (var i = 0; i < pElements.length; i++) {
            pElements[i].style.color = "#fff";
        }
        Array.from(document.querySelectorAll('button')).map(function (button) {
            button.style.backgroundColor = "#373738";
            button.style.color = "white";
        })
        
    }
    else {
        document.body.style.background = "white"; 
        document.getElementsByTagName("h1")[0].style.color = "black";
        var pElements = document.getElementsByTagName("p"); 


        document.getElementById("ModeButton").innerHTML = "DarkMode";

        for (var i = 0; i < pElements.length; i++) {
            pElements[i].style.color = "black";
        }
        Array.from(document.querySelectorAll('button')).map(function (button)
        {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        })

    }
}


function ButtonPage1()
{
    //if (window.location == "index.html")
    //{
    //    window.location.replace("Pages/1ButtonPage.html");
    //}
    //else { window.location.replace("index.html");}
    window.location.replace("Pages/1ButtonPage.html");
}

function ButtonPage2() {
    window.location.replace("Pages/2ButtonPage.html");
}

function ButtonPage3() {
    window.location.replace("Pages/3ButtonPage.html");
}
