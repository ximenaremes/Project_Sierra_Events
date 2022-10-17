
function validatNume() {

  var nume = document.getElementById('contact-nume').value;

  if(nume.length == 0) {
    producePrompt('Numele este necesar', 'nume-error' , 'red');
    return false;
	}
   if (!nume.match(/^[A-Za-z]*$/)) {
    producePrompt('Numele, va rog.','nume-error', 'red');
    return false;

  }
  producePrompt('Valabil', 'nume-error', 'green');
  return true;
}

function validatPrenume() {
	var prenume = document.getElementById('contact-prenume').value;

  if(prenume.length == 0) {
    producePrompt('Prenumele este necesar', 'prenume-error' , 'red');
    return false;
}
  if (!prenume.match(/^[A-Za-z]*$/)) {
    producePrompt('Prenumele, va rog.','prenume-error', 'red');
    return false;	
}
  producePrompt('Valabil', 'prenume-error', 'green');
  return true;
	
}

function validatTelefon() {

  var telefon = document.getElementById('contact-telefon').value;

    if(telefon.length == 0) {
      producePrompt('Numarul de telefon este necesar.', 'telefon-error', 'red');
      return false;
    }
	 if(telefon.length != 10) {
      producePrompt('Includeti numarului complet.', 'telefon-error', 'red');
      return false;
    }

    if(!telefon.match(/^[0-9]{10}$/)) {
      producePrompt('Doar cifre, va rog.' ,'telefon-error', 'red');
      return false;
    }

    producePrompt('Valabil', 'telefon-error', 'green');
    return true;

}

function validatEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    producePrompt('Email necorespunzator.','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email necorespunzator.', 'email-error', 'red');
    return false;

  }
  producePrompt('Valabil', 'email-error', 'green');
  return true;

}

function validatMesaj() {
  var mesaj = document.getElementById('contact-mesaj').value;
  var required = 30;
  var left = required - mesaj.length;

  if (left > 0) {
    producePrompt(left + ' mai multe caractere necesare','mesaj-error','red');
    return false;
  }

  producePrompt('Valabil', 'mesaj-error', 'green');
  return true;

}

function validateForm() {
  if (!validatNume() || !validatPrenume() || !validatTelefon() || !validatEmail() || !validatMesaj()) {
    jsShow('submit-error');
    producePrompt('Remediați erorile pentru a trimite.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
  }
  else {

  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}