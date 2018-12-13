export class Recipe {
    // typescript hortcut similar to ingredient model.. as long as an accessor is used (ie. public, this cleans up alot of redundency) -cwb
    constructor(public name: string, public desc: string, public imagePath: string) {
    }
}