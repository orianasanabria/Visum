<template>
  <div class="notfound">
    <b-container>
      <b-row>
        <b-col cols="12" class="fatal">
          <h2>Oh no, parece que la página que buscas no existe :(</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.fatal {
  height: calc(100vh - 115px);
  display: grid;
  place-items: center;
  h2 {
    text-align: center;
    width: 60%;
    font-size: 3rem;
  }
}
</style>
