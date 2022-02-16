import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DataStateInterface } from './state';

const getters: GetterTree<DataStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
