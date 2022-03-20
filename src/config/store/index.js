import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarHasCollapsed: false,
    projectsDialog: { show: false, x: null, y: null },
    showHelpUser: false,
    theme: null
  },
  mutations: {
    sidebarHasCollapsed: (state, payload) => {
      state.sidebarHasCollapsed = payload
    },
    projectsDialog: (state, payload) => {
      state.projectsDialog = payload
    },
    showHelpUser: (state, payload) => {
      state.showHelpUser = payload
    },
    theme: (state, payload) => {
      state.theme = payload
    },
  },
  actions: {
  },
  getters: {
    sidebarHasCollapsed: (state) => state.sidebarHasCollapsed,
    projectsDialog: (state) => state.projectsDialog,
    showHelpUser: (state) => state.showHelpUser
  },
  modules: {
  },
});
