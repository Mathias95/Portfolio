<template>
   <div>
    <b-container id="newct">
   <b-row>
    <b-col cols="12" md="8" class="contactform">
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
    </b-col>
   <!-- Break contact form and contact icon -->
    <b-col cols="6" md="4" class="contacticons">
        <b-row cols="2">
    <b-col md="4"> <a href="https://www.facebook.com/theep1891" target="_blank"><img class="img-responsive" src="../assets/img/contact/facebook.gif" alt="" /></a></b-col><br>
    <b-col md="4"><a class="LI-simple-link" href='https://dk.linkedin.com/in/pratheep-dk?trk=profile-badge' target="_blank"><img class="img-responsive" src="../assets/img/contact/linkedin.gif" alt="" /></a></b-col>
    </b-row>
    <br>
    <b-row cols="2">
    <b-col md="4"><a href="mailto:theep1891@gmail.com"><img class="img-responsive" src="../assets/img/contact/mail.gif" alt="" /></a></b-col>
    <b-col md="4"><a href="tel:+1234-5678"><img class="img-responsive" src="../assets/img/contact/viber.gif" alt="" /></a></b-col>
    </b-row>
    </b-col>
  </b-row>
  </b-container>
   </div>
</template>
