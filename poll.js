import{_ as t,b as e,ai as r,c as n,g as o,q as s,S as u}from"./__bundle-84b51006.js";export{a3 as Poll,aj as PollOption,ak as PollStatus}from"./__bundle-84b51006.js";import{b as l,c,v as p,d,e as f,f as g,g as v}from"./__bundle-aafbc715.js";export{P as PollListQuery,h as PollUpdateEvent,i as PollVoteEvent,a as PollVoterListQuery}from"./__bundle-aafbc715.js";var m=function(a){function r(){var t=null!==a&&a.apply(this,arguments)||this;return t.name="poll",t}return t(r,a),r.prototype.init=function(t,e){var r=e.sdkState,n=e.dispatcher,o=e.sessionManager,i=e.requestQueue,s=e.logger,u=e.onlineDetector,c=e.cacheContext;a.prototype.init.call(this,t,{sdkState:r,dispatcher:n,sessionManager:o,requestQueue:i,logger:s,onlineDetector:u,cacheContext:c}),this._manager=new l(t,{sdkState:r,dispatcher:n,sessionManager:o,requestQueue:i,logger:s,onlineDetector:u,cacheContext:c})},r.prototype.create=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(a){return e=o(o({},c),t),s(p(e)).throw(u.invalidParameters),[2,this._manager.create(e)]}))}))},r.prototype.get=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(a){return e=o(o({},d),t),s(f(e)).throw(u.invalidParameters),[2,this._manager.get(e)]}))}))},r.prototype.getOption=function(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(a){return e=o(o({},g),t),s(v(e)).throw(u.invalidParameters),[2,this._manager.getOption(e)]}))}))},r.prototype.buildPollFromSerializedData=function(t){return this._manager.buildPollFromSerializedData(t)},r}(r);export{m as PollModule};
