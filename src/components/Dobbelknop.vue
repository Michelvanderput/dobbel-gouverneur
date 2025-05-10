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

      const rondes = 3;
      const totaalStappen = rondes * this.categorieën.length + gekozenIndex;

      let index = 0;
      let stappen = 0;

      const animate = () => {
        const huidige = this.categorieën[index % this.categorieën.length];
        this.$emit("highlight", huidige);

        stappen++;
        index++;

        if (stappen > totaalStappen) {
          this.isDobbelen = false;
          this.$emit("categorieGekozen", gekozenCategorie);
          return;
        }

        // Progressieve vertraging (easing)
        const progress = stappen / totaalStappen;
        const delay = 50 + 300 * Math.pow(progress, 2); // snel begin, langzaam eind

        setTimeout(animate, delay);
      };

      animate();
    },
  },
};
</script>
