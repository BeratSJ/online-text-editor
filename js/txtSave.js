document.getElementById('saveButton').addEventListener('click', function() {
    var textarea = document.getElementById('myTextarea');
    var textToSave = textarea.value;

    var blob = new Blob([textToSave], { type: 'text/plain' });
    var fileName = 'saved_text.txt';

    // Dosya indirme işlemi
    var link = document.createElement('a');
    link.download = fileName;
    link.href = window.URL.createObjectURL(blob);
    link.click();
});