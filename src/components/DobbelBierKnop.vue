<template>
  <div class="dobbel-knop">
    <button @click="dobbel" :disabled="isDobbelen">Dobbel een bier!</button>
  </div>
</template>

<script>
export default {
  name: "DobbelBierKnop",
  props: {
    bieren: Array,
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

      const gekozenIndex = Math.floor(Math.random() * this.bieren.length);
      const gekozenBier = this.bieren[gekozenIndex];

      const rondes = 3;
      const totaalStappen = rondes * this.bieren.length + gekozenIndex;

      let index = 0;
      let stappen = 0;

      const animate = () => {
        const huidig = this.bieren[index % this.bieren.length];
        this.$emit("highlight", huidig);

        stappen++;
        index++;

        if (stappen > totaalStappen) {
          this.isDobbelen = false;
          this.$emit("bierGekozen", gekozenBier);
          return;
        }

        // Progressieve vertraging (easing)
        const progress = stappen / totaalStappen;
        const delay = 50 + 300 * Math.pow(progress, 2); // snel in begin, langzaam aan eind

        setTimeout(animate, delay);
      };

      animate();
    },
  },
};
</script>
