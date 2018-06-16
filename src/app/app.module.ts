import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './views/shared/navbar/navbar.module';
import { FooterModule } from './views/shared/footer/footer.module';
import { SidebarModule } from './views/sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { TablesComponent } from './views/tables/tables.component';
import { TypographyComponent } from './views/typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './views/maps/maps.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
import { UpgradeComponent } from './views/upgrade/upgrade.component';
import { JoinComponent } from './views/join/join.component';
import { SharepriceComponent } from './views/shareprice/shareprice.component';
import { JoinServiceService } from './services/join-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    JoinComponent,
    SharepriceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule
  ],
  providers: [JoinServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
