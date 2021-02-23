import axios from 'axios';

//Generic Class that builds an axios request against a type of data for our Rockets
export class GetRocketSpecifics<T> {
  //needs to be instantiated with a type and a id (from parent props)
  constructor(public type: string, public id: string) {}

  //This get method returns a Promise of the type that is given to GetRocketSpecifics
  async get(): Promise<T> {
    const res = await axios.get(
      `https://api.spacexdata.com/v4/${this.type}/${this.id}`,
    );
    return res.data;
  }
}
