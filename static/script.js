document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.querySelector('input[type="file"]');
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button');

    // عرض اسم الملف المختار
    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            const label = document.createElement("p");
            label.textContent = "Selected file: " + fileName;
            label.style.fontWeight = "500";
            label.style.marginTop = "10px";

            // إزالة أي اسم قديم
            const oldLabel = document.querySelector(".file-name-label");
            if (oldLabel) oldLabel.remove();

            label.classList.add("file-name-label");
            fileInput.parentNode.appendChild(label);
        }
    });

    // رسالة Processing عند الضغط على الزر
    form.addEventListener("submit", function () {
        submitButton.textContent = "Processing...";
        submitButton.disabled = true;
    });
});
