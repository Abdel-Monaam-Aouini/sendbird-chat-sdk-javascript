"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./lib/__bundle-176459f7.js"),t=require("./lib/__bundle-b71268d3.js"),n=require("./lib/__bundle-b202177a.js"),s=require("./lib/__bundle-f4e33d93.js"),a=require("./lib/__bundle-e85cda00.js"),i=require("./lib/__bundle-678ae2ce.js");require("./lib/__bundle-f6d4722d.js");class o{constructor(e){this.id=e.id,this.name=e.name,this.isDefault=e.is_default}static payloadify(t){return e.deundefined(e.undefineNullProps({id:t.id,name:t.name,is_default:t.isDefault}))}get customType(){return this.isDefault?"*":String(this.id)}}class r extends e.InstancedObject{constructor(e,{sdkState:t,cacheContext:n,channelManager:s}){super(e),this._channels=new Map,this._sdkState=t,this._cacheContext=n,this._channelManager=s}get collection(){const{nestdb:n}=this._cacheContext;return e.unless(!!n).throw(e.SendbirdError.databaseError),n.collection(t.NESTDB_FEEDCHANNEL_COLLECTION_NAME)}get localCacheEnabled(){const{localCacheEnabled:e}=this._cacheContext;return e&&!!this.collection}_serialize(e,t=0){return Object.assign(Object.assign({},e.serialize()),{lastMessageUpdatedAt:e.lastMessage?e.lastMessage.createdAt:0,syncIndex:t})}_deserialize(e){return this._channelManager.buildFeedChannelFromSerializedData(e)}get channels(){return[...this._channels.values()]}isCachedInMemory(e){return this._channels.has(e)}get(t){return e.__awaiter(this,void 0,void 0,(function*(){if(this._channels.has(t))return this._channels.get(t);if(this.localCacheEnabled){const e=yield this.collection.getByKey(t);if(e)return this._channels.set(t,this._deserialize(e)),this._channels.get(t)}}))}fetch({token:n,limit:a=t.DEFAULT_FEED_LIMIT,backward:i=!1,order:o="latest_last_message",borderlineChannelUrl:r}){return e.__awaiter(this,void 0,void 0,(function*(){if(this.localCacheEnabled){const e={where:e=>{if(n&&"latest_last_message"===o){if(!i&&e.lastMessageUpdatedAt>n||i&&e.lastMessageUpdatedAt<n)return!1;if(r&&r===e.url)return!1}return!0},index:s.getFeedChannelIndexBy(o),backward:i},t=yield this.collection.query(e),l=(yield t.fetch({limit:a})).map((e=>this._deserialize(e)));return l.forEach((e=>{this._channels.has(e.url)||this._channels.set(e.url,e)})),l}return[]}))}upsert(t){return e.__awaiter(this,void 0,void 0,(function*(){const n=[];if(t.forEach((t=>{if(this._channels.has(t.url)){const s=this._channels.get(t.url),a=e.deundefined(t);Object.assign(s,a,{_iid:this._iid}),n.push(s)}else this._channels.set(t.url,t),n.push(t)})),this.localCacheEnabled){const e=[];for(const t in n)e.push(this._serialize(n[t],parseInt(t)));yield this.collection.upsertMany(e)}return n}))}remove(t){return e.__awaiter(this,void 0,void 0,(function*(){for(const e of t)this._channels.delete(e),this.localCacheEnabled&&(yield this.collection.remove(e))}))}clear(){return e.__awaiter(this,void 0,void 0,(function*(){this.clearMemoryCache(),this.localCacheEnabled&&(yield this.collection.clear())}))}clearMemoryCache(){this._channels.clear()}}class l{constructor({feedChannelCache:t,notificationMessageCache:s,dispatcher:i}){this._observers=new Map,i.on((i=>e.__awaiter(this,void 0,void 0,(function*(){if(i instanceof n.FeedChannelUpdateEventCommand){const{channels:e,source:n,isWebSocketEventComing:a,data:o}=i,r=e.filter((e=>e instanceof O)),l=yield t.upsert(r);yield Promise.all(r.map((e=>s.markAsReadByTimestamp(e.url,e.myLastRead)))),a||this._broadcastUpdateEvent(l,n,o)}else if(i instanceof n.FeedChannelRemoveEventCommand){const{channelUrls:n,source:a,isWebSocketEventComing:o}=i;yield t.remove(n),yield e.runOrNothing((()=>e.__awaiter(this,void 0,void 0,(function*(){for(const e of n)yield s.removeMessagesOfChannel(e)})))),o||this._broadcastRemoveEvent(n,a)}else i instanceof a.DatabaseOpenCommand&&(yield t.fetch({token:Number.MAX_SAFE_INTEGER,limit:Number.MAX_SAFE_INTEGER}))}))))}_broadcastUpdateEvent(e,t,n){for(const s of this._observers.values())s.onUpdate&&s.onUpdate(e,t,n)}_broadcastRemoveEvent(e,t){for(const n of this._observers.values())n.onRemove&&n.onRemove(e,t)}subscribe(e,t){this._observers.set(e,t)}unsubscribe(e){this._observers.delete(e)}unsubscribeAll(){this._observers.clear()}}const d=!1;class h extends e.APIRequestCommand{constructor(t){super();const{userId:n,token:s,limit:a,includeEmpty:i}=t;this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_USERS}/${encodeURIComponent(n)}/my_group_channels`,this.params=e.deundefined({token:s,limit:a,show_empty:null!=i?i:d,show_read_receipt:!0,show_delivery_receipt:!0,show_member:!0,is_feed_channel:!0,order:"latest_last_message"})}}class c extends e.APIResponseCommand{constructor(e,t){super(e,t),this.channels=[];const{next:n,channels:s,ts:a}=t;this.token=n,this.ts=null!=a?a:0,this.channels=(null!=s?s:[]).map((t=>(t.ts=a,new O(e,t))))}}class u extends e.APIRequestCommand{constructor({channelUrl:t,isInternalCall:n}){super(),this.method=e.APIRequestMethod.GET,this.path=`${n?e.API_PATH_GROUP_CHANNELS_INTERNAL:e.API_PATH_GROUP_CHANNELS}/${encodeURIComponent(t)}`,this.params={show_member:!0,show_read_receipt:!0,show_delivery_receipt:!0,is_feed_channel:!0}}}class _ extends e.APIResponseCommand{constructor(e,t){super(e,t),this.channel=new O(e,t)}}const C={includeEmpty:!0},g=t=>e.isTypeOf("boolean",t.includeEmpty);class m extends e.APIRequestCommand{constructor({userId:t,ts:n,token:s,params:a}){super();const{includeEmpty:i}=Object.assign(Object.assign({},C),a);this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_USERS}/${encodeURIComponent(t)}/my_group_channels/changelogs`,this.params=e.deundefined(e.undefineNullProps({show_delivery_receipt:!0,show_member:!0,show_read_receipt:!0,is_feed_channel:!0,show_empty:i,change_ts:n||null,token:s}))}}class f extends e.APIResponseCommand{constructor(e,t){super(e,t),this.updatedChannels=t.updated.map((t=>new O(e,t))),this.deletedChannelUrls=t.deleted,this.hasMore=t.has_more,this.token=t.next}}class p extends e.APIRequestCommand{constructor(){super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_NOTIFICATIONS}/settings`}}class v extends e.APIResponseCommand{constructor(e,t){super(e,t),this.jsonString=JSON.stringify(t)}}const E=20;class y extends e.APIRequestCommand{constructor(t){const{reverse:n=!1,keys:s,limit:a=E,token:i}=t;super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_NOTIFICATIONS}/templates`,this.params=e.deundefined({token:i,keys:s,limit:a,reverse:n,order:"updated_at",show_ui_template:!0,show_color_variables:!0})}}class b extends e.APIResponseCommand{constructor(t,n){super(t,n);const{next:s,has_more:a=!1}=n,i=e.__rest(n,["next","has_more"]);this.nextToken=s,this.hasMore=a,this.notificationTemplateList={jsonString:JSON.stringify(i)}}}const M={reverse:!1,keys:void 0,limit:20};class w extends e.APIRequestCommand{constructor(t){const{key:n}=t;super(),this.method=e.APIRequestMethod.GET,this.path=`${e.API_PATH_NOTIFICATIONS}/templates/${n}`,this.params=e.deundefined({key:n})}}class T extends e.APIResponseCommand{constructor(e,t){super(e,t),this.jsonString=JSON.stringify(t)}}class N extends e.WebSocketEventCommand{constructor(n,s,a){var i,o,r;super(n,"ADMM",a),this.message=new t.NotificationMessage(n,a);const{sdkState:l}=e.Vault.of(n);this.isMentioned=e.checkIfMentioned(this.message.mentionType,null!==(r=null!==(i=this.message.mentionedUserIds)&&void 0!==i?i:null===(o=this.message.mentionedUsers)||void 0===o?void 0:o.map((e=>e.userId)))&&void 0!==r?r:[],l.userId)}}const A={};class S extends i.BaseChannelManager{get _notificationMessageCache(){return t.NotificationMessageCache.of(this._iid)}constructor(n,s){super(n,Object.assign(Object.assign({},s),{channelType:e.ChannelType.FEED})),this._feedChannelHandlers=new Map,this._feedChannelCache=new r(this._iid,{sdkState:this._sdkState,cacheContext:this._cacheContext,channelManager:this}),this._feedChannelBroadcast=new l({feedChannelCache:this._feedChannelCache,dispatcher:this._dispatcher,notificationMessageCache:t.NotificationMessageCache.of(n)}),this._dispatcher.on((t=>{t instanceof e.WebSocketEventCommand&&this._handleEvent(t)})),A[n]||(A[n]=this)}static of(t){return A[t]||(A[t]=new S(t,e.Vault.of(t))),A[t]}static clear(e){A[e]&&delete A[e]}get handlers(){return[...this._feedChannelHandlers.values()]}buildFeedChannelFromSerializedData(t){const n=e.deserialize(t);return new O(this._iid,O.payloadify(n))}addHandler(e,t){this._feedChannelHandlers.set(e,t)}removeHandler(e){this._feedChannelHandlers.delete(e)}clearHandler(){this._feedChannelHandlers.clear()}getMyFeedChannels(t,n,s){return e.__awaiter(this,void 0,void 0,(function*(){const e=new h(Object.assign(Object.assign({},n),{userId:this._sdkState.userId,token:t,limit:s})),a=yield this._requestQueue.send(e),{channels:i,token:o}=a.as(c);return{channels:i,token:o}}))}getChannel(t,n=!1){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters);try{const e=yield this.getChannelFromCache(t);if(e)return e}catch(e){}return yield this.getChannelWithoutCache(t,n)}))}getChannelFromCache(t){var n;return e.__awaiter(this,void 0,void 0,(function*(){return e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters),null!==(n=yield this._feedChannelCache.get(t))&&void 0!==n?n:null}))}getChannelWithoutCache(t,n=!1){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters);const s=new u({channelUrl:t,isInternalCall:n}),a=yield this._requestQueue.send(s),{channel:i}=a.as(_),[o]=yield this.upsertChannelsToCache([i]);return o}))}getMyFeedChannelChangeLogs(t,s,a=e.CollectionEventSource.REQUEST_CHANNEL_CHANGELOGS){return e.__awaiter(this,void 0,void 0,(function*(){const i=Object.assign(Object.assign({},C),s);e.unless((e.isTypeOf("string",t)||e.isTypeOf("number",t))&&g(i)).throw(e.SendbirdError.invalidParameters);const o=new m(e.undefineNullProps({userId:this._sdkState.userId,ts:"number"==typeof t?t:null,token:"string"==typeof t?t:null,params:i})),r=yield this._requestQueue.send(o),{updatedChannels:l,deletedChannelUrls:d,hasMore:h,token:c}=r.as(f);return l.length>0&&this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:l,source:a})),d.length>0&&this._dispatcher.dispatch(new n.FeedChannelRemoveEventCommand({channelUrls:d,source:a})),{updatedChannels:l,deletedChannelUrls:d,hasMore:h,token:c}}))}getTotalUnreadMessageCount(t){return e.__awaiter(this,void 0,void 0,(function*(){const s=Object.assign(Object.assign({},n.TotalUnreadMessageCountParamsDefault),t);e.unless(n.validateTotalUnreadMessageCountParams(s)).throw(e.SendbirdError.invalidParameters);const{sdkState:a,requestQueue:i}=e.Vault.of(this._iid),o=new n.GetTotalUnreadMessageCountRequestCommand({userId:a.userId,filter:s,includeFeedChannel:!0}),r=yield i.send(o),{unreadFeedCount:l=0}=r.as(n.GetTotalUnreadMessageCountResponseCommand);return l}))}getGlobalNotificationChannelSetting(){return e.__awaiter(this,void 0,void 0,(function*(){const e=new p,t=yield this._requestQueue.send(e),{jsonString:n}=t.as(v);return{jsonString:n}}))}getNotificationTemplateListByToken(t,n={}){return e.__awaiter(this,void 0,void 0,(function*(){const s=Object.assign(Object.assign({},M),n);e.unless(e.isTypeOf("string",t)&&(t=>e.isTypeOf("boolean",t.reverse,!0)&&e.isArrayOf("string",t.keys,!0)&&e.isTypeOf("number",t.limit,!0))(s)).throw(e.SendbirdError.invalidParameters);const a=new y({token:t,keys:s.keys,reverse:s.reverse,limit:s.limit}),i=yield this._requestQueue.send(a),{hasMore:o,nextToken:r,notificationTemplateList:l}=i.as(b);return{hasMore:o,token:r,notificationTemplateList:l}}))}getNotificationTemplate(t){return e.__awaiter(this,void 0,void 0,(function*(){e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters);const n=new w({key:t}),s=yield this._requestQueue.send(n),{jsonString:a}=s.as(T);return{jsonString:a}}))}upsertChannelsToCache(t){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._feedChannelCache.upsert(t)}))}removeChannelsFromCache(t){return e.__awaiter(this,void 0,void 0,(function*(){yield this._feedChannelCache.remove(t)}))}getNotificationMessageFromCache(t){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._notificationMessageCache.get(t)}))}refreshChannel(t,s=!0,a=e.CollectionEventSource.REFRESH_CHANNEL){return e.__awaiter(this,void 0,void 0,(function*(){try{const e=new u({channelUrl:t,isInternalCall:s}),i=yield this._requestQueue.send(e),{channel:o}=i.as(_);if(o.myMemberState===n.MemberState.NONE)this._dispatcher.dispatch(new n.FeedChannelRemoveEventCommand({channelUrls:[o.url],source:a}));else{const e=yield this.upsertChannelsToCache([o]);this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:e,source:a}))}}catch(s){s.code!==e.SendbirdErrorCode.NON_AUTHORIZED&&s.code!==e.SendbirdErrorCode.NOT_FOUND_IN_DATABASE||this._dispatcher.dispatch(new n.FeedChannelRemoveEventCommand({channelUrls:[t],source:a}))}}))}refreshNotificationCollections(){this._dispatcher.dispatch(new s.NotificationCollectionRefreshCommand)}subscribeChannelEvent(e,t){this._feedChannelBroadcast.subscribe(e,t)}unsubscribeChannelEvent(e){this._feedChannelBroadcast.unsubscribe(e)}_handleEvent(s){return e.__awaiter(this,void 0,void 0,(function*(){switch(s.code){case"ADMM":case"BRDM":{const a="ADMM"===s.code||"BRDM"===s.code?s.as(N):null;if(a&&a.message.channelType===this._channelType){const{message:s,isMentioned:i}=a,o=yield this.getChannel(s.channelUrl,!0);o._runIfHandleableWithGroupChannel((a=>{var r;s instanceof t.NotificationMessage&&i&&(null===(r=s.mentionedUsers)||void 0===r||r.forEach((e=>{for(const t of a.members)if(e.userId===t.userId){e.nickname=t.nickname,e.plainProfileUrl=t.plainProfileUrl,e.metaData=t.metaData;break}}))),this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:[o],source:e.CollectionEventSource.EVENT_MESSAGE_RECEIVED})),this._dispatcher.dispatch(new e.MessageUpdateEventCommand({messages:[s],source:e.CollectionEventSource.EVENT_MESSAGE_RECEIVED})),e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){for(const e of this._feedChannelHandlers.values())e.onMessageReceived&&e.onMessageReceived(o,s),i&&e.onMentionReceived&&e.onMentionReceived(o,s)}))))}))}break}case"READ":{const t="READ"===s.code?s.as(n.ReadEventCommand):null;if(t){const{readStatus:s}=t,a=this._feedChannelCache.isCachedInMemory(s.channelUrl),i=yield this.getChannel(s.channelUrl,!0);i._runIfHandleableWithGroupChannel((t=>{a&&t._updateUnreadMemberState(s.reader.userId,s.readAt),s.reader.userId===this._sdkState.userId?a?(t.unreadMessageCount>0||t.unreadMentionCount>0)&&(t._updateUnreadCount(0,0),this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:[i],source:e.CollectionEventSource.EVENT_CHANNEL_READ})),e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){for(const e of this._feedChannelHandlers.values())e.onChannelChanged&&e.onChannelChanged(i)}))))):0!==t.unreadMessageCount&&0!==t.unreadMentionCount||(this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:[i],source:e.CollectionEventSource.EVENT_CHANNEL_READ})),e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){for(const e of this._feedChannelHandlers.values())e.onChannelChanged&&e.onChannelChanged(i)}))))):(this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:[i],source:e.CollectionEventSource.EVENT_CHANNEL_READ})),e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){for(const e of this._feedChannelHandlers.values())e.onUnreadMemberStatusUpdated&&e.onUnreadMemberStatusUpdated(i)})))))}))}break}case"SYEV":{const t="SYEV"===s.code?s.as(i.ChannelEventCommand):null;if(t&&t.event.channelType===this._channelType){const{event:s}=t;switch(s.category){case i.ChannelEventCategory.CHANNEL_DELETED:{const t=yield this.getChannel(s.channelUrl,!0);this._dispatcher.dispatch(new n.FeedChannelRemoveEventCommand({channelUrls:[s.channelUrl],source:e.CollectionEventSource.EVENT_CHANNEL_DELETED})),e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){this._feedChannelHandlers.forEach((e=>{e.onChannelDeleted&&e.onChannelDeleted(t.url,t.channelType)}))}))));break}case i.ChannelEventCategory.CHANNEL_PROP_CHANGED:{const t=yield this.getChannelWithoutCache(s.channelUrl,!0);this._dispatcher.dispatch(new n.FeedChannelUpdateEventCommand({channels:[t],source:e.CollectionEventSource.EVENT_CHANNEL_UPDATED})),e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){this._feedChannelHandlers.forEach((e=>{e.onChannelChanged&&e.onChannelChanged(t)}))}))));break}}}break}}}))}getMessageFromCache(t){var n;return e.__awaiter(this,void 0,void 0,(function*(){return null!==(n=yield this._notificationMessageCache.get(t))&&void 0!==n?n:null}))}getExactlyMatchingMessagesForTokenFromCache(t,n,s){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._notificationMessageCache.fetch({channelUrl:t,token:n,filter:s,exactMatch:!0})}))}getMessagesFromCache(n,s,a,i,o=t.DEFAULT_NOTIFICATION_LIMIT,r=!0){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._notificationMessageCache.fetch({channelUrl:n,token:s,limit:o,filter:i,backward:"next"===a,inclusive:r})}))}}class I extends n.BaseMessageCollection{keyOf(e){return e.notificationId}constructor(t,n){super(t,Object.assign(Object.assign({},n),{channelManager:S.of(t)}));const{connectionManager:a,dispatcher:i}=e.Vault.of(this._iid);this._notificationCollectionEventContext=i.on((t=>{t instanceof s.NotificationCollectionRefreshCommand&&e.sleep(10).then((()=>{a.isConnected||a.isConnecting||this.refresh()}))}))}dispose(){super.dispose(),this._notificationCollectionEventContext.close()}setMessageCollectionHandler(e){this._setBaseMessageCollectionHandler(e)}_postprocessChannelUpdateEvent(e,n){const s=this._messages.filter((n=>n.messageStatus===t.NotificationMessageStatus.SENT&&n.createdAt<=e.myLastRead));if(s.length>0){for(const e of s)e.messageStatus=t.NotificationMessageStatus.READ;this._updateMessagesToView(s,n)}}_addMessagesToView(t,s){const a=this._filterUnderOffsetMessage(t),i=[],o=[];for(const t of a)if(s===e.CollectionEventSource.SYNC_MESSAGE_FILL){if(n.indexOfMessage(this._messages,t)<0){const e=n.placeOfMessage(this._messages,t);this._messages.splice(e,0,t),i.push(t)}}else{const e=n.indexOfMessage(this._messages,t);if(e<0){const e=n.placeOfMessage(this._messages,t);this._messages.splice(e,0,t),i.push(t)}else this._messages[e]=t,o.push(t)}e.shouldGiveEvent(s)&&e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){var e,t,n,a;const r=this._createMessageEventContext(s);i.length>0&&(null===(t=null===(e=this._handler)||void 0===e?void 0:e.onMessagesAdded)||void 0===t||t.call(e,r,this.channel,i)),o.length>0&&(null===(a=null===(n=this._handler)||void 0===n?void 0:n.onMessagesUpdated)||void 0===a||a.call(n,r,this.channel,o))}))))}_updateMessagesToView(t,s){const a=[];for(const e of t){const t=n.indexOfMessage(this._messages,e);t>=0&&(a.push(e),this._messages[t]=e)}return e.shouldGiveEvent(s)&&e.runAsCallback((()=>e.__awaiter(this,void 0,void 0,(function*(){var e,t;const n=this._createMessageEventContext(s);a.length>0&&(null===(t=null===(e=this._handler)||void 0===e?void 0:e.onMessagesUpdated)||void 0===t||t.call(e,n,this.channel,a))})))),a}refresh(){return e.__awaiter(this,void 0,void 0,(function*(){yield this._activate()}))}}class O extends t.BaseChannel{static payloadify(e){var s;return Object.assign(Object.assign({},n.GroupChannel.payloadify(null!==(s=e._groupChannel)&&void 0!==s?s:e)),{is_category_filter_enabled:e.isCategoryFilterEnabled,is_template_label_enabled:e.isTemplateLabelEnabled,categories:e.notificationCategories.map((e=>o.payloadify(e))),last_message:e.lastMessage?t.NotificationMessage.payloadify(e.lastMessage):null})}constructor(s,a){var i,r;super(s,a),this.channelType=e.ChannelType.FEED,this._groupChannel=new n.GroupChannel(s,a),this.isCategoryFilterEnabled=null!==(i=a.is_category_filter_enabled)&&void 0!==i&&i,this.isTemplateLabelEnabled=null===(r=a.is_template_label_enabled)||void 0===r||r,this.notificationCategories=a.categories?a.categories.map((e=>new o(e))):[],this.lastMessage=a.last_message?t.parseMessagePayload(this._iid,Object.assign({channel_type:this.channelType},a.last_message)):null}get groupChannel(){return this._groupChannel}get url(){return this._groupChannel.url}get name(){return this._groupChannel.name}set name(e){this._groupChannel.name=e}get createdAt(){return this._groupChannel.createdAt}get members(){return this._groupChannel.members}get memberCount(){return this._groupChannel.memberCount}get myMemberState(){return this._groupChannel.myMemberState}get myLastRead(){return this._groupChannel.myLastRead}get unreadMessageCount(){return this._groupChannel.unreadMessageCount}serialize(){return Object.assign(Object.assign({},this._groupChannel.serialize()),{notificationCategories:this.notificationCategories,lastMessage:this.lastMessage})}refresh(){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._groupChannel._refresh(!0),this}))}markAsRead(){return e.__awaiter(this,void 0,void 0,(function*(){const{sdkState:t,dispatcher:s,requestQueue:a}=e.Vault.of(this._iid),i=new n.ReadAPIRequestCommand({userId:t.userId,channelUrl:this.url,channelType:e.ChannelType.FEED}),o=yield a.send(i),{readAt:r}=o.as(n.ReadAPIResponseCommand);if(this._groupChannel._updateUnreadMemberState(t.userId,r),this._groupChannel.unreadMessageCount>0||this._groupChannel.unreadMentionCount>0){this._groupChannel._updateUnreadCount(0,0);S.of(this._iid).handlers.map((e=>{e.onChannelChanged&&e.onChannelChanged(this)}))}s.dispatch(new n.FeedChannelUpdateEventCommand({channels:[this],source:e.CollectionEventSource.EVENT_CHANNEL_READ}))}))}markAsReadBy(s){return e.__awaiter(this,void 0,void 0,(function*(){const a=S.of(this._iid),i=(yield Promise.all(s.map((e=>a.getNotificationMessageFromCache(e))))).filter((e=>!e||e.messageStatus===t.NotificationMessageStatus.SENT));if(i.length>0){const{sdkState:t,dispatcher:s,requestQueue:a}=e.Vault.of(this._iid),o=new n.ReadByMessageIdAPIRequestCommand({userId:t.userId,channelUrl:this.url,channelType:e.ChannelType.FEED,notificationIds:i}),r=yield a.send(o),{unreadMessageCount:l}=r.as(n.ReadAPIResponseCommand);if(this._groupChannel.unreadMessageCount!==l){this._groupChannel._updateUnreadCount(l,0);S.of(this._iid).handlers.map((e=>{e.onChannelChanged&&e.onChannelChanged(this)}))}s.dispatch(new n.FeedChannelUpdateEventCommand({channels:[this],source:e.CollectionEventSource.EVENT_CHANNEL_READ}))}}))}logImpression(t){return e.__awaiter(this,void 0,void 0,(function*(){const{statLogCollector:n}=e.Vault.of(this._iid);if(t.length<=30){const s=S.of(this._iid),a=yield Promise.all(t.map((e=>s.getNotificationMessageFromCache(e))));for(const t of a)t&&t.notificationId&&t.notificationData&&n.put(new e.StatLog({type:e.StatType.NOTIFICATION,ts:Date.now(),data:{action:"impression",template_key:t.notificationData.templateKey,channel_url:this.url,message_id:t.notificationId,tags:t.notificationData.tags,source:"notification",message_ts:t.createdAt}}));return!0}return!1}))}createNotificationCollection(e={}){return new I(this._iid,Object.assign({channel:this},e))}}class k{constructor(){this.onChannelChanged=e.noop,this.onChannelDeleted=e.noop,this.onUnreadMemberStatusUpdated=e.noop,this.onMessageReceived=e.noop,this.onMentionReceived=e.noop}}class R extends k{constructor(e={}){super(),Object.keys(e).forEach((t=>{Object.prototype.hasOwnProperty.call(this,t)&&(this[t]=e[t])}))}}class U extends e.BaseListQuery{constructor(e,t){var n;super(e,t),this.includeEmpty=d,this.includeEmpty=null!==(n=t.includeEmpty)&&void 0!==n?n:d}_validate(){return super._validate()&&e.isTypeOf("boolean",this.includeEmpty)}next(){return e.__awaiter(this,void 0,void 0,(function*(){if(this._validate()){if(this._isLoading)throw e.SendbirdError.queryInProgress;if(this._hasNext){this._isLoading=!0;const t=S.of(this._iid),n=e.undefineNullProps(Object.assign({},this)),{channels:s,token:a}=yield t.getMyFeedChannels(this._token,n,this.limit);return this._token=a,this._hasNext=!!a,this._isLoading=!1,s}return[]}throw e.SendbirdError.invalidParameters}))}}class P extends e.Module{constructor(){super(...arguments),this.name="feedChannel"}init(e,t){super.init(e,t),this._manager=new S(e,t)}createMyFeedChannelListQuery(e={}){return new U(this._iid,e)}addFeedChannelHandler(t,n){e.unless(e.isTypeOf("string",t)&&n instanceof R).throw(e.SendbirdError.invalidParameters),this._manager.addHandler(t,n)}removeFeedChannelHandler(t){e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters),this._manager.removeHandler(t)}removeAllFeedChannelHandlers(){this._manager.clearHandler()}getChannel(t){return e.__awaiter(this,void 0,void 0,(function*(){return e.unless(e.isTypeOf("string",t)).throw(e.SendbirdError.invalidParameters),this._manager.getChannel(t)}))}getMyFeedChannelChangeLogsByTimestamp(t,n={}){return e.__awaiter(this,void 0,void 0,(function*(){const s=Object.assign(Object.assign({},C),n);return e.unless(e.isTypeOf("number",t)&&g(s)).throw(e.SendbirdError.invalidParameters),yield this._manager.getMyFeedChannelChangeLogs(t,s)}))}getMyFeedChannelChangeLogsByToken(t,n={}){return e.__awaiter(this,void 0,void 0,(function*(){const s=Object.assign(Object.assign({},C),n);return e.unless(e.isTypeOf("string",t)&&g(s)).throw(e.SendbirdError.invalidParameters),yield this._manager.getMyFeedChannelChangeLogs(t,s)}))}getTotalUnreadMessageCount(t={}){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getTotalUnreadMessageCount(t)}))}getGlobalNotificationChannelSetting(){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getGlobalNotificationChannelSetting()}))}getNotificationTemplateListByToken(t,n={}){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getNotificationTemplateListByToken(t,n)}))}getNotificationTemplate(t){return e.__awaiter(this,void 0,void 0,(function*(){return yield this._manager.getNotificationTemplate(t)}))}refreshNotificationCollections(){this._manager.refreshNotificationCollections()}}exports.NotificationMessage=t.NotificationMessage,Object.defineProperty(exports,"NotificationMessageStatus",{enumerable:!0,get:function(){return t.NotificationMessageStatus}}),exports.FeedChannelEventContext=n.FeedChannelEventContext,exports.NotificationEventContext=n.NotificationEventContext,exports.FeedChannel=O,exports.FeedChannelHandler=R,exports.FeedChannelListQuery=U,exports.FeedChannelModule=P,exports.NotificationCategory=o,exports.NotificationCollection=I;
