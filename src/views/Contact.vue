<template>
  <div class="contact-wrapper">
    <b-container id="Contact">
      <h1 class="formheading">Contact Me</h1>
      <b-row class="justify-content-center">
        <b-col cols="12" md="9" class="contactform">
          <form
           @submit.prevent="handleSubmit"
            name="contact"
            method="POST"
            data-netlify="true"
            class="needs-validation"
            novalidate
          >
            <div>
              <b-form-input
                v-model="form.firstname"
                class="col-xs-4"
                type="text"
                placeholder="First Name"
                name="firstname"
                id="firstname"
                required
              ></b-form-input>
              <div class="invalid-feedback">
                Please type a First Name
              </div>
              <div class="mt-2"></div>
            </div>
            <div>
              <b-form-input
                v-model="form.lastname"
                type="text"
                placeholder="Last Name"
                name="lastname"
                id="lastname"
                required
              ></b-form-input>
              <div class="invalid-feedback">
                Please type a Last Name
              </div>
              <div class="mt-2"></div>
            </div>
            <div>
              <b-form-input
                v-model="form.email"
                placeholder="E-mail"
                type="email"
                name="email"
                id="email"
                required
              ></b-form-input>
              <div class="invalid-feedback">
                Please type a valid e-mail address
              </div>
              <div class="mt-2"></div>
            </div>
            <div>
              <b-form-textarea
                v-model="form.message"
                id="message"
                placeholder="Message"
                name="message"
                rows="8"
                required
              ></b-form-textarea>
              <div class="invalid-feedback">
                Please type a Message
              </div>
              <div class="mt-2"></div>
            </div>
            <div class="form-button">
              <b-button variant="danger" type="submit">Send</b-button>
            </div>
          </form>
        </b-col>
        <!-- Break contact form and contact icon -->
        <b-col cols="12" md="3" class="contacticons">
          <div class="icon-container">
            <div class="icon-wrapper">
              <a href="https://www.facebook.com/theep1891" target="_blank"
                ><img
                  class="ctimg-responsive"
                  src="../assets/img/contact/facebook.gif"
                  alt=""
              /></a>
            </div>
            <div class="icon-wrapper">
              <a
                class="LI-simple-link"
                href="https://dk.linkedin.com/in/pratheep-dk?trk=profile-badge"
                target="_blank"
                ><img
                  class="ctimg-responsive"
                  src="../assets/img/contact/linkedin.gif"
                  alt=""
              /></a>
            </div>
            <div class="icon-wrapper">
              <a href="mailto:theep1891@gmail.com"
                ><img
                  class="ctimg-responsive"
                  src="../assets/img/contact/mail.gif"
                  alt=""
              /></a>
            </div>
            <div class="icon-wrapper">
              <a href="tel:+45 71170470"
                ><img
                  class="ctimg-responsive"
                  src="../assets/img/contact/viber.gif"
                  alt=""
              /></a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
    form: {
      firstname: '',
      lastname: '',
      email: '',
      message: ''

    }
  }),
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },
    handleSubmit () {
      fetch('/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
        .then(() => console.log('Successfully Sent'))
        .catch(e => console.error(e))
    }
  }
}
</script>
