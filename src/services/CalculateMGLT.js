import moment from "moment";

const getConsumablesInHours = (consumables) => {
  const [time, unit] = consumables.split(" ");
  const consumablesInHours = moment.duration(time, unit).asHours();
  return consumablesInHours;
};

export const calculateStopsByGivenDistance = (
  distance,
  shipMGLT,
  consumables
) => {
  const flatHours = distance / shipMGLT;
  const consumableInHours = getConsumablesInHours(consumables);
  const stops = flatHours / consumableInHours;

  return Math.floor(stops);
};
