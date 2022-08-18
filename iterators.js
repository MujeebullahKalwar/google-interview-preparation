// int[] arr1 = [1, 2, 3];
// int[] arr2 = [4, 5];
// int[] arr3 = [6, 7, 8, 9];
// Iterator<Integer> a = arr1.iterator();
// Iterator<Integer> b = arr2.iterator();
// Iterator<Integer> c = arr3.iterator();
// Iterator<Integer>[] iterlist = [a, b, c];
// IF itfl = new IF(iterlist);
// while(IF.hasNext()){
//   print IF.next();
// }
// IF itfl = new IF(iterlist);
// while(IF.hasNext()){
//   print IF.next();
// }
// 1 4 6 2 5 7 3 8 9

class IF {
    constructor(iterators) {
        this.iterators = iterators;
        this.iteratIndex = -1;
    }
    hasNext() {
        if (this.iterators && this.iterators.length > 0) {
            for (const i of this.iterators) {
                if (i && i.length > 0) {
                    return true;
                }
            }
        }
        return false;
    }
    next() {
        if (this.iterators && this.iterators.length > 0) {
            this.increaseIndex();
            for (let i = 0; i < this.iterators.length; i++) {
                if (this.iteratIndex === i) {
                    if(this.iterators[i].length > 0) {
                        return this.iterators[i].pop();
                    } else {
                        this.increaseIndex();
                        continue;
                    }
                }
            }
        }
        return null;
    }

    increaseIndex() {
        if (this.iteratIndex === this.iterators.length - 1) {
            this.iteratIndex = 0;
        } else {
            this.iteratIndex++;
        }
    }
}

const iterlist = [
    [1,1,1],
    [2,2],
    [3,3,3]
]

const itfl = new IF(iterlist);
while(itfl.hasNext()){
  console.log(itfl.next());
}