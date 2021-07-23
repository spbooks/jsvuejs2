<template>
  <div class="ui main text container">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui green image header">
          <div class="content">
            Log in to your account
          </div>
        </h2>
        <form
          :class="{ error }"
          class="ui large form"
          @submit.prevent="onSubmit"
        >
          <div class="ui segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon" />
                <input
                  v-model="username"
                  type="text"
                  placeholder="Username"
                >
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon" />
                <input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                >
              </div>
            </div>
            <button
              type="submit"
              class="ui fluid large green submit button"
            >Login</button>
          </div>

          <div class="ui error message">Oops, we couldn't log you in!</div>

        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',
    error: null
  }),
  methods: {
    onSubmit() {
      this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        .catch(e => {
          this.error = true
        });
    }
  }
}
</script>