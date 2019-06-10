// HASH TABLE USING ES6 MAP

class HashTable {
  constructor() {
    this.size = 20
    this.buckets = Array(this.size) 

    // populate each bucket with a Map()
    for (const i of this.buckets.keys()) {
      this.buckets[i] = new Map()
    }
  }

  hash(key, size) {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size;
  }

  insert(key, value) {
    let index = hash(key, this.size) 
    this.buckets[index].set(key, value)
  }

  remove(key) {
    let index = hash(key, this.size)
    let deleted = this.buckets[index].get(key)
    this.buckets[index].delete(key)
    return deleted 
  }

  search(key) {
    let index = hash(key, this.size)
    return this.buckets[index].get(key)
  }
}

const hashTable = new HashTable()

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')
hashTable.insert('fartface', 'hooohhaaa')
hashTable.insert('me', 'you');

hashTable.search('rei')
hashTable.search('lita')
hashTable.search('serena')

hashTable.remove('darien')
hashTable.remove('mina')

console.log(hashTable);