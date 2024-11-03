let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) { // Scrolling Down
        document.querySelector('.header').classList.add('hidden');
    } else { // Scrolling Up
        document.querySelector('.header').classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});



const upload = document.getElementById('upload-feelling-file');
const fileBox = document.querySelector('#media-box .content');

const closeIcon = document.querySelector('.media-box .close');

if (upload) {
    upload.onchange = () => {
        document.querySelector('.media .photos').classList.add('focus');
        closeIcon.style.display = 'flex';
    
        const file = new FileReader();
        const uploadedFile = upload.files[0];
        file.readAsDataURL(uploadedFile);
        const typeUploadedFile = uploadedFile.type.split("/")[0];
        
        // Check If The File Image Or Video
        if (typeUploadedFile === 'image') { // Image
            // Upload The Image After Loading
            file.onload = () => {
                const img = document.createElement('img');
                img.setAttribute('src', file.result)
                fileBox.innerHTML = "";
                fileBox.appendChild(img);
            }
        } else if (typeUploadedFile === 'video') { // Video
            // Upload The Video After Loading
            file.onload = () => {
                const video = document.createElement('video');
                video.setAttribute('src', file.result);
                video.setAttribute('controls', "");
                fileBox.innerHTML = "";
                fileBox.appendChild(video);
            }
        }
    }
}



const btnSubmit = document.querySelector('.post-form .submit');
const textArea = document.querySelector('.textarea-box textarea');

if (textArea) {
    textArea.addEventListener('input', (event) => {
        if (textArea.value.length > 0) {
            btnSubmit.classList.remove('hidden');
        } else {
            btnSubmit.classList.add('hidden')
        }
    })
}

if (upload) {
    upload.addEventListener('change', (event) => {
        if (textArea.value.length > 0 || upload.files[0]) {
            btnSubmit.classList.remove('hidden');
        } else {
            btnSubmit.classList.add('hidden')
        }
    })
}

if (closeIcon) {
    closeIcon.addEventListener('click', () => {
        document.querySelector('.media .photos').classList.remove('focus');
        closeIcon.style.display = 'none';
        fileBox.innerHTML = "";
    })
}