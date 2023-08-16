import{_ as e,aE as a,b as r,aN as n,c as o,g as i,aO as s,s as l,aP as u,q as c,aQ as p,aR as d,aS as h,aT as g}from"./lib/__bundle-d50368aa.js";export{ag as Poll,t as PollListQuery,aU as PollOption,aV as PollStatus,ay as PollVoteEvent,w as PollVoterListQuery}from"./lib/__bundle-d50368aa.js";export{P as PollUpdateEvent}from"./lib/__bundle-c336221f.js";var f=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="poll",e}return e(n,t),n.prototype.init=function(e,r){var n=r.sdkState,o=r.dispatcher,i=r.sessionManager,s=r.requestQueue,l=r.logger,u=r.onlineDetector,c=r.cacheContext;t.prototype.init.call(this,e,{sdkState:n,dispatcher:o,sessionManager:i,requestQueue:s,logger:l,onlineDetector:u,cacheContext:c}),this._manager=new a(e,{sdkState:n,dispatcher:o,sessionManager:i,requestQueue:s,logger:l,onlineDetector:u,cacheContext:c})},n.prototype.create=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(a){return e=i(i({},s),t),l(u(e)).throw(c.invalidParameters),[2,this._manager.create(e)]}))}))},n.prototype.get=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(a){return e=i(i({},p),t),l(d(e)).throw(c.invalidParameters),[2,this._manager.get(e)]}))}))},n.prototype.getOption=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(a){return e=i(i({},h),t),l(g(e)).throw(c.invalidParameters),[2,this._manager.getOption(e)]}))}))},n.prototype.buildPollFromSerializedData=function(t){return this._manager.buildPollFromSerializedData(t)},n}(n);export{f as PollModule};
