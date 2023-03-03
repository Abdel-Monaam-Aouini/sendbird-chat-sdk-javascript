import{C as n,_ as e,Y as t,U as a,aY as s,V as r,a9 as E,aa as N,ab as o,aZ as i,a_ as u,s as l}from"./__bundle-2c42a88c.js";import{K as _}from"./__bundle-b7a784a9.js";var C;!function(n){n[n.NONE=0]="NONE",n[n.CHANNEL_ENTER=10102]="CHANNEL_ENTER",n[n.CHANNEL_EXIT=10103]="CHANNEL_EXIT",n[n.USER_CHANNEL_MUTE=10201]="USER_CHANNEL_MUTE",n[n.USER_CHANNEL_UNMUTE=10200]="USER_CHANNEL_UNMUTE",n[n.USER_CHANNEL_BAN=10601]="USER_CHANNEL_BAN",n[n.USER_CHANNEL_UNBAN=10600]="USER_CHANNEL_UNBAN",n[n.CHANNEL_FREEZE=10701]="CHANNEL_FREEZE",n[n.CHANNEL_UNFREEZE=10700]="CHANNEL_UNFREEZE",n[n.TYPING_START=10900]="TYPING_START",n[n.TYPING_END=10901]="TYPING_END",n[n.CHANNEL_JOIN=1e4]="CHANNEL_JOIN",n[n.CHANNEL_LEAVE=10001]="CHANNEL_LEAVE",n[n.CHANNEL_OPERATOR_UPDATE=10002]="CHANNEL_OPERATOR_UPDATE",n[n.CHANNEL_INVITE=10020]="CHANNEL_INVITE",n[n.CHANNEL_ACCEPT_INVITE=10021]="CHANNEL_ACCEPT_INVITE",n[n.CHANNEL_DECLINE_INVITE=10022]="CHANNEL_DECLINE_INVITE",n[n.CHANNEL_PROP_CHANGED=11e3]="CHANNEL_PROP_CHANGED",n[n.CHANNEL_DELETED=12e3]="CHANNEL_DELETED",n[n.CHANNEL_META_DATA_CHANGED=11100]="CHANNEL_META_DATA_CHANGED",n[n.CHANNEL_META_COUNTERS_CHANGED=11200]="CHANNEL_META_COUNTERS_CHANGED",n[n.CHANNEL_HIDE=13e3]="CHANNEL_HIDE",n[n.CHANNEL_UNHIDE=13001]="CHANNEL_UNHIDE",n[n.PINNED_MESSAGE_CHANGED=11300]="PINNED_MESSAGE_CHANGED"}(C||(C={}));var h=function(){function e(n){this.channelUrl=n.channel_url,this.channelType=n.channel_type,this.category=n.cat,this.data=n.data,this.ts=n.ts}return Object.defineProperty(e.prototype,"isGroupChannelEvent",{get:function(){return this.channelType===n.GROUP},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpenChannelEvent",{get:function(){return this.channelType===n.OPEN},enumerable:!1,configurable:!0}),e}(),d=function(n){function t(e,t,a){var s=n.call(this,e,"SYEV",a)||this;return s.event=new h(a),s}return e(t,n),t}(t),A=function(n){function t(e,t,s){var r=n.call(this,e,t,s)||this,E=s.data.operators,N=void 0===E?[]:E;return r.operators=N.map((function(n){return new a(r._iid,n)})),r}return e(t,n),t}(d),c=function(n){function t(e,t,a){var s=n.call(this,e,"MCNT",a)||this;return s.groupChannelMemberCounts=a.group_channels.map((function(n){return{channelUrl:n.channel_url,memberCount:n.member_count,joinedMemberCount:n.joined_member_count,updatedAt:n.ts}})),s.openChannelMemberCounts=a.open_channels.map((function(n){return{channelUrl:n.channel_url,participantCount:n.participant_count,updatedAt:n.ts}})),s}return e(t,n),t}(t),p=function(n){function t(e,t,a){var N,o,i,u=this;(u=n.call(this,e,"ADMM",a)||this).message=new s(e,a);var l=r.of(e).sdkState;return u.isMentioned=E(u.message.mentionType,null!==(N=u.message.mentionedUserIds)&&void 0!==N?N:null===(o=u.message.mentionedUsers)||void 0===o?void 0:o.map((function(n){return n.userId})),l.userId),u.forceUpdateLastMessage=null!==(i=a.force_update_last_message)&&void 0!==i&&i,u}return e(t,n),t}(t),H=function(n){function t(e,t,a){var E,o,i,u,l,_,C=this;(C=n.call(this,e,"AEDI",a)||this).message=new s(e,a);var h=r.of(e).sdkState;return C.mentionCountChange=N({mentionType:null!==(o=null===(E=a.old_values)||void 0===E?void 0:E.mention_type)&&void 0!==o?o:null,mentionedUserIds:null!==(u=null===(i=a.old_values)||void 0===i?void 0:i.mentioned_user_ids)&&void 0!==u?u:[]},{mentionType:C.message.mentionType,mentionedUserIds:null!==(l=C.message.mentionedUserIds)&&void 0!==l?l:null===(_=C.message.mentionedUsers)||void 0===_?void 0:_.map((function(n){return n.userId}))},h.userId),C}return e(t,n),t}(t),T=function(n){function t(e,t,a){var s=n.call(this,e,"MRCT",a)||this;return s.channelUrl=a.channel_url,s.channelType=a.channel_type,s.event=new o(a),s}return e(t,n),t}(t),U=function(n){function t(e,t,a){var s=n.call(this,e,"MTHD",a)||this;return s.event=new i(e,a),s}return e(t,n),t}(t),L=function(n){function t(e,t,a){var s=n.call(this,e,"PEDI",a)||this;return s.event=null,s.status=null,s.channelUrl=null,s.channelType=null,s.event=new _(e,a),s.status=u(a.poll.status)||a.poll.status,s.channelUrl=a.channel_url,s.channelType=a.channel_type,s}return e(t,n),t}(t),m=function(){this.onUserMuted=l,this.onUserUnmuted=l,this.onUserBanned=l,this.onUserUnbanned=l,this.onChannelChanged=l,this.onChannelDeleted=l,this.onChannelFrozen=l,this.onChannelUnfrozen=l,this.onOperatorUpdated=l,this.onChannelMemberCountChanged=l,this.onMetaDataCreated=l,this.onMetaDataUpdated=l,this.onMetaDataDeleted=l,this.onMetaCounterCreated=l,this.onMetaCounterUpdated=l,this.onMetaCounterDeleted=l,this.onMessageReceived=l,this.onMessageUpdated=l,this.onMessageDeleted=l,this.onMentionReceived=l,this.onReactionUpdated=l,this.onThreadInfoUpdated=l};export{p as A,m as B,d as C,c as M,A as O,L as P,T as R,U as T,H as U,C as a};
