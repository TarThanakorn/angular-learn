import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { CallComponentComponent } from './call-component/call-component.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { BindingAndOutputComponent } from './binding-and-output/binding-and-output.component';
import { ActionBar2Component } from './action-bar-2/action-bar-2.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { CallMaxMinMeterComponent } from './call-max-min-meter/call-max-min-meter.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';
import { TwowayComponent } from './twoway/twoway.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgifElseComponent } from './ngif-else/ngif-else.component';
import { ActionBar3Component } from './action-bar-3/action-bar-3.component';
import { ArrayComponent } from './array/array.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';
import { CallRequestComponent } from './call-request/call-request.component';
import { InputTextModule } from 'primeng/inputtext';
import { PrimengComponent } from './primeng/primeng.component';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { ShoppingModule } from './shopping/shopping.module';
import { CallShoppingComponent } from './call-shopping/call-shopping.component';
import { GetSetComponent } from './get-set/get-set.component';
import { DirectiveComponent } from './directive/directive.component';
import { HttpBookDirective } from './http-book.directive';
import { LoginComponent } from './authentication/login/login.component';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ViewChildComponent } from './view-child/view-child.component';
import { CookieService } from 'ngx-cookie-service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FirstComponent,
    HomeComponent,
    ActionBarComponent,
    CallComponentComponent,
    InputComponentComponent,
    BindingAndOutputComponent,
    ActionBar2Component,
    MaxMinMeterComponent,
    CallMaxMinMeterComponent,
    StyleBindingComponent,
    SquareFlexComponent,
    TwowayComponent,
    NgifComponent,
    NgifElseComponent,
    ActionBar3Component,
    ArrayComponent,
    CallRequestComponent,
    PrimengComponent,
    TableComponent,
    CallShoppingComponent,
    GetSetComponent,
    DirectiveComponent,
    HttpBookDirective,
    LoginComponent,
    ReactiveFormComponent,
    ViewChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    TableModule,
    ShoppingModule,
    PasswordModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    SweetAlert2Module
  ],
  providers: [
    provideClientHydration(),
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
