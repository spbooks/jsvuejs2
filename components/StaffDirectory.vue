<template>
  <div class="ui container">
    <input
      v-model="filterBy"
      placeholder="Filter By Last Name"
    >
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Photo</th>
          <th @click="sortBy = 'firstName'">First Name</th>
          <th @click="sortBy = 'lastName'">Last Name</th>
          <th @click="sortBy = 'email'">Email</th>
          <th @click="sortBy = 'phone'">Phone</th>
          <th @click="sortBy = 'nationality'">Nationality</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(employee, index) in sortedEmployees"
          :key="index"
          @click="$emit('select', employee)"
        >
          <td>
            <img
              :src="employee.avatar"
              class="ui mini rounded image"
            >
          </td>
          <td class="capitalize">{{ employee.firstName }}</td>
          <td class="capitalize">{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.nationality }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{ sortedEmployees.length }} employees</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StaffDirectory',
  props: {
    employees: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sortBy: 'firstName',
      filterBy: ''
    };
  },
  computed: {
    sortedEmployees() {
      return this.employees
        .filter(employee => employee.lastName.includes(this.filterBy))
        .sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
    }
  }
}
</script>

<style scoped>
h1.ui.center.header {
  margin-top: 3em;
}
th:not(:first-child):hover,
tbody tr {
  cursor: pointer;
}
input {
  padding: 3px;
}
.capitalize {
  text-transform: capitalize;
}
</style>