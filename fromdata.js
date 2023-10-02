
// const form1 = document.forms['doneit']
// const formm=document.getElementsByTagName("form");

// form1.addEventListener('submit', e => {
  
//   e.preventDefault();
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbydjCAXGVxpryz1dSVMyjjlqKEVLVpQ66-bpyn0K4ITIUcphCJIO1UeZdRg6juapM7WGA/exec'

    
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// });
console.log("loaded");
const form = document.forms['form222']

form.addEventListener('submit', e => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbztsY83J5i9qrwUFnvT4mC5zyzi3z9UO8EuhWvKATKfSDvelAPkP3OdyInIIND9by1XWQ/exec'

    
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  alert("Thank you! your form is submitted successfully." );
});
