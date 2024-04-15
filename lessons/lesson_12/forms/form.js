const allForms = document.forms; // poluchit spisok vsex form

const firstForm = allForms[0]; // poluchit formu po index

const form1 = document.getElementById('myForm'); // poluchit formy po id

const form2 = document.forms.myFormName; // po imeni
// console.log(form2);

const form3 = document.forms.myFormName; // poluchenie vsex elements formi
// console.log(form3.elements);

const form4 = document.forms.myFormName; // po imeni
// console.log(form4.elements.login);

const form5 = document.forms.myFormName; // napryamuyu
// console.log(form5.login);

const form6 = document.forms.myFormName;
// form6.login.value = 'test';
form6.loginName.value = 'test2';

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const form = document.forms.myFormName;
    console.log(form.loginName.value);
});