document.querySelector(".buttons span").onclick=function(){
    let yourName =prompt("enter your name")
    if(yourName==''||yourName==null){
        document.querySelector(".name span").innerHTML="UnKnown"
    }
    else{
        document.querySelector(".name span").innerHTML=yourName

    }
    document.querySelector(".buttons").remove()
}
let blocksContainer=document.querySelector(".container")
let blocks=Array.from(blocksContainer.children)
//let orderRange=[...Array(blocks.length).keys()]
let orderRange=Array.from(Array(blocks.length).keys())

shuffle(orderRange)

function flipped(selected){
    selected.classList.add("flip")

    let sumFlipped=blocks.filter(sum => sum.classList.contains('flip'))
    if(sumFlipped.length===2){
        
        stop()

        checkMathchedBlocks(sumFlipped[0],sumFlipped[1])
    }
}

function checkMathchedBlocks(first,second){
    let tries=document.querySelector(".tries span")
    if(first.dataset.technology==second.dataset.technology){
        first.classList.remove('flip')
        second.classList.remove('flip')

        first.classList.add('hasMatch')
        second.classList.add('hasMatch')
    }
    else{
        tries.innerHTML=parseInt(tries.innerHTML)+1;

        setTimeout(() => {
            first.classList.remove('flip')
            second.classList.remove('flip')
        }, 1000);
    }
}

function stop(){
    blocksContainer.classList.add("stop")

    setTimeout(() => {
    blocksContainer.classList.remove("stop")
        
    }, 1000);
}

blocks.forEach((block,index) => {
    block.style.order=orderRange[index]

    block.addEventListener('click',(eo) => {
        flipped(block);
    })
    
});

function shuffle(array){
    let current=array.length,
    random,
    temp;
    while(current>0){
    random=Math.floor(Math.random()*current)
    current--;  

    temp=array[current]
    array[current]=array[random]
    array[random]=temp
    }
}

