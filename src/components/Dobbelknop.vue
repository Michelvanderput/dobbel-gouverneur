<template>
  <div class="dobbel-knop">
    <button @click="dobbel" :disabled="isDobbelen">
      Dobbel een categorie!
    </button>
  </div>
</template>

<script>
export default {
  name: "DobbelKnop",
  props: {
    categorieën: Array,
  },
  data() {
    return {
      isDobbelen: false,
    };
  },
  methods: {
    dobbel() {
      this.isDobbelen = true;
      this.$emit("dobbelenGestart");

      const gekozenIndex = Math.floor(Math.random() * this.categorieën.length);
      const gekozenCategorie = this.categorieën[gekozenIndex];

      const totaalStappen = this.categorieën.length * 4 + gekozenIndex;
      let index = 0;
      let stappen = 0;

      const interval = setInterval(() => {
        const huidige = this.categorieën[index % this.categorieën.length];
        this.$emit("highlight", huidige);

        stappen++;
        index++;

        if (stappen > totaalStappen) {
          clearInterval(interval);
          this.isDobbelen = false;
          this.$emit("categorieGekozen", gekozenCategorie);
        }
      }, 100);
    },
  },
};
</script>
