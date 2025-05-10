<template>
  <div class="bier-categorieen">
    <h1>Selecteer een biercategorie</h1>

    <ul>
      <li
        v-for="categorie in bierCategorieen"
        :key="categorie"
        :class="{ actief: categorie === actieveCategorie }"
      >
        <h5>{{ categorie }}</h5>
        <div class="categorie_lengte">{{ categorie.length }}</div>
      </li>
    </ul>

    <DobbelKnop
      :categorieën="bierCategorieen"
      @highlight="updateActieveCategorie"
      @categorieGekozen="eindigDobbelen"
      @dobbelenGestart="startDobbelen"
    />

    <button
      v-if="actieveCategorie && !isDobbelen"
      @click="gaNaarBieren"
      class="volgende-knop"
    >
      Volgende →
    </button>
  </div>
</template>

<script>
import DobbelKnop from "@/components/Dobbelknop.vue";

export default {
  name: "BierCategorieën",
  components: { DobbelKnop },
  data() {
    return {
      bierCategorieen: [
        "Tapbieren",
        "Wit - Weizen Bieren - hoge Gisting",
        "Geuzes - Wild Ales - Sours (Spontane Gisting)",
        "Zure Krieken (Spontane Gisting)",
        "Fruitbieren",
        "Vlaams Rood Bruin / Oud Bruin (Gemengde Gisting)",
        "Amber - Red Ale (Hoge Gisting)",
        "Saison - Farmhouse Ale (Hoge Gisting)",
        "Abdijbieren (hoge gisting)",
        "Trappistenbieren (hoge gisting)",
        "Blond - Sterk Blond - Tripels (Hoge gisting)",
        "Donker - Sterk Donker - Quadrupel (hoge gisting)",
        "Sterk Gehopte bieren - IPA (hoge gisting)",
        "Dark ale - Stout (hoge gisting)",
      ],
      actieveCategorie: null,
      isDobbelen: false,
    };
  },
  methods: {
    updateActieveCategorie(categorie) {
      this.actieveCategorie = categorie;
    },
    startDobbelen() {
      this.isDobbelen = true;
    },
    eindigDobbelen(categorie) {
      this.actieveCategorie = categorie;
      this.isDobbelen = false;
    },
    gaNaarBieren() {
      this.$router.push(`/bieren/${encodeURIComponent(this.actieveCategorie)}`);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  padding: 10px;
  background-color: #eee;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categorie_lengte {
  color: royalblue;
  font-weight: bold;
  height: 12px;
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 10px;
  font-size: 0.8em;
}

.categorie_informatie {
  background-color: lightblue;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

li.actief {
  background-color: #ffce00;
  font-weight: bold;
  color: #000;
}
</style>
