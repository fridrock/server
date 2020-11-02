let addPlanCreator = function (plan) {
  return {
    type: "ADD_PLAN",
    plan: plan,
  };
};
let loggedInCreator = function (userProfile) {
  return {
    type: "LOGGED_IN",
    userProfile: userProfile,
  };
};
let addColumnCreator = function (planId, column) {
  return {
    type: "ADD_COLUMN",
    column: column,
    planId: planId,
  };
};
let addCheckBoxCreator = function (planId, columnId, checkBox) {
  return {
    type: "ADD_CHECKBOX",
    planId: planId,
    columnId: columnId,
    checkbox: checkBox,
  };
};
let updateCheckBoxCreator = function (planId, columnId, checkBoxId) {
  return {
    type: "UPDATE_CHECKBOX",
    planId: planId,
    columnId: columnId,
    checkBoxId: checkBoxId,
  };
};

export { addCheckBoxCreator };
export { addPlanCreator };
export { addColumnCreator };
export { loggedInCreator };
export { updateCheckBoxCreator };
