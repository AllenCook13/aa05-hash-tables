class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    if(this.count / this.capacity > .7) {
      this.resize();
    }
    let idx = this.hashMod(key);
    let cur = this.data[idx];
    while(cur && cur.key !== key) {
      cur = cur.next;
    }
    if(cur) {
     cur.value = value;
    } else {

     let newPair = new KeyValuePair(key, value);
     if(!this.data[idx]) {
       this.data[idx] = newPair;
     } else {
       newPair.next = this.data[idx];
       this.data[idx] = newPair;
     }
     this.count++
    }
  }


  read(key) {
    let idx = this.hashMod(key);
    let cur = this.data[idx];
    while(cur && cur.key !== key) {
      cur = cur.next;
    }
    if(cur) {
      return cur.value
    }
  }


  resize() {
    this.capacity *= 2
    this.count = 0
    let storArr = this.data
    this.data = new Array(this.capacity).fill(null);
    let pair = null;
    for(let i = 0; i <= storArr.length; i++) {
      pair = storArr[i];
      while(pair) {
        this.insert(pair.key, pair.value);
        pair = pair.next;
      }
    }
  }


  delete(key) {
    if(this.read(key) === undefined) {
      return "Key not found"
    } else {
      this.insert(key, undefined);
      this.count--;
    }
  }
}


//alternate insert solution

 // let idx = this.hashMod(key);
    // let newPair = new KeyValuePair(key, value);
    // let cur = this.data[idx];

    // while(cur) {
    //   if(cur.key === key) {
    //     cur.value = value;
    //     return;
    //   }
    //   cur = cur.next;
    // }

    // newPair['next'] = this.data[idx];
    // this.data[idx] = newPair;

    // if(!this.data[idx]) {
    //   this.data[idx] = newPair;
    // }
    // this.count++;


   
module.exports = HashTable;
