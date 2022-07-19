let shedA=document.getElementById('shedA')
let shedB=document.getElementById('shedB')
let shedC=document.getElementById('shedC')
let shedD=document.getElementById('shedD')
let btn=document.getElementById('submit')




btn.addEventListener('click' ,function(e){
e.preventDefault()
let pA = document.createElement("p2");
pA.textContent =`Milk in Shed A ${shedA.value} Litres`
let pB = document.createElement("p2");
pB.textContent =`Milk in Shed B ${shedB.value} Litres`
let pC = document.createElement("p2");
pC.textContent =`Milk in Shed C ${shedC.value} Litres`
let pD = document.createElement("p2");
pD.textContent =`Milk in Shed D ${shedD.value} Litres`
component.appendChild(pA)
component.appendChild(pB)
component.appendChild(pC)
component.appendChild(pD)
totalProduction()

})

function totalProduction(){
    let sum = parseInt(shedA.value) + parseInt(shedB.value)+ parseInt(shedC.value) + parseInt(shedD.value)

    let week= sum * 7
    let leapyear = sum * 366
    let normalyear = sum * 365
  
    let weekP=document.createElement("p2")
    let leapyearP=document.createElement("p2")
    let normalP=document.createElement("p2")

    weekP.textContent=`Milk Weekly ${week} litres`
    leapyearP.textContent=`Milk LeapYear ${leapyear} litres`
    normalP.textContent=`Milk Normal Year ${normalyear} litres`


    component.appendChild(weekP)
    component.appendChild(leapyearP)
    component.appendChild(normalP)


    incomeOverTime(week , leapyear , normalyear)

} 

function incomeOverTime( week , leapyear , normalyear){
let selling_price= parseInt(45)

wksh= parseInt(week * selling_price)
lpyrksh=parseInt(leapyear)* parseInt(selling_price)
normalksh=parseInt(normalyear) * parseInt(selling_price)


let weekKSH=document.createElement("p2")
let leapyearKSH=document.createElement("p2")
let normalyearKSH=document.createElement("p2")

weekKSH.textContent=`Your weekly income will be Ksh ${wksh}`
leapyearKSH.textContent=`Your Leap Year income will be Ksh ${lpyrksh}`
normalyearKSH.textContent=`Your Leap Year income will be Ksh ${normalksh}`

component.appendChild(weekKSH)
component.appendChild(leapyearKSH)
component.appendChild(normalyearKSH)

}


 
