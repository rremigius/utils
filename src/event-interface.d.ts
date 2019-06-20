export default class EventInterface {
	
	static extend():void;
	extend():void;
	getOnMethod():Function;
	getOffMethod():Function;
	getFireMethod():Function;
	on(event:string, callback:Function):void;
	off(event:string, callback:Function):void;
	fire(event:string, data:object):void;
}

export interface EventInterfacer {
	on(event:string, callback:Function):void;
	off(event:string, callback:Function):void;
	fire(event:string, data:object):void;
}
