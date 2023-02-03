interface IIterator {
    hasNext: () => boolean;
    next: () => any;
    remove: () => any
}

class Enumeration {
    hasMoreElements(): boolean {
        return true
    }

    nextElement() {

    }

}

class AdapterEnumeration implements IIterator {
    private enumeration: Enumeration;

    constructor(object: Enumeration) {
        this.enumeration = object;
    }

    hasNext() {
        return this.enumeration.hasMoreElements()
    }

    next() {
        return this.enumeration.nextElement()
    }

    remove() {
        console.log("Error");
        //throw new Error()
    }
}



export const ADAPTER = () => {
    let adapterEnumeration = new AdapterEnumeration(new Enumeration())

    adapterEnumeration.remove()
}
