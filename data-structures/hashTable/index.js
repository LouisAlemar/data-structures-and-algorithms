/**
 * Name: Hash Table
 * Time Complexity:
 *      Insertion: O(1)
 *      Removal: O(1)
 *      Access: O(1)
 */

class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  // hash function to get the hash of a given key
  _hash(key) {
    let total = 0;
    let random_prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * random_prime + value) % this.keyMap.length;
    }

    return total;
  }

  // set a key-value pair to hash table
  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  // get key-value pair from hash table
  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0]) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  // get all values from hash table
  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }

  // get all keys from hash table
  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }
}
