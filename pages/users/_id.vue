<template>
  <div
    v-if="selectedEmployee"
    class="ui main text container"
  >
    <div class="ui items">
      <div class="item">
        <div class="image">
          <img :src="selectedEmployee.picture.large">
        </div>
        <div class="content">
          <a class="header">{{ fullName }}</a>
          <div class="meta">
            <span>{{ selectedEmployee.email }}</span>
          </div>
          <div class="description">
            <p>
              {{ selectedEmployee.location.street }},
              {{ selectedEmployee.location.city }},
              {{ selectedEmployee.location.state }},
              {{ selectedEmployee.location.postcode }}
            </p>
          </div>
          <div class="extra">
            {{ selectedEmployee.phone }}<br>
            {{ selectedEmployee.cell }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: ['auth'],
  fetch({ store, params }) {
    return store.dispatch('getEmployee', { id: params.id });
  },
  computed: {
    ...mapState(['selectedEmployee']),
    fullName() {
      return `${this.selectedEmployee.name.first} ${
        this.selectedEmployee.name.last
      }`;
    }
  }
}
</script>