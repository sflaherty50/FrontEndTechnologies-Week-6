var shoeData = new Array ();

    
    var selectedRow = null
    
    
    
    
    $('#btnSubmit').click(function(e) {
    
        e.preventDefault()
        var formData = readFormData();
        if(validateForm())
          insertNewRecord(formData);   
       else
        resetForm();
        }
    );
    
    
    function uniqueID(){
    for (i = 0; i < Array.length; i++) {
        number += i + "<br>";
      }
    }
    
    
    function readFormData() {
        var formData ={};
        formData["sneakerID"] = document.getElementById("sneakerID").value;
        formData["storeName"] = document.getElementById("storeName").value;
        formData["Brand"] = document.getElementById("Brand").value;
        formData["sneakerStyle"] = document.getElementById("sneakerStyle").value;
        formData["sneakerSize"] = document.getElementById("sneakerSize").value.toString();
        formData["sneakerPrice"] = document.getElementById("sneakerPrice").value.toString();
        return formData
    }
    
    function insertNewRecord(data) {
        var table = document.getElementById("sneakerList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        var _rowid = 1;
        if(table.rows.length = 0){
          _rowid = 1;}
        else{
            _rowid = table.rows.length;}
    
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = _rowid;  
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.storeName;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Brand;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.sneakerStyle;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.sneakerSize;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.sneakerPrice;
        cell7 = newRow.insertCell(6);
        cell7.innerHTML = "<button type='button' onclick='onEdit(this);' class='btn btn-primary'>Edit</button> | <button type='button' onclick='onDelete(this);' class='btn btn-danger'>Delete</button>";
        
   

            $('#sneakerList tr').each(function(row, tr){
                shoeData[row]={
                    "id" : $(tr).find('td:eq(0)').text()
                    , "StoreName" :$(tr).find('td:eq(1)').text()
                    , "Brand" : $(tr).find('td:eq(2)').text()
                    , "SneakerStyle" : $(tr).find('td:eq(3)').text()
                    , "Size" : $(tr).find('td:eq(4)').text()
                    , "Price" : $(tr).find('td:eq(5)').text()
                }
            }); 
            shoeData.shift();
           
           
        resetForm();
    
        
    }
    
    function resetForm() {
        document.getElementById("sneakerID").value = "";
        document.getElementById("storeName").value = "";
        document.getElementById("Brand").value = "";
        document.getElementById("sneakerStyle").value = "";
        document.getElementById("sneakerSize").value = "";
        document.getElementById("sneakerPrice").value = "";
    }
    
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        $('#btnSubmit').addClass('d-none');
        $('#btnUpdate').removeClass('d-none');
        document.getElementById("sneakerID").value = selectedRow.cells[0].innerHTML;
        document.getElementById("storeName").value = selectedRow.cells[1].innerHTML;
        document.getElementById("Brand").value = selectedRow.cells[2].innerHTML;
        document.getElementById("sneakerStyle").value = selectedRow.cells[3].innerHTML;
        document.getElementById("sneakerSize").value = selectedRow.cells[4].innerHTML;
        document.getElementById("sneakerPrice").value = selectedRow.cells[5].innerHTML;
    }
    
    $('#btnUpdate').click(function (e) {
        e.preventDefault()
        formData = readFormData();
    
        if (validateForm()) {
            var tableRow = $("td").filter(function () {
                return $(this).text() == formData.sneakerID;
            }).closest("tr");
    
    
            tableRow.find("td").eq(0).html(formData.sneakerID);
            tableRow.find("td").eq(1).html(formData.storeName);
            tableRow.find("td").eq(2).html(formData.Brand);
            tableRow.find("td").eq(3).html(formData.sneakerStyle);
            tableRow.find("td").eq(4).html(formData.sneakerSize);
            tableRow.find("td").eq(5).html(formData.sneakerPrice);
    
            $('#btnSubmit').removeClass('d-none');
            $('#btnUpdate').addClass('d-none');
    
    
    
    
            resetForm()
        }
    });
    
    function onDelete(td) {
        if (confirm ('Are you sure to delete this record?')) {
            $(td).parents("tr").remove();
        resetForm();
        }
    }
    
    function validateForm() {
            var a = document.getElementById("storeName").value;
            var b = document.getElementById("Brand").value;
            var c = document.getElementById("sneakerStyle").value;
            var d = document.getElementById("sneakerSize").value;
            var e = document.getElementById("sneakerPrice").value;
            if ((a && b && c && d && e) != (null || ""))
             {
              return true;
            }
            else
            {
           alert("All fields must be filled out")    
           return false;} 
            
          
            }
 
    
    