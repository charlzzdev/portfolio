const links = document.querySelectorAll('.home-nav ul li');

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
const isIE = /*@cc_on!@*/false || !!document.documentMode;
const isEdge = !isIE && !!window.StyleMedia;

if(!isIE && !isSafari && !isEdge){
      links.forEach(link => {
            const sectionName = link.children[0].innerHTML;
            link.innerHTML = sectionName;

            link.addEventListener('click', () => {
                  const section = document.getElementById(link.innerHTML.toLowerCase());
                  scrollTo({
                        top: section.getBoundingClientRect().top + pageYOffset,
                        behavior: 'smooth'
                  });
            });
      });
}
