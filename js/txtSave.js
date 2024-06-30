document.getElementById('saveButton').addEventListener('click', function() {
    var textToSave = document.getElementById('myTextarea').value;
    var fileName = prompt("Write file name : ");

    if (fileName) {
        var blob = new Blob([textToSave], { type: 'text/plain' });

        var link = document.createElement('a');
        link.download = fileName + '.txt';
        link.href = window.URL.createObjectURL(blob);
        link.click();
    }
});
