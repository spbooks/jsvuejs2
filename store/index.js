export const state = () => ({
  employees: [],
  selectedEmployee: null
});

export const getters = {
  employeeList(state) {
    return state.employees.map(member => ({
      id: member.login.uuid,
      firstName: member.name.first,
      lastName: member.name.last,
      email: member.email,
      phone: member.phone,
      nationality: member.nat,
      avatar: member.picture.thumbnail
    }));
  }
};

export const mutations = {
  setEmployees(state, { employees }) {
    state.employees = employees
  },

  setSelectedEmployee(state, { employee }) {
    state.selectedEmployee = employee
  }
};

export const actions = {
  async getEmployees({ commit }) {
    const { results } = await this.$axios.$get(
      'https://randomuser.me/api/?nat=gb,us,au&results=10&seed=abc'
    );
    commit('setEmployees', { employees: results });
  },

  async getEmployee({ commit, dispatch, state }, { id }) {
    if (state.employees.length === 0) {
      await dispatch('getEmployees');
    }

    const employee = state.employees.find(user => user.login.uuid === id);
    commit('setSelectedEmployee', { employee });
  }
};
