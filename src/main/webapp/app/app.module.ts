import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { LiveconsultSharedModule, UserRouteAccessService } from './shared';
import { LiveconsultAppRoutingModule} from './app-routing.module';
import { LiveconsultHomeModule } from './home/home.module';
import { LiveconsultAdminModule } from './admin/admin.module';
import { LiveconsultAccountModule } from './account/account.module';
import { LiveconsultEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LiveconsultAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        LiveconsultSharedModule,
        LiveconsultHomeModule,
        LiveconsultAdminModule,
        LiveconsultAccountModule,
        LiveconsultEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class LiveconsultAppModule {}
