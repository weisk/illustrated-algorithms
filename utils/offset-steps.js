// Used when prepending intro steps to those generated by algorithm
export default (steps, offsetBy) => steps.map(step => (
  step.parentStepId ? {
    ...step,
    parentStepId: step.parentStepId + offsetBy,
  } : step
));
