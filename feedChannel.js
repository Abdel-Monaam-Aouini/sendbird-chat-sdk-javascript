import{e,u as t,_ as n,s as r,q as a,g as i,o as s,p as o,b as c,c as u,aa as l,r as h,y as d,A as f,d as p,f as v,h as _,b4 as g,as as y,a as m,bd as C,aJ as b,N as w,V as E,an as M,W as N,x as T,Y as k,Z as I,ao as x,D as A,aD as S,b8 as D,ap as U,b7 as F,a$ as L,at as H,aH as O,aP as R}from"./lib/__bundle-b0423806.js";import{i as P,aD as j,a9 as G,aE as V,aF as B,aG as q,J as Q,w as z}from"./lib/__bundle-e39434f5.js";export{a9 as NotificationMessage,aG as NotificationMessageStatus}from"./lib/__bundle-e39434f5.js";import{F as W,E as J,I as K,J as Y,K as X,L as Z,p as ee,N as te,V as ne,W as re,X as ae,c as ie,Y as se,Z as oe,_ as ce}from"./lib/__bundle-63025b32.js";export{$ as FeedChannelEventContext,a0 as NotificationEventContext}from"./lib/__bundle-63025b32.js";import{g as ue,N as le}from"./lib/__bundle-7bc1b5ea.js";import{D as he}from"./lib/__bundle-bea75723.js";import{B as de,C as fe,a as pe}from"./lib/__bundle-290a8dbd.js";import"./lib/__bundle-c336221f.js";var ve=function(){function n(e){this.id=e.id,this.name=e.name,this.isDefault=e.is_default}return n.payloadify=function(n){return e(t({id:n.id,name:n.name,is_default:n.isDefault}))},Object.defineProperty(n.prototype,"customType",{get:function(){return this.isDefault?"*":String(this.id)},enumerable:!1,configurable:!0}),n}(),_e=function(t){function l(e,n){var r=n.sdkState,a=n.cacheContext,i=n.channelManager,s=t.call(this,e)||this;return s._channels=new Map,s._sdkState=r,s._cacheContext=a,s._channelManager=i,s}return n(l,t),Object.defineProperty(l.prototype,"collection",{get:function(){var e=this._cacheContext.nestdb;return r(!!e).throw(a.databaseError),e.collection(P)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"localCacheEnabled",{get:function(){return this._cacheContext.localCacheEnabled&&!!this.collection},enumerable:!1,configurable:!0}),l.prototype._serialize=function(e,t){return void 0===t&&(t=0),i(i({},e.serialize()),{lastMessageUpdatedAt:e.lastMessage?e.lastMessage.createdAt:0,syncIndex:t})},l.prototype._deserialize=function(e){return this._channelManager.buildFeedChannelFromSerializedData(e)},Object.defineProperty(l.prototype,"channels",{get:function(){return s([],o(this._channels.values()),!1)},enumerable:!1,configurable:!0}),l.prototype.isCachedInMemory=function(e){return this._channels.has(e)},l.prototype.get=function(e){return c(this,void 0,void 0,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return this._channels.has(e)?[3,3]:this.localCacheEnabled?[4,this.collection.getByKey(e)]:[3,2];case 1:if(t=n.sent())return this._channels.set(e,this._deserialize(t)),[2,this._channels.get(e)];n.label=2;case 2:return[2,void 0];case 3:return[2,this._channels.get(e)]}}))}))},l.prototype.fetch=function(e){var t=e.token,n=e.limit,r=void 0===n?j:n,a=e.backward,i=void 0!==a&&a,s=e.order,o=void 0===s?"latest_last_message":s,l=e.borderlineChannelUrl;return c(this,void 0,void 0,(function(){var e,n,a,s,c=this;return u(this,(function(u){switch(u.label){case 0:return this.localCacheEnabled?(e=ue(o),n={where:function(e){if(t&&"latest_last_message"===o){if(!i&&e.lastMessageUpdatedAt>t||i&&e.lastMessageUpdatedAt<t)return!1;if(l&&l===e.url)return!1}return!0},index:e,backward:i},[4,this.collection.query(n)]):[3,3];case 1:return[4,u.sent().fetch({limit:r})];case 2:return a=u.sent(),(s=a.map((function(e){return c._deserialize(e)}))).forEach((function(e){c._channels.has(e.url)||c._channels.set(e.url,e)})),[2,s];case 3:return[2,[]]}}))}))},l.prototype.upsert=function(t){return c(this,void 0,void 0,(function(){var n,r,a,i=this;return u(this,(function(s){switch(s.label){case 0:if(n=[],t.forEach((function(t){if(i._channels.has(t.url)){var r=i._channels.get(t.url),a=e(t);Object.assign(r,a,{_iid:i._iid}),n.push(r)}else i._channels.set(t.url,t),n.push(t)})),!this.localCacheEnabled)return[3,2];for(a in r=[],n)r.push(this._serialize(n[a],parseInt(a)));return[4,this.collection.upsertMany(r)];case 1:s.sent(),s.label=2;case 2:return[2,n]}}))}))},l.prototype.remove=function(e){return c(this,void 0,void 0,(function(){var t,n,r,a,i,s;return u(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,7]),t=h(e),n=t.next(),o.label=1;case 1:return n.done?[3,4]:(r=n.value,this._channels.delete(r),this.localCacheEnabled?[4,this.collection.remove(r)]:[3,3]);case 2:o.sent(),o.label=3;case 3:return n=t.next(),[3,1];case 4:return[3,7];case 5:return a=o.sent(),i={error:a},[3,7];case 6:try{n&&!n.done&&(s=t.return)&&s.call(t)}finally{if(i)throw i.error}return[7];case 7:return[2]}}))}))},l.prototype.clear=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return this.clearMemoryCache(),this.localCacheEnabled?[4,this.collection.clear()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},l.prototype.clearMemoryCache=function(){this._channels.clear()},l}(l),ge=function(){function e(e){var t=e.feedChannelCache,n=e.notificationMessageCache,r=e.dispatcher,a=this;this._observers=new Map,r.on((function(e){return c(a,void 0,void 0,(function(){var r,a,i,s,o,l,f,p=this;return u(this,(function(v){switch(v.label){case 0:return e instanceof J?(r=e.channels,l=e.source,f=e.isWebSocketEventComing,a=e.data,i=r.filter((function(e){return e instanceof Re})),[4,t.upsert(i)]):[3,3];case 1:return s=v.sent(),[4,Promise.all(i.map((function(e){return n.markAsReadByTimestamp(e.url,e.myLastRead)})))];case 2:return v.sent(),f||this._broadcastUpdateEvent(s,l,a),[3,8];case 3:return e instanceof W?(o=e.channelUrls,l=e.source,f=e.isWebSocketEventComing,[4,t.remove(o)]):[3,6];case 4:return v.sent(),[4,d((function(){return c(p,void 0,void 0,(function(){var e,t,r,a,i,s;return u(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,7]),e=h(o),t=e.next(),c.label=1;case 1:return t.done?[3,4]:(r=t.value,[4,n.removeMessagesOfChannel(r)]);case 2:c.sent(),c.label=3;case 3:return t=e.next(),[3,1];case 4:return[3,7];case 5:return a=c.sent(),i={error:a},[3,7];case 6:try{t&&!t.done&&(s=e.return)&&s.call(e)}finally{if(i)throw i.error}return[7];case 7:return[2]}}))}))}))];case 5:return v.sent(),f||this._broadcastRemoveEvent(o,l),[3,8];case 6:return e instanceof he?[4,t.fetch({token:Number.MAX_SAFE_INTEGER,limit:Number.MAX_SAFE_INTEGER})]:[3,8];case 7:v.sent(),v.label=8;case 8:return[2]}}))}))}))}return e.prototype._broadcastUpdateEvent=function(e,t,n){var r,a;try{for(var i=h(this._observers.values()),s=i.next();!s.done;s=i.next()){var o=s.value;o.onUpdate&&o.onUpdate(e,t,n)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(a=i.return)&&a.call(i)}finally{if(r)throw r.error}}},e.prototype._broadcastRemoveEvent=function(e,t){var n,r;try{for(var a=h(this._observers.values()),i=a.next();!i.done;i=a.next()){var s=i.value;s.onRemove&&s.onRemove(e,t)}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}},e.prototype.subscribe=function(e,t){this._observers.set(e,t)},e.prototype.unsubscribe=function(e){this._observers.delete(e)},e.prototype.unsubscribeAll=function(){this._observers.clear()},e}(),ye=!1,me=function(t){function r(n){var r=t.call(this)||this,a=n.userId,i=n.token,s=n.limit,o=n.includeEmpty;return r.method=f.GET,r.path="".concat(p,"/").concat(encodeURIComponent(a),"/my_group_channels"),r.params=e({token:i,limit:s,show_empty:null!=o?o:ye,show_read_receipt:!0,show_delivery_receipt:!0,show_member:!0,is_feed_channel:!0,order:"latest_last_message"}),r}return n(r,t),r}(v),Ce=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.channels=[];var a=n.next,i=n.channels,s=n.ts;return r.token=a,r.ts=null!=s?s:0,r.channels=(null!=i?i:[]).map((function(e){return e.ts=s,new Re(t,e)})),r}return n(t,e),t}(_),be=function(e){function t(t){var n=t.channelUrl,r=t.isInternalCall,a=e.call(this)||this;return a.method=f.GET,a.path="".concat(r?g:y,"/").concat(encodeURIComponent(n)),a.params={show_member:!0,show_read_receipt:!0,show_delivery_receipt:!0,is_feed_channel:!0},a}return n(t,e),t}(v),we=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.channel=new Re(t,n),r}return n(t,e),t}(_),Ee={includeEmpty:!0},Me=function(e){return m("boolean",e.includeEmpty)},Ne=function(r){function a(n){var a=n.userId,s=n.ts,o=n.token,c=n.params,u=r.call(this)||this,l=i(i({},Ee),c).includeEmpty;return u.method=f.GET,u.path="".concat(p,"/").concat(encodeURIComponent(a),"/my_group_channels/changelogs"),u.params=e(t({show_delivery_receipt:!0,show_member:!0,show_read_receipt:!0,is_feed_channel:!0,show_empty:l,change_ts:s||null,token:o})),u}return n(a,r),a}(v),Te=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.updatedChannels=n.updated.map((function(e){return new Re(t,e)})),r.deletedChannelUrls=n.deleted,r.hasMore=n.has_more,r.token=n.next,r}return n(t,e),t}(_),ke=function(e){function t(){var t=e.call(this)||this;return t.method=f.GET,t.path="".concat(C,"/settings"),t}return n(t,e),t}(v),Ie=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.jsonString=JSON.stringify(n),r}return n(t,e),t}(_),xe=function(t){function r(n){var r=this,a=n.reverse,i=void 0!==a&&a,s=n.keys,o=n.limit,c=void 0===o?20:o,u=n.token;return(r=t.call(this)||this).method=f.GET,r.path="".concat(C,"/templates"),r.params=e({token:u,keys:s,limit:c,reverse:i,order:"updated_at",show_ui_template:!0,show_color_variables:!0}),r}return n(r,t),r}(v),Ae=function(e){function t(t,n){var r=e.call(this,t,n)||this,a=n.next,i=n.has_more,s=void 0!==i&&i,o=b(n,["next","has_more"]);return r.nextToken=a,r.hasMore=s,r.notificationTemplateList={jsonString:JSON.stringify(o)},r}return n(t,e),t}(_),Se={reverse:!1,keys:void 0,limit:20},De=function(t){function r(n){var r=this,a=n.key;return(r=t.call(this)||this).method=f.GET,r.path="".concat(C,"/templates/").concat(a),r.params=e({key:a}),r}return n(r,t),r}(v),Ue=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.jsonString=JSON.stringify(n),r}return n(t,e),t}(_),Fe=function(e){function t(t,n,r){var a,i,s,o=this;(o=e.call(this,t,"ADMM",r)||this).message=new G(t,r);var c=E.of(t).sdkState;return o.isMentioned=M(o.message.mentionType,null!==(s=null!==(a=o.message.mentionedUserIds)&&void 0!==a?a:null===(i=o.message.mentionedUsers)||void 0===i?void 0:i.map((function(e){return e.userId})))&&void 0!==s?s:[],c.userId),o}return n(t,e),t}(N),Le={},He=function(e){function l(t,n){var r=e.call(this,t,i(i({},n),{channelType:I.FEED}))||this;return r._feedChannelHandlers=new Map,r._feedChannelCache=new _e(r._iid,{sdkState:r._sdkState,cacheContext:r._cacheContext,channelManager:r}),r._feedChannelBroadcast=new ge({feedChannelCache:r._feedChannelCache,dispatcher:r._dispatcher,notificationMessageCache:V.of(t)}),r._dispatcher.on((function(e){e instanceof N&&r._handleEvent(e)})),Le[t]||(Le[t]=r),r}return n(l,e),Object.defineProperty(l.prototype,"_notificationMessageCache",{get:function(){return V.of(this._iid)},enumerable:!1,configurable:!0}),l.of=function(e){return Le[e]||(Le[e]=new l(e,E.of(e))),Le[e]},l.clear=function(e){Le[e]&&delete Le[e]},Object.defineProperty(l.prototype,"handlers",{get:function(){return s([],o(this._feedChannelHandlers.values()),!1)},enumerable:!1,configurable:!0}),l.prototype.buildFeedChannelFromSerializedData=function(e){var t=T(e);return new Re(this._iid,Re.payloadify(t))},l.prototype.addHandler=function(e,t){this._feedChannelHandlers.set(e,t)},l.prototype.removeHandler=function(e){this._feedChannelHandlers.delete(e)},l.prototype.clearHandler=function(){this._feedChannelHandlers.clear()},l.prototype.getMyFeedChannels=function(e,t,n){return c(this,void 0,void 0,(function(){var r,a,s,o,c;return u(this,(function(u){switch(u.label){case 0:return r=new me(i(i({},t),{userId:this._sdkState.userId,token:e,limit:n})),[4,this._requestQueue.send(r)];case 1:return a=u.sent(),s=a.as(Ce),o=s.channels,c=s.token,[2,{channels:o,token:c}]}}))}))},l.prototype.getChannel=function(e,t){return void 0===t&&(t=!1),c(this,void 0,void 0,(function(){var n;return u(this,(function(i){switch(i.label){case 0:r(m("string",e)).throw(a.invalidParameters),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.getChannelFromCache(e)];case 2:return(n=i.sent())?[2,n]:[3,4];case 3:return i.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(e,t)];case 5:return[2,i.sent()]}}))}))},l.prototype.getChannelFromCache=function(e){var t;return c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return r(m("string",e)).throw(a.invalidParameters),[4,this._feedChannelCache.get(e)];case 1:return[2,null!==(t=n.sent())&&void 0!==t?t:null]}}))}))},l.prototype.getChannelWithoutCache=function(e,t){return void 0===t&&(t=!1),c(this,void 0,void 0,(function(){var n,i,s,c;return u(this,(function(u){switch(u.label){case 0:return r(m("string",e)).throw(a.invalidParameters),n=new be({channelUrl:e,isInternalCall:t}),[4,this._requestQueue.send(n)];case 1:return i=u.sent(),s=i.as(we).channel,[4,this.upsertChannelsToCache([s])];case 2:return c=o.apply(void 0,[u.sent(),1]),[2,c[0]]}}))}))},l.prototype.getMyFeedChannelChangeLogs=function(e,n,s){return void 0===s&&(s=k.REQUEST_CHANNEL_CHANGELOGS),c(this,void 0,void 0,(function(){var o,c,l,h,d,f,p,v;return u(this,(function(u){switch(u.label){case 0:return o=i(i({},Ee),n),r((m("string",e)||m("number",e))&&Me(o)).throw(a.invalidParameters),c=new Ne(t({userId:this._sdkState.userId,ts:"number"==typeof e?e:null,token:"string"==typeof e?e:null,params:o})),[4,this._requestQueue.send(c)];case 1:return l=u.sent(),h=l.as(Te),d=h.updatedChannels,f=h.deletedChannelUrls,p=h.hasMore,v=h.token,d.length>0&&this._dispatcher.dispatch(new J({channels:d,source:s})),f.length>0&&this._dispatcher.dispatch(new W({channelUrls:f,source:s})),[2,{updatedChannels:d,deletedChannelUrls:f,hasMore:p,token:v}]}}))}))},l.prototype.getTotalUnreadMessageCount=function(e){return c(this,void 0,void 0,(function(){var t,n,s,o,c,l,h;return u(this,(function(u){switch(u.label){case 0:return t=i(i({},Y),e),r(X(t)).throw(a.invalidParameters),n=E.of(this._iid),s=n.sdkState,o=n.requestQueue,c=new Z({userId:s.userId,filter:t,includeFeedChannel:!0}),[4,o.send(c)];case 1:return l=u.sent(),h=l.as(K).unreadFeedCount,[2,void 0===h?0:h]}}))}))},l.prototype.getGlobalNotificationChannelSetting=function(){return c(this,void 0,void 0,(function(){var e,t;return u(this,(function(n){switch(n.label){case 0:return e=new ke,[4,this._requestQueue.send(e)];case 1:return t=n.sent(),[2,{jsonString:t.as(Ie).jsonString}]}}))}))},l.prototype.getNotificationTemplateListByToken=function(e,t){return void 0===t&&(t={}),c(this,void 0,void 0,(function(){var n,s,o,c,l,h,d;return u(this,(function(u){switch(u.label){case 0:return n=i(i({},Se),t),r(m("string",e)&&function(e){return m("boolean",e.reverse,!0)&&w("string",e.keys,!0)&&m("number",e.limit,!0)}(n)).throw(a.invalidParameters),s=new xe({token:e,keys:n.keys,reverse:n.reverse,limit:n.limit}),[4,this._requestQueue.send(s)];case 1:return o=u.sent(),c=o.as(Ae),l=c.hasMore,h=c.nextToken,d=c.notificationTemplateList,[2,{hasMore:l,token:h,notificationTemplateList:d}]}}))}))},l.prototype.getNotificationTemplate=function(e){return c(this,void 0,void 0,(function(){var t,n;return u(this,(function(i){switch(i.label){case 0:return r(m("string",e)).throw(a.invalidParameters),t=new De({key:e}),[4,this._requestQueue.send(t)];case 1:return n=i.sent(),[2,{jsonString:n.as(Ue).jsonString}]}}))}))},l.prototype.upsertChannelsToCache=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._feedChannelCache.upsert(e)];case 1:return[2,t.sent()]}}))}))},l.prototype.removeChannelsFromCache=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._feedChannelCache.remove(e)];case 1:return t.sent(),[2]}}))}))},l.prototype.getNotificationMessageFromCache=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._notificationMessageCache.get(e)];case 1:return[2,t.sent()]}}))}))},l.prototype.refreshChannel=function(e,t,n){return void 0===t&&(t=!0),void 0===n&&(n=k.REFRESH_CHANNEL),c(this,void 0,void 0,(function(){var r,a,i,s,o;return u(this,(function(c){switch(c.label){case 0:return c.trys.push([0,5,,6]),r=new be({channelUrl:e,isInternalCall:t}),[4,this._requestQueue.send(r)];case 1:return a=c.sent(),(i=a.as(we).channel).myMemberState!==ee.NONE?[3,2]:(this._dispatcher.dispatch(new W({channelUrls:[i.url],source:n})),[3,4]);case 2:return[4,this.upsertChannelsToCache([i])];case 3:s=c.sent(),this._dispatcher.dispatch(new J({channels:s,source:n})),c.label=4;case 4:return[3,6];case 5:return(o=c.sent()).code!==x.NON_AUTHORIZED&&o.code!==x.NOT_FOUND_IN_DATABASE||this._dispatcher.dispatch(new W({channelUrls:[e],source:n})),[3,6];case 6:return[2]}}))}))},l.prototype.refreshNotificationCollections=function(){this._dispatcher.dispatch(new le)},l.prototype.subscribeChannelEvent=function(e,t){this._feedChannelBroadcast.subscribe(e,t)},l.prototype.unsubscribeChannelEvent=function(e){this._feedChannelBroadcast.unsubscribe(e)},l.prototype._handleEvent=function(e){return c(this,void 0,void 0,(function(){var t,n,r,a,i,s,o,l,d,f,p=this;return u(this,(function(v){switch(v.label){case 0:switch(e.code){case"ADMM":case"BRDM":return[3,1];case"READ":return[3,4];case"SYEV":return[3,7]}return[3,13];case 1:return(o="ADMM"===e.code||"BRDM"===e.code?e.as(Fe):null)&&o.message.channelType===this._channelType?(t=o.message,n=o.isMentioned,[4,this.getChannel(t.channelUrl,!0)]):[3,3];case 2:(r=v.sent())._runIfHandleableWithGroupChannel((function(e){var a;t instanceof G&&n&&(null===(a=t.mentionedUsers)||void 0===a||a.forEach((function(t){var n,r;try{for(var a=h(e.members),i=a.next();!i.done;i=a.next()){var s=i.value;if(t.userId===s.userId){t.nickname=s.nickname,t.plainProfileUrl=s.plainProfileUrl,t.metaData=s.metaData;break}}}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}))),p._dispatcher.dispatch(new J({channels:[r],source:k.EVENT_MESSAGE_RECEIVED})),p._dispatcher.dispatch(new S({messages:[t],source:k.EVENT_MESSAGE_RECEIVED})),A((function(){return c(p,void 0,void 0,(function(){var e,a,i,s,o;return u(this,(function(c){try{for(e=h(this._feedChannelHandlers.values()),a=e.next();!a.done;a=e.next())(i=a.value).onMessageReceived&&i.onMessageReceived(r,t),n&&i.onMentionReceived&&i.onMentionReceived(r,t)}catch(e){s={error:e}}finally{try{a&&!a.done&&(o=e.return)&&o.call(e)}finally{if(s)throw s.error}}return[2]}))}))}))})),v.label=3;case 3:return[3,13];case 4:return(o="READ"===e.code?e.as(te):null)?(a=o.readStatus,i=this._feedChannelCache.isCachedInMemory(a.channelUrl),[4,this.getChannel(a.channelUrl,!0)]):[3,6];case 5:(s=v.sent())._runIfHandleableWithGroupChannel((function(e){i&&e._updateUnreadMemberState(a.reader.userId,a.readAt),a.reader.userId===p._sdkState.userId&&(i?(e.unreadMessageCount>0||e.unreadMentionCount>0)&&(e._updateUnreadCount(0,0),p._dispatcher.dispatch(new J({channels:[s],source:k.EVENT_CHANNEL_READ})),A((function(){return c(p,void 0,void 0,(function(){var e,t,n,r,a;return u(this,(function(i){try{for(e=h(this._feedChannelHandlers.values()),t=e.next();!t.done;t=e.next())(n=t.value).onChannelChanged&&n.onChannelChanged(s)}catch(e){r={error:e}}finally{try{t&&!t.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))):0!==e.unreadMessageCount&&0!==e.unreadMentionCount||(p._dispatcher.dispatch(new J({channels:[s],source:k.EVENT_CHANNEL_READ})),A((function(){return c(p,void 0,void 0,(function(){var e,t,n,r,a;return u(this,(function(i){try{for(e=h(this._feedChannelHandlers.values()),t=e.next();!t.done;t=e.next())(n=t.value).onChannelChanged&&n.onChannelChanged(s)}catch(e){r={error:e}}finally{try{t&&!t.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))))})),v.label=6;case 6:return[3,13];case 7:if(!(o="SYEV"===e.code?e.as(fe):null)||o.event.channelType!==this._channelType)return[3,12];switch(l=o.event,l.category){case pe.CHANNEL_DELETED:return[3,8];case pe.CHANNEL_PROP_CHANGED:return[3,10]}return[3,12];case 8:return[4,this.getChannel(l.channelUrl,!0)];case 9:return d=v.sent(),this._dispatcher.dispatch(new W({channelUrls:[l.channelUrl],source:k.EVENT_CHANNEL_DELETED})),A((function(){return c(p,void 0,void 0,(function(){return u(this,(function(e){return this._feedChannelHandlers.forEach((function(e){e.onChannelDeleted&&e.onChannelDeleted(d.url,d.channelType)})),[2]}))}))})),[3,12];case 10:return[4,this.getChannelWithoutCache(l.channelUrl,!0)];case 11:return f=v.sent(),this._dispatcher.dispatch(new J({channels:[f],source:k.EVENT_CHANNEL_UPDATED})),A((function(){return c(p,void 0,void 0,(function(){return u(this,(function(e){return this._feedChannelHandlers.forEach((function(e){e.onChannelChanged&&e.onChannelChanged(f)})),[2]}))}))})),[3,12];case 12:return[3,13];case 13:return[2]}}))}))},l.prototype.getMessageFromCache=function(e){var t;return c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this._notificationMessageCache.get(e)];case 1:return[2,null!==(t=n.sent())&&void 0!==t?t:null]}}))}))},l.prototype.getExactlyMatchingMessagesForTokenFromCache=function(e,t,n){return c(this,void 0,void 0,(function(){return u(this,(function(r){switch(r.label){case 0:return[4,this._notificationMessageCache.fetch({channelUrl:e,token:t,filter:n,exactMatch:!0})];case 1:return[2,r.sent()]}}))}))},l.prototype.getMessagesFromCache=function(e,t,n,r,a,i){return void 0===a&&(a=B),void 0===i&&(i=!0),c(this,void 0,void 0,(function(){return u(this,(function(s){switch(s.label){case 0:return[4,this._notificationMessageCache.fetch({channelUrl:e,token:t,limit:a,filter:r,backward:"next"===n,inclusive:i})];case 1:return[2,s.sent()]}}))}))},l}(de),Oe=function(e){function t(t,n){var r=e.call(this,t,i(i({},n),{channelManager:He.of(t)}))||this,a=E.of(r._iid),s=a.connectionManager,o=a.dispatcher;return r._notificationCollectionEventContext=o.on((function(e){e instanceof le&&U(10).then((function(){s.isConnected||s.isConnecting||r.refresh()}))})),r}return n(t,e),t.prototype.keyOf=function(e){return e.notificationId},t.prototype.dispose=function(){e.prototype.dispose.call(this),this._notificationCollectionEventContext.close()},t.prototype.setMessageCollectionHandler=function(e){this._setBaseMessageCollectionHandler(e)},t.prototype._postprocessChannelUpdateEvent=function(e,t){var n,r,a=this._messages.filter((function(t){return t.messageStatus===q.SENT&&t.createdAt<=e.myLastRead}));if(a.length>0){try{for(var i=h(a),s=i.next();!s.done;s=i.next()){s.value.messageStatus=q.READ}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}this._updateMessagesToView(a,t)}},t.prototype._addMessagesToView=function(e,t){var n,r,a=this,i=this._filterUnderOffsetMessage(e),s=[],o=[];try{for(var l=h(i),d=l.next();!d.done;d=l.next()){var f,p=d.value;if(t===k.SYNC_MESSAGE_FILL){if((f=ne(this._messages,p))<0){var v=re(this._messages,p);this._messages.splice(v,0,p),s.push(p)}}else if((f=ne(this._messages,p))<0){v=re(this._messages,p);this._messages.splice(v,0,p),s.push(p)}else this._messages[f]=p,o.push(p)}}catch(e){n={error:e}}finally{try{d&&!d.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}D(t)&&A((function(){return c(a,void 0,void 0,(function(){var e,n,r,a,i;return u(this,(function(c){return e=this._createMessageEventContext(t),s.length>0&&(null===(r=null===(n=this._handler)||void 0===n?void 0:n.onMessagesAdded)||void 0===r||r.call(n,e,this.channel,s)),o.length>0&&(null===(i=null===(a=this._handler)||void 0===a?void 0:a.onMessagesUpdated)||void 0===i||i.call(a,e,this.channel,o)),[2]}))}))}))},t.prototype._updateMessagesToView=function(e,t){var n,r,a=this,i=[];try{for(var s=h(e),o=s.next();!o.done;o=s.next()){var l=o.value,d=ne(this._messages,l);d>=0&&(i.push(l),this._messages[d]=l)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return D(t)&&A((function(){return c(a,void 0,void 0,(function(){var e,n,r;return u(this,(function(a){return e=this._createMessageEventContext(t),i.length>0&&(null===(r=null===(n=this._handler)||void 0===n?void 0:n.onMessagesUpdated)||void 0===r||r.call(n,e,this.channel,i)),[2]}))}))})),i},t.prototype.refresh=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this._activate()];case 1:return e.sent(),[2]}}))}))},t}(ae),Re=function(e){function t(t,n){var r,a,s=this;return(s=e.call(this,t,n)||this).channelType=I.FEED,s._groupChannel=new ie(t,n),s.isCategoryFilterEnabled=null!==(r=n.is_category_filter_enabled)&&void 0!==r&&r,s.isTemplateLabelEnabled=null===(a=n.is_template_label_enabled)||void 0===a||a,s.notificationCategories=n.categories?n.categories.map((function(e){return new ve(e)})):[],s.lastMessage=n.last_message?Q(s._iid,i({channel_type:s.channelType},n.last_message)):null,s}return n(t,e),t.payloadify=function(e){var t;return i(i({},ie.payloadify(null!==(t=e._groupChannel)&&void 0!==t?t:e)),{is_category_filter_enabled:e.isCategoryFilterEnabled,is_template_label_enabled:e.isTemplateLabelEnabled,categories:e.notificationCategories.map((function(e){return ve.payloadify(e)})),last_message:e.lastMessage?G.payloadify(e.lastMessage):null})},Object.defineProperty(t.prototype,"groupChannel",{get:function(){return this._groupChannel},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._groupChannel.url},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this._groupChannel.name},set:function(e){this._groupChannel.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"createdAt",{get:function(){return this._groupChannel.createdAt},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"members",{get:function(){return this._groupChannel.members},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"memberCount",{get:function(){return this._groupChannel.memberCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"myMemberState",{get:function(){return this._groupChannel.myMemberState},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"myLastRead",{get:function(){return this._groupChannel.myLastRead},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unreadMessageCount",{get:function(){return this._groupChannel.unreadMessageCount},enumerable:!1,configurable:!0}),t.prototype.serialize=function(){return i(i({},this._groupChannel.serialize()),{notificationCategories:this.notificationCategories,lastMessage:this.lastMessage})},t.prototype.refresh=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this._groupChannel._refresh(!0)];case 1:return e.sent(),[2,this]}}))}))},t.prototype.markAsRead=function(){return c(this,void 0,void 0,(function(){var e,t,n,r,a,i,s,o=this;return u(this,(function(c){switch(c.label){case 0:return e=E.of(this._iid),t=e.sdkState,n=e.dispatcher,r=e.requestQueue,a=new oe({userId:t.userId,channelUrl:this.url,channelType:I.FEED}),[4,r.send(a)];case 1:return i=c.sent(),s=i.as(se).readAt,this._groupChannel._updateUnreadMemberState(t.userId,s),(this._groupChannel.unreadMessageCount>0||this._groupChannel.unreadMentionCount>0)&&(this._groupChannel._updateUnreadCount(0,0),He.of(this._iid).handlers.map((function(e){e.onChannelChanged&&e.onChannelChanged(o)}))),n.dispatch(new J({channels:[this],source:k.EVENT_CHANNEL_READ})),[2]}}))}))},t.prototype.markAsReadBy=function(e){return c(this,void 0,void 0,(function(){var t,n,r,a,i,s,o,c,l=this;return u(this,(function(u){switch(u.label){case 0:return(t=e.filter((function(e){return!e||e.messageStatus===q.SENT}))).length>0?(n=E.of(this._iid),r=n.sdkState,a=n.dispatcher,i=n.requestQueue,s=new ce({userId:r.userId,channelUrl:this.url,channelType:I.FEED,notificationIds:t}),[4,i.send(s)]):[3,2];case 1:o=u.sent(),c=o.as(se).unreadMessageCount,this._groupChannel.unreadMessageCount!==c&&(this._groupChannel._updateUnreadCount(c,0),He.of(this._iid).handlers.map((function(e){e.onChannelChanged&&e.onChannelChanged(l)}))),a.dispatch(new J({channels:[this],source:k.EVENT_CHANNEL_READ})),u.label=2;case 2:return[2]}}))}))},t.prototype.markAsClicked=function(e){return c(this,void 0,void 0,(function(){var t,n,r,a,i,s;return u(this,(function(o){if(t=E.of(this._iid).statLogCollector,e.length<=30)try{for(n=h(e),r=n.next();!r.done;r=n.next())(a=r.value)&&a.notificationId&&a.notificationData&&t.put(new F({type:L.NOTIFICATION,ts:Date.now(),data:{action:"clicked",template_key:a.notificationData.templateKey,channel_url:this.url,message_id:a.notificationId,tags:a.notificationData.tags,source:"notification",message_ts:a.createdAt}}))}catch(e){i={error:e}}finally{try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(i)throw i.error}}return[2]}))}))},t.prototype.logImpression=function(e){return c(this,void 0,void 0,(function(){var t,n,r,a,i,s;return u(this,(function(o){if(t=E.of(this._iid).statLogCollector,e.length<=30){try{for(n=h(e),r=n.next();!r.done;r=n.next())(a=r.value)&&a.notificationId&&a.notificationData&&t.put(new F({type:L.NOTIFICATION,ts:Date.now(),data:{action:"impression",template_key:a.notificationData.templateKey,channel_url:this.url,message_id:a.notificationId,tags:a.notificationData.tags,source:"notification",message_ts:a.createdAt}}))}catch(e){i={error:e}}finally{try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(i)throw i.error}}return[2,!0]}return[2,!1]}))}))},t.prototype.logCustom=function(e,t){return c(this,void 0,void 0,(function(){var n,r,a,i,s,o;return u(this,(function(c){if(n=E.of(this._iid).statLogCollector,0<e.length&&e.length<=15&&t.length<=30){try{for(r=h(t),a=r.next();!a.done;a=r.next())(i=a.value)&&i.notificationId&&i.notificationData&&n.put(new F({type:L.NOTIFICATION,ts:Date.now(),data:{action:"custom",topic:e,template_key:i.notificationData.templateKey,channel_url:this.url,message_id:i.notificationId,tags:i.notificationData.tags,source:"notification",message_ts:i.createdAt}}))}catch(e){s={error:e}}finally{try{a&&!a.done&&(o=r.return)&&o.call(r)}finally{if(s)throw s.error}}return[2,!0]}return[2,!1]}))}))},t.prototype.createNotificationCollection=function(e){return void 0===e&&(e={}),new Oe(this._iid,i({channel:this},e))},t}(z),Pe=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;return Object.keys(t).forEach((function(e){Object.prototype.hasOwnProperty.call(n,e)&&(n[e]=t[e])})),n}return n(t,e),t}((function(){this.onChannelChanged=H,this.onChannelDeleted=H,this.onMessageReceived=H,this.onMentionReceived=H})),je=function(e){function r(t,n){var r,a=this;return(a=e.call(this,t,n)||this).includeEmpty=ye,a.includeEmpty=null!==(r=n.includeEmpty)&&void 0!==r?r:ye,a}return n(r,e),r.prototype._validate=function(){return e.prototype._validate.call(this)&&m("boolean",this.includeEmpty)},r.prototype.next=function(){return c(this,void 0,void 0,(function(){var e,n,r,s,o;return u(this,(function(c){switch(c.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,e=He.of(this._iid),n=t(i({},this)),[4,e.getMyFeedChannels(this._token,n,this.limit)]):[3,2]:[3,5];case 1:return r=c.sent(),s=r.channels,o=r.token,this._token=o,this._hasNext=!!o,this._isLoading=!1,[2,s];case 2:return[2,[]];case 3:throw a.queryInProgress;case 4:return[3,6];case 5:throw a.invalidParameters;case 6:return[2]}}))}))},r}(O),Ge=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="feedChannel",t}return n(t,e),t.prototype.init=function(t,n){e.prototype.init.call(this,t,n),this._manager=new He(t,n)},t.prototype.createMyFeedChannelListQuery=function(e){return void 0===e&&(e={}),new je(this._iid,e)},t.prototype.addFeedChannelHandler=function(e,t){r(m("string",e)&&t instanceof Pe).throw(a.invalidParameters),this._manager.addHandler(e,t)},t.prototype.removeFeedChannelHandler=function(e){r(m("string",e)).throw(a.invalidParameters),this._manager.removeHandler(e)},t.prototype.removeAllFeedChannelHandlers=function(){this._manager.clearHandler()},t.prototype.getChannel=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return r(m("string",e)).throw(a.invalidParameters),[2,this._manager.getChannel(e)]}))}))},t.prototype.getMyFeedChannelChangeLogsByTimestamp=function(e,t){return void 0===t&&(t={}),c(this,void 0,void 0,(function(){var n;return u(this,(function(s){switch(s.label){case 0:return n=i(i({},Ee),t),r(m("number",e)&&Me(n)).throw(a.invalidParameters),[4,this._manager.getMyFeedChannelChangeLogs(e,n)];case 1:return[2,s.sent()]}}))}))},t.prototype.getMyFeedChannelChangeLogsByToken=function(e,t){return void 0===t&&(t={}),c(this,void 0,void 0,(function(){var n;return u(this,(function(s){switch(s.label){case 0:return n=i(i({},Ee),t),r(m("string",e)&&Me(n)).throw(a.invalidParameters),[4,this._manager.getMyFeedChannelChangeLogs(e,n)];case 1:return[2,s.sent()]}}))}))},t.prototype.getTotalUnreadMessageCount=function(e){return void 0===e&&(e={}),c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._manager.getTotalUnreadMessageCount(e)];case 1:return[2,t.sent()]}}))}))},t.prototype.getGlobalNotificationChannelSetting=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this._manager.getGlobalNotificationChannelSetting()];case 1:return[2,e.sent()]}}))}))},t.prototype.getNotificationTemplateListByToken=function(e,t){return void 0===t&&(t={}),c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this._manager.getNotificationTemplateListByToken(e,t)];case 1:return[2,n.sent()]}}))}))},t.prototype.getNotificationTemplate=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._manager.getNotificationTemplate(e)];case 1:return[2,t.sent()]}}))}))},t.prototype.refreshNotificationCollections=function(){this._manager.refreshNotificationCollections()},t}(R);export{Re as FeedChannel,Pe as FeedChannelHandler,je as FeedChannelListQuery,Ge as FeedChannelModule,ve as NotificationCategory,Oe as NotificationCollection};
