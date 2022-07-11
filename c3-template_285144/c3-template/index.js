document.querySelector("form").addEventListener("submit", myInventory);
let InventoryArr =[];
function myInventory(){
    event.preventDefault()
    let category = document.querySelector("#category").value;
    let delivery = document.querySelector("#deliveredBy").value;

    let taskObj = {
      Name: document.querySelector("#name").value,
      priority: priority,
      brand: document.querySelector("#brand").value,
      priority: priority,
      price: document.querySelector("#deliveredBy").value,
        priority: priority,
    };

    InventoryArr.push(taskObj);
  
    displayTable(InventoryArr);
}
  
function displayTable(InventoryArr){
    document.querySelector("tbody").innerHTML ="";

    InventoryArr.forEach(function(elem){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = elem.Name;
    
        let td2 = document.createElement("td");
        td2.innerText = elem.category;

        let td3 = document.createElement("td");
        td3.innerText = elem.brand;

        let td4 = document.createElement("td");
        td4.innerText = elem.price;

        let td5 = document.createElement("td");
        td5.innerText = elem.delivery;

        var td6 = document.createElement("td");
        td6.innerText = elem.PriceSegment;

        td7 = document.createElement("td");
        td7.innerText = elem.Delete;
        td7.addEventListener("click",deleteRow)
        tr.append(td1,td2, td3, td4, td5, td6, td7)
        document.querySelector("tbody").append(tr);

    }); 
}

function deleteRow(){
    event.target.parentNode.remove();
}