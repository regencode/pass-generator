
function toMainPage(){
    window.location.href="index.html";
}

function toPassGenerator(){
    window.location.href="passGen.html";
}

function toPassLibrary(){
    window.location.href="passLibrary.html";
}   

function toPassStrChecker(){
    window.location.href="passStrengthChecker.html";
}



const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const description = entry.target.querySelector('#description-1');
  
      if (entry.isIntersecting == true) {
        description.classList.add('slide-right-animation');
        return;
      }
    });
  });
  
  observer1.observe(document.querySelector('#detector-1'));



const observer2 = new IntersectionObserver(entries => {
entries.forEach(entry => {
    const description = entry.target.querySelector('#description-2');

    if (entry.isIntersecting == true) {
    description.classList.add('slide-right-animation');
    return;
    }
});
});

observer2.observe(document.querySelector('#detector-2'));




const observer3 = new IntersectionObserver(entries => {
entries.forEach(entry => {
    const description = entry.target.querySelector('#description-3');

    if (entry.isIntersecting == true) {
    description.classList.add('slide-right-animation');
    return;
    }
});
});

observer3.observe(document.querySelector('#detector-3'));
