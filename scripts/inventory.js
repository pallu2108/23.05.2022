var display = JSON.parse(localStorage.getItem("products"))
display.map(function(elem,index)
{
    var box=document.createElement("div")
    var td1=document.createElement("p")
    td1.innerText=elem.type;
    var td2=document.createElement("p")
    td2.innerText=elem.desc;
    var td3=document.createElement("p")
    td3.innerText=elem.price;
    var td4=document.createElement("div")
    var img=document.createElement("img")
    img.src=elem.image
    img.setAttribute("class","imagedis")
    td4.append(img)
    var btn = document.createElement("button")
    btn.innerText="Remove Product"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
        removeItem(elem,index)
    })
   box.append(td4,td1,td2,td3,btn)
   document.querySelector("#all_products").append(box)
})
function removeItem(elem,index)
{
    window.location.reload()
    display.splice(index,1)
    localStorage.setItem("products",JSON.stringify(display))
}