<template>
  <form class="form" @submit.prevent="$emit('submit', { email, password })">
    <BaseInput v-model="email" type="email" placeholder="メールアドレス" />
    <BaseInput v-model="password" type="password" placeholder="password" />
    <BaseButton :disabled="isSending" class="mts">ログイン</BaseButton>
  </form>
</template>

<script>
export default {
  props: {
    isSending: Boolean,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
