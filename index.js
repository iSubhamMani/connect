const emailManager = (function(){
    const copyIcon = document.getElementById('copy-to-clipboard');
    const gmailCard = document.querySelector('.link-gmail');

    let copied = false;
    const emailId = 'manisubham09@gmail.com';

    const copyEmailToClipboard = () => {
      if(copied === false){
        // setup visual elements

        copied = true;
        copyIcon.classList.remove('copy');
        copyIcon.classList.add('copied');

        // copy email to clipboard
        navigator.clipboard.writeText(emailId);
      }
    }

    const resetCopy = () => {
      if(copied){
          copyIcon.classList.remove('copied');
          copyIcon.classList.add('copy');
          copied = false;
      }
    }

    gmailCard.addEventListener('click', () => {
        copyEmailToClipboard();
    });

    gmailCard.addEventListener('mouseleave', () => {
        resetCopy();
    });
})();