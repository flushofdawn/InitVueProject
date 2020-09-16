const defaultTag = [
  { name: "Dashboard", path: "/dashboard", isActive: false, closeBtn: false }
];
function filterTag(allTag, tag) {
  let flag = false;
  allTag.map((el, ind) => {
    if (el.name == tag.name) {
      flag = true;
      el.isActive = true;
    } else {
      el.isActive = false;
    }
  });
  if (!flag) {
    allTag.push(tag);
  }
  return allTag;
}
const state = {
  tag: [...defaultTag]
};
const mutations = {
  ADD_TAG: (state, tag) => {
    state.tag = filterTag(state.tag, tag);
    console.log(state.tag);
  },
  DEL_TAG: (state, tag) => {
    state.tag.splice(state.tag.indexOf(tag), 1);
    if (tag.isActive == true) {
      state.tag[state.tag.length - 1].isActive = true;
    }
  },
  CHANGE_TAG: (state, tag) => {
    state.tag.map((el, ind) => {
      if (el.name == tag.name) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
    });
    state.tag[state.tag.indexOf(tag)].isActive = true;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
