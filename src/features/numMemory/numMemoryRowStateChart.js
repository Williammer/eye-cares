const stateChart = {
  key: 'num-memory-row',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'reciting',
      },
    },
    reciting: {
      on: {
        TIMEOUT: 'recited',
      },
    },
    recited: {
      on: {
        HIT: 'correct',
        MISSED: 'incorrect',
      },
    },
    correct: {
      on: {
        START: 'reciting',
      },
    },
    incorrect: {
      on: {
        START: 'reciting',
      },
    },
  },
};

export default stateChart;
