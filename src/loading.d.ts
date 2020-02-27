import Err from "./error";

export default class Loading{
	constructor(name?:string);

	isLoading():boolean;
	getErrors():Record<string, Err>;
	getLastError():Err;
	start(task:string, timeout?:number, promise?:Promise<any>):Promise<any>;
	wait(task?:string, timeout?:number):Promise<any>;
	done(task:string, result?:any):Promise<any>;
	error(task:string, err:Err):void;
	isFinished(task:string):boolean;
	subLoading(loading:Loading, name:string):void;

	// From EventInterface
	on(event:string, callback:Function):void;
	fire(event:string, data:object):void;
}
