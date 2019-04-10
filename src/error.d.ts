export default class Err {
	message?: string;
	code?: string|number;
	data?: {[key:string]:any};
	public?: boolean;
	errorMap?: {[key:string]:Error};
	originalError?: Error;

	constructor(specs:object, originalError?:Error);
	constructor(message:string, originalError?:Error);
	constructor(message:string, code:string|number);
}
