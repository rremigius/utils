export default class EventInterface {
	
	static extend():void;
	extend():void;
	getOnMethod():(event:string, callback:Callback)=>void;
	getOffMethod():(event:string, callback:Callback)=>void;
	getFireMethod():(event:string, data?:any)=>void;
	on(event:string, callback:Function):void;
	off(event:string, callback:Function):void;
	fire(event:string, data:object):void;
}

type Callback = (data:any)=>void;
export interface EventInterfacer {
	on(event:string, callback:Callback):void;
	off(event:string, callback:Callback):void;
	fire(event:string, data?:any):void;
}
