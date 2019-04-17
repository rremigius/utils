import Err from "./error";

export default class Loading{
	isLoading():boolean;
	getErrors():Record<string, Err>;
	getLastError():Err;
	start(task:string):Promise<any>;
	wait(task:string):Promise<any>;
	done(task:string, result?:any):Promise<any>;
	error(task:string, err:Err):void;
	isFinished(task:string):boolean;

	// From EventInterface
	on(event:string, callback:Function):void;
	fire(event:string, data:object):void;
}
