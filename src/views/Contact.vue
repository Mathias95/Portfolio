<template>
  <div class="Contact">
    <form class="needs-validation" novalidate>
    <div>
    <b-form-input class="col-xs-4" type="text" placeholder="First Name" value="" required></b-form-input>
    <div class="invalid-feedback">
        Please type a First Name
    </div>
    <div class="mt-2"></div>
  </div>
   <div>
    <b-form-input  type="text" placeholder="Last Name" value="" required></b-form-input>
    <div class="invalid-feedback">
        Please type a Last Name
    </div>
    <div class="mt-2"></div>
  </div>
   <div>
    <b-form-input placeholder="E-mail" type="email" value="" required></b-form-input>
     <div class="invalid-feedback">
        Please type a valid e-mail address
      </div>
    <div class="mt-2"></div>
  </div>
  <div>
  <b-form-textarea id="textarea-rows" placeholder="Message" rows="8" value="" required></b-form-textarea>
  <div class="invalid-feedback">
        Please type a Message
    </div>
   <div class="mt-2"></div>
</div>
<div>
  <b-button variant="danger" type="submit">Send</b-button>
</div>
 </form>
</div>
 </template>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')
    // Loop over them and prevent submission
    // eslint-disable-next-line no-unused-vars
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()
</script>
