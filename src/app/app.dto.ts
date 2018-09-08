   export interface Item {
        id: string;
        name: string;
        type: string;
    }

    export interface Field {
        item: Item[];
    }

    export interface Org {
        item: string[];
    }

    export interface Sector {
        item: string[];
    }

    export interface TargetBucket {
        index: string;
        type: string;
    }

    export interface Item2 {
        timestamp: string;
        state: string;
        district: string;
        market: string;
        commodity: string;
        variety: string;
        arrival_date: Date;
        min_price: number;
        max_price: number;
        modal_price: number;
    }

    export interface Records {
        item: Item2[];
    }

    export interface RootObject {
        index_name: string;
        title: string;
        desc: string;
        created: string;
        updated: string;
        created_date: Date;
        updated_date: Date;
        active: string;
        visualizable: string;
        catalog_uuid: string;
        source: string;
        org_type: string;
        status: string;
        message: string;
        total: string;
        count: string;
        limit: string;
        offset: string;
        version: string;
        field: Field;
        org: Org;
        sector: Sector;
        target_bucket: TargetBucket;
        records: Records;
    }

    export class User {
        constructor(
           public id: string,
           public name: string,
           public username: string,
           public email: string
        ) {}
     }