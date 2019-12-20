// Types
export const typesExample = {
	a: 1,
	b: "Hello Shashank",
	c: (str: string) => {
		return str.replace("Hi", "Hello");
	}
};

// Dynamic Object aka defining an object in TS (type VS Interface)
/* interface JSONArgumentDef {
	key: string;
} */
type JSONArgumentDef = {
	key: string;
};

export function dummyFunction(JSONArgument: JSONArgumentDef) {
	return JSONArgument.key;
}

// Return type setting for fucntions
function sum(x: number, y: number): number {
	return x + y;
}

// Type Assertion
let ten = 10;
let color = "red";
ten = color as any;

// any vs unknown
