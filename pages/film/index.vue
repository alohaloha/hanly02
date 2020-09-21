<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ films[num] ? films[num].title : '...' }}
      </h1>
      <h2 v-if="films[num]" class="subtitle">
        {{ getTitle(num) }}は{{ getReleaseDate(num) }}年に公開されました
      </h2>
      <h2 v-else class="subtitle">見つかりません</h2>
      <div class="links">
        <nuxt-link to="/test" class="button--green"> テストページへ </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapGetters('test', ['num']),
    films() {
      console.log(this.$store.getters['films/films'])
      return this.$store.getters['films/films']
    },
  },
  mounted() {
    this.$store.dispatch('films/fetchFilms')
  },
  methods: {
    getTitle(num) {
      const title = this.films[num].title
      console.log(title)
      return title
    },
    getReleaseDate(num) {
      const releaseDate = this.films[num].release_date
      return releaseDate
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
