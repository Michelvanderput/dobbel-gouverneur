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

      const totaalStappen = this.bieren.length * 4 + gekozenIndex;
      let index = 0;
      let stappen = 0;

      const interval = setInterval(() => {
        const huidig = this.bieren[index % this.bieren.length];
        this.$emit("highlight", huidig);

        stappen++;
        index++;

        if (stappen > totaalStappen) {
          clearInterval(interval);
          this.isDobbelen = false;
          this.$emit("bierGekozen", gekozenBier);
        }
      }, 100);
    },
  },
};
</script>
