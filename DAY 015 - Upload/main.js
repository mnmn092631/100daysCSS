const loadingBar = document.querySelector(".loading-bar");
const dropzone = document.querySelector(".dropzone");
const upload = document.querySelector(".upload");
const fileInput = document.querySelector(".file-input");
const syncing = document.querySelector(".syncing");
const done = document.querySelector(".done");
const uploadBtn = document.querySelector(".upload-btn");
let fileName = "";
let uploading = false;
let timeOut;

dropzone.addEventListener("dragover", () => {
  dropzone.classList.add("is-dragover");
});
dropzone.addEventListener("dragenter", () => {
  dropzone.classList.add("is-dragover");
});
dropzone.addEventListener("dragend", () => {
  dropzone.classList.remove("is-dragover");
});
dropzone.addEventListener("dragleave", () => {
  dropzone.classList.remove("is-dragover");
});
dropzone.addEventListener("drop", () => {
  dropzone.classList.remove("is-dragover");
});

fileInput.addEventListener("change", () => {
  fileName = document.querySelector(".file-name");
  for (let i = 0; i < fileInput.files.length; i++) {
    fileName.innerHTML = `${fileInput.files[i].name}`;
  }
  upload.style.display = "none";
});

uploadBtn.addEventListener("click", () => {
  startUpload();
});

function startUpload() {
  if (!uploading && fileName != "") {
    uploading = true;
    uploadBtn.innerHTML = "Uploading...";
    dropzone.classList.add("active");
    syncing.classList.add("active");
    done.classList.add("active");
    loadingBar.classList.add("active");
    timeOut = window.setTimeout(showDone, 3200);
  }
}

function showDone() {
  uploadBtn.innerHTML = "Done";
}
