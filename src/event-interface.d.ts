export type EventDescription = {
	name?:string,
	payload?: any
}

type OnType = <T extends EventDescription>(event:string, callback:Callback<T['payload']>)=>void;
type OffType = <T extends EventDescription>(event:string, callback:Callback<T['payload']>)=>void;
type FireType = <T extends EventDescription>(event:string, data?:T['payload'])=>void;

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

type Callback<T> = (payload:T)=>void;
export interface EventInterfacer {
	on:OnType;
	off:OffType;
	fire:FireType;
}
