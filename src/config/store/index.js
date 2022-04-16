import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarHasCollapsed: false,
    projectsDialog: { show: false, x: null, y: null },
    showHelpUser: false,
    theme: null,
    actualCreationStep: 0,
    stepDirection: 'foward',
    maxStepCreation: 5,
    searchTasks: null,
    changeFeature: 'AiLab',
    openTopicModal: false,
  },
  mutations: {
    sidebarHasCollapsed: (state, payload) => {
      state.sidebarHasCollapsed = payload;
    },
    projectsDialog: (state, payload) => {
      state.projectsDialog = payload;
    },
    showHelpUser: (state, payload) => {
      state.showHelpUser = payload;
    },
    theme: (state, payload) => {
      state.theme = payload;
    },
    searchTasks: (state, payload) => {
      state.searchTasks = payload;
    },
    changeFeature: (state, payload) => {
      state.changeFeature = payload;
    },
    openTopicModal: (state, payload) => {
      state.openTopicModal = payload;
    },
    stepDirection: (state, payload) => {
      if (payload === 'foward' && state.actualCreationStep <= state.maxStepCreation) {
        state.actualCreationStep++;
      } else if (payload === 'back' && state.actualCreationStep > 0) {
        state.actualCreationStep--;
      }
      state.stepDirection = payload;
    },
  },
  actions: {},
  getters: {
    sidebarHasCollapsed: (state) => state.sidebarHasCollapsed,
    projectsDialog: (state) => state.projectsDialog,
    showHelpUser: (state) => state.showHelpUser,
    actualCreationStep: (state) => state.actualCreationStep,
    searchTasks: (state) => state.searchTasks,
    changeFeature: (state) => state.changeFeature,
    openTopicModal: (state) => state.openTopicModal,
  },
  modules: {},
});
