let img = document.querySelector('img') ;
let srv = document.querySelector('.srv')
let hid = document.querySelector('.hid')

//   function swap(){
//     hid.style.display='block' ;
//     srv.outerHTML = img 
//     img.style.cssText = `
//     width:80%;
//     height:80%;
//     `
// }

// console.log(hid) 
// let uls = document.querySelectorAll('ul li')
let lis = document.querySelectorAll('ul li a') 

lis.forEach((li)=> {
    li.addEventListener('click', (ele)=>{
        lis.forEach((li)=> {
            li.classList.remove('active')
        })
        ele.currentTarget.classList.add('active')
    })

}) 

console.log(lis)


let mag = document.querySelectorAll('img')
 
