function num(number){
        let input = document.getElementById("input") ;
        input.innerHTML += number;
        // input.style.background = "red";

    }

    function backspace(){
        let input = document.getElementById("input") ;
        input.innerHTML = input.innerHTML.slice(0, -1);
        //slice ka use hata dena ex.=12345  slice(0, -1) ans = 1234

    }
    function equal(){
        let input = document.getElementById("input");
        input.innerHTML = eval(input.innerHTML);
    }
    function allClear(){
        let input = document.getElementById("input");
        input.innerHTML = "";
    }
