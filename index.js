// Your code here

class Polygon {

    constructor(sideArry) {
        this.sideArry = sideArry
    }

    get countSides() {
        return this.sideArry.length
    }

    get perimeter() {
        return this.sideArry.reduce((total, element) => total + element, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
        if (this.countSides === 3) {
            if (this.sideArry[0] + this.sideArry[1] > this.sideArry[2] &&
                this.sideArry[1] + this.sideArry[2] > this.sideArry[0] &&
                this.sideArry[2] + this.sideArry[0] > this.sideArry[1])
                { return true }
            else { return false }
            }
        else { return false}
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides === 4) {
            if (this.sideArry[0] === this.sideArry[1] &&
                this.sideArry[0] === this.sideArry[2]) {
                    return true
                }
                else { return false }
            }
            else { return false }   
    }

    get area() {
        return this.sideArry[0] * this.sideArry[1]
    }
}