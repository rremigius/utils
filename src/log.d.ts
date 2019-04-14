export default class Log {
	static Level : {
		ALL: 0,
		DEBUG: 1,
		INFO: 2,
		WARN: 3,
		ERROR: 4,
		FATAL: 5,
		OFF: 6
	};

	static root():Log;
	static instance(name:string):Log;
	static getLevel():number;
	static setLevel(level:number):void;
	static getDriver():object;
	static setDriver(driver:object):void;

	static debug(...messages:any):void;
	static log(...messages:any):void;
	static info(...messages:any):void;
	static warn(...messages:any):void;
	static error(...messages:any):void;
	static trace(...messages:any):void;

	name: string;

	instance(name: string):Log;
	setParent(parent:Log):void;
	getPath():[string];
	getFullName():string;
	setDriver(driver:object):void;
	resetDriver():void;
	getDriver():object;
	setLevel(level:number):void;
	getLevel():number;

	debug(...messages:any):void;
	log(...messages:any):void;
	info(...messages:any):void;
	warn(...messages:any):void;
	error(...messages:any):void;
	trace(...messages:any):void;
}
