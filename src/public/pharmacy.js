'use strict';
let elCard = document.querySelector(".cards")
let elChange = document.querySelector(".change__btn")
let elFormChange = document.querySelector(".form__change")
let elFormChangeTables = document.querySelector(".form__change-tables")
let elBodyBg = document.querySelector('.hidden__bg');
let elFoundId = document.querySelector('#foundId');
let elFoundIdTablets = document.querySelector('#foundIdTablets');
let elTablets = document.querySelector('.tablets');
let elChangeTablets = document.querySelector('.change__tablets');

elCard.addEventListener("click", e => {
    if(e.target.matches(".delete__btn")){
        fetch(`http://localhost:9000/delete/${e.target.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload(true)
            })
    }else if(e.target.matches(".update")){
        elFoundId.setAttribute('value', e.target.id)
        elFormChange.classList.remove("d-none")
        elBodyBg.setAttribute('class', 'overlay')
    }else if(e.target.matches(".category__tablets")){
        render.innerHTML = null
        fetch(`http://localhost:9000/category/${e.target.id}`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                data?.map(i => {
                    let html = `<div class="card" style="width: 16rem;">
                    <div class="card-body">
                        <h2>${i.name}  </h2>
                        <p>Narxi: ${i.price}  </p>
                        <p>${i.desc}  </p>
                    </div>
                </div>`;

                  render.insertAdjacentHTML("beforeend", html);
                })
            })
    }
})


elTablets.addEventListener("click", (e)=> {
    if(e.target.matches(".change__tablets")){
        fetch(`http://localhost:9000/remove/${e.target.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(true)
        })
    }else if(e.target.matches(".update")){
        elFoundIdTablets.setAttribute('value', e.target.id)
        elFormChangeTables.classList.remove("d-none")
        elBodyBg.setAttribute('class', 'overlay')
    }
})

elBodyBg.addEventListener('click', function() {
    elFormChangeTables.classList.add("d-none")
    elBodyBg.setAttribute("class", "hidden__bg")
})