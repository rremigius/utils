export default class Err {
	message?: string;
	code?: string|number;
	data?: {[key:string]:any};
	public?: boolean;
	errorMap?: {[key:string]:Error};
	originalError?: Error;

	constructor(specs:object, originalError?:Err);
	constructor(message:string, originalError?:Err);
	constructor(message:string, code:string|number);

	getDeepestError():Err;
}
