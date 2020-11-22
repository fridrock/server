import { StateFunctions } from "./stateFunctions";

function tasksReduser(
  state = {
    plans: [],
    LoggedIn: false,
    userProfile: {},
  },
  action
) {
  switch (action.type) {
    case "LOGGED_IN":
      state.LoggedIn = true;
      state.userProfile = action.userProfile;
      return state;
    case "ADD_PLAN":
      state.plans.push(action.plan);

      return state;
    case "ADD_COLUMN":
      state.plans.forEach((plan) => {
        if (plan.planId == action.planId) {
          plan.columns.push(action.column);
        }
      });

      return state;
    case "ADD_CHECKBOX":
      state.plans.forEach((plan) => {
        plan.columns.forEach((column) => {
          if (column.columnId == action.checkbox.columnId) {
            column.checkBoxes.push(action.checkbox);
          }
        });
      });

      console.log(state);
      return state;
    case "UPDATE_CHECKBOX":
      const stateFunctions = new StateFunctions(state);
      //update code
      const checkBox = stateFunctions.findCheckBoxById(action.checkBoxId);

      checkBox.checkBoxDone = !checkBox.checkBoxDone;
      //counting done procent
      stateFunctions.countDoneProcent(action.checkBoxId);
      // let currentPlan = state.plans.find((plan) => {
      //   return plan.id === action.planId;
      // });
      // let checkbox = currentPlan.columns
      //   .find((column) => {
      //     return column.column_id === action.columnId;
      //   })
      //   .checkboxes.find((checkbox) => {
      //     return checkbox.checkbox_id === action.checkBoxId;
      //   });
      // checkbox.done = !checkbox.done;
      // let checkBoxesCount = 0;
      // let doneCheckBoxes = 0;

      // currentPlan.columns.forEach((column) => {
      //   checkBoxesCount += column.checkboxes.length;
      //   column.checkboxes.forEach((checkbox) => {
      //     if (checkbox.done) {
      //       doneCheckBoxes++;
      //     }
      //   });
      // });
      // currentPlan.doneProcent = Math.round(
      //   (doneCheckBoxes / checkBoxesCount) * 100
      // );
      // console.log(checkbox.done);

      return state;
    case "LOGOUT":
      state.userProfile = {};
      state.LoggedIn = false;
    default:
      return state;
  }
}

export default tasksReduser;
