
//var file = document.getElementById('customFile').files[0];

function getBase64(file, form) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      var name = form[0].value;
      var description = form[1].value;
      fetch("http://localhost:3000/BoardMembers", {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           'name': name,
           'description': description,
           'image': reader.result,
        }),
    })

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
}
}

function createData()
{
    var file = document.getElementById('customFile').files[0];
    var form = document.getElementById("form1");
    getBase64(file, form);
}