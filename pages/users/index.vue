<template>
  <div class="ui main text container">
    <h1 class="ui header">Users</h1>
    <StaffDirectory
      :employees="employeeList"
      @select="showDetail"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StaffDirectory from '~/components/StaffDirectory'

export default {
  components: { StaffDirectory },
  fetch: ({ store }) => {
    return store.dispatch('getEmployees');
  },
  computed: {
    ...mapGetters(['employeeList'])
  },
  methods: {
    showDetail(employee) {
      this.$router.push({
        name: 'users-id',
        params: { id: employee.id }
      });
    }
  }
}
</script>