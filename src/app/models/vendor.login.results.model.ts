﻿import { MobileBase } from "./mobile.base"; 
import { MobClientIdentity } from "./mobile.client.identity";

export class VendorLoginResultsModel {
    public results: MobileBase = {} as MobileBase;
    public associatePINCount: number = 0;
    public resetPIN: number = 0;
    public contractUID: number = 0;
    public contractNumber: string = '';
    public contractStart: string = '';
    public userIdentity: MobClientIdentity = {} as MobClientIdentity;
    public userRoles: string[] = [];
    public asociateRole: string = '';
    public associateRoleDesc: string = '';
    public associateName: string = '';
    public locationUID: string = '';
    public eventId: number = 0;
    public eventName: string = '';
    public facilityNumber: string = '';
    public facilityName: string = '';
    public individualUID: string = '';
    public isAuthorized: boolean = false;
    public showPrivTrngConfrm: number = 0;
    public cliTimeVar: number = 0;
    public pageID: number = 0;
    public eventStart: Date = {} as Date;
    public eventEnd: Date = {} as Date;
    public busFuncCode: string = '';
    public busModel: number = 0;
    public eventEnded: boolean = false;
    public emailAddr: string = '';
    public privActConfmComplete: boolean = false;
    public regionId: string = '';
    public rgnCode: string = '';
    public countryCode: string = '';
    public currCode: string = '';
    public ccDevice: string = '';
    public usdFastcash: string = '';
    public frgnFastcash: string = '';
    public uuidExists: boolean = false;
    public eagleCashOptn: boolean = false;
    public useShipHndlng: boolean = false;
    public tokenString: string = '';
}