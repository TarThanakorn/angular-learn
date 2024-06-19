import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CallComponentComponent } from './call-component/call-component.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { BindingAndOutputComponent } from './binding-and-output/binding-and-output.component';
import { CallMaxMinMeterComponent } from './call-max-min-meter/call-max-min-meter.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwowayComponent } from './twoway/twoway.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgifElseComponent } from './ngif-else/ngif-else.component';
import { ArrayComponent } from './array/array.component';
import { CallRequestComponent } from './call-request/call-request.component';
import { PrimengComponent } from './primeng/primeng.component';
import { TableComponent } from './table/table.component';
import { CallShoppingComponent } from './call-shopping/call-shopping.component';
import { GetSetComponent } from './get-set/get-set.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './authentication/login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'first', component: FirstComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'call', component: CallComponentComponent },
  { path: 'input', component: InputComponentComponent },
  { path: 'bindingandoutput', component: BindingAndOutputComponent },
  { path: 'maxminmeter', component: CallMaxMinMeterComponent },
  { path: 'stylebinding', component: StyleBindingComponent },
  { path: 'twoway', component: TwowayComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngifelse', component: NgifElseComponent },
  { path: 'array', component: ArrayComponent },
  { path: 'request', component: CallRequestComponent },
  { path: 'primeng', component: PrimengComponent },
  { path: 'table', component: TableComponent },
  { path: 'shopping', component: CallShoppingComponent },
  { path: 'getset', component: GetSetComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'viewchild', component: ViewChildComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
