 // Select the drop zone and file list elements
    const dropZone = document.getElementById("drop-zone");
    const fileList = document.getElementById("file-list");

    // Handle drag events
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropZone.classList.add("drag-over");
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("drag-over");
    });

    dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      dropZone.classList.remove("drag-over");

      // Get the dropped files
      const files = event.dataTransfer.files;
      displayFiles(files);
    });

    // Handle click to open file dialog
    dropZone.addEventListener("click", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.multiple = true;
      fileInput.onchange = (event) => {
        const files = event.target.files;
        displayFiles(files);
      };
      fileInput.click();
    });

    // Display file names in the list
    function displayFiles(files) {
      fileList.innerHTML = ""; // Clear previous files
      for (const file of files) {
        const listItem = document.createElement("li");
        listItem.textContent = `📄 ${file.name}`;
        fileList.appendChild(listItem);
      }
    }