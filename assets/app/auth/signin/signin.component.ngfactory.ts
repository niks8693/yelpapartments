/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './signin.component';
import * as import2 from '@angular/forms';
import * as import3 from '../auth.service';
import * as import4 from '@angular/router';
const styles_SigninComponent:any[] = ([] as any[]);
export const RenderType_SigninComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_SigninComponent,
  data: {}
}
);
export function View_SigninComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),44,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),42,'div',[[
        'class',
        'col-md-8'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Signin'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),0,'hr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),34,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.SigninComponent = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,11).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,11).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.onSubmit()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.ɵbf,([] as any[]),(null as any),(null as any)),
    import0.ɵdid(540672,(null as any),0,import2.FormGroupDirective,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
      ,{form: [
        0,
        'form'
      ]
    },{ngSubmit: 'ngSubmit'}),
    import0.ɵprd(2048,(null as any),import2.ControlContainer,(null as any),[import2.FormGroupDirective]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatusGroup,[import2.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'email'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Email'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'email'
      ]
      ,
      [
        'id',
        'email'
      ]
      ,
      [
        'type',
        'email'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,21)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,21).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,21)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,21)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import2.FormControlName,[
      [
        3,
        import2.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(2048,(null as any),import2.NgControl,(null as any),[import2.FormControlName]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),11,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'password'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Password'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'password'
      ]
      ,
      [
        'id',
        'password'
      ]
      ,
      [
        'type',
        'password'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,34)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,34).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import0.ɵnov(v,34)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import0.ɵnov(v,34)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(16384,(null as any),0,import2.DefaultValueAccessor,[
      import0.Renderer,
      import0.ElementRef,
      [
        2,
        import2.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import2.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import2.DefaultValueAccessor]),
    import0.ɵdid(671744,(null as any),0,import2.FormControlName,[
      [
        3,
        import2.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import2.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import0.ɵprd(2048,(null as any),import2.NgControl,(null as any),[import2.FormControlName]),
    import0.ɵdid(16384,(null as any),0,import2.NgControlStatus,[import2.NgControl],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[
      [
        'class',
        'btn btn-primary'
      ]
      ,
      [
        'type',
        'submit'
      ]

    ]
      ,[[
        8,
        'disabled',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Submit'])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import1.SigninComponent = v.component;
    const currVal_7:any = co.myForm;
    ck(v,11,0,currVal_7);
    const currVal_15:any = 'email';
    ck(v,23,0,currVal_15);
    const currVal_23:any = 'password';
    ck(v,36,0,currVal_23);
  },(ck,v) => {
    var co:import1.SigninComponent = v.component;
    const currVal_0:any = import0.ɵnov(v,13).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,13).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,13).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,13).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,13).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,13).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,13).ngClassPending;
    ck(v,9,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = import0.ɵnov(v,25).ngClassUntouched;
    const currVal_9:any = import0.ɵnov(v,25).ngClassTouched;
    const currVal_10:any = import0.ɵnov(v,25).ngClassPristine;
    const currVal_11:any = import0.ɵnov(v,25).ngClassDirty;
    const currVal_12:any = import0.ɵnov(v,25).ngClassValid;
    const currVal_13:any = import0.ɵnov(v,25).ngClassInvalid;
    const currVal_14:any = import0.ɵnov(v,25).ngClassPending;
    ck(v,20,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_16:any = import0.ɵnov(v,38).ngClassUntouched;
    const currVal_17:any = import0.ɵnov(v,38).ngClassTouched;
    const currVal_18:any = import0.ɵnov(v,38).ngClassPristine;
    const currVal_19:any = import0.ɵnov(v,38).ngClassDirty;
    const currVal_20:any = import0.ɵnov(v,38).ngClassValid;
    const currVal_21:any = import0.ɵnov(v,38).ngClassInvalid;
    const currVal_22:any = import0.ɵnov(v,38).ngClassPending;
    ck(v,33,0,currVal_16,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22);
    const currVal_24:boolean = !co.myForm.valid;
    ck(v,41,0,currVal_24);
  });
}
function View_SigninComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-signin',([] as any[]),(null as any),(null as any),(null as any),View_SigninComponent_0,RenderType_SigninComponent)),
    import0.ɵdid(114688,(null as any),0,import1.SigninComponent,[
      import3.AuthService,
      import4.Router,
      import4.ActivatedRoute
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const SigninComponentNgFactory:import0.ComponentFactory<import1.SigninComponent> = import0.ɵccf('app-signin',import1.SigninComponent,View_SigninComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvTmlraGlsL0Rlc2t0b3AvQW5ndWxhckFwcHMveWVscGFwdC9hc3NldHMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvTmlraGlsL0Rlc2t0b3AvQW5ndWxhckFwcHMveWVscGFwdC9hc3NldHMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9OaWtoaWwvRGVza3RvcC9Bbmd1bGFyQXBwcy95ZWxwYXB0L2Fzc2V0cy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvTmlraGlsL0Rlc2t0b3AvQW5ndWxhckFwcHMveWVscGFwdC9hc3NldHMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMuU2lnbmluQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgPGgxPlNpZ25pbjwvaDE+XHJcbiAgICAgICAgPGhyPlxyXG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG48L2Rpdj4iLCI8YXBwLXNpZ25pbj48L2FwcC1zaWduaW4+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7TUFDYjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNCO0lBQ2xCO0lBQUk7SUFBVztJQUNmO0lBQUk7TUFDSjtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQTJCO1FBQUE7UUFBQTtNQUFBO01BQTNCO0lBQUE7Z0JBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBbUQ7TUFDL0M7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF3QjtNQUNwQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO0lBQWE7SUFDaEM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTs7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUN3QjtJQUN0QjtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7TUFDcEI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFzQjtJQUFnQjtJQUN0QztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQzJCO0lBQ3pCO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUMyQjtJQUFlO0lBQ3ZDOzs7O0lBYkQ7SUFBTixVQUFNLFNBQU47SUFJUTtJQURBLFVBQ0EsVUFEQTtJQU1BO0lBREEsVUFDQSxVQURBOzs7SUFSUjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFNBQUEscUVBQUE7SUFHUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsMEVBQUE7SUFLQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNEVBQUE7SUFJSjtJQURBLFVBQ0EsVUFEQTs7Ozs7SUNmWjtnQkFBQTs7OztJQUFBO0tBQUE7OztJQUFBOzs7In0=