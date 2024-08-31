import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './auth/login.component'
import { httpInterceptorProviders } from './services/auth.interceptor.service'
import { HeaderComponent } from './header/header.component'
import { HttpClientModule } from '@angular/common/http'
import { NoauthGuardService } from './services/noauth.guard.service'
import { MenuComponent } from './menu/menu.component'
import { SubmenuComponent } from './menu/submenu.component'
import { TablesComponent } from './tables/tables.component'
import { WaiterGuardService } from './services/waiter.guard.service'
import { OwnTableComponent } from './tables/own-table.component'
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search'
import { SelectDishComponent } from './tables/select-dish.component'
import { MatSelectModule } from '@angular/material/select'
import { OrdersComponent } from './orders/orders.component'
import { MakerGuardService } from './services/maker.guard.service'
import {StaffComponent} from "./staff/staff.component";
import {CashierGuardService} from "./services/cashier.guard.service";
import {TablesInfoComponent} from "./tables-info/tables-info.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [NoauthGuardService] },
  { path: 'menu', component: MenuComponent },
  { path: 'tables', component: TablesComponent, canActivate: [WaiterGuardService] },
  { path: 'table/own-table', component: OwnTableComponent, canActivate: [WaiterGuardService] },
  { path: 'orders', component: OrdersComponent, canActivate: [MakerGuardService] },
  { path: 'staff', component: StaffComponent, canActivate: [CashierGuardService] },
  { path: 'tables-info', component: TablesInfoComponent, canActivate: [CashierGuardService] }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    SubmenuComponent,
    TablesComponent,
    OwnTableComponent,
    SelectDishComponent,
    OrdersComponent,
    StaffComponent,
    TablesInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    NgxMatSelectSearchModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
