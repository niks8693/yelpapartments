/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '../comment/comment.component.ngfactory';
import * as import2 from '../comment/comment.component';
import * as import3 from '@angular/common';
import * as import4 from './comment-list.component';
import * as import5 from '../comment.service';
var styles_CommentListComponent = [];
export var RenderType_CommentListComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_CommentListComponent,
    data: {}
});
function View_CommentListComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-comment', [], null, null, null, import1.View_CommentComponent_0, import1.RenderType_CommentComponent)),
        import0.ɵdid(49152, null, 0, import2.CommentComponent, [], {
            comment: [
                0,
                'comment'
            ],
            index: [
                1,
                'index'
            ]
        }, null)
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit;
        var currVal_1 = v.context.index;
        ck(v, 1, 0, currVal_0, currVal_1);
    }, null);
}
export function View_CommentListComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵand(16777216, null, null, 1, null, View_CommentListComponent_1)),
        import0.ɵdid(802816, null, 0, import3.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.comments;
        ck(v, 1, 0, currVal_0);
    }, null);
}
function View_CommentListComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-comment-list', [], null, null, null, View_CommentListComponent_0, RenderType_CommentListComponent)),
        import0.ɵdid(114688, null, 0, import4.CommentListComponent, [import5.CommentService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var CommentListComponentNgFactory = import0.ɵccf('app-comment-list', import4.CommentListComponent, View_CommentListComponent_Host_0, {}, {}, []);
