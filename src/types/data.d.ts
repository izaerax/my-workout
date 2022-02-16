export interface ExcerciseTemplate {
  id: string,
  name: string,
  src?: string,
}

export interface ExcerciseConf {
  reps?: number,
  series?: number,
  rec?: string,
  weight?: number,
  time?: string,
}

export interface Excercise {
  template: ExcerciseTemplate,
  conf: ExcerciseConf
}

export interface ExcerciseCard {
  instances: Array<Excercise>,
}

export interface ExcerciseCards {
  [id: string]: ExcerciseCard
}
