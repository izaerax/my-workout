export interface ExcerciseItem {
  id: string,
  name: string,
  src: string,
}

export interface ExcerciseConf {
  excercise: ExcerciseItem,
  reps: number,
  series: number,
  rec: string,
  weight?: number,
  time?: string,
}

export interface ExcerciseCard {
  instances: Array<ExcerciseConf>,
}

export interface ExcerciseCards {
  [id: string]: ExcerciseCard
}
