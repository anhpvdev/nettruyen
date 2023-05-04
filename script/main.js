var m =true
var b =true
var test = document.querySelectorAll(".setcolor")

document.getElementById("change-background").onclick = function(){
    if(b){
        document.body.style.backgroundColor="#ebebeb"
        document.getElementById("navbar").style.backgroundColor ="#e4e4e4"
        document.getElementById("home").style.color="blueviolet"
        for(i=0; i < test.length; i++){
            test[i].setAttribute('class','setcolor changecolor')
        }
        b=false

    }else{
        document.body.style.backgroundColor="rgb(27, 27, 27)"
        document.getElementById("navbar").style.backgroundColor ="black"
        document.getElementById("home").style.color="orange"
        for(i=0; i < test.length; i++){
            test[i].setAttribute('class','setcolor')
        }
        b=true
    }
}

document.getElementById("show-notification").onclick = function() {
    if(m){
        document.getElementById("drop-notification").style.display='block'
        m=false
        
    }else{
        document.getElementById("drop-notification").style.display='none'
        m=true
    }

}
