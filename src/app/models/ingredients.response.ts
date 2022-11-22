

export interface Ingredient {
    id: string;
    name: string;

}

export interface Data {
    data: Ingredient[];
    errors?: any;
}

export interface Conversion {
    ingredient: {};
    // fromValue: number;
    // fromMU: string;
    // toMU: string;
    result: number;
}

export interface Response {
    data: Conversion;
    errors?: any;
}

