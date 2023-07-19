"use strict";var e,n=require("./__bundle-fc47e3f4.js"),t=require("./__bundle-443a5610.js"),o=require("./__bundle-434e9499.js");exports.ChannelEventCategory=void 0,(e=exports.ChannelEventCategory||(exports.ChannelEventCategory={}))[e.NONE=0]="NONE",e[e.CHANNEL_ENTER=10102]="CHANNEL_ENTER",e[e.CHANNEL_EXIT=10103]="CHANNEL_EXIT",e[e.USER_CHANNEL_MUTE=10201]="USER_CHANNEL_MUTE",e[e.USER_CHANNEL_UNMUTE=10200]="USER_CHANNEL_UNMUTE",e[e.USER_CHANNEL_BAN=10601]="USER_CHANNEL_BAN",e[e.USER_CHANNEL_UNBAN=10600]="USER_CHANNEL_UNBAN",e[e.CHANNEL_FREEZE=10701]="CHANNEL_FREEZE",e[e.CHANNEL_UNFREEZE=10700]="CHANNEL_UNFREEZE",e[e.TYPING_START=10900]="TYPING_START",e[e.TYPING_END=10901]="TYPING_END",e[e.CHANNEL_JOIN=1e4]="CHANNEL_JOIN",e[e.CHANNEL_LEAVE=10001]="CHANNEL_LEAVE",e[e.CHANNEL_OPERATOR_UPDATE=10002]="CHANNEL_OPERATOR_UPDATE",e[e.CHANNEL_INVITE=10020]="CHANNEL_INVITE",e[e.CHANNEL_ACCEPT_INVITE=10021]="CHANNEL_ACCEPT_INVITE",e[e.CHANNEL_DECLINE_INVITE=10022]="CHANNEL_DECLINE_INVITE",e[e.CHANNEL_PROP_CHANGED=11e3]="CHANNEL_PROP_CHANGED",e[e.CHANNEL_DELETED=12e3]="CHANNEL_DELETED",e[e.CHANNEL_META_DATA_CHANGED=11100]="CHANNEL_META_DATA_CHANGED",e[e.CHANNEL_META_COUNTERS_CHANGED=11200]="CHANNEL_META_COUNTERS_CHANGED",e[e.CHANNEL_HIDE=13e3]="CHANNEL_HIDE",e[e.CHANNEL_UNHIDE=13001]="CHANNEL_UNHIDE",e[e.PINNED_MESSAGE_CHANGED=11300]="PINNED_MESSAGE_CHANGED";class s{constructor(e){var n;this.channelUrl=e.channel_url,this.channelType=e.channel_type,this.category=e.cat,this.data=null!==(n=e.data)&&void 0!==n?n:{},this.ts=e.ts}get isGroupChannelEvent(){return this.channelType===n.ChannelType.GROUP}get isOpenChannelEvent(){return this.channelType===n.ChannelType.OPEN}}class a extends n.WebSocketEventCommand{constructor(e,n,t){super(e,"SYEV",t),this.event=new s(t)}}class E extends n.WebSocketEventCommand{constructor(e,n,t){super(e,"MCNT",t),this.groupChannelMemberCounts=t.group_channels.map((e=>({channelUrl:e.channel_url,memberCount:e.member_count,joinedMemberCount:e.joined_member_count,updatedAt:e.ts}))),this.openChannelMemberCounts=t.open_channels.map((e=>({channelUrl:e.channel_url,participantCount:e.participant_count,updatedAt:e.ts})))}}class N extends n.WebSocketEventCommand{constructor(e,o,s){var a,E,N,r;super(e,"ADMM",s),this.message=new t.AdminMessage(e,s);const{sdkState:d}=n.Vault.of(e);this.isMentioned=n.checkIfMentioned(this.message.mentionType,null!==(N=null!==(a=this.message.mentionedUserIds)&&void 0!==a?a:null===(E=this.message.mentionedUsers)||void 0===E?void 0:E.map((e=>e.userId)))&&void 0!==N?N:[],d.userId),this.forceUpdateLastMessage=null!==(r=s.force_update_last_message)&&void 0!==r&&r}}class r extends n.WebSocketEventCommand{constructor(e,o,s){var a,E,N,r,d;super(e,"AEDI",s),this.message=new t.AdminMessage(e,s);const{sdkState:i}=n.Vault.of(e);this.mentionCountChange=n.calculateMentionCountChange({mentionType:null===(a=s.old_values)||void 0===a?void 0:a.mention_type,mentionedUserIds:null!==(N=null===(E=s.old_values)||void 0===E?void 0:E.mentioned_user_ids)&&void 0!==N?N:[]},n.undefineNullProps({mentionType:this.message.mentionType,mentionedUserIds:null!==(r=this.message.mentionedUserIds)&&void 0!==r?r:null===(d=this.message.mentionedUsers)||void 0===d?void 0:d.map((e=>e.userId))}),i.userId)}}class d extends n.WebSocketEventCommand{constructor(e,n,o){super(e,"MRCT",o),this.channelUrl=o.channel_url,this.channelType=o.channel_type,this.event=new t.ReactionEvent(o)}}class i extends n.WebSocketEventCommand{constructor(e,n,o){super(e,"MTHD",o),this.event=new t.ThreadInfoUpdateEvent(e,o)}}class C extends n.WebSocketEventCommand{constructor(e,t,s){super(e,"PEDI",s),this.event=new o.PollUpdateEvent(e,s),this.status=n.parsePollStatusPayload(s.poll.status)||s.poll.status,this.channelUrl=s.channel_url,this.channelType=s.channel_type}}exports.AdminMessageEventCommand=N,exports.BaseChannelHandlerParams=class{constructor(){this.onUserMuted=n.noop,this.onUserUnmuted=n.noop,this.onUserBanned=n.noop,this.onUserUnbanned=n.noop,this.onChannelChanged=n.noop,this.onChannelDeleted=n.noop,this.onChannelFrozen=n.noop,this.onChannelUnfrozen=n.noop,this.onOperatorUpdated=n.noop,this.onChannelMemberCountChanged=n.noop,this.onMetaDataCreated=n.noop,this.onMetaDataUpdated=n.noop,this.onMetaDataDeleted=n.noop,this.onMetaCounterCreated=n.noop,this.onMetaCounterUpdated=n.noop,this.onMetaCounterDeleted=n.noop,this.onMessageReceived=n.noop,this.onMessageUpdated=n.noop,this.onMessageDeleted=n.noop,this.onMentionReceived=n.noop,this.onReactionUpdated=n.noop,this.onThreadInfoUpdated=n.noop}},exports.ChannelEventCommand=a,exports.MemberCountUpdateEventCommand=E,exports.OperatorUpdateEventCommand=class extends a{constructor(e,t,o){super(e,t,o);const{operators:s=[]}=o.data;this.operators=s.map((e=>new n.User(this._iid,e)))}},exports.PollUpdateEventCommand=C,exports.ReactionEventCommand=d,exports.ThreadInfoUpdateEventCommand=i,exports.UpdateAdminMessageEventCommand=r;
