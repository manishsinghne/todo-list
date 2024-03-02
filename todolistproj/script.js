let inp= document.querySelector('#inp')
let btn= document.querySelector('#btn')
let uns= document.querySelector('#uoder')

// evnet  listener

btn.addEventListener('click',()=>{
    let lis= document.createElement('li')

     let inpvalue=inp.value;
     lis.innerText=inpvalue
    let uns= document.querySelector('#uoder')

    uns.appendChild(lis)

    //   if cond
    if(inp.value==''){
            alert('please enter a prompt here')
            remove.remove()
            edit.remove()
            // localdata()

        }
    //  remove btn
    else{
     let remove = document.createElement('button');
     remove.innerText='remove'
     lis.appendChild(remove);
     uns.appendChild(lis)
    //  localdata()

    
    //  add event remove btn
    remove.addEventListener('click',()=>{
lis.remove()
    //  localdata()

    })
}
    inp.value=''
    // localdata()
    
})

// locla sotr



// show  




