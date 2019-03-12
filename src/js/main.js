const links = document.querySelectorAll('.home-nav ul li');

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
const isIE = /*@cc_on!@*/false || !!document.documentMode;
const isEdge = !isIE && !!window.StyleMedia;

if(!isIE && !isSafari && !isEdge){
      links.forEach(link => {
            const sectionName = link.children[0].innerHTML;
            link.innerHTML = sectionName;
            link.setAttribute('tabIndex', '0');

            link.addEventListener('click', () => {
                  const section = document.getElementById(link.innerHTML.toLowerCase());
                  scrollTo({
                        top: section.getBoundingClientRect().top + pageYOffset,
                        behavior: 'smooth'
                  });
            });

            link.addEventListener('keyup', (e) => {
                  if(e.keyCode === 13) link.click();
            });
      });
}

const emailForm = document.querySelector('.email-form');
const gmailBtn = document.querySelector('.gmail-btn');

gmailBtn.addEventListener('click', () => {
      const subject = emailForm[0].value;
      const message = emailForm[1].value.replace(/\r\n|\r|\n/g, '%0A');
      
      gmailBtn.href = `https://mail.google.com/mail/u/0/?view=cm&to=contact@charleseller.dev&su=${subject}&body=${message}`;
      gmailBtn.click();
});
