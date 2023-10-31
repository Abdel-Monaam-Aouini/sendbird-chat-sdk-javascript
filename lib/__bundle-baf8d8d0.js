import{_ as e,aZ as t,b as s,c as n,ag as r,aE as a,z as i,B as o,r as u,ao as d,aD as c,Y as h,ar as l,U as _,W as A}from"./__bundle-30814fe9.js";import{t as g,G as f}from"./__bundle-85e002d3.js";var E,p,R;!function(e){e.LATEST_LAST_MESSAGE="latest_last_message",e.CHRONOLOGICAL="chronological",e.CHANNEL_NAME_ALPHABETICAL="channel_name_alphabetical",e.METADATA_VALUE_ALPHABETICAL="metadata_value_alphabetical"}(E||(E={})),function(e){e.CHRONOLOGICAL="chronological",e.CHANNEL_NAME_ALPHABETICAL="channel_name_alphabetical",e.METADATA_VALUE_ALPHABETICAL="metadata_value_alphabetical"}(p||(p={})),function(e){e.CREATED_AT="created_at",e.SCHEDULED_AT="scheduled_at"}(R||(R={}));var C,L=function(e){switch(e){case E.LATEST_LAST_MESSAGE:return["-lastMessageUpdatedAt","-createdAt","syncIndex"];case E.CHRONOLOGICAL:return["-createdAt","syncIndex"];case E.CHANNEL_NAME_ALPHABETICAL:return["name"];default:return["-lastMessageUpdatedAt","-createdAt","syncIndex"]}},I=function(t){function s(e){var s=e.message,n=t.call(this)||this;return n.message=s,n}return e(s,t),s}(t),b={},S=function(){function e(e,t){var s=t.localCacheEnabled,n=t.enableAutoResend,r=t.dispatcher,a=t.sdkState,u=t.logger,d=this;this._iid=e,b[e]=this,this._localCacheEnabled=s,this._enableAutoResend=n,this._isProcessingAutoResend=!1,this._autoResendQueue=[],this._dispatcher=r,this._logger=u,this._sdkState=a,this._localCacheEnabled&&r.on((function(e){if(e instanceof i)switch(e.stateType){case o.CONNECTED:d._isProcessingAutoResend||d.processAutoResendRegisteredPendingMessages().then((function(){return d._processNextAutoResend()}));break;case o.INTERNAL_DISCONNECTED:case o.EXTERNAL_DISCONNECTED:d._isProcessingAutoResend=!1}}))}return e.of=function(e){return b[e]},e.prototype.processNonAutoResendRegisteredPendingMessages=function(){return s(this,void 0,void 0,(function(){var e,t,s,a,i,o;return n(this,(function(n){switch(n.label){case 0:return this._enableAutoResend?[4,this._fetchAllCachedPendingMessages()]:[2];case 1:e=n.sent();try{for(t=u(e),s=t.next();!s.done;s=t.next())0===(a=s.value).errorCode&&(this._logger.debug("cached pending message is not auto-resend registered. changing its sending status to failed: ",a.reqId),a.sendingStatus=r.FAILED,a.errorCode=d.ACK_TIMEOUT,this._dispatcher.dispatch(new c({messages:[a],source:h.LOCAL_MESSAGE_FAILED})))}catch(e){i={error:e}}finally{try{s&&!s.done&&(o=t.return)&&o.call(t)}finally{if(i)throw i.error}}return[2]}}))}))},e.prototype.processAutoResendRegisteredPendingMessages=function(){return s(this,void 0,void 0,(function(){var e,t,s,i,o,d,l,_;return n(this,(function(n){switch(n.label){case 0:return[4,this._fetchAllCachedPendingMessages()];case 1:e=n.sent();try{for(t=u(e),s=t.next();!s.done;s=t.next())i=s.value,this._enableAutoResend&&i.errorCode&&a(i.errorCode)&&(o=(new Date).getTime(),d=i.createdAt+2592e5,this._enableAutoResend&&o<=d?this._autoResendQueue.map((function(e){return e.reqId})).indexOf(i.reqId)<0&&this._autoResendQueue.push(i):(this._logger.debug("auto-resend registered pending messaged expired. expiration date: ",new Date(d).toLocaleString()),i.sendingStatus=r.FAILED,this._dispatcher.dispatch(new c({messages:[i],source:h.LOCAL_MESSAGE_FAILED}))))}catch(e){l={error:e}}finally{try{s&&!s.done&&(_=t.return)&&_.call(t)}finally{if(l)throw l.error}}return[2]}}))}))},e.prototype.completeCurrentAndProcessNextAutoResend=function(e){if(this._localCacheEnabled&&this._enableAutoResend&&(e.sendingStatus===r.SUCCEEDED||e.sendingStatus===r.FAILED&&!a(e.errorCode))){var t=this.indexOf(e);t>=0&&this._autoResendQueue.splice(t,1),0===t&&this._processNextAutoResend()}},e.prototype._fetchAllCachedPendingMessages=function(){return s(this,void 0,void 0,(function(){var e,t;return n(this,(function(s){switch(s.label){case 0:return e=g.of(this._iid),(t=new f).replyType=l.ALL,[4,e.fetch({sendingStatus:r.PENDING,backward:!0,filter:t})];case 1:return[2,s.sent()]}}))}))},e.prototype.indexOf=function(e){return this._autoResendQueue.length>0?this._autoResendQueue.map((function(e){return e.reqId})).indexOf(e.reqId):-1},e.prototype._isNotInQueue=function(e){return-1===this._autoResendQueue.map((function(e){return e.reqId})).indexOf(e.reqId)},e.prototype._processNextAutoResend=function(){return s(this,void 0,void 0,(function(){var e;return n(this,(function(t){if(this._localCacheEnabled&&this._enableAutoResend&&"foreground"===this._sdkState.appState)try{this._autoResendQueue.length>0?(this._isProcessingAutoResend||(this._logger.debug("auto-resend queue started."),this._isProcessingAutoResend=!0),e=this._autoResendQueue[0],this._dispatcher.dispatch(new I({message:e})),this._logger.debug("processing auto-resend for message request id: ",e.reqId)):(this._logger.debug("auto-resend queue finished."),this._isProcessingAutoResend=!1)}catch(e){this._logger.warn("process auto-resend error: ",e),this._isProcessingAutoResend=!1}return[2]}))}))},e}();!function(e){e[e.USER_BLOCK=20001]="USER_BLOCK",e[e.USER_UNBLOCK=2e4]="USER_UNBLOCK",e[e.FRIEND_DISCOVERED=20900]="FRIEND_DISCOVERED"}(C||(C={}));var N=function(){function e(e){this.category=e.cat,this.data=e.data}return e.getDataAsUserBlockEvent=function(e,t){var s=t.data,n=s.blocker,r=s.blockee;return{blocker:new _(e,n),blockee:new _(e,r)}},e.getDataAsFriendDiscoveredEvent=function(e,t){var s=t.data.friend_discoveries;return{friendDiscoveries:Array.isArray(s)?s.map((function(t){return new _(e,t)})):[]}},e}(),v=function(t){function s(e,s){var n=s.userId,r=t.call(this)||this;return r._iid=e,r.userId=n,r}return e(s,t),s}(t),D=function(t){function s(){return t.call(this)||this}return e(s,t),s}(t),T=function(t){function s(e,s,n){var r=t.call(this,e,"USEV",n)||this;return r.event=new N(n),r}return e(s,t),s}(A);export{S as A,v as D,E as G,p as P,D as R,R as S,T as U,C as a,N as b,I as c,L as g};