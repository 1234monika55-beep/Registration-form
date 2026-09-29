function showPage(id){

    document.querySelectorAll("section")

        .forEach(s => s.classList.remove("active"));

    document.getElementById(id).classList.add("active");

}

function loadMenu(type){

    const menu = document.getElementById("menu");

    menu.innerHTML = "";

    const items = type === "veg"

        ? ["Veg Meals","Paneer Butter Masala","Veg Biryani"]

        : ["Chicken Biryani","Mutton Curry","Fish Fry"];

    items.forEach(item=>{

        const d = document.createElement("div");

        d.className = "menu-item";

        d.innerText = item;

        d.onclick = () => d.classList.toggle("selected");

        menu.appendChild(d);

    });

}

function submitOrder(){

    if(custName.value === "" || custCount.value === ""){

        alert("Please enter customer name and number of customers");

        return;

    }

    successMsg.style.display = "block";

}

function loadRooms(type){

    const r = document.getElementById("rooms");

    const msg = document.getElementById("roomSuccess");

    r.innerHTML = "";

    msg.style.display = "none";

    const price = type === "ac" ? "₹10,000 per day" : "₹7,000 per day";

    const label = type === "ac" ? "AC Room" : "Without AC Room";

    for(let i=1;i<=6;i++){

        const d = document.createElement("div");

        d.className = "room";

        d.innerText = `${label} ${i} – ${price}`;

        d.onclick = () => msg.style.display = "block";

        r.appendChild(d);

    }

}