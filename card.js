
async function cardData(){
    let data = await fetch("./card.json");
    return await data.json()
}

cardData().then(data => {
    console.log(data)
    data.forEach(i => {
        let card = document.createElement("div");
        card.setAttribute("id","card")
        let img = document.createElement("img")
        img.setAttribute("src",i.image)
        card.appendChild(img)
        let text = document.createElement("div");
        text.setAttribute("id","text")
        let h3 = document.createElement("div")
        h3.setAttribute("id","h3")
        let h4 = document.createElement("div")
        h4.setAttribute("id","h4")
        text.appendChild(h3)
        text.appendChild(h4)
        h3.innerText = i.text
        h4.innerText = i.smallText
        console.log(card)
        console.log(text)

        let cards = document.getElementById("cards");
        cards.appendChild(card)
    });
})