webpackJsonp([1],{"/LNZ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("职位管理")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports},"5xQo":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("奖惩规则")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports},"9bBU":function(e,t,n){n("mClu");var s=n("FeBl").Object;e.exports=function(e,t,n){return s.defineProperty(e,t,n)}},C4MV:function(e,t,n){e.exports={default:n("9bBU"),__esModule:!0}},FvOz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("bOdI"),a=n.n(s),i={data:function(){return{keywords:"",depName:"",treeLoading:!1,dialogVisible:!1,allDeps:[],pDep:"",treeData:[],defaultProps:{label:"name",isLeaf:"leaf",children:"children"}}},mounted:function(){this.treeLoading=!0,this.loadTreeData()},watch:{keywords:function(e){this.$refs.tree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},loadTreeData:function(){var e=this;this.getRequest("/system/basic/dep/-1").then(function(t){e.treeLoading=!1,t&&200==t.status&&(e.treeData=t.data)})},setDataToTree:function(e,t,n){for(var s=0;s<e.length;s++){var a=e[s];if(a.id==t)return void(e[s].children=e[s].children.concat(n));this.setDataToTree(a.children,t,n)}},addDep:function(){var e=this;this.dialogVisible=!1,this.treeLoading=!0,this.postRequest("/system/basic/dep",{name:this.depName,parentId:this.pDep}).then(function(t){if(e.treeLoading=!1,t&&200==t.status){var n=t.data;e.depName="",e.$message({type:n.status,message:"添加成功!"}),e.setDataToTree(e.treeData,e.pDep,n.msg)}})},loadAllDeps:function(){var e=this;this.getRequest("/system/basic/deps").then(function(t){t&&200==t.status&&(e.allDeps=t.data)})},showAddDepView:function(e,t){this.loadAllDeps(),this.dialogVisible=!0,this.pDep=e.id,t.stopPropagation()},deleteDep:function(e,t){var n=this;e.children.length>0?this.$message({message:"该部门下尚有其他部门，不能被删除!",type:"warning"}):this.$confirm("删除["+e.name+"]部门, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.treeLoading=!0,n.deleteRequest("/system/basic/dep/"+e.id).then(function(t){if(n.treeLoading=!1,t&&200==t.status){var s=t.data;n.$message({message:s.msg,type:s.status}),n.deleteLocalDep(n.treeData,e)}})}).catch(function(){n.$message({type:"info",message:"已取消删除"})}),t.stopPropagation()},deleteLocalDep:function(e,t){for(var n=0;n<e.length;n++){var s=e[n];if(s.id==t.id)return void e.splice(n,1);this.deleteLocalDep(s.children,t)}},renderContent:function(e,t){var n,s,i=this,l=t.node,r=t.data;t.store;return e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",null,[e("span",null,[l.label])]),e("span",null,[e("el-button",(n={style:"font-size: 12px;",attrs:{type:"primary",size:"mini"}},a()(n,"style","padding:3px"),a()(n,"on",{click:function(){return i.showAddDepView(r,event)}}),n),["添加部门"]),e("el-button",(s={style:"font-size: 12px;",attrs:{type:"danger",size:"mini"}},a()(s,"style","padding:3px"),a()(s,"on",{click:function(){return i.deleteDep(r,event)}}),s),["删除部门"])])])}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"text-align":"left"}},[n("el-input",{staticStyle:{width:"500px",margin:"0px",padding:"0px"},attrs:{placeholder:"输入部门名称搜索部门...",size:"mini","prefix-icon":"el-icon-search"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),e._v(" "),n("div",[n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"tree",staticStyle:{width:"500px","margin-top":"10px"},attrs:{props:e.defaultProps,data:e.treeData,"filter-node-method":e.filterNode,"render-content":e.renderContent}}),e._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("el-dialog",{attrs:{title:"添加部门",visible:e.dialogVisible,width:"25%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("span",[e._v("上级部门")]),e._v(" "),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.pDep,callback:function(t){e.pDep=t},expression:"pDep"}},e._l(e.allDeps,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("span",[e._v("部门名称")]),e._v(" "),n("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"请输入部门名称..."},model:{value:e.depName,callback:function(t){e.depName=t},expression:"depName"}})],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addDep}},[e._v("添加")])],1)])],1)],1)])},staticRenderFns:[]},r=n("VU/8")(i,l,!1,null,null,null);t.default=r.exports},LJAE:function(e,t,n){var s={"./SysBasic.vue":"fc7a","./SysCfg.vue":"ubks","./SysData.vue":"UK/j","./SysHr.vue":"ewEk","./SysInit.vue":"agXO","./SysLog.vue":"ZDkW","./basic/DepMana.vue":"FvOz","./basic/ECMana.vue":"5xQo","./basic/JobTitleMana.vue":"c98W","./basic/MenuRole.vue":"eLaH","./basic/PosMana.vue":"/LNZ"};function a(e){return n(i(e))}function i(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(s)},a.resolve=i,e.exports=a,a.id="LJAE"},NQUc:function(e,t){},"UK/j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    备份恢复数据库\n  ")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports},ZDkW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    操作日志管理\n  ")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports},agXO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    初始化数据库\n  ")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var s,a=n("C4MV"),i=(s=a,s&&s.__esModule?s:{default:s});t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},c98W:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("职称管理")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports},eLaH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("oAV5"),a={mounted:function(){this.loading=!0,this.initRoles()},methods:{deleteRole:function(e,t){var n=this;this.$confirm("删除角色["+t+"], 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.loading=!0,n.deleteRequest("/system/basic/role/"+e).then(function(e){if(e&&200==e.status){var t=e.data;n.$message({type:t.status,message:t.msg}),n.initRoles()}else n.loading=!1})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},addNewRole:function(){if(Object(s.b)(this.newRole,this.newRoleZh)){this.loading=!0;var e=this;this.postRequest("/system/basic/addRole",{role:this.newRole,roleZh:this.newRoleZh}).then(function(t){if(t&&200==t.status){var n=t.data;e.$message({type:n.status,message:n.msg}),e.initRoles(),e.newRole="",e.newRoleZh=""}else e.loading=!1})}},updateRoleMenu:function(e){var t=this.$refs.tree[e].getCheckedKeys(!0),n=this;this.putRequest("/system/basic/updateMenuRole",{rid:this.activeColItem,mids:t}).then(function(e){if(e&&200==e.status){var t=e.data;n.$message({type:t.status,message:t.msg}),n.activeColItem=-1}})},collapseChange:function(e){if(""!=e){var t=this;this.getRequest("/system/basic/menuTree/"+e).then(function(e){if(e&&200==e.status){var n=e.data;t.treeData=n.menus,t.checkedKeys=n.mids}})}},handleCheckChange:function(e,t,n){},initRoles:function(){var e=this;this.getRequest("/system/basic/roles").then(function(t){e.loading=!1,t&&200==t.status&&(e.roles=t.data,e.activeColItem=-1)})},cancelUpdateRoleMenu:function(){this.activeColItem=-1}},data:function(){return{props:{label:"name",children:"children"},newRole:"",newRoleZh:"",roles:[],treeData:[],checkedKeys:[],loading:!1,activeColItem:-1}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"text-align":"left"}},[n("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入角色英文名称...",size:"mini"},model:{value:e.newRole,callback:function(t){e.newRole=t},expression:"newRole"}},[n("template",{slot:"prepend"},[e._v("ROLE_")])],2),e._v(" "),n("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入角色中文名称...",size:"mini"},model:{value:e.newRoleZh,callback:function(t){e.newRoleZh=t},expression:"newRoleZh"}}),e._v(" "),n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",size:"mini"},on:{click:e.addNewRole}},[e._v("添加角色")])],1),e._v(" "),n("div",{staticStyle:{"margin-top":"10px","text-align":"left"}},[n("el-collapse",{staticStyle:{width:"500px"},attrs:{accordion:""},on:{change:e.collapseChange},model:{value:e.activeColItem,callback:function(t){e.activeColItem=t},expression:"activeColItem"}},e._l(e.roles,function(t,s){return n("el-collapse-item",{key:t.name,attrs:{title:t.nameZh,name:t.id}},[n("el-card",{staticClass:"box-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("可访问的资源")]),e._v(" "),n("el-button",{staticStyle:{color:"#f6061b",margin:"0px",float:"right",padding:"3px 0",width:"15px",height:"15px"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){e.deleteRole(t.id,t.nameZh)}}})],1),e._v(" "),n("div",[n("el-tree",{key:t.id,ref:"tree",refInFor:!0,attrs:{props:e.props,data:e.treeData,"default-checked-keys":e.checkedKeys,"node-key":"id","show-checkbox":"","highlight-current":""},on:{"check-change":e.handleCheckChange}})],1),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"flex-end","margin-right":"10px"}},[n("el-button",{attrs:{size:"mini"},on:{click:e.cancelUpdateRoleMenu}},[e._v("取消修改")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.updateRoleMenu(s)}}},[e._v("确认修改")])],1)])],1)}))],1)])},staticRenderFns:[]},l=n("VU/8")(a,i,!1,null,null,null);t.default=l.exports},ewEk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{keywords:"",fullloading:!1,hrs:[],cardLoading:[],eploading:[],allRoles:[],moreBtnState:!1,selRoles:[],selRolesBak:[]}},mounted:function(){this.initCards(),this.loadAllRoles()},methods:{searchClick:function(){this.initCards(),this.loadAllRoles()},updateHrRoles:function(e,t){this.moreBtnState=!1;var n=this;if(this.selRolesBak.length==this.selRoles.length){for(var s=0;s<this.selRoles.length;s++)for(var a=0;a<this.selRolesBak.length;a++)if(this.selRoles[s]==this.selRolesBak[a]){this.selRolesBak.splice(a,1);break}if(0==this.selRolesBak.length)return}this.eploading.splice(t,1,!0),this.putRequest("/system/hr/roles",{hrId:e,rids:this.selRoles}).then(function(s){if(n.eploading.splice(t,1,!1),s&&200==s.status){var a=s.data;n.$message({type:a.status,message:a.msg}),"success"==a.status&&n.refreshHr(e,t)}})},refreshHr:function(e,t){var n=this;n.cardLoading.splice(t,1,!0),this.putRequest("/system/hr/id/"+e).then(function(e){n.cardLoading.splice(t,1,!1),n.hrs.splice(t,1,e.data)})},loadSelRoles:function(e,t){var n=this;this.moreBtnState=!0,this.selRoles=[],this.selRolesBak=[],e.forEach(function(e){n.selRoles.push(e.id),n.selRolesBak.push(e.id)})},loadAllRoles:function(){var e=this;this.getRequest("/system/basic/roles").then(function(t){e.fullloading=!1,t&&200==t.status&&(e.allRoles=t.data)})},switchChange:function(e,t,n){var s=this;s.cardLoading.splice(n,1,!0),this.putRequest("/system/hr/",{enabled:e,id:t}).then(function(e){if(s.cardLoading.splice(n,1,!1),e&&200==e.status){var a=e.data;s.$message({type:a.status,message:a.msg}),"error"==a.status&&s.refreshHr(t,n)}else s.refreshHr(t,n)})},initCards:function(){this.fullloading=!0;var e,t=this;e=""===this.keywords?"all":this.keywords,this.getRequest("/system/hr/"+e).then(function(e){if(e&&200==e.status){t.hrs=e.data;var n=e.data.length;t.cardLoading=Array.apply(null,Array(n)).map(function(e,t){return!1}),t.eploading=Array.apply(null,Array(n)).map(function(e,t){return!1})}})},deleteHr:function(e){var t=this;this.fullloading=!0,this.deleteRequest("/system/hr/"+e).then(function(e){if(t.fullloading=!1,e&&200==e.status){var n=e.data;t.$message({type:n.status,message:n.msg}),"success"==n.status&&(t.initCards(),t.loadAllRoles())}})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.fullloading,expression:"fullloading"}],staticStyle:{"margin-top":"10px"}},[n("div",{staticStyle:{"margin-bottom":"10px",display:"flex","justify-content":"center","align-items":"center"}},[n("el-input",{staticStyle:{width:"400px","margin-right":"10px"},attrs:{placeholder:"默认展示部分用户，可以通过用户名搜索更多用户...","prefix-icon":"el-icon-search",size:"small"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.searchClick}},[e._v("搜索")])],1),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-around","flex-wrap":"wrap","text-align":"left"}},e._l(e.hrs,function(t,s){return n("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.cardLoading[s],expression:"cardLoading[index]"}],key:t.id,staticStyle:{width:"350px","margin-bottom":"20px"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("el-button",{staticStyle:{color:"#f6061b",margin:"0px",float:"right",padding:"3px 0",width:"15px",height:"15px"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){e.deleteHr(t.id)}}})],1),e._v(" "),n("div",[n("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[n("img",{staticStyle:{width:"70px",height:"70px","border-radius":"70px"},attrs:{src:t.userface,alt:"item.name"}})]),e._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("div",[n("span",{staticClass:"user-info"},[e._v("用户名:"+e._s(t.name))])]),e._v(" "),n("div",[n("span",{staticClass:"user-info"},[e._v("手机号码:"+e._s(t.phone))])]),e._v(" "),n("div",[n("span",{staticClass:"user-info"},[e._v("电话号码:"+e._s(t.telephone))])]),e._v(" "),n("div",[n("span",{staticClass:"user-info"},[e._v("地址:"+e._s(t.address))])]),e._v(" "),n("div",{staticClass:"user-info",staticStyle:{display:"flex","align-items":"center","margin-bottom":"3px"}},[e._v("\n              用户状态:\n              "),n("el-switch",{key:t.id,staticStyle:{display:"inline","margin-left":"5px"},attrs:{"active-color":"#13ce66","inactive-color":"#aaaaaa","active-text":"启用","inactive-text":"禁用"},on:{change:function(n){e.switchChange(t.enabled,t.id,s)}},model:{value:t.enabled,callback:function(n){e.$set(t,"enabled",n)},expression:"item.enabled"}})],1),e._v(" "),n("div",{staticClass:"user-info"},[e._v("\n              用户角色:\n              "),e._l(t.roles,function(t){return n("el-tag",{key:t.id,staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"mini","disable-transitions":!1}},[e._v(e._s(t.nameZh)+"\n              ")])}),e._v(" "),n("el-popover",{directives:[{name:"loading",rawName:"v-loading",value:e.eploading[s],expression:"eploading[index]"}],key:t.id,attrs:{placement:"right",title:"角色列表",width:"200",trigger:"click"},on:{hide:function(n){e.updateHrRoles(t.id,s)}}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择角色"},model:{value:e.selRoles,callback:function(t){e.selRoles=t},expression:"selRoles"}},e._l(e.allRoles,function(e){return n("el-option",{key:e.id,attrs:{label:e.nameZh,value:e.id}})})),e._v(" "),n("el-button",{staticStyle:{color:"#09c0f6","padding-top":"0px"},attrs:{slot:"reference",type:"text",icon:"el-icon-more",disabled:e.moreBtnState},on:{click:function(n){e.loadSelRoles(t.roles,s)}},slot:"reference"})],1)],2),e._v(" "),n("div",[n("span",{staticClass:"user-info"},[e._v("备注:"+e._s(t.remark))])])])])])}))])},staticRenderFns:[]};var i=n("VU/8")(s,a,!1,function(e){n("NQUc")},null,null);t.default=i.exports},fc7a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("eLaH"),a=n("FvOz"),i=n("5xQo"),l=n("c98W"),r=n("/LNZ"),o={data:function(){return{defaultTab:"depMana"}},methods:{},components:{"menu-role":s.default,"dep-mana":a.default,"ec-mana":i.default,"jobtitle-mana":l.default,"pos-mana":r.default}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"10px"}},[n("el-tabs",{attrs:{type:"card"},model:{value:e.defaultTab,callback:function(t){e.defaultTab=t},expression:"defaultTab"}},[n("el-tab-pane",{attrs:{label:"部门管理",name:"depMana"}},[n("dep-mana")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"职位管理",name:"positionMana"}},[n("pos-mana")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"职称管理",name:"jobTitleMana"}},[n("jobtitle-mana")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"奖惩规则",name:"ecCfg"}},[n("ec-mana")],1),e._v(" "),n("el-tab-pane",{attrs:{label:"权限组",name:"menuRole"}},[n("menu-role")],1)],1)],1)},staticRenderFns:[]},d=n("VU/8")(o,c,!1,null,null,null);t.default=d.exports},mClu:function(e,t,n){var s=n("kM2E");s(s.S+s.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},ubks:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    系统管理\n  ")])])}]},a=n("VU/8")(null,s,!1,null,null,null);t.default=a.exports}});
//# sourceMappingURL=1.6baadbf583910ce36083.js.map