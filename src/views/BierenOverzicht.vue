<template>
  <div class="bieren-overzicht">
    <h1>Bieren in de categorie: {{ categorie }}</h1>

    <DobbelBierKnop
      :bieren="bieren"
      @highlight="highlightBier"
      @bierGekozen="eindigDobbelen"
      @dobbelenGestart="startDobbelen"
    />

    <ul>
      <li
        v-for="bier in bieren"
        :key="bier.naam"
        :class="{
          highlight: bier === tijdelijkBier,
          geselecteerd: bier === geselecteerdBier,
        }"
      >
        <h3>{{ bier.naam }}</h3>
      </li>
    </ul>

    <div v-if="geselecteerdBier" class="geselecteerd-resultaat">
      🎯 Gekozen bier: {{ geselecteerdBier.naam }}
    </div>

    <div v-else>
      <p>Er zijn geen bieren beschikbaar voor deze categorie.</p>
    </div>
  </div>
</template>

<script>
import { bierData } from "@/data/bierData";
import DobbelBierKnop from "@/components/DobbelBierKnop.vue";

export default {
  name: "BierenOverzicht",
  props: {
    categorie: String,
  },
  components: {
    DobbelBierKnop,
  },
  data() {
    return {
      bieren: [],
      geselecteerdBier: null,
      tijdelijkBier: null,
      isDobbelen: false,
    };
  },
  created() {
    this.laadBieren();
  },
  methods: {
    laadBieren() {
      const cat = decodeURIComponent(this.categorie);
      this.bieren = bierData[cat] || [];
    },
    highlightBier(bier) {
      this.tijdelijkBier = bier;
    },
    startDobbelen() {
      this.isDobbelen = true;
      this.geselecteerdBier = null;
    },
    eindigDobbelen(bier) {
      this.geselecteerdBier = bier;
      this.isDobbelen = false;
      this.tijdelijkBier = null;
    },
  },
};
</script>

<style scoped>
.bieren-overzicht {
  text-align: center;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  padding: 10px 20px;
  background-color: #eee;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

li.actief {
  background-color: #ffce00;
  font-weight: bold;
  color: #000;
}

h3 {
  margin: 0;
  font-size: 1.2em;
}

p {
  margin: 5px 0;
  font-size: 1em;
  color: #555;
}

li.highlight {
  background-color: #ffce00;
  transition: background-color 0.3s;
}

li.geselecteerd {
  background-color: #ffce00;
  font-weight: bold;
  color: #000;
}
</style>
