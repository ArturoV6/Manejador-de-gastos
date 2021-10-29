const buttonExpense = document.getElementById("button-expense");
buttonExpense.addEventListener("click", clickButton);

function clickButton() {
    const inputText = document.getElementById("input-text");
    const textInput = inputText.value;

    const inputDate = document.getElementById("input-date");
    const dateInput = inputDate.value;

    const inputNumber = document.getElementById("input-number");
    const numberInput = inputNumber.value;

    if (textInput.length === 0 && dateInput.length === 0 && numberInput.length === 0) {
        const tableDiv = document.getElementById("table-div");

        const fragmentado = document.createDocumentFragment();

        const createDiv = document.createElement("div");

        fragmentado.appendChild(createDiv);

        tableDiv.appendChild(fragmentado);

        tableDiv.innerHTML="<p> agrega texto </p>";
    } else {
        const tableContainer = document.getElementById("table-container");

        const fragmento = document.createDocumentFragment();

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
};