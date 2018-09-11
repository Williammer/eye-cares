const stateChart = {
  states: {
    light: {
      initial: 'green',
      states: {
        green: {
          on: {
            TIMER: 'yellow',
          },
        },
        yellow: {
          on: {
            TIMER: 'red',
          },
        },
        red: {
          on: {
            TIMER: 'green',
          },
        },
        hist: {
          history: 'deep',
        },
      },
    },
    bold: {
      initial: 'off',
      states: {
        off: {
          on: {
            TOGGLE_BOLD: 'on',
          },
        },
        on: {
          on: {
            TOGGLE_BOLD: 'off',
          },
        },
      },
    },
    back: {
      on: {
        BACK: 'light.hist',
      },
    },
  },
};

export default stateChart;
