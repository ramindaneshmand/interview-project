/*COPYRIGHT NOTICE: © Comviva Technologies Limited. All Rights Reserved *!
 This software is the sole property of Comviva and is protected by copyright law and international treaty provisions.
 Unauthorized reproduction or redistribution of this program or any portion of it may result in severe civil and
 criminal penalties and will be prosecuted to the maximum extent possible under the law. COMVIVA reserves all rights
 not expressly granted. You may not reverse engineer, decompile, or disassemble the software, except and only to the
 extent that such activity is expressly permitted by applicable law notwithstanding this limitation.
 THIS SOFTWARE IS PROVIDED TO YOU "AS IS" WITHOUT  WARRANTY  OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
 NOT LIMITED TO THE  IMPLIED  WARRANTIES  OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE. YOU ASSUME THE
 ENTIRE RISK AS TO THE ACCURACY AND THE USE OF THIS SOFTWARE. COMVIVA SHALL NOT BE LIABLE FOR ANY DAMAGES WHATSOEVER
 ARISING OUT OF THE USE OF OR INABILITY TO USE THIS SOFTWARE, EVEN IF COMVIVA HAS BEEN ADVISED OF THE POSSIBILITY OF
 SUCH DAMAGE.*/


import {NgModule} from '@angular/core';
import {EntityDataModule, EntityDataService, EntityDefinitionService} from '@ngrx/data';
import {ExampleDataService} from './example-data.service';
import {ExampleEntityService} from './example.entity.service';
import {ExampleEntityMetadata} from './example-entity-metadata';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {entityConfig} from '../entity-metadata';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  imports:[
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreRouterConnectingModule.forRoot()
  ],
    providers: [ExampleDataService, ExampleEntityService]
})
export class ExampleStoreModule {
    constructor(private eds: EntityDefinitionService,
                private entityService: EntityDataService,
                private dataService: ExampleDataService
    ) {
        eds.registerMetadataMap(ExampleEntityMetadata);
        entityService.registerService('Example', this.dataService);
    }
}
