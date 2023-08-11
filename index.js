const copyIcon = document.getElementById('copy-to-clipboard');
const gmailCard = document.querySelector('.link-gmail');

let copied = false;

function copyEmailToClipboard(){
    if(copied === false){
        copied = true;
        copyIcon.classList.remove('copy');
        copyIcon.classList.add('copied');
    }
}

gmailCard.addEventListener('click', copyEmailToClipboard);
gmailCard.addEventListener('mouseleave', () => {
    if(copied){
        copyIcon.classList.remove('copied');
        copyIcon.classList.add('copy');
        copied = false;
    }
})


