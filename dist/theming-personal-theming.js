/*! For license information please see theming-personal-theming.js.LICENSE.txt */
(()=>{"use strict";var e,n={86832:(e,n,a)=>{var o=a(20144),r=a(79753),i=a(79954),s=a(4820),c=a(20571),d=a.n(c),l=a(13299),g=a.n(l),u=a(80419),h=a(82675),m=a(41728),p=a(20296),A=a.n(p),b=a(69867),v=a.n(b),k=a(1082),C=a.n(k),f=(a(97248),a(64024)),_=a(45994),y=a(25108);const w=(0,i.j)("theming","backgroundImage"),x=(0,i.j)("theming","shippedBackgrounds"),T=(0,i.j)("theming","themingDefaultBackground"),B=(0,i.j)("theming","defaultShippedBackground"),I=e=>(0,r.generateFilePath)("theming","","img/background/")+e,D=(0,f.fn)(t("theming","Select a background from your files")).setMultiSelect(!1).setModal(!0).setType(1).setMimeTypeFilter(["image/png","image/gif","image/jpeg","image/svg+xml","image/svg"]).build(),S={name:"BackgroundSettings",components:{Check:u.default,Close:h.default,ImageEdit:m.Z,NcColorPicker:v()},data:()=>({loading:!1,Theming:(0,i.j)("theming","data",{}),backgroundImage:w}),computed:{shippedBackgrounds(){return Object.keys(x).map((e=>({name:e,url:I(e),preview:I("preview/"+e),details:x[e]}))).filter((e=>!(!this.isGlobalBackgroundDeleted&&!this.isGlobalBackgroundDefault)||e.name!==B))},isGlobalBackgroundDefault:()=>!!T,isGlobalBackgroundDeleted:()=>"backgroundColor"===T,isBackgroundDisabled(){return"disabled"===this.backgroundImage||!this.backgroundImage}},methods:{invertTextColor(e){return this.calculateLuma(e)>.6},calculateLuma(e){const[t,n,a]=this.hexToRGB(e);return(.2126*t+.7152*n+.0722*a)/255},hexToRGB(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null},async update(e){this.backgroundImage=e.backgroundImage,this.Theming.color=e.backgroundColor,this.$emit("update:background"),this.loading=!1},async setDefault(){this.loading="default";const e=await s.default.post((0,r.generateUrl)("/apps/theming/background/default"));this.update(e.data)},async setShipped(e){this.loading=e;const t=await s.default.post((0,r.generateUrl)("/apps/theming/background/shipped"),{value:e});this.update(t.data)},async setFile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.loading="custom";const n=await s.default.post((0,r.generateUrl)("/apps/theming/background/custom"),{value:e,color:t});this.update(n.data)},async removeBackground(){this.loading="remove";const e=await s.default.delete((0,r.generateUrl)("/apps/theming/background/custom"));this.update(e.data)},async pickColor(e){var t,n,a;this.loading="color";const o=(null==e||null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.color)||(null===(a=this.Theming)||void 0===a?void 0:a.color)||"#0082c9",i=await s.default.post((0,r.generateUrl)("/apps/theming/background/color"),{color:o});this.update(i.data)},debouncePickColor:A()((function(){this.pickColor(...arguments)}),200),async pickFile(){const e=await D.pick();this.loading="custom";let t=null,n=null;try{var a;const o=(0,r.generateRemoteUrl)("dav/files/"+(0,_.ts)().uid+e);t=await s.default.get(o,{responseType:"blob"});const i=URL.createObjectURL(t.data),c=await this.getColorPaletteFromBlob(i);n=null==c||null===(a=c.DarkVibrant)||void 0===a?void 0:a.hex,this.setFile(e,n),y.debug("Extracted colour",n,"from custom image",e,c)}catch(a){this.setFile(e),y.error("Unable to extract colour from custom image",{error:a,path:e,response:t,color:n})}},getColorPaletteFromBlob:e=>new Promise(((t,n)=>{new(C())(e).getPalette(((e,a)=>{e&&n(e),t(a)}))}))}};var E=a(93379),U=a.n(E),j=a(7795),P=a.n(j),O=a(90569),F=a.n(O),G=a(3565),q=a.n(G),L=a(19216),Z=a.n(L),R=a(44589),N=a.n(R),z=a(24766),W={};W.styleTagTransform=N(),W.setAttributes=q(),W.insert=F().bind(null,"head"),W.domAPI=P(),W.insertStyleElement=Z(),U()(z.Z,W),z.Z&&z.Z.locals&&z.Z.locals;var M=a(51900);const K=(0,M.Z)(S,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"background-selector",attrs:{"data-user-theming-background-settings":""}},[t("button",{staticClass:"background background__filepicker",class:{"icon-loading":"custom"===e.loading,"background--active":"custom"===e.backgroundImage},attrs:{"data-color-bright":e.invertTextColor(e.Theming.color),"data-user-theming-background-custom":"",tabindex:"0"},on:{click:e.pickFile}},[e._v("\n\t\t"+e._s(e.t("theming","Custom background"))+"\n\t\t"),"custom"!==e.backgroundImage?t("ImageEdit",{attrs:{size:26}}):e._e(),e._v(" "),t("Check",{attrs:{size:44}})],1),e._v(" "),t("button",{staticClass:"background background__default",class:{"icon-loading":"default"===e.loading,"background--active":"default"===e.backgroundImage},style:{"--border-color":e.Theming.defaultColor},attrs:{"data-color-bright":e.invertTextColor(e.Theming.defaultColor),"data-user-theming-background-default":"",tabindex:"0"},on:{click:e.setDefault}},[e._v("\n\t\t"+e._s(e.t("theming","Default background"))+"\n\t\t"),t("Check",{attrs:{size:44}})],1),e._v(" "),t("NcColorPicker",{on:{input:e.debouncePickColor},model:{value:e.Theming.color,callback:function(t){e.$set(e.Theming,"color",t)},expression:"Theming.color"}},[t("button",{staticClass:"background background__color",style:{backgroundColor:e.Theming.color,"--border-color":e.Theming.color},attrs:{"data-color":e.Theming.color,"data-color-bright":e.invertTextColor(e.Theming.color),"data-user-theming-background-color":"",tabindex:"0"}},[e._v("\n\t\t\t"+e._s(e.t("theming","Change color"))+"\n\t\t")])]),e._v(" "),t("button",{staticClass:"background background__delete",class:{"background--active":e.isBackgroundDisabled},attrs:{"data-user-theming-background-clear":"",tabindex:"0"},on:{click:e.removeBackground}},[e._v("\n\t\t"+e._s(e.t("theming","No background"))+"\n\t\t"),e.isBackgroundDisabled?e._e():t("Close",{attrs:{size:32}}),e._v(" "),t("Check",{attrs:{size:44}})],1),e._v(" "),e._l(e.shippedBackgrounds,(function(n){return t("button",{key:n.name,staticClass:"background background__shipped",class:{"icon-loading":e.loading===n.name,"background--active":e.backgroundImage===n.name},style:{backgroundImage:"url("+n.preview+")","--border-color":n.details.primary_color},attrs:{title:n.details.attribution,"aria-label":n.details.attribution,"data-color-bright":"dark"===n.details.theming,"data-user-theming-background-shipped":n.name,tabindex:"0"},on:{click:function(t){return e.setShipped(n.name)}}},[t("Check",{attrs:{size:44}})],1)}))],2)}),[],!1,null,"34c50308",null).exports;var $=a(25108);const Y={name:"ItemPreview",components:{NcCheckboxRadioSwitch:d()},props:{enforced:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},theme:{type:Object,required:!0},type:{type:String,default:""},unique:{type:Boolean,default:!1}},computed:{switchType(){return this.unique?"switch":"radio"},name(){return this.unique?null:this.type},img(){return(0,r.generateFilePath)("theming","img",this.theme.id+".jpg")},checked:{get(){return this.selected},set(e){$.debug("Changed theme",this.theme.id,e),this.unique?this.$emit("change",{enabled:!0===e,id:this.theme.id}):this.$emit("change",{enabled:!0,id:this.theme.id})}}},methods:{onToggle(){"radio"!==this.switchType?this.checked=!this.checked:this.checked=!0}}};var H=a(6847),V={};V.styleTagTransform=N(),V.setAttributes=q(),V.insert=F().bind(null,"head"),V.domAPI=P(),V.insertStyleElement=Z(),U()(H.Z,V),H.Z&&H.Z.locals&&H.Z.locals;const Q=(0,M.Z)(Y,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"theming__preview",class:"theming__preview--"+e.theme.id},[t("div",{staticClass:"theming__preview-image",style:{backgroundImage:"url("+e.img+")"},on:{click:e.onToggle}}),e._v(" "),t("div",{staticClass:"theming__preview-description"},[t("h3",[e._v(e._s(e.theme.title))]),e._v(" "),t("p",[e._v(e._s(e.theme.description))]),e._v(" "),e.enforced?t("span",{staticClass:"theming__preview-warning",attrs:{role:"note"}},[e._v("\n\t\t\t"+e._s(e.t("theming","Theme selection is enforced"))+"\n\t\t")]):e._e(),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"theming__preview-toggle",attrs:{checked:e.checked,disabled:e.enforced,name:e.name,type:e.switchType},on:{"update:checked":function(t){e.checked=t}}},[e._v("\n\t\t\t"+e._s(e.theme.enableLabel)+"\n\t\t")])],1)])}),[],!1,null,"6a0c5d99",null).exports;var J=a(25108);const X=(0,i.j)("theming","themes",[]),ee=(0,i.j)("theming","enforceTheme",""),te=(0,i.j)("theming","shortcutsDisabled",!1),ne=(0,i.j)("theming","isUserThemingDisabled");J.debug("Available themes",X);const ae={name:"UserThemes",components:{ItemPreview:Q,NcCheckboxRadioSwitch:d(),NcSettingsSection:g(),BackgroundSettings:K},data:()=>({availableThemes:X,enforceTheme:ee,shortcutsDisabled:te,isUserThemingDisabled:ne}),computed:{themes(){return this.availableThemes.filter((e=>1===e.type))},fonts(){return this.availableThemes.filter((e=>2===e.type))},selectedTheme(){return this.themes.find((e=>!0===e.enabled))||this.themes[0]},description(){return t("theming","Universal access is very important to us. We follow web standards and check to make everything usable also without mouse, and assistive software such as screenreaders. We aim to be compliant with the {guidelines}Web Content Accessibility Guidelines{linkend} 2.1 on AA level, with the high contrast theme even on AAA level.").replace("{guidelines}",this.guidelinesLink).replace("{linkend}","</a>")},guidelinesLink:()=>'<a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noreferrer nofollow">',descriptionDetail(){return t("theming","If you find any issues, do not hesitate to report them on {issuetracker}our issue tracker{linkend}. And if you want to get involved, come join {designteam}our design team{linkend}!").replace("{issuetracker}",this.issuetrackerLink).replace("{designteam}",this.designteamLink).replace(/\{linkend\}/g,"</a>")},issuetrackerLink:()=>'<a target="_blank" href="https://github.com/nextcloud/server/issues/" rel="noreferrer nofollow">',designteamLink:()=>'<a target="_blank" href="https://nextcloud.com/design" rel="noreferrer nofollow">'},watch:{shortcutsDisabled(e){this.changeShortcutsDisabled(e)}},methods:{refreshGlobalStyles(){[...document.head.querySelectorAll("link.theme")].forEach((e=>{const t=new URL(e.href);t.searchParams.set("v",Date.now());const n=e.cloneNode();n.href=t.toString(),n.onload=()=>e.remove(),document.head.append(n)}))},updateBackground(e){this.background="custom"===e.type||"default"===e.type?e.type:e.value,this.refreshGlobalStyles()},changeTheme(e){let{enabled:t,id:n}=e;this.themes.forEach((e=>{e.id===n&&t?e.enabled=!0:e.enabled=!1})),this.updateBodyAttributes(),this.selectItem(t,n)},changeFont(e){let{enabled:t,id:n}=e;this.fonts.forEach((e=>{e.id===n&&t?e.enabled=!0:e.enabled=!1})),this.updateBodyAttributes(),this.selectItem(t,n)},async changeShortcutsDisabled(e){e?await(0,s.default)({url:(0,r.generateOcsUrl)("apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"theming",configKey:"shortcuts_disabled"}),data:{configValue:"yes"},method:"POST"}):await(0,s.default)({url:(0,r.generateOcsUrl)("apps/provisioning_api/api/v1/config/users/{appId}/{configKey}",{appId:"theming",configKey:"shortcuts_disabled"}),method:"DELETE"})},updateBodyAttributes(){const e=this.themes.filter((e=>!0===e.enabled)).map((e=>e.id)),t=this.fonts.filter((e=>!0===e.enabled)).map((e=>e.id));this.themes.forEach((e=>{document.body.toggleAttribute("data-theme-".concat(e.id),e.enabled)})),this.fonts.forEach((e=>{document.body.toggleAttribute("data-theme-".concat(e.id),e.enabled)})),document.body.setAttribute("data-themes",[...e,...t].join(","))},async selectItem(e,n){try{e?await(0,s.default)({url:(0,r.generateOcsUrl)("apps/theming/api/v1/theme/{themeId}/enable",{themeId:n}),method:"PUT"}):await(0,s.default)({url:(0,r.generateOcsUrl)("apps/theming/api/v1/theme/{themeId}",{themeId:n}),method:"DELETE"})}catch(e){J.error(e,e.response),OC.Notification.showTemporary(t("theming",e.response.data.ocs.meta.message+". Unable to apply the setting."))}}}};var oe=a(1080),re={};re.styleTagTransform=N(),re.setAttributes=q(),re.insert=F().bind(null,"head"),re.domAPI=P(),re.insertStyleElement=Z(),U()(oe.Z,re),oe.Z&&oe.Z.locals&&oe.Z.locals;const ie=(0,M.Z)(ae,(function(){var e=this,t=e._self._c;return t("section",[t("NcSettingsSection",{staticClass:"theming",attrs:{title:e.t("theming","Appearance and accessibility"),"limit-width":!1}},[t("p",{domProps:{innerHTML:e._s(e.description)}}),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.descriptionDetail)}}),e._v(" "),t("div",{staticClass:"theming__preview-list"},e._l(e.themes,(function(n){return t("ItemPreview",{key:n.id,attrs:{enforced:n.id===e.enforceTheme,selected:e.selectedTheme.id===n.id,theme:n,unique:1===e.themes.length,type:"theme"},on:{change:e.changeTheme}})})),1),e._v(" "),t("div",{staticClass:"theming__preview-list"},e._l(e.fonts,(function(n){return t("ItemPreview",{key:n.id,attrs:{selected:n.enabled,theme:n,unique:1===e.fonts.length,type:"font"},on:{change:e.changeFont}})})),1)]),e._v(" "),t("NcSettingsSection",{attrs:{title:e.t("theming","Keyboard shortcuts")}},[t("p",[e._v(e._s(e.t("theming","In some cases keyboard shortcuts can interfere with accessibility tools. In order to allow focusing on your tool correctly you can disable all keyboard shortcuts here. This will also disable all available shortcuts in apps.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"theming__preview-toggle",attrs:{checked:e.shortcutsDisabled,name:"shortcuts_disabled",type:"switch"},on:{"update:checked":function(t){e.shortcutsDisabled=t},change:e.changeShortcutsDisabled}},[e._v("\n\t\t\t"+e._s(e.t("theming","Disable all keyboard shortcuts"))+"\n\t\t")])],1),e._v(" "),t("NcSettingsSection",{staticClass:"background",attrs:{title:e.t("theming","Background"),"data-user-theming-background-disabled":""}},[e.isUserThemingDisabled?[t("p",[e._v(e._s(e.t("theming","Customization has been disabled by your administrator")))])]:[t("p",[e._v(e._s(e.t("theming","Set a custom background")))]),e._v(" "),t("BackgroundSettings",{staticClass:"background__grid",on:{"update:background":e.refreshGlobalStyles}})]],2)],1)}),[],!1,null,"4e5e21ba",null).exports;o.default.prototype.OC=OC,o.default.prototype.t=t;const se=new(o.default.extend(ie));se.$mount("#theming"),se.$on("update:background",(()=>{[...document.head.querySelectorAll("link.theme")].forEach((e=>{const t=new URL(e.href);t.searchParams.set("v",Date.now());const n=e.cloneNode();n.href=t.toString(),n.onload=()=>e.remove(),document.head.append(n)}))}))},1080:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87537),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,".theming p[data-v-4e5e21ba]{max-width:800px}.theming[data-v-4e5e21ba] a{font-weight:bold}.theming[data-v-4e5e21ba] a:hover,.theming[data-v-4e5e21ba] a:focus{text-decoration:underline}.theming__preview-list[data-v-4e5e21ba]{--gap: 30px;display:grid;margin-top:var(--gap);column-gap:var(--gap);row-gap:var(--gap);grid-template-columns:1fr 1fr}.background__grid[data-v-4e5e21ba]{margin-top:30px}@media(max-width: 1440px){.theming__preview-list[data-v-4e5e21ba]{display:flex;flex-direction:column}}","",{version:3,sources:["webpack://./apps/theming/src/UserThemes.vue"],names:[],mappings:"AAGC,4BACC,eAAA,CAID,4BACC,gBAAA,CAEA,oEAEC,yBAAA,CAIF,wCACC,WAAA,CAEA,YAAA,CACA,qBAAA,CACA,qBAAA,CACA,kBAAA,CACA,6BAAA,CAKD,mCACC,eAAA,CAIF,0BACC,wCACC,YAAA,CACA,qBAAA,CAAA",sourcesContent:["\n.theming {\n\t// Limit width of settings sections for readability\n\tp {\n\t\tmax-width: 800px;\n\t}\n\n\t// Proper highlight for links and focus feedback\n\t&::v-deep a {\n\t\tfont-weight: bold;\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n\n\t&__preview-list {\n\t\t--gap: 30px;\n\n\t\tdisplay: grid;\n\t\tmargin-top: var(--gap);\n\t\tcolumn-gap: var(--gap);\n\t\trow-gap: var(--gap);\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n}\n\n.background {\n\t&__grid {\n\t\tmargin-top: 30px;\n\t}\n}\n\n@media (max-width: 1440px) {\n\t.theming__preview-list {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n}\n"],sourceRoot:""}]);const s=i},24766:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87537),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,".background-selector[data-v-34c50308]{display:flex;flex-wrap:wrap;justify-content:center}.background-selector .background[data-v-34c50308]{overflow:hidden;width:176px;height:96px;margin:8px;text-align:center;border:2px solid var(--color-main-background);border-radius:var(--border-radius-large);background-position:center center;background-size:cover}.background-selector .background__filepicker.background--active[data-v-34c50308]{color:#fff;background-image:var(--image-background)}.background-selector .background__default[data-v-34c50308]{background-color:var(--color-primary-default);background-image:var(--image-background-default)}.background-selector .background__filepicker[data-v-34c50308],.background-selector .background__default[data-v-34c50308],.background-selector .background__color[data-v-34c50308]{border-color:var(--color-border)}.background-selector .background__color[data-v-34c50308]{color:var(--color-primary-text);background-color:var(--color-primary-default)}.background-selector .background__default[data-v-34c50308],.background-selector .background__shipped[data-v-34c50308]{color:#fff}.background-selector .background[data-color-bright][data-v-34c50308]{color:#000}.background-selector .background--active[data-v-34c50308],.background-selector .background[data-v-34c50308]:hover,.background-selector .background[data-v-34c50308]:focus{border:2px solid var(--border-color, var(--color-primary)) !important}.background-selector .background span[data-v-34c50308]{margin:4px}.background-selector .background .check-icon[data-v-34c50308]{display:none}.background-selector .background--active:not(.icon-loading) .check-icon[data-v-34c50308]{display:block !important}","",{version:3,sources:["webpack://./apps/theming/src/components/BackgroundSettings.vue"],names:[],mappings:"AACA,sCACC,YAAA,CACA,cAAA,CACA,sBAAA,CAEA,kDACC,eAAA,CACA,WAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CACA,6CAAA,CACA,wCAAA,CACA,iCAAA,CACA,qBAAA,CAGC,iFACC,UAAA,CACA,wCAAA,CAIF,2DACC,6CAAA,CACA,gDAAA,CAGD,kLACC,gCAAA,CAGD,yDACC,+BAAA,CACA,6CAAA,CAID,sHAEC,UAAA,CAID,qEACC,UAAA,CAGD,0KAIC,qEAAA,CAID,uDACC,UAAA,CAGD,8DACC,YAAA,CAIA,yFAEC,wBAAA",sourcesContent:["\n.background-selector {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\n\t.background {\n\t\toverflow: hidden;\n\t\twidth: 176px;\n\t\theight: 96px;\n\t\tmargin: 8px;\n\t\ttext-align: center;\n\t\tborder: 2px solid var(--color-main-background);\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-position: center center;\n\t\tbackground-size: cover;\n\n\t\t&__filepicker {\n\t\t\t&.background--active {\n\t\t\t\tcolor: white;\n\t\t\t\tbackground-image: var(--image-background);\n\t\t\t}\n\t\t}\n\n\t\t&__default {\n\t\t\tbackground-color: var(--color-primary-default);\n\t\t\tbackground-image: var(--image-background-default);\n\t\t}\n\n\t\t&__filepicker, &__default, &__color {\n\t\t\tborder-color: var(--color-border);\n\t\t}\n\n\t\t&__color {\n\t\t\tcolor: var(--color-primary-text);\n\t\t\tbackground-color: var(--color-primary-default);\n\t\t}\n\n\t\t// Over a background image\n\t\t&__default,\n\t\t&__shipped {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t// Text and svg icon dark on bright background\n\t\t&[data-color-bright] {\n\t\t\tcolor: black;\n\t\t}\n\n\t\t&--active,\n\t\t&:hover,\n\t\t&:focus {\n\t\t\t// Use theme color primary, see inline css variable in template\n\t\t\tborder: 2px solid var(--border-color, var(--color-primary)) !important;\n\t\t}\n\n\t\t// Icon\n\t\tspan {\n\t\t\tmargin: 4px;\n\t\t}\n\n\t\t.check-icon {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t&--active:not(.icon-loading) {\n\t\t\t.check-icon {\n\t\t\t\t// Show checkmark\n\t\t\t\tdisplay: block !important;\n\t\t\t}\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=i},6847:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87537),o=n.n(a),r=n(23645),i=n.n(r)()(o());i.push([e.id,".theming__preview[data-v-6a0c5d99]{--ratio: 16;position:relative;display:flex;justify-content:flex-start;max-width:800px}.theming__preview[data-v-6a0c5d99],.theming__preview *[data-v-6a0c5d99]{user-select:none}.theming__preview-image[data-v-6a0c5d99]{flex-basis:calc(16px*var(--ratio));flex-shrink:0;height:calc(10px*var(--ratio));margin-right:var(--gap);cursor:pointer;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:top left;background-size:cover}.theming__preview-description[data-v-6a0c5d99]{display:flex;flex-direction:column}.theming__preview-description h3[data-v-6a0c5d99]{font-weight:bold;margin-bottom:0}.theming__preview-description label[data-v-6a0c5d99]{padding:12px 0}.theming__preview--default[data-v-6a0c5d99]{grid-column:span 2}.theming__preview-warning[data-v-6a0c5d99]{color:var(--color-warning)}@media(max-width: 682.6666666667px){.theming__preview[data-v-6a0c5d99]{flex-direction:column}.theming__preview-image[data-v-6a0c5d99]{margin:0}}","",{version:3,sources:["webpack://./apps/theming/src/components/ItemPreview.vue"],names:[],mappings:"AACA,mCAEC,WAAA,CAEA,iBAAA,CACA,YAAA,CACA,0BAAA,CACA,eAAA,CAEA,wEAEC,gBAAA,CAGD,yCACC,kCAAA,CACA,aAAA,CACA,8BAAA,CACA,uBAAA,CACA,cAAA,CACA,kCAAA,CACA,2BAAA,CACA,4BAAA,CACA,qBAAA,CAGD,+CACC,YAAA,CACA,qBAAA,CAEA,kDACC,gBAAA,CACA,eAAA,CAGD,qDACC,cAAA,CAIF,4CACC,kBAAA,CAGD,2CACC,0BAAA,CAIF,oCACC,mCACC,qBAAA,CAEA,yCACC,QAAA,CAAA",sourcesContent:["\n.theming__preview {\n\t// We make previews on 16/10 screens\n\t--ratio: 16;\n\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tmax-width: 800px;\n\n\t&,\n\t* {\n\t\tuser-select: none;\n\t}\n\n\t&-image {\n\t\tflex-basis: calc(16px * var(--ratio));\n\t\tflex-shrink: 0;\n\t\theight: calc(10px * var(--ratio));\n\t\tmargin-right: var(--gap);\n\t\tcursor: pointer;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: top left;\n\t\tbackground-size: cover;\n\t}\n\n\t&-description {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\th3 {\n\t\t\tfont-weight: bold;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\tlabel {\n\t\t\tpadding: 12px 0;\n\t\t}\n\t}\n\n\t&--default {\n\t\tgrid-column: span 2;\n\t}\n\n\t&-warning {\n\t\tcolor: var(--color-warning);\n\t}\n}\n\n@media (max-width: (1024px / 1.5)) {\n\t.theming__preview {\n\t\tflex-direction: column;\n\n\t\t&-image {\n\t\t\tmargin: 0;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const s=i}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=n,e=[],o.O=(t,n,a,r)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],r=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,a,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=1474,(()=>{o.b=document.baseURI||self.location.href;var e={1474:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,i=n[0],s=n[1],c=n[2],d=0;if(i.some((t=>0!==e[t]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(c)var l=c(o)}for(t&&t(n);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(l)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.nc=void 0;var r=o.O(void 0,[7874],(()=>o(86832)));r=o.O(r)})();
//# sourceMappingURL=theming-personal-theming.js.map?v=9a53d8799fe55215a61d