"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./lib/__bundle-3243c404.js"),t=require("./lib/__bundle-fca6590b.js"),n=require("./lib/__bundle-dce294b0.js"),i=require("./lib/__bundle-051395cf.js"),r=require("./lib/__bundle-7acc9e52.js");require("./lib/__bundle-7f597621.js"),require("./lib/__bundle-f6d4722d.js");const s={};class a{constructor({_iid:i,limit:r=100}){this.ref=0,this._iid=i,this._limit=r;const{sdkState:s,dispatcher:a,logger:o,cacheContext:l}=e.Vault.of(this._iid);this._metadataKey=`sendbird:${s.userId}@groupchannel/sync.meta`;const d=(e=>`sendbird:${e}@groupchannel/sync`)(s.userId);this._sync=new t.Sync(d,(()=>e.__awaiter(this,void 0,void 0,(function*(){var i,r,a,d;const h={hasNext:!0,nextToken:""};if(yield this.loadMetadata(),o.debug("channel background sync from",null===(i=this._metadata)||void 0===i?void 0:i.token),null===(r=this._metadata)||void 0===r?void 0:r.completed)h.hasNext=!1,h.nextToken="";else try{const i={includeEmpty:!0,order:n.GroupChannelListOrder.CHRONOLOGICAL};if(i.order===n.GroupChannelListOrder.LATEST_LAST_MESSAGE)try{const t=yield l.preference.get(e.createChangelogIncludeChatNotificationsCacheKey(s.appId));i.includeChatNotification=Boolean(t)}catch(e){i.includeChatNotification=!1}const r=t.GroupChannelManager.of(this._iid),{channels:u,token:c}=yield r.getMyGroupChannels(null!==(d=null===(a=this._metadata)||void 0===a?void 0:a.token)&&void 0!==d?d:"",i,this._limit,e.CollectionEventSource.SYNC_CHANNEL_BACKGROUND);h.hasNext=u.length>=this._limit&&!!c,h.nextToken=c,this._metadata&&(this._metadata.token=c,this._metadata.range.extends(...u.map((e=>e.createdAt))),this._metadata.completed=!h.hasNext),o.debug("channel background sync progress",h),yield this.saveMetadata()}catch(t){throw o.debug("channel background sync error",t),t instanceof e.SendbirdError&&t.isInvalidTokenError&&(yield this.clearMetaData()),t}return h})))),this._connectionEventContext=a.on((t=>{if(t instanceof e.ConnectionStateChangeCommand)if(t.stateType===e.ConnectionStateType.CONNECTED)this.resume();else this.pause()}))}static of(e){return s[e]||(s[e]=new a({_iid:e})),s[e].ref++,s[e]}static clear(e){s[e]&&(s[e].close(),delete s[e])}get range(){var e,n;return null!==(n=null===(e=this._metadata)||void 0===e?void 0:e.range)&&void 0!==n?n:new t.TimeRange({})}get completed(){var e;return!!(null===(e=this._metadata)||void 0===e?void 0:e.completed)}loadMetadata(){return e.__awaiter(this,void 0,void 0,(function*(){if(!this._metadata){const{cacheContext:n}=e.Vault.of(this._iid),i=yield n.preference.get(this._metadataKey);this._metadata={token:i?i.token:"",range:new t.TimeRange(i?i.range:{top:Number.MAX_SAFE_INTEGER,bottom:0}),completed:!!i&&i.completed}}return this._metadata}))}saveMetadata(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._metadata){const{cacheContext:t}=e.Vault.of(this._iid);return yield t.preference.set(this._metadataKey,this._metadata),!0}return!1}))}clearMetaData(){return e.__awaiter(this,void 0,void 0,(function*(){const{cacheContext:t}=e.Vault.of(this._iid);yield t.preference.remove(this._metadataKey),this._metadata=void 0}))}resume(){var t,n;const{logger:i,sessionManager:r}=e.Vault.of(this._iid);r.session.hasSession&&(i.debug("channel background sync resume()"),this._sync.start(null!==(n=null===(t=this._metadata)||void 0===t?void 0:t.token)&&void 0!==n?n:""))}pause(){const{logger:t}=e.Vault.of(this._iid);t.debug("channel background sync stop()"),this._sync.stop()}close(){this.ref--,this.ref<=0&&(this.ref=0,this.pause(),this._connectionEventContext.close(),delete s[this._iid])}}const o={};class l{constructor({_iid:n}){this.ref=0,this._iid=n;const{logger:i,sdkState:r,dispatcher:s,cacheContext:a}=e.Vault.of(this._iid);this._metadataKey=`sendbird:${r.userId}@groupchannel/changelogs.meta`;const o=(e=>`sendbird:${e}@groupchannel/changelogs`)(r.userId);this._sync=new t.Sync(o,(()=>e.__awaiter(this,void 0,void 0,(function*(){var n,s,o;const l={hasNext:!0,nextToken:0};yield this.loadMetadata(),i.debug("channel changelog sync from",null===(n=this._metadata)||void 0===n?void 0:n.token);try{const n={includeEmpty:!0};try{const t=yield a.preference.get(e.createChangelogIncludeChatNotificationsCacheKey(r.appId));n.includeChatNotification=Boolean(t)}catch(e){n.includeChatNotification=!1}const d=t.GroupChannelManager.of(this._iid),{hasMore:h,token:u}=yield d.getMyGroupChannelChangeLogs(null!==(o=null===(s=this._metadata)||void 0===s?void 0:s.token)&&void 0!==o?o:"",n,e.CollectionEventSource.SYNC_CHANNEL_CHANGELOGS);l.hasNext=h,l.nextToken=u,this._metadata&&(this._metadata.token=u),i.debug("channel changelog sync progress",l),yield this.saveMetadata()}catch(t){throw i.debug("channel changelog sync error",t),t instanceof e.SendbirdError&&t.isInvalidTokenError&&(yield this.clearMetadata()),t}return l})))),this._connectionEventContext=s.on((t=>{if(t instanceof e.ConnectionStateChangeCommand)if(t.stateType===e.ConnectionStateType.CONNECTED)this.resume();else this.pause()}))}static of(e){return o[e]||(o[e]=new l({_iid:e})),o[e].ref++,o[e]}static clear(e){o[e]&&(o[e].close(),delete o[e])}loadMetadata(){return e.__awaiter(this,void 0,void 0,(function*(){if(!this._metadata){const{cacheContext:t,firstConnectedAt:n}=e.Vault.of(this._iid),i=yield t.preference.get(this._metadataKey);this._metadata={token:i?i.token:n}}return this._metadata}))}saveMetadata(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._metadata){const{cacheContext:t}=e.Vault.of(this._iid);return yield t.preference.set(this._metadataKey,this._metadata),!0}return!1}))}clearMetadata(){return e.__awaiter(this,void 0,void 0,(function*(){const{cacheContext:t}=e.Vault.of(this._iid);yield t.preference.remove(this._metadataKey),this._metadata=void 0}))}resume(){const{sessionManager:t}=e.Vault.of(this._iid);t.session.hasSession&&this._sync.start(0)}pause(){this._sync.stop()}close(){this.ref--,this.ref<=0&&(this.ref=0,this.pause(),this._connectionEventContext.close(),delete o[this._iid])}}const d=(e,t)=>e.findIndex((e=>e.isIdentical(t))),h=(e,t,n)=>{if(e.length>0){const i=d(e,t);let r=0,s=e.length-1,a=Math.floor((r+s)/2);for(;r<s;){const o=u(e[a],t,n);if(o>0)s=a,a=Math.floor((r+s)/2);else{if(!(o<0))return{place:a,oldPosition:i};r=a+1,a=Math.floor((r+s)/2)}}return{place:u(e[a],t,n)>=0?a:a+1,oldPosition:i}}return{place:e.length,oldPosition:-1}},u=(e,t,i)=>{switch(i){case n.GroupChannelListOrder.LATEST_LAST_MESSAGE:return e.lastMessage&&t.lastMessage?t.lastMessage.createdAt-e.lastMessage.createdAt:e.lastMessage?-1:t.lastMessage?1:t.createdAt-e.createdAt;case n.GroupChannelListOrder.CHRONOLOGICAL:return t.createdAt-e.createdAt;case n.GroupChannelListOrder.CHANNEL_NAME_ALPHABETICAL:{const n=e.name.localeCompare(t.name);return 0===n?e.createdAt-t.createdAt:n}default:return 0}};class c{constructor(r,{filter:s,order:o,limit:d}){this.channels=[],this._iid=r,this._key=`gcc-${e.uuid()}`,this._isDisposed=!1,this._isGetRemoteChannelsSucceeded=!0,this.filter=null!=s?s:new t.GroupChannelFilter,this.order=null!=o?o:n.GroupChannelListOrder.LATEST_LAST_MESSAGE,this._hasMore=!0,this._token="",this._limit=null!=d?d:i.DEFAULT_GROUPCHANNEL_LIMIT;const{sdkState:h,cacheContext:u,dispatcher:c}=e.Vault.of(this._iid);u.localCacheEnabled&&(this._backgroundSync=a.of(r),this._backgroundSync.resume()),this._changelogSync=l.of(r),this._changelogSync.resume();t.GroupChannelManager.of(this._iid).subscribeChannelEvent(this._key,{onUpdate:(e,n)=>{if(t.shouldGiveEvent(n)){const t=e.filter((e=>this.filter.match(e,h.userId))),i=e.filter((e=>!this.filter.match(e,h.userId))).map((e=>e.url));t.length>0&&this._addChannelsToView(t,n),i.length>0&&this._removeChannelsFromView(i,n)}},onRemove:(e,t)=>{this._removeChannelsFromView(e,t)}});const{statLogCollector:p}=e.Vault.of(this._iid);p.put(new e.DailyRecordStatLog({type:e.StatType.FEATURE_LOCALCACHE,data:{use_local_cache:u.localCacheEnabled,collection_interface:{group_channel:!0}}})),c.on((t=>{t instanceof e.ConnectionStateChangeCommand&&(t.stateType===e.ConnectionStateType.CONNECTED?this._isGetRemoteChannelsSucceeded||(()=>{e.__awaiter(this,void 0,void 0,(function*(){yield this._revokeLoadMore()}))})():t.stateType===e.ConnectionStateType.LOGOUT&&this.dispose())}))}get hasMore(){return!this._isDisposed&&this._hasMore}setGroupChannelCollectionHandler(e){this._handler=e}_addChannelsToView(n,i,r=!1){const s=[],a=[],o=[];for(const t of n){const n=d(this.channels,t);n>=0&&this.channels.splice(n,1);const{place:l}=h(this.channels,t,this.order);if(n<0)l===this.channels.length?!r&&this._hasMore||(s.push(t),this.channels.push(t)):(s.push(t),this.channels.splice(l,0,t));else switch(i){case e.CollectionEventSource.EVENT_CHANNEL_UPDATED:case e.CollectionEventSource.EVENT_MESSAGE_RECEIVED:case e.CollectionEventSource.SYNC_CHANNEL_CHANGELOGS:case e.CollectionEventSource.EVENT_MESSAGE_SENT:l!==n&&this._hasMore&&l===this.channels.length?o.push(t):(this.channels.splice(l,0,t),a.push(t));break;default:this.channels.splice(l,0,t),a.push(t)}}if(o.length>0)for(const e of o){const t=d(this.channels,e);-1!==t&&this.channels.splice(t,1)}t.shouldGiveEvent(i)&&e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){var e,n,r;const l=new t.GroupChannelEventContext(i);s.length>0&&(null===(e=this._handler)||void 0===e?void 0:e.onChannelsAdded)&&this._handler.onChannelsAdded(l,s),a.length>0&&(null===(n=this._handler)||void 0===n?void 0:n.onChannelsUpdated)&&this._handler.onChannelsUpdated(l,a),o.length>0&&(null===(r=this._handler)||void 0===r?void 0:r.onChannelsDeleted)&&this._handler.onChannelsDeleted(l,o.map((e=>e.url)))}))))}_removeChannelsFromView(n,i){const r=[];for(const e of n){const t=this.channels.findIndex((t=>t.url===e));t>=0&&(r.push(this.channels[t].url),this.channels.splice(t,1))}return t.shouldGiveEvent(i)&&r.length>0&&e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){var e;const n=new t.GroupChannelEventContext(i);(null===(e=this._handler)||void 0===e?void 0:e.onChannelsDeleted)&&this._handler.onChannelsDeleted(n,r)})))),r}_getLocalChannels(){return e.__awaiter(this,void 0,void 0,(function*(){const e=t.GroupChannelManager.of(this._iid),i=this.channels.length>0?((e,t)=>{var i,r,s,a;switch(t){case n.GroupChannelListOrder.LATEST_LAST_MESSAGE:return null!==(r=null===(i=e.lastMessage)||void 0===i?void 0:i.createdAt)&&void 0!==r?r:e.createdAt;case n.GroupChannelListOrder.CHRONOLOGICAL:return e.createdAt;case n.GroupChannelListOrder.CHANNEL_NAME_ALPHABETICAL:return e.name;default:return null!==(a=null===(s=e.lastMessage)||void 0===s?void 0:s.createdAt)&&void 0!==a?a:e.createdAt}})(this.channels[this.channels.length-1],this.order):null;return yield e.getChannelsFromCache(i,this.filter,this.order,this._limit,i?this.channels[this.channels.length-1].url:void 0)}))}_getRemoteChannels(){return e.__awaiter(this,void 0,void 0,(function*(){const n=t.GroupChannelManager.of(this._iid),{channels:i,token:r}=yield n.getMyGroupChannels(this._token,e.undefineNullProps(Object.assign(Object.assign({},this.filter),{order:this.order})),this._limit);return this._token=r,this._hasMore=!!r,i}))}_revokeLoadMore(){return e.__awaiter(this,void 0,void 0,(function*(){if(!this._isDisposed)try{const t=yield this._getRemoteChannels();this._isGetRemoteChannelsSucceeded=!0,this._addChannelsToView(t,e.CollectionEventSource.REQUEST_CHANNEL,!0)}catch(e){this._isGetRemoteChannelsSucceeded=!1}}))}loadMore(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._isDisposed)throw new e.SendbirdError({code:e.SendbirdErrorCode.COLLECTION_DISPOSED,message:"Collection has been disposed."});if(this._hasMore){const{cacheContext:t,connectionManager:n}=e.Vault.of(this._iid);let i=[];if(!t.localCacheEnabled||n.isConnected&&!this._backgroundSync.completed)try{i=yield this._getRemoteChannels(),this._isGetRemoteChannelsSucceeded=!0}catch(e){this._isGetRemoteChannelsSucceeded=!1}else yield e.runOrNothing((()=>e.__awaiter(this,void 0,void 0,(function*(){i=yield this._getLocalChannels()})))),this._hasMore=i.length>=this._limit;return this._addChannelsToView(i,e.CollectionEventSource.REQUEST_CHANNEL,!0),i}return[]}))}dispose(){var e,n;if(this._isDisposed)return;this._isDisposed=!0,this.channels.length>0&&this.channels.splice(0,this.channels.length),null===(e=this._backgroundSync)||void 0===e||e.close(),null===(n=this._changelogSync)||void 0===n||n.close();t.GroupChannelManager.of(this._iid).unsubscribeChannelEvent(this._key)}}class p extends e.APIRequestCommand{constructor(n){const{token:i,limit:r,order:s,includeEmpty:a,membershipFilter:o,channelNameContainsFilter:l,channelUrlsFilter:d,customTypesFilter:h,customTypeStartsWithFilter:u,superChannelFilter:c,metadataOrderKeyFilter:p,metadataKey:_,metadataValues:m,metadataValueStartsWith:g,includeFrozen:C,includeMetaData:f}=n;super(),this.method=e.APIRequestMethod.GET,this.path=e.API_PATH_GROUP_CHANNELS,this.params=e.deundefined(e.undefineNullProps({token:i,limit:r,order:s,show_member:!0,show_read_receipt:!0,show_delivery_receipt:!0,show_empty:a,public_mode:t.PublicChannelFilter.PUBLIC,public_membership_mode:o,name_contains:l,channel_urls:d,custom_types:h,custom_type_startswith:u,super_mode:c,metadata_order_key:p,metadata_key:_,metadata_values:m,metadata_value_startswith:g,show_frozen:C,show_metadata:f}))}}class _ extends e.APIResponseCommand{constructor(e,n){super(e,n),this.channels=[];const{next:i,channels:r,ts:s}=n;this.token=i,r&&r.length>0&&(this.channels=r.map((n=>(n.ts=s,new t.GroupChannel(e,n))))),this.ts="number"==typeof s?s:0}}var m;exports.MembershipFilter=void 0,(m=exports.MembershipFilter||(exports.MembershipFilter={})).ALL="all",m.JOINED="joined";class g extends e.BaseListQuery{constructor(e,i){var r,s,a,o,l,d,h,u,c,p,_,m,g,C;super(e,i),this.includeEmpty=!1,this.includeFrozen=!0,this.includeMetaData=!0,this.channelUrlsFilter=null,this.customTypesFilter=null,this.customTypeStartsWithFilter=null,this.channelNameContainsFilter=null,this.membershipFilter=exports.MembershipFilter.ALL,this.superChannelFilter=t.SuperChannelFilter.ALL,this.metadataKey=null,this.metadataValues=null,this.metadataOrderKeyFilter=null,this.metadataValueStartsWith=null,this.order=n.PublicGroupChannelListOrder.CHRONOLOGICAL,this.includeEmpty=null!==(r=i.includeEmpty)&&void 0!==r&&r,this.includeFrozen=null===(s=i.includeFrozen)||void 0===s||s,this.includeMetaData=null===(a=i.includeMetaData)||void 0===a||a,this.channelUrlsFilter=null!==(o=i.channelUrlsFilter)&&void 0!==o?o:null,this.customTypesFilter=null!==(l=i.customTypesFilter)&&void 0!==l?l:null,this.customTypeStartsWithFilter=null!==(d=i.customTypeStartsWithFilter)&&void 0!==d?d:null,this.channelNameContainsFilter=null!==(h=i.channelNameContainsFilter)&&void 0!==h?h:null,this.membershipFilter=null!==(u=i.membershipFilter)&&void 0!==u?u:exports.MembershipFilter.ALL,this.superChannelFilter=null!==(c=i.superChannelFilter)&&void 0!==c?c:t.SuperChannelFilter.ALL,this.metadataKey=null!==(p=i.metadataKey)&&void 0!==p?p:null,this.metadataValues=null!==(_=i.metadataValues)&&void 0!==_?_:null,this.metadataOrderKeyFilter=null!==(m=i.metadataOrderKeyFilter)&&void 0!==m?m:null,this.metadataValueStartsWith=null!==(g=i.metadataValueStartsWith)&&void 0!==g?g:null,this.order=null!==(C=i.order)&&void 0!==C?C:n.PublicGroupChannelListOrder.CHRONOLOGICAL}_validate(){return super._validate()&&e.isTypeOf("boolean",this.includeEmpty)&&e.isTypeOf("boolean",this.includeFrozen)&&e.isTypeOf("boolean",this.includeMetaData)&&e.isTypeOf("string",this.channelNameContainsFilter,!0)&&e.isArrayOf("string",this.channelUrlsFilter,!0)&&e.isArrayOf("string",this.customTypesFilter,!0)&&e.isTypeOf("string",this.customTypeStartsWithFilter,!0)&&e.isEnumOf(exports.MembershipFilter,this.membershipFilter)&&e.isEnumOf(t.SuperChannelFilter,this.superChannelFilter)&&e.isEnumOf(n.PublicGroupChannelListOrder,this.order)&&e.isTypeOf("string",this.metadataOrderKeyFilter,!0)&&e.isTypeOf("string",this.metadataKey,!0)&&e.isArrayOf("string",this.metadataValues,!0)&&e.isTypeOf("string",this.metadataValueStartsWith,!0)}next(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._validate()){if(this._isLoading)throw e.SendbirdError.queryInProgress;{const t=[];if(this._hasNext){this._isLoading=!0;const{requestQueue:t,dispatcher:n}=e.Vault.of(this._iid),i=new p(e.undefineNullProps(Object.assign(Object.assign({},this),{token:this._token}))),r=yield t.send(i),{channels:s,token:a}=r.as(_);return this._token=a,this._hasNext=!!a,this._isLoading=!1,s}return t}}throw e.SendbirdError.invalidParameters}))}}class C extends r.BaseChannelHandlerParams{constructor(){super(...arguments),this.onUserJoined=e.noop,this.onUserLeft=e.noop,this.onUserReceivedInvitation=e.noop,this.onUserDeclinedInvitation=e.noop,this.onChannelHidden=e.noop,this.onUnreadMemberStatusUpdated=e.noop,this.onUndeliveredMemberStatusUpdated=e.noop,this.onTypingStatusUpdated=e.noop,this.onPollUpdated=e.noop,this.onPollVoted=e.noop,this.onPollDeleted=e.noop,this.onPinnedMessageUpdated=e.noop}}class f extends C{constructor(e={}){super(),Object.keys(e).forEach((t=>{this.hasOwnProperty(t)&&(this[t]=e[t])}))}}class v extends e.APIRequestCommand{constructor(t){const{token:n,limit:i,order:r,reverse:s,channelUrl:a,messageTypeFilter:o,scheduledStatus:l}=t;super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_SCHEDULED_MESSAGES}`,this.params=e.deundefined(e.undefineNullProps({token:n,limit:i,reverse:s,channel_url:a,order:r,message_type:o,status:l}))}}class y extends e.APIResponseCommand{constructor(e,t){super(e,t),this.scheduledMessages=[];const{next:n,scheduled_messages:r}=t;this.token=n,this.scheduledMessages=r.map((t=>i.parseMessagePayload(e,t)))}}class b extends e.BaseListQuery{constructor(t,n){var i,r,s,a,o;super(t,n),this.channelUrl=null,this.order=null,this.reverse=!1,this.scheduledStatus=null,this.messageTypeFilter=e.MessageTypeFilter.ALL,this.channelUrl=null!==(i=n.channelUrl)&&void 0!==i?i:null,this.order=null!==(r=n.order)&&void 0!==r?r:null,this.reverse=null!==(s=n.reverse)&&void 0!==s&&s,this.scheduledStatus=null!==(a=n.scheduledStatus)&&void 0!==a?a:null,this.messageTypeFilter=null!==(o=n.messageTypeFilter)&&void 0!==o?o:e.MessageTypeFilter.ALL}_validate(){return super._validate()&&e.isTypeOf("string",this.channelUrl,!0)&&(e.isEnumOf(n.ScheduledMessageListOrder,this.order)||null===this.order)&&e.isTypeOf("boolean",this.reverse)&&(e.isArrayOf(i.ScheduledStatus,this.scheduledStatus)||null===this.scheduledStatus)&&e.isEnumOf(e.MessageTypeFilter,this.messageTypeFilter)}next(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._validate()){if(this._isLoading)throw e.SendbirdError.queryInProgress;if(this._hasNext){this._isLoading=!0;const{requestQueue:t}=e.Vault.of(this._iid),n=new v(e.undefineNullProps(Object.assign(Object.assign({},this),{token:this._token}))),i=yield t.send(n),{scheduledMessages:r,token:s}=i.as(y);return this._token=s,this._hasNext=!!s,this._isLoading=!1,r}return[]}throw e.SendbirdError.invalidParameters}))}}class S extends e.Module{constructor(){super(...arguments),this.name="groupChannel"}init(e,{sdkState:n,dispatcher:i,sessionManager:r,requestQueue:s,logger:a,onlineDetector:o,cacheContext:l}){super.init(e,{sdkState:n,dispatcher:i,sessionManager:r,requestQueue:s,logger:a,onlineDetector:o,cacheContext:l}),this._manager=new t.GroupChannelManager(e,{sdkState:n,cacheContext:l,dispatcher:i,sessionManager:r,requestQueue:s,logger:a})}createGroupChannelCollection(e={}){return new c(this._iid,e)}createMyGroupChannelListQuery(e={}){return new t.GroupChannelListQuery(this._iid,e)}createPublicGroupChannelListQuery(e={}){return new g(this._iid,e)}createScheduledMessageListQuery(e={}){return new b(this._iid,e)}addGroupChannelHandler(t,n){e.unless(e.isTypeOf("string",t)&&n instanceof f).throw(e.SendbirdError.invalidParameters),this._manager.addHandler(t,n)}removeGroupChannelHandler(t){e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters),this._manager.removeHandler(t)}removeAllGroupChannelHandlers(){this._manager.clearHandler()}buildGroupChannelFromSerializedData(e){return this._manager.buildGroupChannelFromSerializedData(e)}buildGroupChannelListQueryFromSerializedData(e){return this._manager.buildGroupChannelListQueryFromSerializedData(e)}buildMemberFromSerializedData(e){return this._manager.buildMemberFromSerializedData(e)}getChannel(t){return e.__awaiter(this,void 0,void 0,(function*(){return e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters),this._manager.getChannel(t)}))}getChannelWithoutCache(t){return e.__awaiter(this,void 0,void 0,(function*(){return e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters),this._manager.getChannelWithoutCache(t)}))}getMyGroupChannelChangeLogsByToken(n,i={}){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},t.GroupChannelChangeLogsParamsDefault),i);return e.unless(e.isTypeOf("string",n)&&t.validateGroupChannelChangeLogsParams(r)).throw(e.SendbirdError.invalidParameters),yield this._manager.getMyGroupChannelChangeLogs(n,r)}))}getMyGroupChannelChangeLogsByTimestamp(n,i={}){return e.__awaiter(this,void 0,void 0,(function*(){const r=Object.assign(Object.assign({},t.GroupChannelChangeLogsParamsDefault),i);return e.unless(e.isTypeOf("number",n)&&t.validateGroupChannelChangeLogsParams(r)).throw(e.SendbirdError.invalidParameters),yield this._manager.getMyGroupChannelChangeLogs(n,r)}))}getGroupChannelCount(n){return e.__awaiter(this,void 0,void 0,(function*(){const i=Object.assign(Object.assign({},t.GroupChannelCountParamsDefault),n);return e.unless(t.validateGroupChannelCountParams(i)).throw(e.SendbirdError.invalidParameters),this._manager.getGroupChannelCount(i)}))}getUnreadItemCount(t={}){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getUnreadItemCount(t)}))}getTotalUnreadChannelCount(){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getTotalUnreadChannelCount()}))}getTotalUnreadMessageCount(t={}){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getTotalUnreadMessageCount(t)}))}getTotalScheduledMessageCount(t={}){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getTotalScheduledMessageCount(t)}))}getSubscribedTotalUnreadMessageCount(){return this._manager.getSubscribedTotalUnreadMessageCount()}getSubscribedCustomTypeTotalUnreadMessageCount(){return this._manager.getSubscribedCustomTypeTotalUnreadMessageCount()}getSubscribedCustomTypeUnreadMessageCount(e){return this._manager.getSubscribedCustomTypeUnreadMessageCount(e)}createChannel(n={}){return e.__awaiter(this,void 0,void 0,(function*(){const i=Object.assign(Object.assign({},t.GroupChannelCreateParamsDefault),n);return e.unless(t.validateGroupChannelCreateParams(i)).throw(e.SendbirdError.invalidParameters),this._manager.createChannel(i)}))}createDistinctChannelIfNotExist(n={}){return e.__awaiter(this,void 0,void 0,(function*(){const i=Object.assign(Object.assign({},t.GroupChannelCreateParamsDefault),n);return e.unless(t.validateGroupChannelCreateParams(i)).throw(e.SendbirdError.invalidParameters),i&&(i.isDistinct=!0),this.createChannel(i)}))}createChannelWithUserIds(n,i=!1,r,s,a="",o=""){return e.__awaiter(this,void 0,void 0,(function*(){const e=Object.assign(Object.assign({},t.GroupChannelCreateParamsDefault),{invitedUserIds:n,isDistinct:i,name:r,data:a,customType:o});return"string"==typeof s?e.coverUrl=s:e.coverImage=s,this.createChannel(e)}))}markAsReadAll(){return e.__awaiter(this,void 0,void 0,(function*(){this._manager.markAsReadAll()}))}markAsReadWithChannelUrls(t){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.isArrayOf("string",t)).throw(e.SendbirdError.invalidParameters),this._manager.markAsReadWithChannelUrls(t)}))}markAsDelivered(t){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters);const n=yield this.getChannel(t);yield n.markAsDelivered()}))}}exports.MessageEventSource=e.MessageEventSource,Object.defineProperty(exports,"MutedState",{enumerable:!0,get:function(){return e.MutedState}}),Object.defineProperty(exports,"CountPreference",{enumerable:!0,get:function(){return t.CountPreference}}),exports.GroupChannel=t.GroupChannel,exports.GroupChannelEventContext=t.GroupChannelEventContext,exports.GroupChannelEventSource=t.GroupChannelEventSource,exports.GroupChannelFilter=t.GroupChannelFilter,exports.GroupChannelListQuery=t.GroupChannelListQuery,Object.defineProperty(exports,"GroupChannelSearchField",{enumerable:!0,get:function(){return t.GroupChannelSearchField}}),Object.defineProperty(exports,"HiddenChannelFilter",{enumerable:!0,get:function(){return t.HiddenChannelFilter}}),Object.defineProperty(exports,"HiddenState",{enumerable:!0,get:function(){return t.HiddenState}}),exports.Member=t.Member,Object.defineProperty(exports,"MemberListOrder",{enumerable:!0,get:function(){return t.MemberListOrder}}),exports.MemberListQuery=t.MemberListQuery,Object.defineProperty(exports,"MemberState",{enumerable:!0,get:function(){return t.MemberState}}),Object.defineProperty(exports,"MemberStateFilter",{enumerable:!0,get:function(){return t.MemberStateFilter}}),exports.MessageCollection=t.MessageCollection,exports.MessageCollectionInitHandler=t.MessageCollectionInitHandler,Object.defineProperty(exports,"MessageCollectionInitPolicy",{enumerable:!0,get:function(){return t.MessageCollectionInitPolicy}}),exports.MessageEventContext=t.MessageEventContext,Object.defineProperty(exports,"MutedMemberFilter",{enumerable:!0,get:function(){return t.MutedMemberFilter}}),Object.defineProperty(exports,"MyMemberStateFilter",{enumerable:!0,get:function(){return t.MyMemberStateFilter}}),Object.defineProperty(exports,"OperatorFilter",{enumerable:!0,get:function(){return t.OperatorFilter}}),exports.PinnedMessage=t.PinnedMessage,exports.PinnedMessageListQuery=t.PinnedMessageListQuery,Object.defineProperty(exports,"PublicChannelFilter",{enumerable:!0,get:function(){return t.PublicChannelFilter}}),Object.defineProperty(exports,"QueryType",{enumerable:!0,get:function(){return t.QueryType}}),exports.ReadStatus=t.ReadStatus,Object.defineProperty(exports,"SuperChannelFilter",{enumerable:!0,get:function(){return t.SuperChannelFilter}}),Object.defineProperty(exports,"UnreadChannelFilter",{enumerable:!0,get:function(){return t.UnreadChannelFilter}}),Object.defineProperty(exports,"UnreadItemKey",{enumerable:!0,get:function(){return t.UnreadItemKey}}),Object.defineProperty(exports,"GroupChannelListOrder",{enumerable:!0,get:function(){return n.GroupChannelListOrder}}),Object.defineProperty(exports,"PublicGroupChannelListOrder",{enumerable:!0,get:function(){return n.PublicGroupChannelListOrder}}),Object.defineProperty(exports,"ScheduledMessageListOrder",{enumerable:!0,get:function(){return n.ScheduledMessageListOrder}}),exports.MessageFilter=i.MessageFilter,Object.defineProperty(exports,"ScheduledStatus",{enumerable:!0,get:function(){return i.ScheduledStatus}}),exports.GroupChannelCollection=c,exports.GroupChannelHandler=f,exports.GroupChannelModule=S,exports.PublicGroupChannelListQuery=g,exports.ScheduledMessageListQuery=b;
