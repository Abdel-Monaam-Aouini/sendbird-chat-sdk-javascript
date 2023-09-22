import{e,u as n,_ as t,s as r,q as a,g as i,o as s,p as o,b as c,c as u,a8 as l,r as h,O as d,A as f,d as p,f as v,h as g,b1 as y,ap as m,a as C,ba as b,aH as E,K as w,V as M,ak as N,W as k,x as T,X as U,Y as x,al as S,B as A,aA as I,b5 as D,am as F,aq as H,aF as L,aN as P}from"./lib/__bundle-0f850482.js";import{i as j,aD as O,a9 as R,aE as G,aF as V,J as B,w as q}from"./lib/__bundle-684d6267.js";export{a9 as NotificationMessage}from"./lib/__bundle-684d6267.js";import{F as Q,D as z,E as W,I as J,J as Y,K as X,p as K,L as $,N as ee,V as ne,W as te,c as re,X as ae,Y as ie}from"./lib/__bundle-37e3f19f.js";export{Z as FeedChannelEventContext,_ as NotificationEventContext}from"./lib/__bundle-37e3f19f.js";import{g as se,N as oe}from"./lib/__bundle-ce97f401.js";import{D as ce}from"./lib/__bundle-1ab3a4b7.js";import{B as ue,C as le,a as he}from"./lib/__bundle-fa60a3cc.js";import"./lib/__bundle-c336221f.js";var de=function(){function t(e){this.id=e.id,this.name=e.name,this.isDefault=e.is_default}return t.payloadify=function(t){return e(n({id:t.id,name:t.name,is_default:t.isDefault}))},Object.defineProperty(t.prototype,"customType",{get:function(){return this.isDefault?"*":String(this.id)},enumerable:!1,configurable:!0}),t}(),fe=function(n){function l(e,t){var r=t.sdkState,a=t.cacheContext,i=t.channelManager,s=n.call(this,e)||this;return s._channels=new Map,s._sdkState=r,s._cacheContext=a,s._channelManager=i,s}return t(l,n),Object.defineProperty(l.prototype,"collection",{get:function(){var e=this._cacheContext.nestdb;return r(!!e).throw(a.databaseError),e.collection(j)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"localCacheEnabled",{get:function(){return this._cacheContext.localCacheEnabled&&!!this.collection},enumerable:!1,configurable:!0}),l.prototype._serialize=function(e,n){return void 0===n&&(n=0),i(i({},e.serialize()),{lastMessageUpdatedAt:e.lastMessage?e.lastMessage.createdAt:0,syncIndex:n})},l.prototype._deserialize=function(e){return this._channelManager.buildFeedChannelFromSerializedData(e)},Object.defineProperty(l.prototype,"channels",{get:function(){return s([],o(this._channels.values()),!1)},enumerable:!1,configurable:!0}),l.prototype.isCachedInMemory=function(e){return this._channels.has(e)},l.prototype.get=function(e){return c(this,void 0,void 0,(function(){var n;return u(this,(function(t){switch(t.label){case 0:return this._channels.has(e)?[3,3]:this.localCacheEnabled?[4,this.collection.getByKey(e)]:[3,2];case 1:if(n=t.sent())return this._channels.set(e,this._deserialize(n)),[2,this._channels.get(e)];t.label=2;case 2:return[2,void 0];case 3:return[2,this._channels.get(e)]}}))}))},l.prototype.fetch=function(e){var n=e.token,t=e.limit,r=void 0===t?O:t,a=e.backward,i=void 0!==a&&a,s=e.order,o=void 0===s?"latest_last_message":s,l=e.borderlineChannelUrl;return c(this,void 0,void 0,(function(){var e,t,a,s,c=this;return u(this,(function(u){switch(u.label){case 0:return this.localCacheEnabled?(e=se(o),t={where:function(e){if(n&&"latest_last_message"===o){if(!i&&e.lastMessageUpdatedAt>n||i&&e.lastMessageUpdatedAt<n)return!1;if(l&&l===e.url)return!1}return!0},index:e,backward:i},[4,this.collection.query(t)]):[3,3];case 1:return[4,u.sent().fetch({limit:r})];case 2:return a=u.sent(),(s=a.map((function(e){return c._deserialize(e)}))).forEach((function(e){c._channels.has(e.url)||c._channels.set(e.url,e)})),[2,s];case 3:return[2,[]]}}))}))},l.prototype.upsert=function(n){return c(this,void 0,void 0,(function(){var t,r,a,i=this;return u(this,(function(s){switch(s.label){case 0:if(t=[],n.forEach((function(n){if(i._channels.has(n.url)){var r=i._channels.get(n.url),a=e(n);Object.assign(r,a,{_iid:i._iid}),t.push(r)}else i._channels.set(n.url,n),t.push(n)})),!this.localCacheEnabled)return[3,2];for(a in r=[],t)r.push(this._serialize(t[a],parseInt(a)));return[4,this.collection.upsertMany(r)];case 1:s.sent(),s.label=2;case 2:return[2,t]}}))}))},l.prototype.remove=function(e){return c(this,void 0,void 0,(function(){var n,t,r,a,i,s;return u(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,7]),n=h(e),t=n.next(),o.label=1;case 1:return t.done?[3,4]:(r=t.value,this._channels.delete(r),this.localCacheEnabled?[4,this.collection.remove(r)]:[3,3]);case 2:o.sent(),o.label=3;case 3:return t=n.next(),[3,1];case 4:return[3,7];case 5:return a=o.sent(),i={error:a},[3,7];case 6:try{t&&!t.done&&(s=n.return)&&s.call(n)}finally{if(i)throw i.error}return[7];case 7:return[2]}}))}))},l.prototype.clear=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return this.clearMemoryCache(),this.localCacheEnabled?[4,this.collection.clear()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},l.prototype.clearMemoryCache=function(){this._channels.clear()},l}(l),pe=function(){function e(e){var n=e.feedChannelCache,t=e.notificationCache,r=e.dispatcher,a=this;this._observers=new Map,r.on((function(e){return c(a,void 0,void 0,(function(){var r,a,i,s,o,l,f,p=this;return u(this,(function(v){switch(v.label){case 0:return e instanceof z?(r=e.channels,l=e.source,f=e.isWebSocketEventComing,a=e.data,i=r.filter((function(e){return e instanceof He})),[4,n.upsert(i)]):[3,2];case 1:return s=v.sent(),f||this._broadcastUpdateEvent(s,l,a),[3,7];case 2:return e instanceof Q?(o=e.channelUrls,l=e.source,f=e.isWebSocketEventComing,[4,n.remove(o)]):[3,5];case 3:return v.sent(),[4,d((function(){return c(p,void 0,void 0,(function(){var e,n,r,a,i,s;return u(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,7]),e=h(o),n=e.next(),c.label=1;case 1:return n.done?[3,4]:(r=n.value,[4,t.removeMessagesOfChannel(r)]);case 2:c.sent(),c.label=3;case 3:return n=e.next(),[3,1];case 4:return[3,7];case 5:return a=c.sent(),i={error:a},[3,7];case 6:try{n&&!n.done&&(s=e.return)&&s.call(e)}finally{if(i)throw i.error}return[7];case 7:return[2]}}))}))}))];case 4:return v.sent(),f||this._broadcastRemoveEvent(o,l),[3,7];case 5:return e instanceof ce?[4,n.fetch({token:Number.MAX_SAFE_INTEGER,limit:Number.MAX_SAFE_INTEGER})]:[3,7];case 6:v.sent(),v.label=7;case 7:return[2]}}))}))}))}return e.prototype._broadcastUpdateEvent=function(e,n,t){var r,a;try{for(var i=h(this._observers.values()),s=i.next();!s.done;s=i.next()){var o=s.value;o.onUpdate&&o.onUpdate(e,n,t)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(a=i.return)&&a.call(i)}finally{if(r)throw r.error}}},e.prototype._broadcastRemoveEvent=function(e,n){var t,r;try{for(var a=h(this._observers.values()),i=a.next();!i.done;i=a.next()){var s=i.value;s.onRemove&&s.onRemove(e,n)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},e.prototype.subscribe=function(e,n){this._observers.set(e,n)},e.prototype.unsubscribe=function(e){this._observers.delete(e)},e.prototype.unsubscribeAll=function(){this._observers.clear()},e}(),ve=!1,_e=function(n){function r(t){var r=n.call(this)||this,a=t.userId,i=t.token,s=t.limit,o=t.includeEmpty;return r.method=f.GET,r.path="".concat(p,"/").concat(encodeURIComponent(a),"/my_group_channels"),r.params=e({token:i,limit:s,show_empty:null!=o?o:ve,show_read_receipt:!0,show_delivery_receipt:!0,show_member:!0,is_feed_channel:!0,order:"latest_last_message"}),r}return t(r,n),r}(v),ge=function(e){function n(n,t){var r=e.call(this,n,t)||this;r.channels=[];var a=t.next,i=t.channels,s=t.ts;return r.token=a,r.ts=null!=s?s:0,r.channels=(null!=i?i:[]).map((function(e){return e.ts=s,new He(n,e)})),r}return t(n,e),n}(g),ye=function(e){function n(n){var t=n.channelUrl,r=n.isInternalCall,a=e.call(this)||this;return a.method=f.GET,a.path="".concat(r?y:m,"/").concat(encodeURIComponent(t)),a.params={show_member:!0,show_read_receipt:!0,show_delivery_receipt:!0,is_feed_channel:!0},a}return t(n,e),n}(v),me=function(e){function n(n,t){var r=e.call(this,n,t)||this;return r.channel=new He(n,t),r}return t(n,e),n}(g),Ce={includeEmpty:!0},be=function(e){return C("boolean",e.includeEmpty)},Ee=function(r){function a(t){var a=t.userId,s=t.ts,o=t.token,c=t.params,u=r.call(this)||this,l=i(i({},Ce),c).includeEmpty;return u.method=f.GET,u.path="".concat(p,"/").concat(encodeURIComponent(a),"/my_group_channels/changelogs"),u.params=e(n({show_delivery_receipt:!0,show_member:!0,show_read_receipt:!0,is_feed_channel:!0,show_empty:l,change_ts:s||null,token:o})),u}return t(a,r),a}(v),we=function(e){function n(n,t){var r=e.call(this,n,t)||this;return r.updatedChannels=t.updated.map((function(e){return new He(n,e)})),r.deletedChannelUrls=t.deleted,r.hasMore=t.has_more,r.token=t.next,r}return t(n,e),n}(g),Me=function(e){function n(){var n=e.call(this)||this;return n.method=f.GET,n.path="".concat(b,"/settings"),n}return t(n,e),n}(v),Ne=function(e){function n(n,t){var r=e.call(this,n,t)||this;return r.jsonString=JSON.stringify(t),r}return t(n,e),n}(g),ke=function(n){function r(t){var r=this,a=t.reverse,i=void 0!==a&&a,s=t.keys,o=t.limit,c=void 0===o?20:o,u=t.token;return(r=n.call(this)||this).method=f.GET,r.path="".concat(b,"/templates"),r.params=e({token:u,keys:s,limit:c,reverse:i,order:"updated_at",show_ui_template:!0,show_color_variables:!0}),r}return t(r,n),r}(v),Te=function(e){function n(n,t){var r=e.call(this,n,t)||this,a=t.next,i=t.has_more,s=void 0!==i&&i,o=E(t,["next","has_more"]);return r.nextToken=a,r.hasMore=s,r.notificationTemplateList={jsonString:JSON.stringify(o)},r}return t(n,e),n}(g),Ue={reverse:!1,keys:void 0,limit:20},xe=function(n){function r(t){var r=this,a=t.key;return(r=n.call(this)||this).method=f.GET,r.path="".concat(b,"/templates/").concat(a),r.params=e({key:a}),r}return t(r,n),r}(v),Se=function(e){function n(n,t){var r=e.call(this,n,t)||this;return r.jsonString=JSON.stringify(t),r}return t(n,e),n}(g),Ae=function(e){function n(n,t,r){var a,i,s,o=this;(o=e.call(this,n,"ADMM",r)||this).message=new R(n,r);var c=M.of(n).sdkState;return o.isMentioned=N(o.message.mentionType,null!==(s=null!==(a=o.message.mentionedUserIds)&&void 0!==a?a:null===(i=o.message.mentionedUsers)||void 0===i?void 0:i.map((function(e){return e.userId})))&&void 0!==s?s:[],c.userId),o}return t(n,e),n}(k),Ie={},De=function(e){function l(n,t){var r=e.call(this,n,i(i({},t),{channelType:x.FEED}))||this;return r._feedChannelHandlers=new Map,r._feedChannelCache=new fe(r._iid,{sdkState:r._sdkState,cacheContext:r._cacheContext,channelManager:r}),r._feedChannelBroadcast=new pe({feedChannelCache:r._feedChannelCache,dispatcher:r._dispatcher,notificationCache:G.of(n)}),r._dispatcher.on((function(e){e instanceof k&&r._handleEvent(e)})),Ie[n]||(Ie[n]=r),r}return t(l,e),Object.defineProperty(l.prototype,"_notificationMessageCache",{get:function(){return G.of(this._iid)},enumerable:!1,configurable:!0}),l.of=function(e){return Ie[e]||(Ie[e]=new l(e,M.of(e))),Ie[e]},l.clear=function(e){Ie[e]&&delete Ie[e]},Object.defineProperty(l.prototype,"handlers",{get:function(){return s([],o(this._feedChannelHandlers.values()),!1)},enumerable:!1,configurable:!0}),l.prototype.buildFeedChannelFromSerializedData=function(e){var n=T(e);return new He(this._iid,He.payloadify(n))},l.prototype.addHandler=function(e,n){this._feedChannelHandlers.set(e,n)},l.prototype.removeHandler=function(e){this._feedChannelHandlers.delete(e)},l.prototype.clearHandler=function(){this._feedChannelHandlers.clear()},l.prototype.getMyFeedChannels=function(e,n,t){return c(this,void 0,void 0,(function(){var r,a,s,o,c;return u(this,(function(u){switch(u.label){case 0:return r=new _e(i(i({},n),{userId:this._sdkState.userId,token:e,limit:t})),[4,this._requestQueue.send(r)];case 1:return a=u.sent(),s=a.as(ge),o=s.channels,c=s.token,[2,{channels:o,token:c}]}}))}))},l.prototype.getChannel=function(e,n){return void 0===n&&(n=!1),c(this,void 0,void 0,(function(){var t;return u(this,(function(i){switch(i.label){case 0:r(C("string",e)).throw(a.invalidParameters),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.getChannelFromCache(e)];case 2:return(t=i.sent())?[2,t]:[3,4];case 3:return i.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(e,n)];case 5:return[2,i.sent()]}}))}))},l.prototype.getChannelFromCache=function(e){var n;return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return r(C("string",e)).throw(a.invalidParameters),[4,this._feedChannelCache.get(e)];case 1:return[2,null!==(n=t.sent())&&void 0!==n?n:null]}}))}))},l.prototype.getChannelWithoutCache=function(e,n){return void 0===n&&(n=!1),c(this,void 0,void 0,(function(){var t,i,s,c;return u(this,(function(u){switch(u.label){case 0:return r(C("string",e)).throw(a.invalidParameters),t=new ye({channelUrl:e,isInternalCall:n}),[4,this._requestQueue.send(t)];case 1:return i=u.sent(),s=i.as(me).channel,[4,this.upsertChannelsToCache([s])];case 2:return c=o.apply(void 0,[u.sent(),1]),[2,c[0]]}}))}))},l.prototype.getMyFeedChannelChangeLogs=function(e,t,s){return void 0===s&&(s=U.REQUEST_CHANNEL_CHANGELOGS),c(this,void 0,void 0,(function(){var o,c,l,h,d,f,p,v;return u(this,(function(u){switch(u.label){case 0:return o=i(i({},Ce),t),r((C("string",e)||C("number",e))&&be(o)).throw(a.invalidParameters),c=new Ee(n({userId:this._sdkState.userId,ts:"number"==typeof e?e:null,token:"string"==typeof e?e:null,params:o})),[4,this._requestQueue.send(c)];case 1:return l=u.sent(),h=l.as(we),d=h.updatedChannels,f=h.deletedChannelUrls,p=h.hasMore,v=h.token,d.length>0&&this._dispatcher.dispatch(new z({channels:d,source:s})),f.length>0&&this._dispatcher.dispatch(new Q({channelUrls:f,source:s})),[2,{updatedChannels:d,deletedChannelUrls:f,hasMore:p,token:v}]}}))}))},l.prototype.getTotalUnreadMessageCount=function(e){return c(this,void 0,void 0,(function(){var n,t,s,o,c,l,h;return u(this,(function(u){switch(u.label){case 0:return n=i(i({},J),e),r(Y(n)).throw(a.invalidParameters),t=M.of(this._iid),s=t.sdkState,o=t.requestQueue,c=new X({userId:s.userId,filter:n,includeFeedChannel:!0}),[4,o.send(c)];case 1:return l=u.sent(),h=l.as(W).unreadFeedCount,[2,void 0===h?0:h]}}))}))},l.prototype.getGlobalNotificationChannelSetting=function(){return c(this,void 0,void 0,(function(){var e,n;return u(this,(function(t){switch(t.label){case 0:return e=new Me,[4,this._requestQueue.send(e)];case 1:return n=t.sent(),[2,{jsonString:n.as(Ne).jsonString}]}}))}))},l.prototype.getNotificationTemplateListByToken=function(e,n){return void 0===n&&(n={}),c(this,void 0,void 0,(function(){var t,s,o,c,l,h,d;return u(this,(function(u){switch(u.label){case 0:return t=i(i({},Ue),n),r(C("string",e)&&function(e){return C("boolean",e.reverse,!0)&&w("string",e.keys,!0)&&C("number",e.limit,!0)}(t)).throw(a.invalidParameters),s=new ke({token:e,keys:t.keys,reverse:t.reverse,limit:t.limit}),[4,this._requestQueue.send(s)];case 1:return o=u.sent(),c=o.as(Te),l=c.hasMore,h=c.nextToken,d=c.notificationTemplateList,[2,{hasMore:l,token:h,notificationTemplateList:d}]}}))}))},l.prototype.getNotificationTemplate=function(e){return c(this,void 0,void 0,(function(){var n,t;return u(this,(function(i){switch(i.label){case 0:return r(C("string",e)).throw(a.invalidParameters),n=new xe({key:e}),[4,this._requestQueue.send(n)];case 1:return t=i.sent(),[2,{jsonString:t.as(Se).jsonString}]}}))}))},l.prototype.upsertChannelsToCache=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this._feedChannelCache.upsert(e)];case 1:return[2,n.sent()]}}))}))},l.prototype.removeChannelsFromCache=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this._feedChannelCache.remove(e)];case 1:return n.sent(),[2]}}))}))},l.prototype.refreshChannel=function(e,n,t){return void 0===n&&(n=!0),void 0===t&&(t=U.REFRESH_CHANNEL),c(this,void 0,void 0,(function(){var r,a,i,s,o;return u(this,(function(c){switch(c.label){case 0:return c.trys.push([0,5,,6]),r=new ye({channelUrl:e,isInternalCall:n}),[4,this._requestQueue.send(r)];case 1:return a=c.sent(),(i=a.as(me).channel).myMemberState!==K.NONE?[3,2]:(this._dispatcher.dispatch(new Q({channelUrls:[i.url],source:t})),[3,4]);case 2:return[4,this.upsertChannelsToCache([i])];case 3:s=c.sent(),this._dispatcher.dispatch(new z({channels:s,source:t})),c.label=4;case 4:return[3,6];case 5:return(o=c.sent()).code!==S.NON_AUTHORIZED&&o.code!==S.NOT_FOUND_IN_DATABASE||this._dispatcher.dispatch(new Q({channelUrls:[e],source:t})),[3,6];case 6:return[2]}}))}))},l.prototype.refreshNotificationCollections=function(){this._dispatcher.dispatch(new oe)},l.prototype.subscribeChannelEvent=function(e,n){this._feedChannelBroadcast.subscribe(e,n)},l.prototype.unsubscribeChannelEvent=function(e){this._feedChannelBroadcast.unsubscribe(e)},l.prototype._handleEvent=function(e){return c(this,void 0,void 0,(function(){var n,t,r,a,i,s,o,l,d,f,p=this;return u(this,(function(v){switch(v.label){case 0:switch(e.code){case"ADMM":case"BRDM":return[3,1];case"READ":return[3,4];case"SYEV":return[3,7]}return[3,13];case 1:return(o="ADMM"===e.code||"BRDM"===e.code?e.as(Ae):null)&&o.message.channelType===this._channelType?(n=o.message,t=o.isMentioned,[4,this.getChannel(n.channelUrl,!0)]):[3,3];case 2:(r=v.sent())._runIfHandleableWithGroupChannel((function(e){var a;n instanceof R&&t&&(null===(a=n.mentionedUsers)||void 0===a||a.forEach((function(n){var t,r;try{for(var a=h(e.members),i=a.next();!i.done;i=a.next()){var s=i.value;if(n.userId===s.userId){n.nickname=s.nickname,n.plainProfileUrl=s.plainProfileUrl,n.metaData=s.metaData;break}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}}))),p._dispatcher.dispatch(new z({channels:[r],source:U.EVENT_MESSAGE_RECEIVED})),p._dispatcher.dispatch(new I({messages:[n],source:U.EVENT_MESSAGE_RECEIVED})),A((function(){return c(p,void 0,void 0,(function(){var e,a,i,s,o;return u(this,(function(c){try{for(e=h(this._feedChannelHandlers.values()),a=e.next();!a.done;a=e.next())(i=a.value).onMessageReceived&&i.onMessageReceived(r,n),t&&i.onMentionReceived&&i.onMentionReceived(r,n)}catch(e){s={error:e}}finally{try{a&&!a.done&&(o=e.return)&&o.call(e)}finally{if(s)throw s.error}}return[2]}))}))}))})),v.label=3;case 3:return[3,13];case 4:return(o="READ"===e.code?e.as($):null)?(a=o.readStatus,i=this._feedChannelCache.isCachedInMemory(a.channelUrl),[4,this.getChannel(a.channelUrl,!0)]):[3,6];case 5:(s=v.sent())._runIfHandleableWithGroupChannel((function(e){i&&e._updateUnreadMemberState(a.reader.userId,a.readAt),a.reader.userId===p._sdkState.userId?i?(e.unreadMessageCount>0||e.unreadMentionCount>0)&&(e._updateUnreadCount(0,0),p._dispatcher.dispatch(new z({channels:[s],source:U.EVENT_CHANNEL_READ})),A((function(){return c(p,void 0,void 0,(function(){var e,n,t,r,a;return u(this,(function(i){try{for(e=h(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onChannelChanged&&t.onChannelChanged(s)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))):0!==e.unreadMessageCount&&0!==e.unreadMentionCount||(p._dispatcher.dispatch(new z({channels:[s],source:U.EVENT_CHANNEL_READ})),A((function(){return c(p,void 0,void 0,(function(){var e,n,t,r,a;return u(this,(function(i){try{for(e=h(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onChannelChanged&&t.onChannelChanged(s)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))}))):(p._dispatcher.dispatch(new z({channels:[s],source:U.EVENT_CHANNEL_READ})),A((function(){return c(p,void 0,void 0,(function(){var e,n,t,r,a;return u(this,(function(i){try{for(e=h(this._feedChannelHandlers.values()),n=e.next();!n.done;n=e.next())(t=n.value).onUnreadMemberStatusUpdated&&t.onUnreadMemberStatusUpdated(s)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(r)throw r.error}}return[2]}))}))})))})),v.label=6;case 6:return[3,13];case 7:if(!(o="SYEV"===e.code?e.as(le):null)||o.event.channelType!==this._channelType)return[3,12];switch(l=o.event,l.category){case he.CHANNEL_DELETED:return[3,8];case he.CHANNEL_PROP_CHANGED:return[3,10]}return[3,12];case 8:return[4,this.getChannel(l.channelUrl,!0)];case 9:return d=v.sent(),this._dispatcher.dispatch(new Q({channelUrls:[l.channelUrl],source:U.EVENT_CHANNEL_DELETED})),A((function(){return c(p,void 0,void 0,(function(){return u(this,(function(e){return this._feedChannelHandlers.forEach((function(e){e.onChannelDeleted&&e.onChannelDeleted(d.url,d.channelType)})),[2]}))}))})),[3,12];case 10:return[4,this.getChannelWithoutCache(l.channelUrl,!0)];case 11:return f=v.sent(),this._dispatcher.dispatch(new z({channels:[f],source:U.EVENT_CHANNEL_UPDATED})),A((function(){return c(p,void 0,void 0,(function(){return u(this,(function(e){return this._feedChannelHandlers.forEach((function(e){e.onChannelChanged&&e.onChannelChanged(f)})),[2]}))}))})),[3,12];case 12:return[3,13];case 13:return[2]}}))}))},l.prototype.getMessageFromCache=function(e){var n;return c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._notificationMessageCache.get(e)];case 1:return[2,null!==(n=t.sent())&&void 0!==n?n:null]}}))}))},l.prototype.getExactlyMatchingMessagesForTokenFromCache=function(e,n,t){return c(this,void 0,void 0,(function(){return u(this,(function(r){switch(r.label){case 0:return[4,this._notificationMessageCache.fetch({channelUrl:e,token:n,filter:t,exactMatch:!0})];case 1:return[2,r.sent()]}}))}))},l.prototype.getMessagesFromCache=function(e,n,t,r,a,i){return void 0===a&&(a=V),void 0===i&&(i=!0),c(this,void 0,void 0,(function(){return u(this,(function(s){switch(s.label){case 0:return[4,this._notificationMessageCache.fetch({channelUrl:e,token:n,limit:a,filter:r,backward:"next"===t,inclusive:i})];case 1:return[2,s.sent()]}}))}))},l}(ue),Fe=function(e){function n(n,t){var r=e.call(this,n,i(i({},t),{channelManager:De.of(n)}))||this,a=M.of(r._iid),s=a.connectionManager,o=a.dispatcher;return r._notificationCollectionEventContext=o.on((function(e){e instanceof oe&&F(10).then((function(){s.isConnected||s.isConnecting||r.refresh()}))})),r}return t(n,e),n.prototype.keyOf=function(e){return e.notificationId},n.prototype.dispose=function(){e.prototype.dispose.call(this),this._notificationCollectionEventContext.close()},n.prototype.setMessageCollectionHandler=function(e){this._setBaseMessageCollectionHandler(e)},n.prototype._addMessagesToView=function(e,n){var t,r,a=this,i=this._filterUnderOffsetMessage(e),s=[],o=[];try{for(var l=h(i),d=l.next();!d.done;d=l.next()){var f,p=d.value;if(n===U.SYNC_MESSAGE_FILL){if((f=ee(this._messages,p))<0){var v=ne(this._messages,p);this._messages.splice(v,0,p),s.push(p)}}else if((f=ee(this._messages,p))<0){v=ne(this._messages,p);this._messages.splice(v,0,p),s.push(p)}else this._messages[f]=p,o.push(p)}}catch(e){t={error:e}}finally{try{d&&!d.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}D(n)&&A((function(){return c(a,void 0,void 0,(function(){var e,t,r,a,i;return u(this,(function(c){return e=this._createMessageEventContext(n),s.length>0&&(null===(r=null===(t=this._handler)||void 0===t?void 0:t.onMessagesAdded)||void 0===r||r.call(t,e,this.channel,s)),o.length>0&&(null===(i=null===(a=this._handler)||void 0===a?void 0:a.onMessagesUpdated)||void 0===i||i.call(a,e,this.channel,o)),[2]}))}))}))},n.prototype._updateMessagesToView=function(e,n){var t,r,a=this,i=[];try{for(var s=h(e),o=s.next();!o.done;o=s.next()){var l=o.value,d=ee(this._messages,l);d>=0&&(i.push(l),this._messages[d]=l)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return D(n)&&A((function(){return c(a,void 0,void 0,(function(){var e,t,r;return u(this,(function(a){return e=this._createMessageEventContext(n),i.length>0&&(null===(r=null===(t=this._handler)||void 0===t?void 0:t.onMessagesUpdated)||void 0===r||r.call(t,e,this.channel,i)),[2]}))}))})),i},n.prototype.refresh=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this._activate()];case 1:return e.sent(),[2]}}))}))},n}(te),He=function(e){function n(n,t){var r,a,s=this;return(s=e.call(this,n,t)||this).channelType=x.FEED,s._groupChannel=new re(n,t),s.isCategoryFilterEnabled=null!==(r=t.is_category_filter_enabled)&&void 0!==r&&r,s.isTemplateLabelEnabled=null===(a=t.is_template_label_enabled)||void 0===a||a,s.notificationCategories=t.categories?t.categories.map((function(e){return new de(e)})):[],s.lastMessage=t.last_message?B(s._iid,i({channel_type:s.channelType},t.last_message)):null,s}return t(n,e),n.payloadify=function(e){var n;return i(i({},re.payloadify(null!==(n=e._groupChannel)&&void 0!==n?n:e)),{is_category_filter_enabled:e.isCategoryFilterEnabled,is_template_label_enabled:e.isTemplateLabelEnabled,categories:e.notificationCategories.map((function(e){return de.payloadify(e)})),last_message:e.lastMessage?R.payloadify(e.lastMessage):null})},Object.defineProperty(n.prototype,"groupChannel",{get:function(){return this._groupChannel},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"url",{get:function(){return this._groupChannel.url},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._groupChannel.name},set:function(e){this._groupChannel.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"createdAt",{get:function(){return this._groupChannel.createdAt},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"members",{get:function(){return this._groupChannel.members},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"memberCount",{get:function(){return this._groupChannel.memberCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"myMemberState",{get:function(){return this._groupChannel.myMemberState},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"myLastRead",{get:function(){return this._groupChannel.myLastRead},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"unreadMessageCount",{get:function(){return this._groupChannel.unreadMessageCount},enumerable:!1,configurable:!0}),n.prototype.serialize=function(){return i(i({},this._groupChannel.serialize()),{notificationCategories:this.notificationCategories,lastMessage:this.lastMessage})},n.prototype.refresh=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this._groupChannel._refresh(!0)];case 1:return e.sent(),[2,this]}}))}))},n.prototype.markAsRead=function(){return c(this,void 0,void 0,(function(){var e,n,t,r,a,i,s,o=this;return u(this,(function(c){switch(c.label){case 0:return e=M.of(this._iid),n=e.sdkState,t=e.dispatcher,r=e.requestQueue,a=new ie({userId:n.userId,channelUrl:this.url,channelType:x.FEED}),[4,r.send(a)];case 1:return i=c.sent(),s=i.as(ae).readAt,this._groupChannel._updateUnreadMemberState(n.userId,s),(this._groupChannel.unreadMessageCount>0||this._groupChannel.unreadMentionCount>0)&&(this._groupChannel._updateUnreadCount(0,0),De.of(this._iid).handlers.map((function(e){e.onChannelChanged&&e.onChannelChanged(o)}))),t.dispatch(new z({channels:[this],source:U.EVENT_CHANNEL_READ})),[2]}}))}))},n.prototype.createNotificationCollection=function(e){return void 0===e&&(e={}),new Fe(this._iid,i({channel:this},e))},n}(q),Le=function(e){function n(n){void 0===n&&(n={});var t=e.call(this)||this;return Object.keys(n).forEach((function(e){Object.prototype.hasOwnProperty.call(t,e)&&(t[e]=n[e])})),t}return t(n,e),n}((function(){this.onChannelChanged=H,this.onChannelDeleted=H,this.onUnreadMemberStatusUpdated=H,this.onMessageReceived=H,this.onMentionReceived=H})),Pe=function(e){function r(n,t){var r,a=this;return(a=e.call(this,n,t)||this).includeEmpty=ve,a.includeEmpty=null!==(r=t.includeEmpty)&&void 0!==r?r:ve,a}return t(r,e),r.prototype._validate=function(){return e.prototype._validate.call(this)&&C("boolean",this.includeEmpty)},r.prototype.next=function(){return c(this,void 0,void 0,(function(){var e,t,r,s,o;return u(this,(function(c){switch(c.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,e=De.of(this._iid),t=n(i({},this)),[4,e.getMyFeedChannels(this._token,t,this.limit)]):[3,2]:[3,5];case 1:return r=c.sent(),s=r.channels,o=r.token,this._token=o,this._hasNext=!!o,this._isLoading=!1,[2,s];case 2:return[2,[]];case 3:throw a.queryInProgress;case 4:return[3,6];case 5:throw a.invalidParameters;case 6:return[2]}}))}))},r}(L),je=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.name="feedChannel",n}return t(n,e),n.prototype.init=function(n,t){e.prototype.init.call(this,n,t),this._manager=new De(n,t)},n.prototype.createMyFeedChannelListQuery=function(e){return void 0===e&&(e={}),new Pe(this._iid,e)},n.prototype.addFeedChannelHandler=function(e,n){r(C("string",e)&&n instanceof Le).throw(a.invalidParameters),this._manager.addHandler(e,n)},n.prototype.removeFeedChannelHandler=function(e){r(C("string",e)).throw(a.invalidParameters),this._manager.removeHandler(e)},n.prototype.removeAllFeedChannelHandlers=function(){this._manager.clearHandler()},n.prototype.getChannel=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(n){return r(C("string",e)).throw(a.invalidParameters),[2,this._manager.getChannel(e)]}))}))},n.prototype.getMyFeedChannelChangeLogsByTimestamp=function(e,n){return void 0===n&&(n={}),c(this,void 0,void 0,(function(){var t;return u(this,(function(s){switch(s.label){case 0:return t=i(i({},Ce),n),r(C("number",e)&&be(t)).throw(a.invalidParameters),[4,this._manager.getMyFeedChannelChangeLogs(e,t)];case 1:return[2,s.sent()]}}))}))},n.prototype.getMyFeedChannelChangeLogsByToken=function(e,n){return void 0===n&&(n={}),c(this,void 0,void 0,(function(){var t;return u(this,(function(s){switch(s.label){case 0:return t=i(i({},Ce),n),r(C("string",e)&&be(t)).throw(a.invalidParameters),[4,this._manager.getMyFeedChannelChangeLogs(e,t)];case 1:return[2,s.sent()]}}))}))},n.prototype.getTotalUnreadMessageCount=function(e){return void 0===e&&(e={}),c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this._manager.getTotalUnreadMessageCount(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.getGlobalNotificationChannelSetting=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this._manager.getGlobalNotificationChannelSetting()];case 1:return[2,e.sent()]}}))}))},n.prototype.getNotificationTemplateListByToken=function(e,n){return void 0===n&&(n={}),c(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this._manager.getNotificationTemplateListByToken(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.getNotificationTemplate=function(e){return c(this,void 0,void 0,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,this._manager.getNotificationTemplate(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.refreshNotificationCollections=function(){this._manager.refreshNotificationCollections()},n}(P);export{He as FeedChannel,Le as FeedChannelHandler,Pe as FeedChannelListQuery,je as FeedChannelModule,de as NotificationCategory,Fe as NotificationCollection};
