document.getElementById('uploadImage').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    var fileInput = document.getElementById('fileInput');
    var textarea = document.getElementById('myTextarea');

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        textarea.value = e.target.result;
    };

    reader.readAsText(file);
});
