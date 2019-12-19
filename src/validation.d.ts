import Err from "@utils/error";

export type Class = {
	name:string;
	new (...args: any[]): Object;
};

export class Validity {
	constructor(name:string, input:any, valid:boolean, message:string);

	setName(name:string):void;
	getName():string;
	setInput(input:any):void;
	getInput():any;
	setValid(valid:boolean):boolean;
	isValid():boolean;
	invalidate():void;
	getValue():any;
	setMessage(message:string):void;
	getMessage():string;
	getCorrectedValue():any;
	setCorrectedValue(value:any):void;
	getValidityMap():{[key:string]:Validity};
	setValidityMap(map:{[key:string]:Validity}):void;
	createBadValueMessage(returnAsArray:false):string|[];
	createError(includeErrorMap:false):Err;
	getErrorRoots():Err|{[key:string]:Err}
}

export function validate(...args:any):Validity;
export function validateOne(...args:any):Validity;
export function validateObject(...args:any):Validity;
export function validateArray(...args:any):Validity;
export function assertOne(...args:any):void;
export function assert(...args:any):void;
export function instanceOf(klass:Class, value?:any):boolean|Function;
export function def(value:any):boolean;
export function ensure(value:any, evalFunc:Function, defaultValue:any, message:string):any;
export function ensurePath(value:any, path:string|[string], evalFunc:Function, defaultValue:any, message:string):object;
export function isStringOrNumber(value:any):boolean;
export function isPrimitive(value:any):boolean;
export function isClass(value:any):value is Class;
export function isSubClass(SubClass:any, Class:Class, includeIdentity?:boolean):SubClass is typeof Class;
export function checkType(value:any, type:string, name:string);
export function checkMethod(value:any, method:string, name:string);
