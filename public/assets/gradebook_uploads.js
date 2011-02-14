(function(){var k=this,j=k._,e=function(b){this._wrapped=b},g=typeof StopIteration!=="undefined"?StopIteration:"__break__",a=k._=function(b){return new e(b)};if(typeof exports!=="undefined")exports._=a;var q=Array.prototype.slice,u=Array.prototype.unshift,r=Object.prototype.toString,E=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;a.VERSION="0.5.1";a.each=function(b,c,f){try{if(b.forEach)b.forEach(c,f);else if(a.isArray(b)||a.isArguments(b))for(var h=0,m=b.length;h<m;h++)c.call(f,
b[h],h,b);else{var p=a.keys(b);m=p.length;for(h=0;h<m;h++)c.call(f,b[p[h]],p[h],b)}}catch(t){if(t!=g)throw t;}return b};a.map=function(b,c,f){if(b&&a.isFunction(b.map))return b.map(c,f);var h=[];a.each(b,function(m,p,t){h.push(c.call(f,m,p,t))});return h};a.reduce=function(b,c,f,h){if(b&&a.isFunction(b.reduce))return b.reduce(a.bind(f,h),c);a.each(b,function(m,p,t){c=f.call(h,c,m,p,t)});return c};a.reduceRight=function(b,c,f,h){if(b&&a.isFunction(b.reduceRight))return b.reduceRight(a.bind(f,h),c);
var m=a.clone(a.toArray(b)).reverse();a.each(m,function(p,t){c=f.call(h,c,p,t,b)});return c};a.detect=function(b,c,f){var h;a.each(b,function(m,p,t){if(c.call(f,m,p,t)){h=m;a.breakLoop()}});return h};a.select=function(b,c,f){if(b&&a.isFunction(b.filter))return b.filter(c,f);var h=[];a.each(b,function(m,p,t){c.call(f,m,p,t)&&h.push(m)});return h};a.reject=function(b,c,f){var h=[];a.each(b,function(m,p,t){!c.call(f,m,p,t)&&h.push(m)});return h};a.all=function(b,c,f){c=c||a.identity;if(b&&a.isFunction(b.every))return b.every(c,
f);var h=true;a.each(b,function(m,p,t){(h=h&&c.call(f,m,p,t))||a.breakLoop()});return h};a.any=function(b,c,f){c=c||a.identity;if(b&&a.isFunction(b.some))return b.some(c,f);var h=false;a.each(b,function(m,p,t){if(h=c.call(f,m,p,t))a.breakLoop()});return h};a.include=function(b,c){if(a.isArray(b))return a.indexOf(b,c)!=-1;var f=false;a.each(b,function(h){if(f=h===c)a.breakLoop()});return f};a.invoke=function(b,c){var f=a.rest(arguments,2);return a.map(b,function(h){return(c?h[c]:h).apply(h,f)})};a.pluck=
function(b,c){return a.map(b,function(f){return f[c]})};a.max=function(b,c,f){if(!c&&a.isArray(b))return Math.max.apply(Math,b);var h={computed:-Infinity};a.each(b,function(m,p,t){p=c?c.call(f,m,p,t):m;p>=h.computed&&(h={value:m,computed:p})});return h.value};a.min=function(b,c,f){if(!c&&a.isArray(b))return Math.min.apply(Math,b);var h={computed:Infinity};a.each(b,function(m,p,t){p=c?c.call(f,m,p,t):m;p<h.computed&&(h={value:m,computed:p})});return h.value};a.sortBy=function(b,c,f){return a.pluck(a.map(b,
function(h,m,p){return{value:h,criteria:c.call(f,h,m,p)}}).sort(function(h,m){var p=h.criteria,t=m.criteria;return p<t?-1:p>t?1:0}),"value")};a.sortedIndex=function(b,c,f){f=f||a.identity;for(var h=0,m=b.length;h<m;){var p=h+m>>1;f(b[p])<f(c)?h=p+1:m=p}return h};a.toArray=function(b){if(!b)return[];if(b.toArray)return b.toArray();if(a.isArray(b))return b;if(a.isArguments(b))return q.call(b);return a.map(b,function(c){return c})};a.size=function(b){return a.toArray(b).length};a.first=function(b,c,
f){return c&&!f?q.call(b,0,c):b[0]};a.rest=function(b,c,f){return q.call(b,a.isUndefined(c)||f?1:c)};a.last=function(b){return b[b.length-1]};a.compact=function(b){return a.select(b,function(c){return!!c})};a.flatten=function(b){return a.reduce(b,[],function(c,f){if(a.isArray(f))return c.concat(a.flatten(f));c.push(f);return c})};a.without=function(b){var c=a.rest(arguments);return a.select(b,function(f){return!a.include(c,f)})};a.uniq=function(b,c){return a.reduce(b,[],function(f,h,m){if(0==m||(c===
true?a.last(f)!=h:!a.include(f,h)))f.push(h);return f})};a.intersect=function(b){var c=a.rest(arguments);return a.select(a.uniq(b),function(f){return a.all(c,function(h){return a.indexOf(h,f)>=0})})};a.zip=function(){for(var b=a.toArray(arguments),c=a.max(a.pluck(b,"length")),f=Array(c),h=0;h<c;h++)f[h]=a.pluck(b,String(h));return f};a.indexOf=function(b,c){if(b.indexOf)return b.indexOf(c);for(var f=0,h=b.length;f<h;f++)if(b[f]===c)return f;return-1};a.lastIndexOf=function(b,c){if(b.lastIndexOf)return b.lastIndexOf(c);
for(var f=b.length;f--;)if(b[f]===c)return f;return-1};a.range=function(b,c,f){var h=a.toArray(arguments),m=h.length<=1;b=m?0:h[0];c=m?h[0]:h[1];f=h[2]||1;h=Math.ceil((c-b)/f);if(h<=0)return[];h=Array(h);m=b;for(var p=0;;m+=f){if((f>0?m-c:c-m)>=0)return h;h[p++]=m}};a.bind=function(b,c){var f=a.rest(arguments,2);return function(){return b.apply(c||k,f.concat(a.toArray(arguments)))}};a.bindAll=function(b){var c=a.rest(arguments);if(c.length==0)c=a.functions(b);a.each(c,function(f){b[f]=a.bind(b[f],
b)});return b};a.delay=function(b,c){var f=a.rest(arguments,2);return setTimeout(function(){return b.apply(b,f)},c)};a.defer=function(b){return a.delay.apply(a,[b,1].concat(a.rest(arguments)))};a.wrap=function(b,c){return function(){var f=[b].concat(a.toArray(arguments));return c.apply(c,f)}};a.compose=function(){var b=a.toArray(arguments);return function(){for(var c=a.toArray(arguments),f=b.length-1;f>=0;f--)c=[b[f].apply(this,c)];return c[0]}};a.keys=function(b){if(a.isArray(b))return a.range(0,
b.length);var c=[],f;for(f in b)E.call(b,f)&&c.push(f);return c};a.values=function(b){return a.map(b,a.identity)};a.functions=function(b){return a.select(a.keys(b),function(c){return a.isFunction(b[c])}).sort()};a.extend=function(b,c){for(var f in c)b[f]=c[f];return b};a.clone=function(b){if(a.isArray(b))return b.slice(0);return a.extend({},b)};a.isEqual=function(b,c){if(b===c)return true;var f=typeof b;if(f!=typeof c)return false;if(b==c)return true;if(!b&&c||b&&!c)return false;if(b.isEqual)return b.isEqual(c);
if(a.isDate(b)&&a.isDate(c))return b.getTime()===c.getTime();if(a.isNaN(b)&&a.isNaN(c))return true;if(a.isRegExp(b)&&a.isRegExp(c))return b.source===c.source&&b.global===c.global&&b.ignoreCase===c.ignoreCase&&b.multiline===c.multiline;if(f!=="object")return false;if(b.length&&b.length!==c.length)return false;f=a.keys(b);var h=a.keys(c);if(f.length!=h.length)return false;for(var m in b)if(!a.isEqual(b[m],c[m]))return false;return true};a.isEmpty=function(b){return a.keys(b).length==0};a.isElement=
function(b){return!!(b&&b.nodeType==1)};a.isArguments=function(b){return b&&a.isNumber(b.length)&&!a.isArray(b)&&!G.call(b,"length")};a.isNaN=function(b){return a.isNumber(b)&&isNaN(b)};a.isNull=function(b){return b===null};a.isUndefined=function(b){return typeof b=="undefined"};for(var N=["Array","Date","Function","Number","RegExp","String"],O=0,T=N.length;O<T;O++)(function(){var b="[object "+N[O]+"]";a["is"+N[O]]=function(c){return r.call(c)==b}})();a.noConflict=function(){k._=j;return this};a.identity=
function(b){return b};a.breakLoop=function(){throw g;};var L=0;a.uniqueId=function(b){var c=L++;return b?b+c:c};a.template=function(b,c){var f=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+b.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return c?f(c):f};a.forEach=a.each;a.foldl=a.inject=
a.reduce;a.foldr=a.reduceRight;a.filter=a.select;a.every=a.all;a.some=a.any;a.head=a.first;a.tail=a.rest;a.methods=a.functions;var P=function(b,c){return c?a(b).chain():b};a.each(a.functions(a),function(b){var c=a[b];e.prototype[b]=function(){u.call(arguments,this._wrapped);return P(c.apply(a,arguments),this._chain)}});a.each(["pop","push","reverse","shift","sort","splice","unshift"],function(b){var c=Array.prototype[b];e.prototype[b]=function(){c.apply(this._wrapped,arguments);return P(this._wrapped,
this._chain)}});a.each(["concat","join","slice"],function(b){var c=Array.prototype[b];e.prototype[b]=function(){return P(c.apply(this._wrapped,arguments),this._chain)}});e.prototype.chain=function(){this._chain=true;return this};e.prototype.value=function(){return this._wrapped}})();(function(k){k.extend({template:function(j,e){e=e||{};return(j||"").replace(/#\{([^{}]*)}/g,function(g,a){return typeof e[a]==="string"||typeof e[a]==="number"?e[a]:g})}})})(jQuery);
(function(k){var j=0;k.getScrollbarWidth=function(){if(!j)if(k.browser.msie){var e=k('<textarea cols="10" rows="2"></textarea>').css({position:"absolute",top:-1E3,left:-1E3}).appendTo("body"),g=k('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({position:"absolute",top:-1E3,left:-1E3}).appendTo("body");j=e.width()-g.width();e.add(g).remove()}else{e=k("<div />").css({width:100,height:100,overflow:"auto",position:"absolute",top:-1E3,left:-1E3}).prependTo("body").append("<div />").find("div").css({width:"100%",
height:200});j=100-e.width();e.parent().remove()}return j}})(jQuery);function requiredFieldValidator(k){return k==null||k==undefined||!$.trim(k+"").length?{valid:false,msg:"This is a required field"}:{valid:true,msg:null}}
var TextCellEditor=function(k,j,e){var g,a=e,q=this;this.init=function(){g=$("<INPUT type=text class='editor-text' />");if(e!=null){g[0].defaultValue=e;g.val(a)}g.appendTo(k);g.focus().select()};this.destroy=function(){g.remove()};this.focus=function(){g.focus()};this.setValue=function(u){g.val(u);a=u};this.getValue=function(){return g.val()};this.isValueChanged=function(){return!(g.val()==""&&a==null)&&g.val()!=a};this.validate=function(){if(j.validator){var u=j.validator(q.getValue());if(!u.valid)return u}return{valid:true,
msg:null}};this.init()},GradeCellEditor=function(k,j,e,g){if(g.active){e=e||{};var a,q=e.grade,u=this;this.init=function(){switch(j._uploaded.grading_type){case "letter_grade":var r="";$.each([{text:"--",value:""},{text:"A",value:"A"},{text:"A-",value:"A-"},{text:"B+",value:"B+"},{text:"B",value:"B"},{text:"B-",value:"B-"},{text:"C+",value:"C+"},{text:"C-",value:"C-"},{text:"D+",value:"D+"},{text:"D",value:"D"},{text:"D-",value:"D-"},{text:"F",value:"F"}],function(){r+='<option value="'+this.value+
'" '+(this.value==e.grade?"selected":"")+">"+this.text+"</option>"});a=$("<select>"+r+"</select>");break;default:a=$("<INPUT type=text class='editor-text' />")}if(typeof e.grade!="undefined"&&e.grade+""!=""){a[0].defaultValue=e.grade;a.val(q)}a.appendTo(k);a.focus().select();$($.template('<div class="grade-helper-wrapper"><span class="ui-icon ui-icon-triangle-1-w"/><div class="grade-helper-inner ui-widget-content ui-corner-all">  <table><tr><th>Original Score</th><th>Uploaded Score</th></tr><tr><td>#{originalScore}</td><td>#{uploadedScore}</td></tr></table></div> </div>',
{originalScore:e._original&&e._original.grade||"--",uploadedScore:e._uploaded&&e._uploaded.grade||"--"})).appendTo(k)};this.destroy=function(){a.remove()};this.focus=function(){a.focus()};this.setValue=function(r){a.val(r.grade);q=r.grade};this.getValue=function(){return a.val()};this.isValueChanged=function(){return!(a.val()==""&&q==null)&&a.val()!=q};this.validate=function(){if(j.validator){var r=j.validator(u.getValue());if(!r.valid)return r}return{valid:true,msg:null}}}else{this.init=function(){var r=
e?e.grade:"";k.removeClass("selected editable").html(r)};this.destroy=function(){};this.focus=function(){};this.setValue=function(){};this.getValue=function(){return e};this.isValueChanged=function(){return false};this.validate=function(){return{valid:true,msg:null}}}this.init()},StudentNameEditor=function(k,j,e){this.init=function(){var g=e?e.name:"";k.removeClass("selected editable").html(g)};this.destroy=function(){};this.focus=function(){};this.setValue=function(){};this.getValue=function(){return e};
this.isValueChanged=function(){return false};this.validate=function(){return{valid:true,msg:null}};this.init()},StudentNameFormatter=function(k,j,e){return e?e.name:""},NullEditor=function(k,j,e){this.init=function(){k.removeClass("selected editable").html(e)};this.destroy=function(){};this.focus=function(){};this.setValue=function(){};this.getValue=function(){return e};this.isValueChanged=function(){return false};this.validate=function(){return{valid:true,msg:null}};this.init()},NullGradeEditor=
function(k,j,e){this.init=function(){var g=e?e.grade:"";k.removeClass("selected editable").html(g)};this.destroy=function(){};this.focus=function(){};this.setValue=function(){};this.getValue=function(){return e};this.isValueChanged=function(){return false};this.validate=function(){return{valid:true,msg:null}};this.init()},simpleGradeCellFormatter=function(k,j,e){return e?e.grade:""},PassFailCellFormatter=function(k,j,e){e=e||{};switch(e.grade){case "pass":return"<span class='pass_fail pass' />";case "fail":return"<span class='pass_fail fail' />";
default:return""}},PassFailSelectCellEditor=function(k,j,e){e=e||{};var g,a=e;this.init=function(){g=$("<SELECT tabIndex='0' class='editor-yesno'><OPTION value=''>---</OPTION><OPTION value='pass'>Pass</OPTION><OPTION value='fail'>Fail</OPTION></SELECT>");g.val(a.grade);g.appendTo(k);g.focus();g.change(function(){e.grade=$(this).val()});$($.template('<div class="grade-helper-wrapper"><span class="ui-icon ui-icon-triangle-1-w"/><div class="grade-helper-inner ui-widget-content ui-corner-all"><table><tr><th>Original Score</th><th>Uploaded Score</th></tr><tr><td>#{originalScore}</td><td>#{uploadedScore}</td></tr></tbody></table></div> </div>',
{originalScore:10,uploadedScore:15})).appendTo(k)};this.destroy=function(){g.remove()};this.focus=function(){g.focus()};this.setValue=function(q){g.val(q.grade);a=q};this.getValue=function(){return e};this.isValueChanged=function(){return g.val()!=a};this.validate=function(){return{valid:true,msg:null}};this.init()};
function SlickGrid(k,j,e,g){function a(){for(var d=0;d<e.length;d++)$("body").append("<style class='slick-style'> ."+da+" .grid-canvas .c"+d+" { width:"+e[d].width+"px } </style>")}function q(){$("body").find("style.slick_style").remove()}function u(d){if(GlobalEditorLock.isEditing()&&!GlobalEditorLock.hasLock(x))throw"Grid : setSelectedRows : cannot set selected rows when somebody else has an edit lock";for(var i={},l=0;l<d.length;l++)i[d[l]]=true;for(l=0;l<ea.length;l++){var n=ea[l];v[n]&&!i[n]&&
$(v[n]).removeClass("selected")}for(l=0;l<d.length;l++){n=d[l];v[n]&&!ia[n]&&$(v[n]).addClass("selected")}ea=d.concat();ia=i}function r(d,i,l){return l==null||l==undefined?"":l}function E(d,i){console.time("cleanupRows");var l=A,n=F[0],o;for(o in v)if((o<d||o>i)&&o!=s){n.removeChild(v[o]);delete v[o];A--;Q++}console.log("removed "+(l-A)+" rows");console.timeEnd("cleanupRows")}function G(){console.log("removeAllRows");F[0].innerHTML="";v={};Q+=A;A=0}function N(){B.innerWidth();U=B.innerHeight();X=
Y=Math.ceil(U/C);fa=Math.max(fa,Y+2*X);for(var d=0,i=0;i<e.length;i++)d+=e[i].width+5;F.width(d);d=F[0];var l=g.enableAddRow?j.length:j.length-1;for(i in v)if(i>=l){d.removeChild(v[i]);delete v[i];A--;Q++}i=Math.max(C*(j.length+Y-2),U-$.getScrollbarWidth());B.scrollTop()>i-B.height()+$.getScrollbarWidth()&&B.scrollTop(i-B.height()+$.getScrollbarWidth());F.height(i)}function O(){return{top:Math.floor(M/C),bottom:Math.floor((M+U)/C)}}function T(d,i){console.time("renderRows");for(var l=F[0],n=A,o=[],
H=[],D=new Date,I=d;I<=i;I++)if(!v[I]){A++;H.push(I);var J=o,R=I,Z=j[R];J.push("<div class='"+("r"+(R<j.length&&!Z?" loading":"")+(ia[R]?" selected":""))+"' row='"+R+"' style='top:"+C*R+"px'>");for(var V=0,oa=e.length;V<oa;V++){var S=e[V];J.push("<div "+(S.unselectable?"":"hideFocus tabIndex=0 ")+"class='c c"+V+(S.cssClass?" "+S.cssClass:"")+(S.active&&Z.active?" active-col-and-row":"")+"' cell="+V+">");Z&&R<j.length&&J.push(S.formatter(R,V,Z[S.field],S,Z));J.push("</div>")}J.push("</div>");la++}J=
document.createElement("div");J.innerHTML=o.join("");I=0;for(o=J.childNodes.length;I<o;I++)v[H[I]]=l.appendChild(J.firstChild);if(A-n>5)ma=(new Date-D)/(A-n);console.log("rendered "+(A-n)+" rows");console.timeEnd("renderRows")}function L(){var d=O(),i=Math.max(0,d.top-(aa>=0?5:X));d=Math.min(g.enableAddRow?j.length:j.length-1,d.bottom+(aa>0?X:5));A>10&&Math.abs(ba-M)>C*fa?G():E(i,d);T(i,d);ba=M;ga=null}function P(){M=B[0].scrollTop;var d=Math.abs(ba-M),i=B[0].scrollLeft;if(i!=na)ha[0].scrollLeft=
na=i;if(!(d<5*C)){aa=ba==M?0:ba<M?1:-1;ga&&window.clearTimeout(ga);if(d<Y*C)L();else ga=window.setTimeout(L,50);if(x.onViewportChanged)x.onViewportChanged()}}function b(d){switch(d.which){case 27:GlobalEditorLock.isEditing()&&GlobalEditorLock.hasLock(x)&&p();w&&w.focus();break;case 9:d.shiftKey?W(0,-1,true):W(0,1,true);break;case 37:W(0,-1);break;case 39:W(0,1);break;case 38:W(-1,0);break;case 40:case 13:W(1,0);break;default:if(x.onKeyDown&&j[s])if(!y)if(x.onKeyDown(d,s,z)){d.stopPropagation();d.preventDefault();
return false}return}d.stopPropagation();d.preventDefault();return false}function c(d){var i=$(d.target).closest(".c");if(i.length!==0)if(!(w==i[0]&&y!=null)){var l=parseInt(i.parent().attr("row")),n=parseInt(i.attr("cell")),o=null;if(j[l]&&x.onClick)if(!y||(o=ja()))if(x.onClick(d,l,n)){d.stopPropagation();d.preventDefault();return false}if(g.enableCellNavigation&&!e[n].unselectable)if(o==true||o==null&&ja())h(i[0])}}function f(d){d=$(d.target).closest(".c");if(d.length!==0)w==d[0]&&y!=null||g.editOnDoubleClick&&
t()}function h(d,i){if(w!=null){p();$(w).removeClass("selected")}w=d;if(w!=null){s=parseInt($(w).parent().attr("row"));z=parseInt($(w).attr("cell"));$(w).addClass("selected");if(w){var l=B[0].scrollTop;if((s+2)*C>l+U){B[0].scrollTop=s*C;P()}else if(s*C<l){B[0].scrollTop=(s+2)*C-U;P()}}if(g.editable&&!g.editOnDoubleClick&&(j[s]||s==j.length)){window.clearTimeout(ka);if(i)ka=window.setTimeout(t,100);else t()}}else z=s=null;d?u([s]):u([]);if(x.onSelectedRowsChanged)x.onSelectedRowsChanged()}function m(d,
i){if(d<j.length&&!j[d])return false;if(e[i].cannotTriggerInsert&&d>=j.length)return false;if(!e[i].editor)return false;return true}function p(){if(y){y.destroy();$(w).removeClass("editable invalid");if(j[s])w.innerHTML=e[z].formatter(s,z,j[s][e[z].field],e[z],j[s]);y=null;if($.browser.msie)if(document.selection&&document.selection.empty)document.selection.empty();else if(window.getSelection){var d=window.getSelection();d&&d.removeAllRanges&&d.removeAllRanges()}GlobalEditorLock.leaveEditMode(x)}}
function t(){if(w){if(!g.editable)throw"Grid : makeSelectedCellEditable : should never get called when options.editable is false";window.clearTimeout(ka);if(m(s,z)){GlobalEditorLock.enterEditMode(x);$(w).addClass("editable");var d=null;if(j[s])d=j[s][e[z].field];w.innerHTML="";y=new e[z].editor($(w),e[z],d,j[s])}}}function W(d,i,l){if(w)if(g.enableCellNavigation)if(GlobalEditorLock.commitCurrentEdit()){var n=v[s+d],o=n?$(n).find(".c[cell="+(z+i)+"][tabIndex=0]"):null;if(l&&d==0&&!(n&&o&&o.length))if(!o||
!o.length)if(i>0)o=(n=v[s+d+1])?$(n).find(".c[cell][tabIndex=0]:first"):null;else o=(n=v[s+d-1])?$(n).find(".c[cell][tabIndex=0]:last"):null;if(n&&o&&o.length){h(o[0],g.asyncEditorLoading);y||w.focus()}else w.focus()}}function ja(){if(y){if(y.isValueChanged()){var d=y.validate();if(d.valid){d=y.getValue();if(s<j.length)if(e[z].setValueHandler)e[z].setValueHandler(d,e[z],j[s]);else j[s][e[z].field]=d;else if(x.onAddNewRow)x.onAddNewRow(e[z],d);p();return true}else{$(w).addClass("invalid");$(w).stop(true,
true).effect("highlight",{color:"red"},300);if(x.onValidationError)x.onValidationError(w,d,s,z,e[z]);y.focus();return false}}p()}return true}var pa={enableAddRow:true,manualScrolling:false,editable:true,editOnDoubleClick:false,enableCellNavigation:true,defaultColumnWidth:80,enableColumnReorder:true,asyncEditorLoading:true},C=24,fa=50,X=5,da="slickgrid_"+Math.round(1E6*Math.random()),x=this,ha,K,B,F,U,s,z,w=null,y=null,v={},A=0,Y,ba=0,M=0,na=0,aa=1,ma=10,ea=[],ia={},ca={},ka=null,ga=null,la=0,Q=0;
document.createDocumentFragment();this.debug=function(){var d="";d+="\ncounter_rows_rendered:  "+la;d+="\ncounter_rows_removed:  "+Q;d+="\nrenderedRows:  "+A;d+="\nnumVisibleRows:  "+Y;d+="\nCAPACITY:  "+fa;d+="\nBUFFER:  "+X;d+="\navgRowRenderTime:  "+ma;alert(d)};this.benchmark_render_200=function(){G();T(0,200);E()};this.stressTest=function(){console.time("benchmark-stress");T(0,500);E();console.timeEnd("benchmark-stress");window.setTimeout(x.stressTest,50)};this.benchmarkFn=function(d){var i=
new Date,l=Array(arguments);l.splice(0,1);x[d].call(this,l);alert("Grid : benchmarkFn : "+d+" : "+(new Date-i)+"ms")};(function(){g=$.extend({},pa,g);k.empty().attr("tabIndex",0).attr("hideFocus",true).css("overflow","hidden").css("outline",0).css("position","relative").addClass(da);ha=$("<div class='grid-header' style='overflow:hidden;position:relative;' />").appendTo(k);K=$("<div style='width:10000px' />").appendTo(ha);B=$("<div tabIndex='0' hideFocus style='width:100%;overflow:scroll;outline:0;position:relative;outline:0px;'>").appendTo(k);
F=$("<div class='grid-canvas' tabIndex='0' hideFocus />").appendTo(B);B.height(k.innerHeight()-ha.outerHeight());for(var d=0;d<e.length;d++){var i=e[d];ca[i.id]=d;if(!i.width)i.width=g.defaultColumnWidth;if(!i.formatter)i.formatter=r;var l=$("<div class='h c"+d+"' cell="+d+" id='"+i.id+"' />").html(i.name).width(i.width).appendTo(K);i.rerenderOnResize&&l.append(" <img src='images/help.png' align='absmiddle' title='This column has an adaptive formatter.  Resize to a smaller size to see alternative data representation.'>")}K.find(".h").each(function(){var n=
parseInt($(this).attr("cell"));n=e[n];if(n.resizable!==false)$(this).resizable({handles:"e",minWidth:n.minWidth?n.minWidth:null,maxWidth:n.maxWidth?n.maxWidth:null,stop:function(){var o=$(this).attr("id");o=ca[o];e[o].width=$(this).width();$("body").append("<style class='slick-style'> ."+da+" .grid-canvas .c"+o+"{width: "+e[o].width+"px;} </style>");N();e[o].rerenderOnResize&&G();L()}})});g.enableColumnReorder&&K.sortable({axis:"x",cancel:".ui-resizable-handle",update:function(n){console.time("column reorder");
for(var o=K.sortable("toArray"),H={},D=0;D<e.length;D++)H[e[D].id]=e[D];for(D=0;D<o.length;D++){ca[o[D]]=D;e[D]=H[o[D]]}G();q();a();L();if(x.onColumnsReordered)x.onColumnsReordered();n.stopPropagation();console.timeEnd("column reorder")}});K.bind("click",function(n){if($(n.target).hasClass(".h")){n=$(n.target).attr("id");if(x.onColumnHeaderClick)x.onColumnHeaderClick(e[ca[n]])}});a();N();L();g.manualScrolling||B.bind("scroll",P);F.bind("keydown",b);F.bind("click",c);F.bind("dblclick",f);if($.browser.msie)B[0].onselectstart=
function(){if(event.srcElement.tagName!="INPUT"&&event.srcElement.tagName!="TEXTAREA")return false}})();$.extend(this,{onColumnHeaderClick:null,onClick:null,onKeyDown:null,onAddNewRow:null,onValidationError:null,onViewportChanged:null,onSelectedRowsChanged:null,onColumnsReordered:null,destroy:function(){y&&p();K.sortable("destroy");K.find(".h").resizable("destroy");q();k.empty().removeClass(da)},getColumnIndex:function(d){return ca[d]},updateCell:function(d,i){if(v[d]){var l=$(v[d]).find(".c[cell="+
i+"]");if(l.length!==0){var n=e[i],o=j[d];if(y&&s==d&&z==i)y.setValue(o[n.field]);else l[0].innerHTML=o?n.formatter(d,i,o[n.field],n,o):""}}},updateRow:function(d){v[d]&&$(v[d]).find(".c").each(function(i){var l=e[i];if(d==s&&i==z&&y)y.setValue(j[s][l.field]);else this.innerHTML=j[d]?l.formatter(d,i,j[d][l.field],l,j[d]):""})},removeRow:function(d){var i=v[d];if(i){if(y&&s==d)throw"Grid : removeRow : Cannot remove a row that is currently in edit mode";aa=0;i.parentNode.removeChild(i);delete v[d];
A--;Q++}},removeRows:function(d){console.time("removeRows");if(d&&d.length){aa=0;for(var i=[],l=0,n=d.length;l<n;l++){if(y&&s==l)throw"Grid : removeRow : Cannot remove a row that is currently in edit mode";var o=v[d[l]];o&&i.push(d[l])}if(A>10&&i.length==A){F[0].innerHTML="";v={};Q+=A;A=0}else{l=0;for(d=i.length;l<d;l++){o=v[i[l]];o.parentNode.removeChild(o);delete v[i[l]];A--;Q++}}console.timeEnd("removeRows")}},removeAllRows:G,render:L,getViewport:O,resizeCanvas:N,scroll:scroll,getCellFromPoint:function(d,
i){for(var l=Math.floor(i/C),n=0,o=0,H=0;H<e.length&&o<i;H++){o+=e[H].width;n++}return{row:l,cell:n-1}},gotoCell:function(d,i){if(!(d>j.length||d<0||i>=e.length||i<0))if(!(!g.enableCellNavigation||e[i].unselectable))if(GlobalEditorLock.commitCurrentEdit()){v[d]||T(d,d);i=$(v[d]).find(".c[cell="+i+"][tabIndex=0]")[0];h(i);y||w.focus()}},editCurrentCell:t,getSelectedRows:function(){return ea.concat()},setSelectedRows:u,setColumnHeaderCssClass:function(d,i,l){K.find(".h[id="+d+"]").removeClass(l).addClass(i)},
commitCurrentEdit:ja,cancelCurrentEdit:function(){p()}})}
var GlobalEditorLock=new function(){var k=null;this.isEditing=function(){return k!=null};this.hasLock=function(j){return k==j};this.enterEditMode=function(j){if(k!=null)throw"GlobalEditorLock : enterEditMode : currentEditor == null";if(!j.commitCurrentEdit)throw"GlobalEditorLock : enterEditMode : editor must implement .commitCurrentEdit()";if(!j.cancelCurrentEdit)throw"GlobalEditorLock : enterEditMode : editor must implement .cancelCurrentEdit()";k=j};this.leaveEditMode=function(j){if(k!=j)throw"GlobalEditorLock : leaveEditMode() : currentEditor != editor";
k=null};this.commitCurrentEdit=function(){if(k)return k.commitCurrentEdit();return true};this.cancelCurrentEdit=function(){k&&k.cancelCurrentEdit()}},GradebookUploader={init:function(){var k;k=$.extend(true,{},originalGradebook);var j=$("#gradebook_grid"),e={columns:[{id:"student",name:"Student",field:"student",width:250,cssClass:"cell-title",editor:StudentNameEditor,validator:requiredFieldValidator,formatter:StudentNameFormatter}],options:{enableAddRow:false,enableColumnReorder:false,asyncEditorLoading:true},
data:[]};$.each(k.assignments,function(){e.columns.push({id:this.id,name:this.title,field:this.id,width:200,editor:NullGradeEditor,formatter:simpleGradeCellFormatter,_original:this})});$.each(k.students,function(){var g={student:this,id:this.id,_original:this};$.each(this.submissions,function(){g[this.assignment_id]=this;g[this.assignment_id]._original=$.extend({},this)});e.data.push(g)});$.each(uploadedGradebook.assignments,function(){var g,a=this;if(this.original_id){g=_.detect(e.columns,function(q){return q._original&&
q._original.id==a.original_id});g.cssClass="active changed"}else{g={id:a.id,name:a.title,field:a.id,formatter:simpleGradeCellFormatter,cssClass:"active new"};e.columns.push(g)}g.editor=GradeCellEditor;g.active=true;g._uploaded=a;g.setValueHandler=function(q,u,r){if(r[u.id])r[u.id].grade=r[u.id]._uploaded.grade=q;else{q={grade:q,assignment_id:u.id};q._uploaded=q;q=r._uploaded.submissions.push(q);r[u.id]=r._uploaded.submissions[q-1]}}});$.each(uploadedGradebook.students,function(){var g,a=this;if(a.original_id)g=
_.detect(e.data,function(q){return q._original&&q._original.id==a.original_id});else{g={id:a.id,student:a};e.data.push(g)}$.each(a.submissions,function(){g[this.assignment_id]=g[this.assignment_id]?$.extend(g[this.assignment_id],this):this;if(!g[this.assignment_id]._original&&this.grade)g[this.assignment_id]._original={score:null};g[this.assignment_id]._uploaded=this});g.active=true;g._uploaded=a});k=e.columns.length;e.columns=_.select(e.columns,function(g){return g.id==="student"||_.detect(e.data,
function(a){return a[g.id]&&a[g.id]._original&&a[g.id]._uploaded&&a[g.id]._original.score!=a[g.id]._uploaded.grade})});if(e.columns.length>1){e.columns.length<k&&$("#assignments_without_changes_alert").show();$("#gradebook_grid_form").submit(function(){var g=function(a,q){$.each(["_original","_uploaded"],function(u,r){if(q[r]){var E=$.extend({},q[r]);delete q[r];delete E[r];q[r]=E}})};$.each(uploadedGradebook.students,function(){$.each(this.submissions,g)});$(this).find("input[name='json_data_to_submit']").val(JSON.stringify(uploadedGradebook))}).show();
$(window).resize(function(){j.height($(window).height()-j.offset().top-50)}).triggerHandler("resize");k=new SlickGrid(j,e.data,e.columns,e.options);k.onColumnHeaderClick=function(){}}else $("#no_changes_detected").show()},handleThingsNeedingToBeResolved:function(){var k={},j={};originalGradebook.assignments=originalGradebook.active_assignments;$.each(["student","assignment"],function(e,g){var a=$("#"+g+"_resolution_template").remove(),q=a.find("select");k[g]=[];$.each(uploadedGradebook[g+"s"],function(){this.original_id||
k[g].push(this)});if(k[g].length){q.change(function(){$(this).next(".points_possible_section").css({opacity:0});if($(this).val()>0){$("#"+g+"_resolution_template select option").removeAttr("disabled");$("#"+g+"_resolution_template select").each(function(){$("#"+g+"_resolution_template select").not(this).find("option[value='"+$(this).val()+"']").attr("disabled",true)})}else $(this).val()==="new"&&$(this).next(".points_possible_section").css({opacity:1})});j[g]=_.reject(originalGradebook[g+"s"],function(u){return _.detect(uploadedGradebook[g+
"s"],function(r){return r.original_id==u.id})});$.each(j[g],function(){$('<option value="'+this.id+'" >'+(this.name||this.title)+"</option>").appendTo(q)});$.each(k[g],function(u,r){a.clone(true).fillTemplateData({iterator:r.id,data:{name:r.name,title:r.title,points_possible:r.points_possible}}).appendTo("#gradebook_importer_resolution_section ."+g+"_section table tbody").show().find("input.points_possible").change(function(){r.points_possible=$(this).val()})});$("#gradebook_importer_resolution_section, #gradebook_importer_resolution_section ."+
g+"_section").show()}});k.student.length||k.assignment.length?$("#gradebook_importer_resolution_section").submit(function(e){var g=false;e.preventDefault();$(this).find("select").each(function(){if(!$(this).val()){g=true;$(this).errorBox("Please select an option");return false}});if(g)return false;$(this).find("select").each(function(){var a=$(this),q=a.attr("name").split("_"),u=q[0],r=q[1];a=a.val();switch(a){case "new":break;case "ignore":for(var E in uploadedGradebook[u+"s"])if(r==uploadedGradebook[u+
"s"][E].id){uploadedGradebook[u+"s"].splice(E,1);break}break;default:_.detect(uploadedGradebook[u+"s"],function(G){return r==G.id}).original_id=a}});$(this).hide();GradebookUploader.init()}):GradebookUploader.init()}};
