// DOM Element
let randomEl=document.querySelector('.random');
let chekedEl=document.querySelectorAll('input[type="checkbox"]');
let rangeEl=document.querySelector('input[type="range"]');
let textEl=document.querySelector('input[type="text"]');
let passLenght=document.querySelector('.password-length');
let passStark=document.querySelector('.password-stark');
let cssAfter=window.getComputedStyle(passStark,'::after');


//evetn range input
rangeEl.addEventListener('input',()=>{
    passLenght.innerHTML=rangeEl.value;
    textEl.getAttributeNode("maxlength").value=passLenght.innerHTML
   
})

// fonctions lower upper ....
function getGeneratoLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getGeneratorUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getGeneratorNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getGeneratorSymbol(){
   const symbol='αßΓπΣ(@[{/µ*+=^';
   return symbol[Math.floor(Math.random()*symbol.length)] ;	
}
function getGeneratorSpace(){
    const space=' ';
    return space;	
 }
 function getGeneratorNspace(){
    const nospace='';
    return nospace;	
 }
//object all item
const randomFuction={
    lower:getGeneratoLower,
    upper:getGeneratorUpper,
    number:getGeneratorNumber,
    symbol:getGeneratorSymbol,
    space:getGeneratorSpace
   
}
// function password
function generatorPassWod(lower,upper,number,symbol,space,lenghte){
    let generatorPassWords='';
    const typeCount=lower + upper + number + symbol + space ;
    const arrType=[{lower},{upper},{number},{symbol},{space}].filter(
        item => Object.values(item)[0]
    );
 if(typeCount === 0){
    return '';
 }

 for(let i=0;i<lenghte;i+=typeCount){
    arrType.forEach(type=>{
        const FoncNam=Object.keys(type)[0];
        generatorPassWords +=randomFuction[FoncNam]();
    });
 }
const finalpassWord=generatorPassWords.slice(0,lenghte);
return finalpassWord;

}

//event random password
randomEl.addEventListener('click',()=>{
    const lenghte=+passLenght.innerHTML;
    const hasLower=chekedEl[0].checked;
    const hasUpper=chekedEl[1].checked;
    const hasNumber=chekedEl[2].checked;
    const hasSymbol=chekedEl[3].checked;
    const hasSpace=chekedEl[4].checked;
        textEl.value=generatorPassWod(
            hasLower,
            hasUpper,
            hasNumber,
            hasSymbol,
            hasSpace,
            lenghte);
//password stark degree
 passStark.style.setProperty('--wtihe-after',`${rangeEl.value*3.333+'%'}`);
 if(rangeEl.value < 8){
      passStark.style.setProperty('--back-color','red');
 }
 if(rangeEl.value >8 && rangeEl.value <15){
     return passStark.style.setProperty('--back-color','orange');
 }
 if(rangeEl.value > 15){
     return passStark.style.setProperty('--back-color','green');
 }
 
})

