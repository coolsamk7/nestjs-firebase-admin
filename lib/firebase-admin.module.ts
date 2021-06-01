import { DynamicModule, Module, Provider } from "@nestjs/common";
import { FirebaseAdminModuleOptions, FirebaseAdminModuleAsyncOptions, FirebaseAdminModuleOptionsFactory } from './interfaces'

@Module( {} )

export class FirebaseAdminModule  {

    static register(options: FirebaseAdminModuleOptions ): DynamicModule {
        return {
            module: FirebaseAdminModule,
            providers: [ { provide: FIREBASE_ADMIN_MODULE_OPTIONS, useValue: options } ]
        }
    }

    static registerAsync(options: FirebaseAdminModuleAsyncOptions): DynamicModule {
        return  {
            module: FirebaseAdminModule,
            imports: options.imports || [],
            providers: [...this.createAsyncProviders(options)]
        }
    }

    private static createAsyncProviders(
        options: FirebaseAdminModuleAsyncOptions
    ): Provider[] {
        if(options.useExiting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.userClass,
                useClass: options.userClass
            }
        ]
    }

    private static createAsyncOptionsProvider(
        options: FirebaseAdminModuleAsyncOptions
    ): Provider {
        if(options.useFactory) {
            return {
               provide: FIREBASE_ADMIN_MODULE_OPTIONS,
               useFactory: options.useFactory,
               inject: options.inject || []
            }
        }
        return {
            provide: FIREBASE_ADMIN_MODULE_OPTIONS,
            useFactory: async (optionFactory: FirebaseAdminModuleOptionsFactory) =>
                await optionFactory.createFirebaseAdminOptions(),
            inject: [options.useExiting || options.userClass]
        }
    }
}
