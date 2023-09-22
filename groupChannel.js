import{b as i,V as s,c as h,y as f,z as v,q as _,o as g,p as E,X as L,H as T,r as F,B as N,m as D,aX as I,aY as V,u as j,g as W,al as Y,O as J,_ as X,A as Z,ap as $,e as ee,f as te,h as ne,a as ae,K as re,Q as ie,aF as se,aq as oe,aZ as le,af as ue,s as ce,aN as he}from"./lib/__bundle-0f850482.js";export{a_ as MessageEventSource,a$ as MutedState}from"./lib/__bundle-0f850482.js";import{S as de,T as pe,G as fe,s as me,a as ve,b as _e,P as ge,c as ye,d as Ce,e as be,f as Me,v as Se,g as Ee,h as we,i as Le,j as Te}from"./lib/__bundle-37e3f19f.js";export{C as CountPreference,c as GroupChannel,b as GroupChannelEventContext,k as GroupChannelEventSource,a as GroupChannelFilter,e as GroupChannelListQuery,l as GroupChannelSearchField,H as HiddenChannelFilter,m as HiddenState,M as Member,n as MemberListOrder,o as MemberListQuery,p as MemberState,q as MemberStateFilter,t as MessageCollection,u as MessageCollectionInitHandler,w as MessageCollectionInitPolicy,x as MessageEventContext,y as MutedMemberFilter,r as MyMemberStateFilter,O as OperatorFilter,z as PinnedMessage,A as PinnedMessageListQuery,P as PublicChannelFilter,Q as QueryType,R as ReadStatus,d as SuperChannelFilter,U as UnreadChannelFilter,B as UnreadItemKey}from"./lib/__bundle-37e3f19f.js";import{G as Ae,P as ke,S as Fe}from"./lib/__bundle-1ab3a4b7.js";export{G as GroupChannelListOrder,P as PublicGroupChannelListOrder,S as ScheduledMessageListOrder}from"./lib/__bundle-1ab3a4b7.js";import{H as Ne,J as Ge,K as xe}from"./lib/__bundle-684d6267.js";export{G as MessageFilter,K as ScheduledStatus}from"./lib/__bundle-684d6267.js";import{B as Ue}from"./lib/__bundle-cd042bbd.js";import"./lib/__bundle-fa60a3cc.js";import"./lib/__bundle-c336221f.js";var Oe,De={},Pe=function(){function e(e){var t=e._iid,n=e.limit,a=void 0===n?100:n,r=this;this.ref=0,this._iid=t,this._limit=a;var o,l=s.of(this._iid),u=l.sdkState,c=l.dispatcher,d=l.logger,p=l.cacheContext;this._metadataKey=(o=u.userId,"sendbird:".concat(o,"@groupchannel/sync.meta"));var m=function(e){return"sendbird:".concat(e,"@groupchannel/sync")}(u.userId);this._sync=new de(m,(function(){return i(r,void 0,void 0,(function(){var e,t,n,a,r,i,s,o,l,c,f,m;return h(this,(function(h){switch(h.label){case 0:return e={hasNext:!0,nextToken:""},[4,this.loadMetadata()];case 1:if(h.sent(),d.debug("channel background sync from",null===(l=this._metadata)||void 0===l?void 0:l.token),null===(c=this._metadata)||void 0===c?void 0:c.completed)return[3,13];h.label=2;case 2:if(h.trys.push([2,9,,12]),(t={includeEmpty:!0,order:Ae.CHRONOLOGICAL}).order!==Ae.LATEST_LAST_MESSAGE)return[3,6];h.label=3;case 3:return h.trys.push([3,5,,6]),[4,p.preference.get(T(u.appId))];case 4:return n=h.sent(),t.includeChatNotification=Boolean(n),[3,6];case 5:return h.sent(),t.includeChatNotification=!1,[3,6];case 6:return[4,fe.of(this._iid).getMyGroupChannels(null!==(m=null===(f=this._metadata)||void 0===f?void 0:f.token)&&void 0!==m?m:"",t,this._limit,L.SYNC_CHANNEL_BACKGROUND)];case 7:return a=h.sent(),r=a.channels,i=a.token,e.hasNext=r.length>=this._limit&&!!i,e.nextToken=i,this._metadata&&(this._metadata.token=i,(o=this._metadata.range).extends.apply(o,g([],E(r.map((function(e){return e.createdAt}))),!1)),this._metadata.completed=!e.hasNext),d.debug("channel background sync progress",e),[4,this.saveMetadata()];case 8:return h.sent(),[3,12];case 9:return s=h.sent(),d.debug("channel background sync error",s),s instanceof _&&s.isInvalidTokenError?[4,this.clearMetaData()]:[3,11];case 10:h.sent(),h.label=11;case 11:throw s;case 12:return[3,14];case 13:e.hasNext=!1,e.nextToken="",h.label=14;case 14:return[2,e]}}))}))})),this._connectionEventContext=c.on((function(e){if(e instanceof f)if(e.stateType===v.CONNECTED)r.resume();else r.pause()}))}return e.of=function(t){return De[t]||(De[t]=new e({_iid:t})),De[t].ref++,De[t]},e.clear=function(e){De[e]&&(De[e].close(),delete De[e])},Object.defineProperty(e.prototype,"range",{get:function(){var e,t;return null!==(t=null===(e=this._metadata)||void 0===e?void 0:e.range)&&void 0!==t?t:new pe({})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"completed",{get:function(){var e;return!!(null===(e=this._metadata)||void 0===e?void 0:e.completed)},enumerable:!1,configurable:!0}),e.prototype.loadMetadata=function(){return i(this,void 0,void 0,(function(){var e;return h(this,(function(t){switch(t.label){case 0:return this._metadata?[3,2]:[4,s.of(this._iid).cacheContext.preference.get(this._metadataKey)];case 1:e=t.sent(),this._metadata={token:e?e.token:"",range:new pe(e?e.range:{top:Number.MAX_SAFE_INTEGER,bottom:0}),completed:!!e&&e.completed},t.label=2;case 2:return[2,this._metadata]}}))}))},e.prototype.saveMetadata=function(){return i(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return this._metadata?[4,s.of(this._iid).cacheContext.preference.set(this._metadataKey,this._metadata)]:[3,2];case 1:return e.sent(),[2,!0];case 2:return[2,!1]}}))}))},e.prototype.clearMetaData=function(){return i(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,s.of(this._iid).cacheContext.preference.remove(this._metadataKey)];case 1:return e.sent(),this._metadata=void 0,[2]}}))}))},e.prototype.resume=function(){var e,t,n=s.of(this._iid),a=n.logger;n.sessionManager.session.hasSession&&(a.debug("channel background sync resume()"),this._sync.start(null!==(t=null===(e=this._metadata)||void 0===e?void 0:e.token)&&void 0!==t?t:""))},e.prototype.pause=function(){s.of(this._iid).logger.debug("channel background sync stop()"),this._sync.stop()},e.prototype.close=function(){this.ref--,this.ref<=0&&(this.ref=0,this.pause(),this._connectionEventContext.close(),delete De[this._iid])},e}(),Ie={},He=function(){function e(e){var t=e._iid,n=this;this.ref=0,this._iid=t;var a,r=s.of(this._iid),o=r.logger,l=r.sdkState,u=r.dispatcher,c=r.cacheContext;this._metadataKey=(a=l.userId,"sendbird:".concat(a,"@groupchannel/changelogs.meta"));var d=function(e){return"sendbird:".concat(e,"@groupchannel/changelogs")}(l.userId);this._sync=new de(d,(function(){return i(n,void 0,void 0,(function(){var e,t,n,a,r,i,s,u,d,p;return h(this,(function(h){switch(h.label){case 0:return e={hasNext:!0,nextToken:0},[4,this.loadMetadata()];case 1:h.sent(),o.debug("channel changelog sync from",null===(u=this._metadata)||void 0===u?void 0:u.token),h.label=2;case 2:h.trys.push([2,9,,12]),t={includeEmpty:!0},h.label=3;case 3:return h.trys.push([3,5,,6]),[4,c.preference.get(T(l.appId))];case 4:return n=h.sent(),t.includeChatNotification=Boolean(n),[3,6];case 5:return h.sent(),t.includeChatNotification=!1,[3,6];case 6:return[4,fe.of(this._iid).getMyGroupChannelChangeLogs(null!==(p=null===(d=this._metadata)||void 0===d?void 0:d.token)&&void 0!==p?p:"",t,L.SYNC_CHANNEL_CHANGELOGS)];case 7:return a=h.sent(),r=a.hasMore,i=a.token,e.hasNext=r,e.nextToken=i,this._metadata&&(this._metadata.token=i),o.debug("channel changelog sync progress",e),[4,this.saveMetadata()];case 8:return h.sent(),[3,12];case 9:return s=h.sent(),o.debug("channel changelog sync error",s),s instanceof _&&s.isInvalidTokenError?[4,this.clearMetadata()]:[3,11];case 10:h.sent(),h.label=11;case 11:throw s;case 12:return[2,e]}}))}))})),this._connectionEventContext=u.on((function(e){if(e instanceof f)if(e.stateType===v.CONNECTED)n.resume();else n.pause()}))}return e.of=function(t){return Ie[t]||(Ie[t]=new e({_iid:t})),Ie[t].ref++,Ie[t]},e.clear=function(e){Ie[e]&&(Ie[e].close(),delete Ie[e])},e.prototype.loadMetadata=function(){return i(this,void 0,void 0,(function(){var e,t,n,a;return h(this,(function(r){switch(r.label){case 0:return this._metadata?[3,2]:(e=s.of(this._iid),t=e.cacheContext,n=e.firstConnectedAt,[4,t.preference.get(this._metadataKey)]);case 1:a=r.sent(),this._metadata={token:a?a.token:n},r.label=2;case 2:return[2,this._metadata]}}))}))},e.prototype.saveMetadata=function(){return i(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return this._metadata?[4,s.of(this._iid).cacheContext.preference.set(this._metadataKey,this._metadata)]:[3,2];case 1:return e.sent(),[2,!0];case 2:return[2,!1]}}))}))},e.prototype.clearMetadata=function(){return i(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,s.of(this._iid).cacheContext.preference.remove(this._metadataKey)];case 1:return e.sent(),this._metadata=void 0,[2]}}))}))},e.prototype.resume=function(){s.of(this._iid).sessionManager.session.hasSession&&this._sync.start(0)},e.prototype.pause=function(){this._sync.stop()},e.prototype.close=function(){this.ref--,this.ref<=0&&(this.ref=0,this.pause(),this._connectionEventContext.close(),delete Ie[this._iid])},e}(),Re=function(e,t){return e.findIndex((function(e){return e.isIdentical(t)}))},Ke=function(e,t,n){if(e.length>0){for(var a=Re(e,t),r=0,i=e.length-1,s=Math.floor((r+i)/2);r<i;){var o=Ve(e[s],t,n);if(o>0)i=s,s=Math.floor((r+i)/2);else{if(!(o<0))return{place:s,oldPosition:a};r=s+1,s=Math.floor((r+i)/2)}}return{place:Ve(e[s],t,n)>=0?s:s+1,oldPosition:a}}return{place:e.length,oldPosition:-1}},Ve=function(e,t,n){switch(n){case Ae.LATEST_LAST_MESSAGE:return e.lastMessage&&t.lastMessage?t.lastMessage.createdAt-e.lastMessage.createdAt:e.lastMessage?-1:t.lastMessage?1:t.createdAt-e.createdAt;case Ae.CHRONOLOGICAL:return t.createdAt-e.createdAt;case Ae.CHANNEL_NAME_ALPHABETICAL:var a=e.name.localeCompare(t.name);return 0===a?e.createdAt-t.createdAt:a;default:return 0}},Qe=function(){function e(e,t){var n=t.filter,a=t.order,r=t.limit,o=this;this.channels=[],this._iid=e,this._key="gcc-".concat(D()),this._isDisposed=!1,this._isGetRemoteChannelsSucceeded=!0,this.filter=null!=n?n:new ve,this.order=null!=a?a:Ae.LATEST_LAST_MESSAGE,this._hasMore=!0,this._token="",this._limit=null!=r?r:Ne;var l=s.of(this._iid),u=l.sdkState,c=l.cacheContext,d=l.dispatcher;c.localCacheEnabled&&(this._backgroundSync=Pe.of(e),this._backgroundSync.resume()),this._changelogSync=He.of(e),this._changelogSync.resume(),fe.of(this._iid).subscribeChannelEvent(this._key,{onUpdate:function(e,t){if(me(t)){var n=e.filter((function(e){return o.filter.match(e,u.userId)})),a=e.filter((function(e){return!o.filter.match(e,u.userId)})).map((function(e){return e.url}));n.length>0&&o._addChannelsToView(n,t),a.length>0&&o._removeChannelsFromView(a,t)}},onRemove:function(e,t){o._removeChannelsFromView(e,t)}}),s.of(this._iid).statLogCollector.put(new I({type:V.FEATURE_LOCALCACHE,data:{use_local_cache:c.localCacheEnabled,collection_interface:{group_channel:!0}}})),d.on((function(e){e instanceof f&&(e.stateType===v.CONNECTED?o._isGetRemoteChannelsSucceeded||i(o,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this._revokeLoadMore()];case 1:return e.sent(),[2]}}))})):e.stateType===v.LOGOUT&&o.dispose())}))}return Object.defineProperty(e.prototype,"hasMore",{get:function(){return!this._isDisposed&&this._hasMore},enumerable:!1,configurable:!0}),e.prototype.setGroupChannelCollectionHandler=function(e){this._handler=e},e.prototype._addChannelsToView=function(e,t,n){var a,r,s,o,l=this;void 0===n&&(n=!1);var u=[],c=[],d=[];try{for(var p=F(e),f=p.next();!f.done;f=p.next()){var m=f.value,v=Re(this.channels,m);v>=0&&this.channels.splice(v,1);var _=Ke(this.channels,m,this.order).place;if(v<0)_===this.channels.length?!n&&this._hasMore||(u.push(m),this.channels.push(m)):(u.push(m),this.channels.splice(_,0,m));else switch(t){case L.EVENT_CHANNEL_UPDATED:case L.EVENT_MESSAGE_RECEIVED:case L.SYNC_CHANNEL_CHANGELOGS:case L.EVENT_MESSAGE_SENT:_!==v&&this._hasMore&&_===this.channels.length?d.push(m):(this.channels.splice(_,0,m),c.push(m));break;default:this.channels.splice(_,0,m),c.push(m)}}}catch(e){a={error:e}}finally{try{f&&!f.done&&(r=p.return)&&r.call(p)}finally{if(a)throw a.error}}if(d.length>0)try{for(var g=F(d),y=g.next();!y.done;y=g.next()){m=y.value;var C=Re(this.channels,m);-1!==C&&this.channels.splice(C,1)}}catch(e){s={error:e}}finally{try{y&&!y.done&&(o=g.return)&&o.call(g)}finally{if(s)throw s.error}}me(t)&&N((function(){return i(l,void 0,void 0,(function(){var e,n,a,r;return h(this,(function(i){return e=new _e(t),u.length>0&&(null===(n=this._handler)||void 0===n?void 0:n.onChannelsAdded)&&this._handler.onChannelsAdded(e,u),c.length>0&&(null===(a=this._handler)||void 0===a?void 0:a.onChannelsUpdated)&&this._handler.onChannelsUpdated(e,c),d.length>0&&(null===(r=this._handler)||void 0===r?void 0:r.onChannelsDeleted)&&this._handler.onChannelsDeleted(e,d.map((function(e){return e.url}))),[2]}))}))}))},e.prototype._removeChannelsFromView=function(e,t){var n,a,r=this,s=[],o=function(e){var t=l.channels.findIndex((function(t){return t.url===e}));t>=0&&(s.push(l.channels[t].url),l.channels.splice(t,1))},l=this;try{for(var u=F(e),c=u.next();!c.done;c=u.next()){o(c.value)}}catch(e){n={error:e}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(n)throw n.error}}return me(t)&&s.length>0&&N((function(){return i(r,void 0,void 0,(function(){var e,n;return h(this,(function(a){return e=new _e(t),(null===(n=this._handler)||void 0===n?void 0:n.onChannelsDeleted)&&this._handler.onChannelsDeleted(e,s),[2]}))}))})),s},e.prototype._getLocalChannels=function(){return i(this,void 0,void 0,(function(){var e,t;return h(this,(function(n){switch(n.label){case 0:return e=fe.of(this._iid),t=this.channels.length>0?function(e,t){var n,a,r,i;switch(t){case Ae.LATEST_LAST_MESSAGE:return null!==(a=null===(n=e.lastMessage)||void 0===n?void 0:n.createdAt)&&void 0!==a?a:e.createdAt;case Ae.CHRONOLOGICAL:return e.createdAt;case Ae.CHANNEL_NAME_ALPHABETICAL:return e.name;default:return null!==(i=null===(r=e.lastMessage)||void 0===r?void 0:r.createdAt)&&void 0!==i?i:e.createdAt}}(this.channels[this.channels.length-1],this.order):null,[4,e.getChannelsFromCache(t,this.filter,this.order,this._limit,t?this.channels[this.channels.length-1].url:void 0)];case 1:return[2,n.sent()]}}))}))},e.prototype._getRemoteChannels=function(){return i(this,void 0,void 0,(function(){var e,t,n;return h(this,(function(a){switch(a.label){case 0:return[4,fe.of(this._iid).getMyGroupChannels(this._token,j(W(W({},this.filter),{order:this.order})),this._limit)];case 1:return e=a.sent(),t=e.channels,n=e.token,this._token=n,this._hasMore=!!n,[2,t]}}))}))},e.prototype._revokeLoadMore=function(){return i(this,void 0,void 0,(function(){var e;return h(this,(function(t){switch(t.label){case 0:if(this._isDisposed)return[2];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this._getRemoteChannels()];case 2:return e=t.sent(),this._isGetRemoteChannelsSucceeded=!0,this._addChannelsToView(e,L.REQUEST_CHANNEL,!0),[3,4];case 3:return t.sent(),this._isGetRemoteChannelsSucceeded=!1,[3,4];case 4:return[2]}}))}))},e.prototype.loadMore=function(){return i(this,void 0,void 0,(function(){var e,t,n,a,r=this;return h(this,(function(o){switch(o.label){case 0:if(this._isDisposed)throw new _({code:Y.COLLECTION_DISPOSED,message:"Collection has been disposed."});return this._hasMore?(e=s.of(this._iid),t=e.cacheContext,n=e.connectionManager,a=[],!t.localCacheEnabled||n.isConnected&&!this._backgroundSync.completed?[3,2]:[4,J((function(){return i(r,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this._getLocalChannels()];case 1:return a=e.sent(),[2]}}))}))}))]):[3,6];case 1:return o.sent(),this._hasMore=a.length>=this._limit,[3,5];case 2:return o.trys.push([2,4,,5]),[4,this._getRemoteChannels()];case 3:return a=o.sent(),this._isGetRemoteChannelsSucceeded=!0,[3,5];case 4:return o.sent(),this._isGetRemoteChannelsSucceeded=!1,[3,5];case 5:return this._addChannelsToView(a,L.REQUEST_CHANNEL,!0),[2,a];case 6:return[2,[]]}}))}))},e.prototype.dispose=function(){var e,t;this._isDisposed||(this._isDisposed=!0,this.channels.length>0&&this.channels.splice(0,this.channels.length),null===(e=this._backgroundSync)||void 0===e||e.close(),null===(t=this._changelogSync)||void 0===t||t.close(),fe.of(this._iid).unsubscribeChannelEvent(this._key))},e}(),je=function(e){function t(t){var n=this,a=t.token,r=t.limit,i=t.order,s=t.includeEmpty,o=t.membershipFilter,l=t.channelNameContainsFilter,u=t.channelUrlsFilter,c=t.customTypesFilter,h=t.customTypeStartsWithFilter,d=t.superChannelFilter,p=t.metadataOrderKeyFilter,f=t.metadataKey,m=t.metadataValues,v=t.metadataValueStartsWith,_=t.includeFrozen,g=t.includeMetaData;return(n=e.call(this)||this).method=Z.GET,n.path=$,n.params=ee(j({token:a,limit:r,order:i,show_member:!0,show_read_receipt:!0,show_delivery_receipt:!0,show_empty:s,public_mode:ge.PUBLIC,public_membership_mode:o,name_contains:l,channel_urls:u,custom_types:c,custom_type_startswith:h,super_mode:d,metadata_order_key:p,metadata_key:f,metadata_values:m,metadata_value_startswith:v,show_frozen:_,show_metadata:g})),n}return X(t,e),t}(te),We=function(e){function t(t,n){var a=e.call(this,t,n)||this;a.channels=[];var r=n.next,i=n.channels,s=n.ts;return a.token=r,i&&i.length>0&&(a.channels=i.map((function(e){return e.ts=s,new ye(t,e)}))),a.ts="number"==typeof s?s:0,a}return X(t,e),t}(ne);!function(e){e.ALL="all",e.JOINED="joined"}(Oe||(Oe={}));var ze=function(e){function t(t,n){var a,r,i,s,o,l,u,c,h,d,p,f,m,v,_=this;return(_=e.call(this,t,n)||this).includeEmpty=!1,_.includeFrozen=!0,_.includeMetaData=!0,_.channelUrlsFilter=null,_.customTypesFilter=null,_.customTypeStartsWithFilter=null,_.channelNameContainsFilter=null,_.membershipFilter=Oe.ALL,_.superChannelFilter=Ce.ALL,_.metadataKey=null,_.metadataValues=null,_.metadataOrderKeyFilter=null,_.metadataValueStartsWith=null,_.order=ke.CHRONOLOGICAL,_.includeEmpty=null!==(a=n.includeEmpty)&&void 0!==a&&a,_.includeFrozen=null===(r=n.includeFrozen)||void 0===r||r,_.includeMetaData=null===(i=n.includeMetaData)||void 0===i||i,_.channelUrlsFilter=null!==(s=n.channelUrlsFilter)&&void 0!==s?s:null,_.customTypesFilter=null!==(o=n.customTypesFilter)&&void 0!==o?o:null,_.customTypeStartsWithFilter=null!==(l=n.customTypeStartsWithFilter)&&void 0!==l?l:null,_.channelNameContainsFilter=null!==(u=n.channelNameContainsFilter)&&void 0!==u?u:null,_.membershipFilter=null!==(c=n.membershipFilter)&&void 0!==c?c:Oe.ALL,_.superChannelFilter=null!==(h=n.superChannelFilter)&&void 0!==h?h:Ce.ALL,_.metadataKey=null!==(d=n.metadataKey)&&void 0!==d?d:null,_.metadataValues=null!==(p=n.metadataValues)&&void 0!==p?p:null,_.metadataOrderKeyFilter=null!==(f=n.metadataOrderKeyFilter)&&void 0!==f?f:null,_.metadataValueStartsWith=null!==(m=n.metadataValueStartsWith)&&void 0!==m?m:null,_.order=null!==(v=n.order)&&void 0!==v?v:ke.CHRONOLOGICAL,_}return X(t,e),t.prototype._validate=function(){return e.prototype._validate.call(this)&&ae("boolean",this.includeEmpty)&&ae("boolean",this.includeFrozen)&&ae("boolean",this.includeMetaData)&&ae("string",this.channelNameContainsFilter,!0)&&re("string",this.channelUrlsFilter,!0)&&re("string",this.customTypesFilter,!0)&&ae("string",this.customTypeStartsWithFilter,!0)&&ie(Oe,this.membershipFilter)&&ie(Ce,this.superChannelFilter)&&ie(ke,this.order)&&ae("string",this.metadataOrderKeyFilter,!0)&&ae("string",this.metadataKey,!0)&&re("string",this.metadataValues,!0)&&ae("string",this.metadataValueStartsWith,!0)},t.prototype.next=function(){return i(this,void 0,void 0,(function(){var e,t,n,a,r,i,o,l;return h(this,(function(u){switch(u.label){case 0:return this._validate()?this._isLoading?[3,3]:(e=[],this._hasNext?(this._isLoading=!0,t=s.of(this._iid),n=t.requestQueue,t.dispatcher,a=new je(j(W(W({},this),{token:this._token}))),[4,n.send(a)]):[3,2]):[3,5];case 1:return r=u.sent(),i=r.as(We),o=i.channels,l=i.token,this._token=l,this._hasNext=!!l,this._isLoading=!1,[2,o];case 2:return[2,e];case 3:throw _.queryInProgress;case 4:return[3,6];case 5:throw _.invalidParameters;case 6:return[2]}}))}))},t}(se),Be=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;return Object.keys(t).forEach((function(e){n.hasOwnProperty(e)&&(n[e]=t[e])})),n}return X(t,e),t}(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onUserJoined=oe,t.onUserLeft=oe,t.onUserReceivedInvitation=oe,t.onUserDeclinedInvitation=oe,t.onChannelHidden=oe,t.onUnreadMemberStatusUpdated=oe,t.onUndeliveredMemberStatusUpdated=oe,t.onTypingStatusUpdated=oe,t.onPollUpdated=oe,t.onPollVoted=oe,t.onPollDeleted=oe,t.onPinnedMessageUpdated=oe,t}return X(t,e),t}(Ue)),qe=function(e){function t(t){var n=this,a=t.token,r=t.limit,i=t.order,s=t.reverse,o=t.channelUrl,l=t.messageTypeFilter,u=t.scheduledStatus;return(n=e.call(this)||this).method=Z.GET,n.path="".concat(le),n.params=ee(j({token:a,limit:r,reverse:s,channel_url:o,order:i,message_type:l,status:u})),n}return X(t,e),t}(te),Ye=function(e){function t(t,n){var a=e.call(this,t,n)||this;a.scheduledMessages=[];var r=n.next,i=n.scheduled_messages;return a.token=r,a.scheduledMessages=i.map((function(e){return Ge(t,e)})),a}return X(t,e),t}(ne),Je=function(e){function t(t,n){var a,r,i,s,o,l=this;return(l=e.call(this,t,n)||this).channelUrl=null,l.order=null,l.reverse=!1,l.scheduledStatus=null,l.messageTypeFilter=ue.ALL,l.channelUrl=null!==(a=n.channelUrl)&&void 0!==a?a:null,l.order=null!==(r=n.order)&&void 0!==r?r:null,l.reverse=null!==(i=n.reverse)&&void 0!==i&&i,l.scheduledStatus=null!==(s=n.scheduledStatus)&&void 0!==s?s:null,l.messageTypeFilter=null!==(o=n.messageTypeFilter)&&void 0!==o?o:ue.ALL,l}return X(t,e),t.prototype._validate=function(){return e.prototype._validate.call(this)&&ae("string",this.channelUrl,!0)&&(ie(Fe,this.order)||null===this.order)&&ae("boolean",this.reverse)&&(re(xe,this.scheduledStatus)||null===this.scheduledStatus)&&ie(ue,this.messageTypeFilter)},t.prototype.next=function(){return i(this,void 0,void 0,(function(){var e,t,n,a,r,i;return h(this,(function(o){switch(o.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,e=s.of(this._iid).requestQueue,t=new qe(j(W(W({},this),{token:this._token}))),[4,e.send(t)]):[3,2]:[3,5];case 1:return n=o.sent(),a=n.as(Ye),r=a.scheduledMessages,i=a.token,this._token=i,this._hasNext=!!i,this._isLoading=!1,[2,r];case 2:return[2,[]];case 3:throw _.queryInProgress;case 4:return[3,6];case 5:throw _.invalidParameters;case 6:return[2]}}))}))},t}(se),Xe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="groupChannel",t}return X(t,e),t.prototype.init=function(t,n){var a=n.sdkState,r=n.dispatcher,i=n.sessionManager,s=n.requestQueue,o=n.logger,l=n.onlineDetector,u=n.cacheContext;e.prototype.init.call(this,t,{sdkState:a,dispatcher:r,sessionManager:i,requestQueue:s,logger:o,onlineDetector:l,cacheContext:u}),this._manager=new fe(t,{sdkState:a,cacheContext:u,dispatcher:r,sessionManager:i,requestQueue:s,logger:o})},t.prototype.createGroupChannelCollection=function(e){return void 0===e&&(e={}),new Qe(this._iid,e)},t.prototype.createMyGroupChannelListQuery=function(e){return void 0===e&&(e={}),new be(this._iid,e)},t.prototype.createPublicGroupChannelListQuery=function(e){return void 0===e&&(e={}),new ze(this._iid,e)},t.prototype.createScheduledMessageListQuery=function(e){return void 0===e&&(e={}),new Je(this._iid,e)},t.prototype.addGroupChannelHandler=function(e,t){ce(ae("string",e)&&t instanceof Be).throw(_.invalidParameters),this._manager.addHandler(e,t)},t.prototype.removeGroupChannelHandler=function(e){ce(ae("string",e)).throw(_.invalidParameters),this._manager.removeHandler(e)},t.prototype.removeAllGroupChannelHandlers=function(){this._manager.clearHandler()},t.prototype.buildGroupChannelFromSerializedData=function(e){return this._manager.buildGroupChannelFromSerializedData(e)},t.prototype.buildGroupChannelListQueryFromSerializedData=function(e){return this._manager.buildGroupChannelListQueryFromSerializedData(e)},t.prototype.buildMemberFromSerializedData=function(e){return this._manager.buildMemberFromSerializedData(e)},t.prototype.getChannel=function(e){return i(this,void 0,void 0,(function(){return h(this,(function(t){return ce(ae("string",e)).throw(_.invalidParameters),[2,this._manager.getChannel(e)]}))}))},t.prototype.getChannelWithoutCache=function(e){return i(this,void 0,void 0,(function(){return h(this,(function(t){return ce(ae("string",e)).throw(_.invalidParameters),[2,this._manager.getChannelWithoutCache(e)]}))}))},t.prototype.getMyGroupChannelChangeLogsByToken=function(e,t){return void 0===t&&(t={}),i(this,void 0,void 0,(function(){var n;return h(this,(function(a){switch(a.label){case 0:return n=W(W({},Me),t),ce(ae("string",e)&&Se(n)).throw(_.invalidParameters),[4,this._manager.getMyGroupChannelChangeLogs(e,n)];case 1:return[2,a.sent()]}}))}))},t.prototype.getMyGroupChannelChangeLogsByTimestamp=function(e,t){return void 0===t&&(t={}),i(this,void 0,void 0,(function(){var n;return h(this,(function(a){switch(a.label){case 0:return n=W(W({},Me),t),ce(ae("number",e)&&Se(n)).throw(_.invalidParameters),[4,this._manager.getMyGroupChannelChangeLogs(e,n)];case 1:return[2,a.sent()]}}))}))},t.prototype.getGroupChannelCount=function(e){return i(this,void 0,void 0,(function(){var t;return h(this,(function(n){return t=W(W({},Ee),e),ce(we(t)).throw(_.invalidParameters),[2,this._manager.getGroupChannelCount(t)]}))}))},t.prototype.getUnreadItemCount=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return[4,this._manager.getUnreadItemCount(e)];case 1:return[2,t.sent()]}}))}))},t.prototype.getTotalUnreadChannelCount=function(){return i(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this._manager.getTotalUnreadChannelCount()];case 1:return[2,e.sent()]}}))}))},t.prototype.getTotalUnreadMessageCount=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return[4,this._manager.getTotalUnreadMessageCount(e)];case 1:return[2,t.sent()]}}))}))},t.prototype.getTotalScheduledMessageCount=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return[4,this._manager.getTotalScheduledMessageCount(e)];case 1:return[2,t.sent()]}}))}))},t.prototype.getSubscribedTotalUnreadMessageCount=function(){return this._manager.getSubscribedTotalUnreadMessageCount()},t.prototype.getSubscribedCustomTypeTotalUnreadMessageCount=function(){return this._manager.getSubscribedCustomTypeTotalUnreadMessageCount()},t.prototype.getSubscribedCustomTypeUnreadMessageCount=function(e){return this._manager.getSubscribedCustomTypeUnreadMessageCount(e)},t.prototype.createChannel=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t;return h(this,(function(n){return t=W(W({},Le),e),ce(Te(t)).throw(_.invalidParameters),[2,this._manager.createChannel(t)]}))}))},t.prototype.createDistinctChannelIfNotExist=function(e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t;return h(this,(function(n){return t=W(W({},Le),e),ce(Te(t)).throw(_.invalidParameters),t&&(t.isDistinct=!0),[2,this.createChannel(t)]}))}))},t.prototype.createChannelWithUserIds=function(e,t,n,a,r,s){return void 0===t&&(t=!1),void 0===r&&(r=""),void 0===s&&(s=""),i(this,void 0,void 0,(function(){var i;return h(this,(function(o){return i=W(W({},Le),{invitedUserIds:e,isDistinct:t,name:n,data:r,customType:s}),"string"==typeof a?i.coverUrl=a:i.coverImage=a,[2,this.createChannel(i)]}))}))},t.prototype.markAsReadAll=function(){return i(this,void 0,void 0,(function(){return h(this,(function(e){return this._manager.markAsReadAll(),[2]}))}))},t.prototype.markAsReadWithChannelUrls=function(e){return i(this,void 0,void 0,(function(){return h(this,(function(t){return ce(re("string",e)).throw(_.invalidParameters),this._manager.markAsReadWithChannelUrls(e),[2]}))}))},t.prototype.markAsDelivered=function(e){return i(this,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return ce(ae("string",e)).throw(_.invalidParameters),[4,this.getChannel(e)];case 1:return[4,t.sent().markAsDelivered()];case 2:return t.sent(),[2]}}))}))},t}(he);export{Qe as GroupChannelCollection,Be as GroupChannelHandler,Xe as GroupChannelModule,Oe as MembershipFilter,ze as PublicGroupChannelListQuery,Je as ScheduledMessageListQuery};
