export default class EventInterface {
	
	extend():void;
	getOnMethod():Function;
	getFireMethod():Function;
	on(event:string, callback:Function):void;
	fire(event:string, data:object):void;
}
