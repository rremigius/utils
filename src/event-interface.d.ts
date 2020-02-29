export type EventDescription = {
	name?:string,
	payload?: any
}

export type OnType = <T extends EventDescription>(event:string, callback:Callback<T['payload']>)=>void;
export type OffType = <T extends EventDescription>(event:string, callback:Callback<T['payload']>)=>void;
export type FireType = <T extends EventDescription>(event:string, data?:T['payload'])=>void;

export default class EventInterface {
	static extend():void;
	extend():void;
	getOnMethod():OnType;
	getOffMethod():OffType;
	getFireMethod():FireType;
	on:OnType;
	off:OffType;
	fire:FireType;
}

export type Callback<T> = (payload:T)=>void;
export interface EventInterfacer {
	on:OnType;
	off:OffType;
	fire:FireType;
}
