import { ModuleMetadata, Type } from '@nestjs/common';
import * as firebaseAdmin from 'firebase-admin';

export type FirebaseAdminModuleOptions = firebaseAdmin.AppOptions;

export interface FirebaseAdminModuleOptionsFactory {
    createFirebaseAdminOptions():
        | Promise<FirebaseAdminModuleOptions>
        | FirebaseAdminModuleOptions

}

export interface FirebaseAdminModuleAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    useExiting?: Type<FirebaseAdminModuleOptionsFactory>;
    userClass?: Type<FirebaseAdminModuleOptionsFactory>;
    useFactory?: (
        ...args: any[]
    ) => Promise<FirebaseAdminModuleOptions> | FirebaseAdminModuleOptions;
    inject?: any[];
}