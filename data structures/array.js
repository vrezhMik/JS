class Array {
    constructor(size, type, ...values) {
        if (typeof size !== 'number') {
            console.error("Size must be a number");
            return;
        }
        if (typeof type !== 'string') {
            console.error("Type must be a string");
            return;
        }
        this._size = size;
        this.type = type;
        this.values = [];
        try {
            this.checkType(values, type);
        } catch (error) {
            console.error(error);
            return;
        }
        if (this._size < this.values.length) {
            this.values = this.values.slice(0, this._size);
        }
    }

    add(val) {
        return new Array(this._size + 1, this.type, ...this.values.concat(val));
    }

    index(val) {
        return this.values.indexOf(val);
    }

    get size() {
        return this._size;
    }

    checkType(values, type) {
        type = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
        values.forEach((val) => {
            if (Object.prototype.toString.call(val) !== `[object ${type}]`) {
                throw "Type is not matching";
            }
            else {
                this.values.push(val);
            }
        });
    }
}


