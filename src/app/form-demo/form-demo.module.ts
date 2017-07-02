import { NgModule } from '@angular/core';
import { ShareModule} from '../share/share.module'
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { FormDemoRoutingModule } from './form-demo-routing.module';
import { RepeatValidatorDirective } from './repeat-validator.directive';
import { StructuralDirective } from './structural.directive';

@NgModule({
  imports: [
    ShareModule,
    FormDemoRoutingModule
    //如果组件、指令或管道出现在模块的imports数组中，不要把它声明在declarations数组中。 如果它是你自己写的，并且属于当前模块，就要把它声明在declarations数组中。
  ],
  declarations: [
    TemplateDrivenComponent,
    ModelDrivenComponent,
    FormHomeComponent,
    RepeatValidatorDirective,
    StructuralDirective
    ]
})
export class FormDemoModule { }
