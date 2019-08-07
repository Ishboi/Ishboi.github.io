/******
 * This was just a bunch of examples to demonstrate how it works
 */
//export default 'I am an exported string.';
/**Testing end */

import axios from 'axios';
import {key, proxy} from '../config';

export default class Search {

  constructor(query) {
    this.query = query;

  }

  async getResults(query) {

    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      // console.log(this.result);
  
    } catch (error) {
      alert(error);
    }
  
  }

}
