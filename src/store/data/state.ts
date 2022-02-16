import { ExcerciseCard } from 'src/types/data';

export interface DataStateInterface {
  excerciseCards: Array<ExcerciseCard>,
}

function state(): DataStateInterface {
  return {
    excerciseCards: [],
  };
}

export default state;
