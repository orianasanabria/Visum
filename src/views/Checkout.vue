<template>
  <div class="checkout-page">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1>Método de Pago</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="payments">
            <div class="payments__credit">
              <p>Credit Card</p>
            </div>
            <div class="payments__giftcard">
              <p>Gift Card</p>
            </div>
            <div class="payments__paypal">
              <p>Paypal</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6">
          <h2>Billing Adress</h2>
        </b-col>
        <b-col cols="12" md="6">
          <h2>Credit Card Info</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
