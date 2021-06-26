<template>
  <div class="popup">
    <b-container class="contain text-center">
      <b-row class="h-100">
        <b-col cols="12" md="6" class="p-0 h-100">
          <div class="login">
            <h2>¡Bienvenido a Visum!</h2>
            <p>
              Disfruta de una experiencia de compra más rápida y segura
              ingresando con tu cuenta.
            </p>
            <b-form class="register__form">
              <b-form-group class="mb-3">
                <b-form-input
                  class="register__form-input"
                  type="email"
                  placeholder="Correo electónico"
                  v-model="form.email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group class="mb-3">
                <b-form-input
                  class="register__form-input"
                  type="password"
                  placeholder="Contraseña"
                  v-model="form.pass"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button
                @click.prevent="login()"
                class="btn-accent register__button my-2"
                type="submit"
                >Iniciar Sesión</b-button
              >
              <p class="new-user my-1">¿Eres nuevo en Visum?</p>
              <b-button
                to="/signin"
                class="btn-outlined register__button my-1"
                type="submit"
                >Crea tu cuenta</b-button
              >
            </b-form>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="p-0">
          <div class="popup__loginbanner"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        if (!this.form && !this.form.email && !this.form.pass) return;
        const req = await firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.pass);
        console.log(req);
        if (req && req !== null) {
          localStorage.setItem("login", "logueado");
          this.$router.push("/checkout");
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      }
    },
  },
};
</script>

<style></style>
