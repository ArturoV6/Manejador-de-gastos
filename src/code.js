const buttonExpense = document.getElementById("button-expense");
buttonExpense.addEventListener("click", clickButton);

function clickButton() {
    const inputText = document.getElementById("input-text");
    const textInput = inputText.value;

    const inputDate = document.getElementById("input-date");
    const dateInput = inputDate.value;

    const inputNumber = document.getElementById("input-number");
    const numberInput = inputNumber.value;

    if (textInput.length === 0 || dateInput.length === 0 || numberInput.length === 0) {
        const tableDiv = document.getElementById("table-div");

        const fragmentado = document.createDocumentFragment();

        const createDiv = document.createElement("div");

        let createId = document.createAttribute("id");

        createId.value = "div-child";

        createDiv.setAttributeNode(createId);

        fragmentado.appendChild(createDiv);

        tableDiv.appendChild(fragmentado);

        createDiv.innerHTML="<p id=text-id> agrega texto </p>";
    } else {
        const tableDiv = document.getElementById("table-div");

        const divChild = document.getElementById("div-child");
        
        if (tableDiv.children.length === 1) {
            tableDiv.removeChild(divChild);

            const tableContainer = document.getElementById("table-container");

            let newRow = tableContainer.insertRow(1);

            let newCell = newRow.insertCell(0);

            let newCell2 = newRow.insertCell(1);

            let newCell3 = newRow.insertCell(2);

            newRow.addEventListener("click", clickFun = (evento) =>{
                evento.target.parentNode.remove()
            });

            newCell.innerHTML = textInput;
            newCell2.innerHTML = dateInput;
            newCell3.innerHTML = numberInput;     
        }else{
            console.log("ok")

            const tableContainer = document.getElementById("table-container");

            let newRow = tableContainer.insertRow(1);

            let newCell = newRow.insertCell(0);

            let newCell2 = newRow.insertCell(1);

            let newCell3 = newRow.insertCell(2);

            newRow.addEventListener("click", clickFun = (evento) =>{
                console.log(evento.target.parentNode.remove())
            })

            newCell.innerHTML = textInput;
            newCell2.innerHTML = dateInput;
            newCell3.innerHTML = numberInput;
        }

        
    }
};