(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front-office-client-layout-client-layout-module"],{

/***/ "4bTy":
/*!*******************************************************!*\
  !*** ./src/app/front-office/bills/bills.component.ts ***!
  \*******************************************************/
/*! exports provided: BillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsComponent", function() { return BillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BillsComponent.ɵfac = function BillsComponent_Factory(t) { return new (t || BillsComponent)(); };
BillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillsComponent, selectors: [["app-bills"]], decls: 2, vars: 0, template: function BillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " bills works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9iaWxscy9iaWxscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bills',
                templateUrl: './bills.component.html',
                styleUrls: ['./bills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HvEi":
/*!*********************************************************************!*\
  !*** ./src/app/front-office/client-layout/client-layout.routing.ts ***!
  \*********************************************************************/
/*! exports provided: ClientLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutRoutes", function() { return ClientLayoutRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "vo3W");
/* harmony import */ var _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messervices/messervices.component */ "xyaa");
/* harmony import */ var _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../front-office/messervices/client-docs/client-docs.component */ "dDWB");



const ClientLayoutRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], data: { title: 'Accueil' } },
    { path: 'myservices', component: _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_1__["MesservicesComponent"], data: { title: 'Mes services' } },
    { path: 'docs', component: _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_2__["ClientDocsComponent"], data: { title: 'Documents' } }
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
];


/***/ }),

/***/ "dDWB":
/*!*******************************************************************************!*\
  !*** ./src/app/front-office/messervices/client-docs/client-docs.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClientDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDocsComponent", function() { return ClientDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "pYyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _services_management_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/management/management.service */ "NMxE");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/notification/notification.service */ "nak+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "UhP/");


























function ClientDocsComponent_div_25_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_25_div_1_div_8_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const file_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r11.showActions(file_r10._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_25_div_1_div_8_div_1_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const file_r10 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r13.downloadTask(file_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/img/", file_r10.docPath.split(".").pop(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r10.docName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", file_r10 == null ? null : file_r10._id);
} }
function ClientDocsComponent_div_25_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientDocsComponent_div_25_div_1_div_8_div_1_Template, 7, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", doc_r6.docs);
} }
function ClientDocsComponent_div_25_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aucun fichier trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientDocsComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_25_div_1_Template_mat_toolbar_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const doc_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.rotateArrow(doc_r6.docType, "show" + doc_r6.docType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientDocsComponent_div_25_div_1_div_8_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientDocsComponent_div_25_div_1_div_9_Template, 6, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", doc_r6.docType, " (", doc_r6.docs.length, " Fichiers)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", doc_r6.docType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "show", doc_r6.docType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r6.docs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r6.docs.length <= 0);
} }
function ClientDocsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientDocsComponent_div_25_div_1_Template, 10, 6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.service == null ? null : ctx_r0.service.clientDocs);
} }
function ClientDocsComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", doc_r17.docType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doc_r17.docType, " ");
} }
function ClientDocsComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Selectionner un type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientDocsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientDocsComponent_div_40_Template_i_click_4_listener() { const item_r18 = ctx.$implicit; return item_r18.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/img/", item_r18 == null ? null : item_r18.file == null ? null : item_r18.file.name.split(".").pop(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18 == null ? null : item_r18.file == null ? null : item_r18.file.name.split(".")[0]);
} }
const _c0 = function (a0) { return { "another-file-over-class": a0 }; };
const _c1 = function (a0) { return { "width": a0 }; };
const uri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].uri;
class ClientDocsComponent {
    constructor(sanitizer, mService, activatedRoute, authservice, fb, router, notificationService, snackBar) {
        this.sanitizer = sanitizer;
        this.mService = mService;
        this.activatedRoute = activatedRoute;
        this.authservice = authservice;
        this.fb = fb;
        this.router = router;
        this.notificationService = notificationService;
        this.snackBar = snackBar;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: uri, removeAfterUpload: true, allowedFileType: ['image', 'doc', 'pdf', 'xls', 'ppt'] });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.receiverId = [];
        this.notifLink = {};
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.uploader.onAfterAddingFile = (fileItem) => {
            this.filePreviewPath = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
        };
        this.docsForm = this.fb.group({
            docsList: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    ngOnInit() {
        this.getService();
    }
    loadfiles() {
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            let document = {};
            document.docName = JSON.parse(response).originalname.substring(0, JSON.parse(response).originalname.indexOf('.'));
            document.docPath = JSON.parse(response).uploadname;
            this.service.clientDocs.forEach(doc => {
                if (doc.docType == this.docsForm.controls.docsList.value) {
                    doc.docs.push(document);
                }
            });
        };
        this.uploader.onCompleteAll = () => {
            this.mService.updateService(this.id, this.service).subscribe(data => {
                if (data.success) {
                    this.getService();
                    this.receiverId.push(this.service.clientConsult);
                    this.service.tasks.forEach(task => {
                        this.receiverId.push(task.user);
                    });
                    this.notifLink.url = "/tasks";
                    this.notifLink.params = 'id';
                    this.notifLink.paramsValue = this.service._id;
                    let clt = this.authservice.getUserfromToken();
                    let msg = clt.pm == true ? clt.name : clt.fname + ' ' + clt.lname;
                    this.notification = {
                        'sender': this.notificationService.getIdfromToken(),
                        'receiver': this.receiverId,
                        'title': this.service.name,
                        'message': msg + ' a envoyé de nouveaux documents',
                        'link': this.notifLink,
                    };
                    this.notificationService.createNotification(JSON.stringify(this.notification)).subscribe(data2 => {
                        if (data2.success) {
                            console.log(this.notification);
                            console.log(data2);
                        }
                    });
                    this.snackBar.open('Documents envoyés au cabinet', 'X', {
                        duration: 6000,
                        verticalPosition: 'top',
                        panelClass: ['custom-snack'],
                    });
                }
                else {
                    console.log(data);
                    this.snackBar.open('Une erreur s\'est produite', 'X', {
                        duration: 6000,
                        verticalPosition: 'top',
                        panelClass: ['custom-snack-error'],
                    });
                }
            });
        };
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileOverAnother(e) {
        this.hasAnotherDropZoneOver = e;
    }
    getService() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.id = params['id'];
            if (this.id) {
                this.mService.getOneService(this.id)
                    .subscribe(res => {
                    this.service = res;
                    console.log(this.service);
                }, err => {
                    console.log(err);
                });
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
    showActions(id) {
        let actions = document.getElementById(id);
        if (actions.className != "")
            actions.className = "";
        else
            actions.className = "actions";
    }
    deleteTask(file) {
        this.service.clientDocs = this.service.clientDocs.filter(document => document._id != file);
        this.mService.updateService(this.id, this.service).subscribe(data => {
            if (data.status) {
                this.snackBar.open('Document Supprimé', 'X', {
                    duration: 6000,
                    verticalPosition: 'top',
                    panelClass: ['custom-snack'],
                });
            }
            else {
                console.log(data);
                this.snackBar.open('Une erreur s\'est produite', 'X', {
                    duration: 6000,
                    verticalPosition: 'top',
                    panelClass: ['custom-snack-error'],
                });
            }
        });
    }
    downloadTask(file) {
        var filename = file.docPath;
        this.mService.downloadDoc(filename)
            .subscribe(data => Object(file_saver__WEBPACK_IMPORTED_MODULE_9__["saveAs"])(data, file.docName + '.' + filename.split('.').pop()), error => console.error(error));
    }
    rotateArrow(section, action) {
        let files = document.getElementById(section);
        if (!files.classList.contains('down')) {
            files.classList.add('down');
        }
        else {
            files.classList.remove('down');
        }
        this.showActions(action);
    }
}
ClientDocsComponent.ɵfac = function ClientDocsComponent_Factory(t) { return new (t || ClientDocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_management_management_service__WEBPACK_IMPORTED_MODULE_5__["ManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
ClientDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientDocsComponent, selectors: [["app-client-docs"]], decls: 48, vars: 14, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "card-header-tabs", "card-header-info"], [1, "nav-tabs-navigation"], [1, "nav-tabs-wrapper"], ["data-tabs", "tabs", 1, "nav", "nav-tabs", "pull-left"], [1, "nav-item"], ["mat-button", "", "href", "#taches", "data-toggle", "tab", 1, "nav-link", "active"], [1, "material-icons"], [1, "ripple-container"], ["mat-button", "", "href", "#uploadfile", "data-toggle", "tab", 1, "nav-link"], [1, "card-body"], [1, "tab-content"], ["id", "taches", 1, "tab-pane", "active"], [1, "files"], ["class", "row", 4, "ngIf"], ["id", "uploadfile", 1, "tab-pane"], [3, "formGroup", "ngSubmit"], [1, "col-md-6"], ["placeholder", "Type de document", "formControlName", "docsList"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["ng2FileDrop", "", "accept", "application/msword, application/vnd.ms-excel, \n                    application/vnd.ms-powerpoint, text/plain,\n                    application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, \n                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, \n                    application/vnd.openxmlformats-officedocument.presentationml.slideshow, image/*", 1, "well", "my-drop-zone", 2, "width", "100%", 3, "ngClass", "uploader", "fileOver"], [1, "dropfiles"], ["type", "file", "ng2FileSelect", "", "multiple", "", "accept", "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain,\n                    application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document, \n                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, \n                    application/vnd.openxmlformats-officedocument.presentationml.slideshow, image/*", 1, "inputFile", 2, "display", "none", "cursor", "pointer", 3, "uploader"], ["fileInput", ""], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], ["type", "submit", 1, "btn", "btn-primary", "btn-round", "pull-right", 3, "disabled"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "card-header-primary", "custom-header", 2, "margin-top", "20px", 3, "click"], [2, "margin-left", "8px"], [2, "flex", "1 1 auto"], [1, "material-icons", "rotate", 3, "id"], [1, "actions", 3, "id"], ["class", "row", "style", "margin-top:20px", 4, "ngIf"], ["style", "margin-top:20px", "class", "row", 4, "ngIf"], [1, "row", 2, "margin-top", "20px"], ["style", "text-align: center;cursor: pointer", "class", "col-sm-2", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "text-align", "center", "cursor", "pointer"], [2, "width", "80px", "height", "80px", 3, "src", "click"], [1, "actions", 2, "cursor", "pointer", 3, "id"], [1, "material-icons", "text-primary", 2, "margin", "auto", "font-size", "26px", 3, "click"], [1, "form-row", "text-center", "col-md-12"], [1, "material-icons", "demande", 2, "font-size", "700%"], [2, "width", "100%"], [3, "value"], [1, "col-md-2"], [2, "width", "80px", "height", "80px", 3, "src"], [2, "text-align", "left"], [1, "close", "material-icons", "text-danger", 2, "font-size", "26px", "margin-right", "25px", 3, "click"]], template: function ClientDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " documents envoy\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Envoyer des documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ClientDocsComponent_div_25_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientDocsComponent_Template_form_ngSubmit_27_listener() { return ctx.loadfiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ClientDocsComponent_mat_option_30_Template, 2, 2, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClientDocsComponent_mat_error_31_Template, 2, 0, "mat-error", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileOver", function ClientDocsComponent_Template_label_fileOver_33_listener($event) { return ctx.fileOverAnother($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cliquer ou faire glisser les fichiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ClientDocsComponent_div_40_Template, 6, 2, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Avancement d'upload: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.service == null ? null : ctx.service.clientDocs.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.docsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service == null ? null : ctx.service.clientDocs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.docsForm.controls.docsList.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.hasAnotherDropZoneOver))("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx.uploader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uploader.queue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.uploader.progress + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploader.queue.length == 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"]], styles: [".my-drop-zone[_ngcontent-%COMP%] {\n  border: dotted 3px lightgray;\n  height: 300px;\n  border-radius: 20px;\n  text-align: center;\n}\n\n.dropfiles[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-anchor: middle;\n  line-height: 300px;\n  color: lightgray;\n}\n\n.files[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dotted 3px red;\n}\n\n\n\n.another-file-over-class[_ngcontent-%COMP%] {\n  border: dotted 3px green;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 28px;\n  cursor: pointer;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.demande[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.demande.material-icons[_ngcontent-%COMP%] {\n  font-size: 1000%;\n  color: gray;\n}\n\n.rotate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s linear;\n}\n\n.rotate.down[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.custom-header[_ngcontent-%COMP%] {\n  background: white !important;\n  color: #808080 !important;\n  border-bottom: #808080 1px solid;\n  font-weight: 100px;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL21lc3NlcnZpY2VzL2NsaWVudC1kb2NzL2NsaWVudC1kb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLDRCQUFBO0VBQ1osYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFUjs7QUFDSTtFQUNJLGFBQUE7QUFFUjs7QUFBSTtFQUFnQixzQkFBQTtBQUlwQjs7QUFKOEMsZ0RBQUE7O0FBQzFDO0VBQTJCLHdCQUFBO0FBUS9COztBQUxJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFRTjs7QUFMSTtFQUNFLGFBQUE7QUFRTjs7QUFMSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVFOOztBQU5JO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FBU0w7O0FBUEk7RUFDRSxlQUFBO0VBR0EsMkJBQUE7QUFVTjs7QUFSSTtFQUdFLHlCQUFBO0FBV047O0FBUkk7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBV04iLCJmaWxlIjoic3JjL2FwcC9mcm9udC1vZmZpY2UvbWVzc2VydmljZXMvY2xpZW50LWRvY3MvY2xpZW50LWRvY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZHJvcC16b25lIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTsgXG4gICAgaGVpZ2h0OjMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIH1cbiAgICAuZHJvcGZpbGVze1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OjMwMHB4O1xuICAgICAgICBjb2xvcjpsaWdodGdyYXk7XG4gICAgfVxuICAgIFxuICAgIC5maWxlc3tcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgIH1cbiAgICAubnYtZmlsZS1vdmVyIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDsgfSAvKiBEZWZhdWx0IGNsYXNzIGFwcGxpZWQgdG8gZHJvcCB6b25lcyBvbiBvdmVyICovXG4gICAgLmFub3RoZXItZmlsZS1vdmVyLWNsYXNzIHsgYm9yZGVyOiBkb3R0ZWQgM3B4IGdyZWVuOyB9XG4gICAgXG4gICAgXG4gICAgLmNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAyOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aW9uc3tcbiAgICAgIGRpc3BsYXkgOiBub25lO1xuICAgIH1cblxuICAgIC5kZW1hbmRle1xuICAgICAgd2lkdGg6IDEwMCUgO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZGVtYW5kZS5tYXRlcmlhbC1pY29uc3tcbiAgICAgZm9udC1zaXplOiAxMDAwJTtcbiAgICAgY29sb3I6IGdyYXkgO1xuICAgIH1cbiAgICAucm90YXRlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgfVxuICAgIC5yb3RhdGUuZG93biB7XG4gICAgICAtbW96LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jdXN0b20taGVhZGVye1xuICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yIDogIzgwODA4MCAhaW1wb3J0YW50IDtcbiAgICAgIGJvcmRlci1ib3R0b20gOiAjODA4MDgwIDFweCBzb2xpZCA7XG4gICAgICBmb250LXdlaWdodDogMTAwcHggO1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientDocsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-docs',
                templateUrl: './client-docs.component.html',
                styleUrls: ['./client-docs.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _services_management_management_service__WEBPACK_IMPORTED_MODULE_5__["ManagementService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "omSo":
/*!********************************************************************!*\
  !*** ./src/app/front-office/client-layout/client-layout.module.ts ***!
  \********************************************************************/
/*! exports provided: ClientLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutModule", function() { return ClientLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _client_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-layout.routing */ "HvEi");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "vo3W");
/* harmony import */ var _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../messervices/messervices.component */ "xyaa");
/* harmony import */ var _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../front-office/messervices/client-docs/client-docs.component */ "dDWB");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "pYyI");
/* harmony import */ var _bills_bills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bills/bills.component */ "4bTy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
























class ClientLayoutModule {
}
ClientLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClientLayoutModule });
ClientLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClientLayoutModule_Factory(t) { return new (t || ClientLayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_client_layout_routing__WEBPACK_IMPORTED_MODULE_4__["ClientLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientLayoutModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_6__["MesservicesComponent"],
        _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_7__["ClientDocsComponent"],
        _bills_bills_component__WEBPACK_IMPORTED_MODULE_9__["BillsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_client_layout_routing__WEBPACK_IMPORTED_MODULE_4__["ClientLayoutRoutes"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                ],
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _messervices_messervices_component__WEBPACK_IMPORTED_MODULE_6__["MesservicesComponent"],
                    _front_office_messervices_client_docs_client_docs_component__WEBPACK_IMPORTED_MODULE_7__["ClientDocsComponent"],
                    _bills_bills_component__WEBPACK_IMPORTED_MODULE_9__["BillsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vo3W":
/*!*****************************************************!*\
  !*** ./src/app/front-office/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/management/management.service */ "NMxE");
/* harmony import */ var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee/employee.service */ "8ZfG");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin/admin.service */ "VKgo");
/* harmony import */ var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/configuration/configuration.service */ "rHPJ");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
























function HomeComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Montant : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.getAmount().all, " ");
} }
function HomeComponent_i_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_i_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Montant : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getAmount().unpaid, " ");
} }
function HomeComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00B0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r26.numero, "");
} }
function HomeComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date de creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r27 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r7.stringAsDate(data_r27.createdAt), "dd/MM/yyyy HH:mm"), "");
} }
function HomeComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Montant Total HT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r28.amount);
} }
function HomeComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_81_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pay\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_81_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_81_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.togglModal(data_r29._id, data_r29.numero); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "non pay\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_td_81_span_1_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_td_81_a_2_Template, 2, 0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r29.paid_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r29.paid_status);
} }
function HomeComponent_th_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_84_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_84_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const data_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.print(data_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
function HomeComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 54);
} }
function HomeComponent_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 45);
} }
function HomeComponent_td_100_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 56);
} if (rf & 2) {
    const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r40.uri + data_r39.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_td_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_td_100_img_1_Template, 1, 1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r39.image);
} }
function HomeComponent_th_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nom et Pr\u00E9nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r42.fname, " ", data_r42.lname, " ");
} }
function HomeComponent_th_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r43.email);
} }
function HomeComponent_th_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r44.tel, " ");
} }
function HomeComponent_tr_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 53);
} }
function HomeComponent_tr_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 54);
} }
const _c0 = function () { return ["/myservices"]; };
const _c1 = function (a0, a1) { return { "card-header-danger": a0, "card-header-success": a1, "card-header card-header-success card-header-icon": true }; };
const _c2 = function () { return [5, 10, 20]; };
class HomeComponent {
    constructor(employeeService, mService, authservice, adminService, cService, datepipe) {
        this.employeeService = employeeService;
        this.mService = mService;
        this.authservice = authservice;
        this.adminService = adminService;
        this.cService = cService;
        this.datepipe = datepipe;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].awsUrl;
        this.unpaidbills = 0;
        this.serviceEncours = 0;
        this.clientId = this.authservice.getIdfromToken();
        this.displayedColumns = ['n', 'dateCreation', 'montantTotal', 'status', 'action'];
        this.displayedColumnsUsers = ['image', 'Nom', 'Email', 'Tel'];
        this.fetchBills();
        this.fetchServices();
        this.getclient();
    }
    ngOnInit() {
    }
    fetchServices() {
        this.vis = [];
        this.mService.getServicesByClientId(this.clientId)
            .subscribe(res => {
            this.services = res;
            for (let i = 0; i < res.length; ++i) {
                if (res[i].finish_date === 'En cours') {
                    this.serviceEncours++;
                }
            }
            this.employeeService.getUsers()
                .subscribe(res => {
                this.users = res;
                this.services.forEach(service => {
                    if (this.users.some(user => user._id == service.clientConsult)) {
                        if (!this.vis.some(one => one._id == service.clientConsult))
                            this.vis.push(this.users.find(user => user._id == service.clientConsult));
                    }
                });
                this.usersData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
                this.usersData.data = this.vis;
                this.usersData.paginator = this.paginatorUsers;
                this.usersData.sort = this.sortUsers;
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
        });
    }
    applyFilter(filterValue) {
        this.MyDataSource.filter = filterValue.trim().toLowerCase();
    }
    applyFilterUsers(filterValue) {
        this.usersData.filter = filterValue.trim().toLowerCase();
    }
    getclient() {
        this.adminService.getOneClient(this.clientId)
            .subscribe(res => {
            this.client = res;
            this.getConfig();
        }, err => {
            console.log(err);
        });
    }
    fetchBills() {
        this.employeeService.getbillForClient(this.clientId)
            .subscribe(res => {
            this.bills = res;
            console.log(this.bills);
            let tmp = 0;
            for (let i = 0; i < res.length; ++i) {
                if (res[i].paid_status === true) {
                    tmp++;
                }
            }
            this.unpaidbills = res.length - tmp;
            this.MyDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
            this.MyDataSource.data = res;
            this.MyDataSource.paginator = this.paginator;
            this.MyDataSource.sort = this.sort;
        }, err => {
            console.log(err);
        });
    }
    getAmount() {
        let all = 0;
        let unpaid = 0;
        this.bills.forEach(bill => {
            if (bill.paid_status == false)
                unpaid += Number(bill.amount.replace(/\s/g, ''));
            all += Number(bill.amount.replace(/\s/g, ''));
        });
        let result = {
            "all": Number(all.toString().replace(/\s/g, '')).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '),
            "unpaid": Number(unpaid.toString().replace(/\s/g, '')).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '),
        };
        return result;
    }
    stringAsDate(dateStr) {
        return new Date(dateStr);
    }
    getConfig() {
        this.cService.getConfig()
            .subscribe(res => {
            if (res.length > 0) {
                this.config = res[0].structure.find(one => one._id == this.client.structure);
            }
        }, err => {
            console.log(err);
        });
    }
    print(bill) {
        let billTotalht = 0;
        let billTotalttc = Number(bill.amount.replace(/\s/g, '')) + bill.vat + bill.rs + bill.debour + Number("0.60".replace(/\s/g, ''));
        console.log(Number(bill.amount.replace(/\s/g, '')));
        console.log(bill.rs);
        console.log(bill.debour);
        billTotalttc = Number(billTotalttc.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        let printContents, popupWin;
        let service = this.services.find(one => one._id == bill.service);
        if (bill.type == 1) {
            service.name = "Avance " + service.name;
            service.montant = bill.amount;
        }
        let date = this.datepipe.transform(this.stringAsDate(bill.createdAt), 'yyyy-MM-dd HH:mm');
        // tslint:disable-next-line:max-line-length
        printContents = `<div class="container printable" id="bill">
    <div class="row">
        <div class="col-md-12">
    		<div class="invoice-title">
				<h3>` + date + `</h3>
				<h3 class="pull-right">Note d'honoraires N° ` + bill.numero + `</h3>
    		</div>
    		<hr>
    		<div class="row">
    			<div class="col-md-6">
    				<address>
        			<strong>Facturé de:</strong><br>` +
            this.config.name + `<br>` +
            this.config.mat_fis + `<br>` +
            this.config.email + `<br>` +
            this.config.adress +
            `</address>
					</div>
					<div class="col-md-6 float-right">
							 <div class="logo float-right">
									<a href="javascript:;" class="simple-text">
											<div class="logo-img">
												<img width="90px" height="auto" src="` + this.uri + this.config.image + `"/> 
											</div>
									</a>
							</div> 
							<address>
              <strong>Facturé à:</strong><br>`;
        if (!this.client.name) {
            printContents += '<div>' + this.client.fname + ' ' + this.client.lname + '</div>';
        }
        else {
            printContents += '<div>' + this.client.name + '</div>';
        }
        printContents += `<div>` + this.client.mat_fis + `</div>
                                    ` + this.client.adress + `<br>
                                    ` + this.client.tel + `<br>
                                    ` + this.client.email + `</address>
						</div>
    		</div>
    	</div>
    </div>
    
    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
          <div class="panel-heading">`;
        if (bill.type == 0) {
            printContents += "<h3 class='panel-title'><strong><strong>Résumé du note d'honoraires</strong></h3>";
        }
        else {
            printContents += "<h3 class='panel-title'><strong><strong>Avance sur note d'honoraires</strong></h3>";
        }
        printContents += `</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Libellé</strong></td>
        							<td class="text-center"><strong></strong></td>
        							<td class="text-center"><strong></strong></td>
        							<td class="text-right"><strong>Prix HT</strong></td>
        							<td class="text-center"><strong></strong></td>
                                </tr>
    						</thead>
    						<tbody>
									<ng-container >
											<tr>
													<td>` + service.name + `</td>
													<td class="text-center">
													</td>
													<td class="text-center"></td>
													<td class="text-right">` + service.montant + `</td>
													<td class="text-right"></td>
												</tr>	
                  </ng-container>`;
        if (this.bills && bill.type == 0) {
            this.bills.forEach(one => {
                if (one.type == 1) {
                    printContents += `<tr>
                      <td>Avance sur note d'honoraires : ` + one.numero + `</td>
                      <td class="text-center"></td>
                      <td class="text-center"> <span class="noprint">` + this.datepipe.transform(this.stringAsDate(one.createdAt), 'yyyy-MM-dd') + `</span></td>
                      <td class="text-right">-` + one.amount + `</td>
                      <td class="text-right"></td>
                    </tr>`;
                }
            });
        }
        if (bill.debours.length > 0) {
            printContents += `<tr>
                    <td><strong>Débours</strong></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-right"></td>
                    <td class="text-right"></td>
                  </tr>`;
            bill.debours.forEach(one => {
                printContents += `<tr>
                      <td>` + one.libelle + `</td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                      <td class="text-right">` + one.montant + `</td>
                      <td class="text-right"></td>
                    </tr>`;
            });
        }
        printContents += `<tr>
    								<td style="border-top: 2px solid;" class="thick-line"></td>
    								<td style="border-top: 2px solid;" class="thick-line"></td>
    								<td style="border-top: 2px solid;" class="thick-line text-center"></td>
    								<td style="border-top: 2px solid;" class="thick-line text-right"></td>
								  </tr>
						
							   	<tr>
										<td style="border: none;"></td>	<td style="border: none;"></td>
										<td class="no-line text-center"><strong>Total HT</strong></td>
										<td class="no-line text-right">` + bill.amount + `</td>
									</tr>
    							<tr>
                  <td style="border: none;"></td>	<td style="border: none;"></td>
                  <td class="no-line text-center"><strong>TVA</strong></td>
    							<td class="no-line text-right">13%</td>
								</tr>
								<tr>
									<td style="border: none;"></td>	<td style="border: none;"></td>
									<td class="no-line text-center"><strong>Total TVA</strong></td>
    								<td class="no-line text-right">` + Number(bill.vat.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + `</td>
								</tr>
								<tr>
									<td style="border:none;"></td>	<td style="border: none;"></td>
									<td class="no-line text-center"><strong>Timbre fiscal</strong></td>
    								<td class="no-line text-right">0.600</td>
								</tr>
								<tr>
										<td style="border: none;"></td>	<td style="border: none;"></td>
										<td class="no-line text-center"><strong>R/S</strong></td>
										<td class="no-line text-right">` + Number(bill.rs.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + `</td>
									</tr>
    							<tr>
										<tr>
												<td style="border: none;"></td>	<td style="border: none;"></td>
												<td class="no-line text-center"><strong>Débours</strong></td>
												<td class="no-line text-right">` + Number(bill.debour.toString().replace(/\s/g, '')).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + `</td>
											</tr>
										<tr>
    								<td style="border: none;"></td>
    								<td style="border: none;"></td>
    								<td class="no-line text-center"><strong>Total</strong></td>
    								<td class="no-line text-right">` + billTotalttc + `</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>`;
        popupWin = window.open('', '_blank', 'top=0,left=50%,height=' + screen.height + ',width=' + screen.width);
        popupWin.document.open();
        popupWin.document
            .write(`<html>
     ${$('head').clone().html()}
    <body onload="window.print();window.close()">${printContents}</body></html>`);
        popupWin.document.close();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginatorUsers = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortUsers = _t.first);
    } }, decls: 113, vars: 26, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "card", "card-stats"], [1, "card-header", "card-header-primary", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-category"], [1, "card-title"], [1, "card-footer"], [1, "stats"], [1, "material-icons", "text-primary"], [3, "routerLink"], [1, "card-header", "card-header-warning", "card-header-icon"], [1, "material-icons", "text-warning"], [1, "text-warning", 3, "routerLink"], [1, "card-header", "card-header-info", "card-header-icon"], ["class", "stats", 4, "ngIf"], [3, "ngClass"], ["class", "material-icons", 4, "ngIf"], [1, "col-lg-6", "col-md-12"], [1, "card"], [1, "card-header", "card-header-warning"], [1, "card-body", "table-responsive"], ["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "table", "borderless", 3, "dataSource"], ["matColumnDef", "n"], ["mat-header-cell", "", "mat-sort-header", "", "class", "header", 4, "matHeaderCellDef"], ["class", "pt-3 pb-3", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dateCreation"], ["matColumnDef", "montantTotal"], ["matColumnDef", "status"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "card-header", "card-header-primary"], ["matColumnDef", "image"], ["matColumnDef", "Nom"], ["matColumnDef", "Email"], ["matColumnDef", "Tel"], [1, "text-info"], [1, "text-danger"], ["mat-header-cell", "", "mat-sort-header", "", 1, "header"], ["mat-cell", "", 1, "pt-3", "pb-3"], ["class", "badge badge-success", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#myModal", "class", "enzel badge badge-warning", 3, "click", 4, "ngIf"], [1, "badge", "badge-success"], ["data-toggle", "modal", "data-target", "#myModal", 1, "enzel", "badge", "badge-warning", 3, "click"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], [1, "enzel", "text-primary", "material-icons", "mr-2", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["class", "img", "style", "width:50px;height:50px", 3, "src", 4, "ngIf"], [1, "img", 2, "width", "50px", "height", "50px", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mes Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "remove_red_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Voir tout...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Services en cours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "remove_red_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Voir tout...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mes Factures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HomeComponent_i_51_Template, 2, 0, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, HomeComponent_i_52_Template, 2, 0, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Factures non pay\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, HomeComponent_div_58_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Mes Factures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_67_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](70, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, HomeComponent_th_71_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, HomeComponent_td_72_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](73, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, HomeComponent_th_74_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, HomeComponent_td_75_Template, 3, 4, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](76, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, HomeComponent_th_77_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, HomeComponent_td_78_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, HomeComponent_th_80_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, HomeComponent_td_81_Template, 3, 2, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](82, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, HomeComponent_th_83_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomeComponent_td_84_Template, 4, 0, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, HomeComponent_tr_85_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HomeComponent_tr_86_Template, 1, 0, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "mat-paginator", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Vis \u00E0 vis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_95_listener($event) { return ctx.applyFilterUsers($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, HomeComponent_th_99_Template, 1, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, HomeComponent_td_100_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](101, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, HomeComponent_th_102_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, HomeComponent_td_103_Template, 2, 2, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, HomeComponent_th_105_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, HomeComponent_td_106_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](107, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, HomeComponent_th_108_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, HomeComponent_td_109_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, HomeComponent_tr_110_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, HomeComponent_tr_111_Template, 1, 0, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "mat-paginator", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.services == null ? null : ctx.services.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serviceEncours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bills == null ? null : ctx.bills.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.unpaidbills > 0, ctx.unpaidbills <= 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unpaidbills > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unpaidbills <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unpaidbills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.MyDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.usersData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  font-size: 0.95rem;\n  font-weight: 500;\n  border-top-width: 0;\n  border-bottom-width: 1px;\n}\n\n.enzel[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.invoice-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .invoice-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > .no-line[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > .no-line[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > .thick-line[_ngcontent-%COMP%] {\n  border-top: 2px solid;\n}\n\n.noprint[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.printOnly[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.printOnly[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.montant[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 80px;\n  display: inline;\n  border: 0;\n}\n\n  .cdk-overlay-container {\n  \n  position: fixed;\n  z-index: 1060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtb2ZmaWNlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBQ0E7RUFDQSxlQUFBO0FBRUE7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtBQUdKOztBQURJO0VBQ0UsYUFBQTtBQUlOOztBQUZJO0VBQ0UsZUFBQTtBQUtOOztBQUZFO0VBQ0UsYUFBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFLSjs7QUFGRTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xufVxuLmVuemVse1xuY3Vyc29yOiBwb2ludGVyO1xufVxuLmludm9pY2UtdGl0bGUgaDIsIC5pbnZvaWNlLXRpdGxlIGgzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YWJsZSA+IHRib2R5ID4gdHIgPiAubm8tbGluZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IC5uby1saW5lIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udGFibGUgPiB0Ym9keSA+IHRyID4gLnRoaWNrLWxpbmUge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbn1cbiAgICAubm9wcmludCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAucHJpbnRPbmx5IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gIFxuICAucHJpbnRPbmx5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vbnRhbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICA6Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgLyogRG8geW91IGNoYW5nZXMgaGVyZSAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTA2MDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }, { type: _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }, { type: _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }]
        }], paginatorUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }]
        }], sortUsers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "xyaa":
/*!*******************************************************************!*\
  !*** ./src/app/front-office/messervices/messervices.component.ts ***!
  \*******************************************************************/
/*! exports provided: MesservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesservicesComponent", function() { return MesservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/management/management.service */ "NMxE");
/* harmony import */ var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/employee/employee.service */ "8ZfG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");










function MesservicesComponent_tbody_23_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", user_r5.fname, " ", user_r5.lname, " ");
} }
function MesservicesComponent_tbody_23_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MesservicesComponent_tbody_23_ng_container_3_td_1_Template, 2, 2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", service_r3.clientConsult == user_r5._id);
} }
const _c0 = function () { return ["/docs"]; };
const _c1 = function (a0) { return { id: a0 }; };
function MesservicesComponent_tbody_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MesservicesComponent_tbody_23_Template_tbody_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const service_r3 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.checkSuper(service_r3.clientConsult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MesservicesComponent_tbody_23_ng_container_3_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-progress-bar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.avenceService(service_r3.tasks), " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.avenceService(service_r3.tasks));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, ctx_r0.stringAsDate(service_r3.createdAt), "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r3.finish_date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, service_r3._id));
} }
function MesservicesComponent_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.user == null ? null : ctx_r1.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MesservicesComponent_h6_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permo_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](permo_r11.groupename);
} }
class MesservicesComponent {
    constructor(employeeService, mService) {
        this.employeeService = employeeService;
        this.mService = mService;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.awsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].awsUrl;
    }
    ngOnInit() {
        this.fetchServices();
        this.fetchUsers();
    }
    fetchServices() {
        this.mService.getServices()
            .subscribe(res => {
            this.services = res.filter(service => service.client == this.employeeService.getIdfromToken());
            this.superId = this.services[0].clientConsult;
            this.employeeService.getOneUser(this.superId)
                .subscribe(res => {
                this.user = res;
                this.user.image = this.awsUrl + res.image;
                console.log(this.user);
            }, err => {
                console.log(err);
            });
        }, err => {
            console.log(err);
        });
    }
    checkSuper(id) {
        this.employeeService.getOneUser(id)
            .subscribe(res => {
            this.user = res;
            this.user.image = this.awsUrl + res.image;
        }, err => {
            console.log(err);
        });
    }
    fetchUsers() {
        this.employeeService.getUsers()
            .subscribe(res => {
            this.users = res;
        }, err => {
            console.log(err);
        });
    }
    avenceService(tasks) {
        let completed = [];
        let all = [];
        tasks.forEach(one => {
            if (one.status == 'completed')
                completed.push(one);
            all.push(one);
        });
        return (completed.length / all.length) * 100;
    }
    stringAsDate(dateStr) {
        return new Date(dateStr);
    }
}
MesservicesComponent.ɵfac = function MesservicesComponent_Factory(t) { return new (t || MesservicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"])); };
MesservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MesservicesComponent, selectors: [["app-messervices"]], decls: 54, vars: 7, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header", "card-header-primary"], [1, "card-title"], [1, "card-category"], [1, "card-body", "table-responsive"], [1, "table", "table-hover"], [1, "text-primary"], ["width", "30%"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "card-profile"], [1, "card-avatar"], ["class", "img", "style", "width:130px;height:130px", 3, "src", 4, "ngIf"], [1, "card-body"], [1, "card-title", 2, "text-transform", "uppercase", "letter-spacing", "1px"], ["class", "card-category text-gray", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "card", "card-chart"], [1, "card-header", "card-header-info", 2, "padding", "2px", "border-radius", "20px"], [1, "material-icons"], [1, "card-body", 2, "text-align", "left"], [1, "card-category", 2, "font-size", "17px"], [1, "card-footer"], [1, "stats"], [2, "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], ["mode", "determinate", 3, "value"], [1, "badge", "badge-warning"], [1, "text-primary", "material-icons", 3, "routerLink", "queryParams"], [4, "ngIf"], [1, "img", 2, "width", "130px", "height", "130px", 3, "src"], [1, "card-category", "text-gray"]], template: function MesservicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tout mes services:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Superviseur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Avancement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MesservicesComponent_tbody_23_Template, 17, 14, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MesservicesComponent_img_27_Template, 1, 1, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MesservicesComponent_h6_31_Template, 2, 1, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Le superviseur de ce service pri\u00E8re de le contacter au cas de besoin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user == null ? null : ctx.user.fname, " ", ctx.user == null ? null : ctx.user.lname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user == null ? null : ctx.user.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.user == null ? null : ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.user == null ? null : ctx.user.tel, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LW9mZmljZS9tZXNzZXJ2aWNlcy9tZXNzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MesservicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messervices',
                templateUrl: './messervices.component.html',
                styleUrls: ['./messervices.component.scss']
            }]
    }], function () { return [{ type: _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }, { type: _services_management_management_service__WEBPACK_IMPORTED_MODULE_1__["ManagementService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=front-office-client-layout-client-layout-module.js.map