<template>
  <div class="wrap">
    <SingUpForm :is-sending="isSending" @submit="submit" />
    <BaseButton to="/" class="mts" is-txt>戻る</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSending: false,
    }
  },
  methods: {
    submit({ nickname, email, password }) {
      // this.isSendingをtrueにする
      console.log(nickname, email, password)
      // nickname,email,passwordを使ってサーバーにリクエスト
      // this.isSendingをfalseにする
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
