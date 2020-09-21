<template>
  <div class="wrap">
    <div class="num">「{{ num }}」</div>
    <SimpleForm initial-value="0" @submit="onSubmit" />
    <div class="link">
      <nuxt-link to="/film">filmページへ</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SimpleForm from '~/components/SimpleForm'

export default {
  components: {
    SimpleForm,
  },
  computed: {
    ...mapGetters('test', ['num']),
  },
  methods: {
    onSubmit(value) {
      console.log(value)
      this.$store.dispatch('test/saveNum', { number: value })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 40rem;
  margin: 0 auto;
}

.num {
  margin: 10rem 0 2rem;
  text-align: center;
}

.link {
  margin: 3rem 0 2rem;
  text-align: center;
  font-size: 1.2rem;
  height: 4rem;
  line-height: 4rem;
  border: 0.5px solid #35495e;
  border-radius: 2rem;
  & a {
    text-decoration: none;
  }
}
</style>
