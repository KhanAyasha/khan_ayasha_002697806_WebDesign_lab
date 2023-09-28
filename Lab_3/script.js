console.log("Hello World!");

function addRecord(){
    //console.log("Record got added");
    var table = document.getElementById("myTable");
    var tBody = document.getElementsByTagName("tbody")[0];

    var bookName = table.lastElementChild?.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML|| "Book 0";
    var lastIndex = bookName.split(" ")[1];

    var trNode = document.createElement("tr");
    var tdCheckBoxNode = document.createElement("td");
    tdCheckBoxNode.innerHTML ='<input type="checkbox" onClick="onClickcheckbox(this)" />'

    var tdBookNode  = document.createElement("td");
    tdBookNode.innerHTML = 'Book '+(parseInt(lastIndex)+1);

    var tdAuthor = document.createElement("td");
    tdAuthor.innerHTML = 'Author '+(parseInt(lastIndex)+1);

    trNode.appendChild(tdCheckBoxNode);
    trNode.appendChild(tdBookNode);
    trNode.appendChild(tdAuthor);
    tBody.appendChild(trNode);
} 


function onClickcheckbox(checkBox){

    console.log(checkBox);
    var selectedRow = checkBox.parentElement.parentElement;
    if(checkBox.checked==true){
        selectedRow.style.backgroundColor="wheat";
        var deleteButton = document.createElement("td");
        deleteButton.innerHTML = '<button id="deleted" type="button" onClick="onDeleteRow(this)">Delete</button>'
        selectedRow.appendChild(deleteButton);
    }else{
        selectedRow.style.backgroundColor="#fff";
        selectedRow.deleteCell(3);
    }
}

function onDeleteRow(deleteRef){
    var selectedRow = deleteRef.parentElement.parentElement;
    var indexNum = selectedRow.rowIndex;
    document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
    alert("Row "+indexNum +" has been deleted")
}
//var addrecord = function(){}