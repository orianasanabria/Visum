<template>
  <div>
    <b-container>
      <b-row class="empty d-flex align-items-center">
        <b-col
          cols="12"
          md="6"
          class="d-flex justify-content-center justify-content-md-end empty__col-text"
        >
          <h2 class="text-md-end empty__text">
            Ups! Parece que no hay nada aquí
          </h2>
        </b-col>
        <b-col
          cols="12"
          md="6"
          class="d-flex justify-content-center justify-content-md-start empty__col-img"
        >
          <b-img
            class="empty__img"
            src="./img/empty.png"
            height="370px"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  &__text {
    font-size: 3rem;
    width: 400px;
    color: rgb(190, 190, 190);
  }
}
</style>
