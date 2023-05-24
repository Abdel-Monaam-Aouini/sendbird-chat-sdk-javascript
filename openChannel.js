import{_ as n,b as e,c as t,$ as r,m as a,a as i,i as s,A as o,aO as u,aP as l,f as c,h,e as d,a9 as p,U as f,W as v,w as C,x as _,J as y,t as m,aB as E,y as g,aC as U,ah as w,aE as T,O as b,s as N,S as M,g as P,aI as H,al as O,V as x,a2 as I,n as D,B as A,am as L}from"./lib/__bundle-00a9dc54.js";import{p as R,q as k,r as F,u as S,t as q,w as Q,x as z,P as K,y as j,z as B,A as V,C as W,f as G}from"./lib/__bundle-db32c6df.js";import{C as X,a as Y,O as Z,P as $,M as J,T as nn,R as en,U as tn,A as rn,B as an}from"./lib/__bundle-19292154.js";import{k as sn,b as on}from"./lib/__bundle-e1cf3bb9.js";import{P as un}from"./lib/__bundle-0e217320.js";import"./lib/__bundle-e32fa84f.js";var ln=function(r){function a(){var n=null!==r&&r.apply(this,arguments)||this;return n._channels=new Map,n._enteredChannelUrls=[],n}return n(a,r),Object.defineProperty(a.prototype,"enteredChannels",{get:function(){var n=this;return this._enteredChannelUrls.map((function(e){return n._channels.get(e)})).filter((function(n){return null!==n}))},enumerable:!1,configurable:!0}),a.prototype.isEnteredChannel=function(n){return this._enteredChannelUrls.includes(n)},a.prototype.enter=function(n){this._enteredChannelUrls.indexOf(n)<0&&this._enteredChannelUrls.push(n)},a.prototype.exit=function(n){var e=this._enteredChannelUrls.indexOf(n);e>=0&&this._enteredChannelUrls.splice(e,1)},a.prototype.exitAll=function(){this._enteredChannelUrls=[]},a.prototype.get=function(n){var r;return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,null!==(r=this._channels.get(n))&&void 0!==r?r:null]}))}))},a.prototype.upsert=function(n){return e(this,void 0,void 0,(function(){var e,r=this;return t(this,(function(t){return e=[],n.forEach((function(n){if(r._channels.has(n.url)){var t=r._channels.get(n.url);Object.assign(t,n),e.push(t)}else r._channels.set(n.url,n),e.push(n)})),[2,e]}))}))},a.prototype.remove=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return this._channels.delete(n),this.exit(n),[2]}))}))},a.prototype.clear=function(){return e(this,void 0,void 0,(function(){return t(this,(function(n){return this._channels.clear(),this._enteredChannelUrls=[],[2]}))}))},a}(r),cn={channelUrl:null,name:null,coverUrlOrImage:null,data:null,customType:null,operatorUserIds:null,isEphemeral:null},hn=function(e){function t(n){var t=n.channelUrl,r=n.isInternalCall,a=e.call(this)||this;return a.method=o.GET,a.path="".concat(r?u:l,"/").concat(encodeURIComponent(t)),a}return n(t,e),t}(c),dn=function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=null,r.channel=new Mn(n,t),r}return n(t,e),t}(h),pn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.coverUrlOrImage,u=n.name,c=n.data,h=n.customType,p=n.operatorUserIds,f=n.isEphemeral;return(t=e.call(this)||this).method=o.POST,t.path=l,t.params=d({channel_url:r,cover_url:i("string",a)?a:null,cover_file:s(a)?a:null,name:u,data:c,custom_type:h,operators:p,is_ephemeral:f}),t}return n(t,e),t}(c);!function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=new Mn(n,t),r}n(t,e)}(h);var fn=function(e){function t(n){var t=n.channelUrl;return e.call(this,{code:"ENTR",payload:{channel_url:t},ackRequired:!0})||this}return n(t,e),t}(p),vn=function(e){function t(n,t,r){var a,i,s=this;return s=e.call(this,n,"SYEV",r)||this,r.data&&(s.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,s.user=new f(n,r.data),s.ts=null!==(i=r.data.edge_ts)&&void 0!==i?i:0),s}return n(t,e),t}(X),Cn=function(e){function t(n){var t=n.channelUrl;return e.call(this,{code:"EXIT",payload:{channel_url:t},ackRequired:!0})||this}return n(t,e),t}(p),_n=function(e){function t(n,t,r){var a,i,s=this;return s=e.call(this,n,"EXIT",r)||this,r.data&&(s.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,s.user=new f(n,r.data),s.ts=null!==(i=r.data.edge_ts)&&void 0!==i?i:0),s}return n(t,e),t}(X),yn={},mn=function(){function n(n,e){var t=e.sdkState,r=e.dispatcher,a=e.requestQueue,i=this;return yn[n]||(this._iid=n,this._sdkState=t,this._requestQueue=a,this._dispatcher=r,this._openChannelCache=new ln(n),this._openChannelHandlers=new Map,this._dispatcher.on((function(n){var e,t;if(n instanceof v)i._handleEvent(n);else if(n instanceof C&&n.stateType===_.CONNECTED){var r=i._openChannelCache.enteredChannels;try{for(var a=y(r),s=a.next();!s.done;s=a.next()){s.value.enter()}}catch(n){e={error:n}}finally{try{s&&!s.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}}})),yn[n]=this),yn[n]}return n.of=function(n){return yn[n]},n.prototype.buildOpenChannelFromSerializedData=function(n){var e=m(n);return new Mn(this._iid,Mn.payloadify(e))},n.prototype.getChannelFromCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,this._openChannelCache.get(n)];case 1:return[2,e.sent()]}}))}))},n.prototype.upsertChannelsToCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,this._openChannelCache.upsert(n)];case 1:return[2,e.sent()]}}))}))},n.prototype.removeChannelsFromCache=function(n){return e(this,void 0,void 0,(function(){var e,r,a,i,s,o;return t(this,(function(t){switch(t.label){case 0:t.trys.push([0,5,6,7]),e=y(n),r=e.next(),t.label=1;case 1:return r.done?[3,4]:(a=r.value,[4,this._openChannelCache.remove(a)]);case 2:t.sent(),t.label=3;case 3:return r=e.next(),[3,1];case 4:return[3,7];case 5:return i=t.sent(),s={error:i},[3,7];case 6:try{r&&!r.done&&(o=e.return)&&o.call(e)}finally{if(s)throw s.error}return[7];case 7:return[2]}}))}))},n.prototype.setEnteredToCache=function(n){this._openChannelCache.enter(n.url)},n.prototype.setExitedToCache=function(n){this._openChannelCache.exit(n.url)},n.prototype._handleEvent=function(n){return e(this,void 0,void 0,(function(){var r,a,i,s,o,u,l,c,h,d,p,f,v,C,_,m,N,M,P,O,x,I,D,A,L,G,an,on,un,ln,cn,hn,dn,pn,fn,Cn,yn,mn,En,gn,Un,wn,Tn,bn,Nn,Mn,Pn,Hn,On,xn,In,Dn,An,Ln,Rn,kn,Fn,Sn,qn,Qn,zn,Kn,jn,Bn,Vn,Wn,Gn,Xn,Yn=this;return t(this,(function(Zn){switch(Zn.label){case 0:switch(Zn.trys.push([0,55,,56]),n.code){case"MESG":case"FILE":case"ADMM":case"BRDM":return[3,1];case"MEDI":case"FEDI":case"AEDI":return[3,4];case"DELM":return[3,7];case"MRCT":return[3,10];case"MTHD":return[3,13];case"MCNT":return[3,16];case"PEDI":return[3,27];case"VOTE":return[3,29];case"SYEV":return[3,31]}return[3,54];case 1:return s=null,"MESG"===n.code?s=n.as(W):"FILE"===n.code?s=n.as(sn):"ADMM"!==n.code&&"BRDM"!=n.code||(s=n.as(rn)),s?(r=s.message,a=s.isMentioned,r.channelType!==b.OPEN?[3,3]:[4,this.getChannel(r.channelUrl,!0)]):[3,3];case 2:i=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,s,o,u;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())s=e.value,this._openChannelCache.isEnteredChannel(i.url)&&(s.onMessageReceived(i,r),a&&s.onMentionReceived(i,r))}catch(n){o={error:n}}finally{try{e&&!e.done&&(u=n.return)&&u.call(n)}finally{if(o)throw o.error}}return[2]}))}))})),Zn.label=3;case 3:return[3,54];case 4:return s=null,"MEDI"===n.code?s=n.as(B):"FEDI"===n.code?s=n.as(V):"AEDI"===n.code&&(s=n.as(tn)),s?(o=s.message,u=s.mentionCountChange,o.channelType!==b.OPEN?[3,6]:[4,this.getChannel(o.channelUrl,!0)]):[3,6];case 5:l=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(l.url)&&(r.onMessageUpdated(l,o),u>0&&r.onMentionReceived(l,o))}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),Zn.label=6;case 6:return[3,54];case 7:return c=n.as(j),cn=c.channelUrl,hn=c.channelType,h=c.messageId,hn!==b.OPEN?[3,9]:[4,this.getChannel(cn,!0)];case 8:d=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(d.url)&&r.onMessageDeleted(d,h)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),Zn.label=9;case 9:return[3,54];case 10:return p=n.as(en),cn=p.channelUrl,hn=p.channelType,f=p.event,hn!==b.OPEN?[3,12]:[4,this.getChannel(cn,!0)];case 11:v=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(v.url)&&r.onReactionUpdated(v,f)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),Zn.label=12;case 12:return[3,54];case 13:return(C=n.as(nn).event).channelType!==b.OPEN?[3,15]:[4,this.getChannel(C.channelUrl,!0)];case 14:_=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(_.url)&&r.onThreadInfoUpdated(_,C)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),Zn.label=15;case 15:return[3,54];case 16:m=n.as(J).openChannelMemberCounts,N=[],Zn.label=17;case 17:Zn.trys.push([17,22,23,24]),M=y(m),P=M.next(),Zn.label=18;case 18:return P.done?[3,21]:(O=P.value,cn=O.channelUrl,Un=O.participantCount,x=O.updatedAt,[4,this.getChannelFromCache(cn)]);case 19:(I=Zn.sent())&&I._updateParticipantCount(Un,x)&&N.push(I),Zn.label=20;case 20:return P=M.next(),[3,18];case 21:return[3,24];case 22:return D=Zn.sent(),Gn={error:D},[3,24];case 23:try{P&&!P.done&&(Xn=M.return)&&Xn.call(M)}finally{if(Gn)throw Gn.error}return[7];case 24:return N.length>0?[4,this.upsertChannelsToCache(N)]:[3,26];case 25:A=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onChannelMemberCountChanged(A)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))})),Zn.label=26;case 26:return[3,54];case 27:return L=n.as($),G=L.event,an=L.status,cn=L.channelUrl,hn=L.channelType,cn&&hn?[4,this.getChannel(cn,!0)]:[3,54];case 28:return on=Zn.sent(),this._dispatcher.dispatch(new T({event:G,source:w.EVENT_POLL_UPDATED})),g(an===H?function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onPollDeleted(on,G.pollId)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))}:function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onPollUpdated(on,G)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))}),[3,54];case 29:return un=n.as(K),ln=un.event,cn=un.channelUrl,hn=un.channelType,cn&&hn?[4,this.getChannel(cn,!0)]:[3,54];case 30:return dn=Zn.sent(),this._dispatcher.dispatch(new U({event:ln,source:w.EVENT_POLL_VOTED})),g((function(){return e(Yn,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=y(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onPollVoted(dn,ln)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))})),[3,54];case 31:if(!(pn=n.as(X).event).isOpenChannelEvent)return[3,53];switch(pn.category){case Y.CHANNEL_ENTER:return[3,32];case Y.CHANNEL_EXIT:return[3,34];case Y.CHANNEL_OPERATOR_UPDATE:return[3,36];case Y.USER_CHANNEL_MUTE:case Y.USER_CHANNEL_UNMUTE:return[3,38];case Y.USER_CHANNEL_BAN:case Y.USER_CHANNEL_UNBAN:return[3,40];case Y.CHANNEL_FREEZE:case Y.CHANNEL_UNFREEZE:return[3,42];case Y.CHANNEL_DELETED:return[3,44];case Y.CHANNEL_PROP_CHANGED:return[3,47];case Y.CHANNEL_META_DATA_CHANGED:return[3,49];case Y.CHANNEL_META_COUNTERS_CHANGED:return[3,51]}return[3,53];case 32:return[4,this.getChannel(pn.channelUrl,!0)];case 33:return fn=Zn.sent(),Cn=n.as(vn),Un=Cn.participantCount,yn=Cn.user,mn=fn._updateParticipantCount(Un,pn.ts),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onUserEntered(fn,yn),mn&&n.onChannelParticipantCountChanged(fn)})),[2]}))}))})),[3,53];case 34:return[4,this.getChannel(pn.channelUrl,!0)];case 35:return En=Zn.sent(),gn=n.as(_n),Un=gn.participantCount,wn=gn.user,Tn=En._updateParticipantCount(Un,pn.ts),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onUserExited(En,wn),Tn&&n.onChannelParticipantCountChanged(En)})),[2]}))}))})),[3,53];case 36:return[4,this.getChannel(pn.channelUrl,!0)];case 37:return bn=Zn.sent(),Nn=n.as(Z).operators,bn.operators=Nn,this.upsertChannelsToCache([bn]),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onOperatorUpdated(bn,Nn)})),[2]}))}))})),[3,53];case 38:return[4,this.getChannel(pn.channelUrl,!0)];case 39:return Mn=Zn.sent(),Pn=pn.category===Y.USER_CHANNEL_MUTE,Hn=n.as(Pn?Q:z).user,g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){Pn?n.onUserMuted(Mn,Hn):n.onUserUnmuted(Mn,Hn)})),[2]}))}))})),[3,53];case 40:return[4,this.getChannel(pn.channelUrl,!0)];case 41:return On=Zn.sent(),xn=pn.category===Y.USER_CHANNEL_BAN,In=n.as(xn?S:q).user,g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){xn?n.onUserBanned(On,In):n.onUserUnbanned(On,In)})),[2]}))}))})),[3,53];case 42:return[4,this.getChannel(pn.channelUrl,!0)];case 43:return Dn=Zn.sent(),An=n.as(F).freeze,Dn.isFrozen=An,this.upsertChannelsToCache([Dn]),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){An?n.onChannelFrozen(Dn):n.onChannelUnfrozen(Dn)})),[2]}))}))})),[3,53];case 44:return[4,this.getChannel(pn.channelUrl,!0)];case 45:return Ln=Zn.sent(),[4,this.removeChannelsFromCache([Ln.url])];case 46:return Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onChannelDeleted(Ln.url,Ln.channelType)})),[2]}))}))})),[3,53];case 47:return[4,this.getChannelWithoutCache(pn.channelUrl,!0)];case 48:return Rn=Zn.sent(),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onChannelChanged(Rn)})),[2]}))}))})),[3,53];case 49:return[4,this.getChannel(pn.channelUrl,!0)];case 50:return kn=Zn.sent(),Fn=n.as(k),Sn=Fn.created,qn=Fn.updated,Qn=Fn.deleted,Sn&&kn._upsertCachedMetaData(Sn,pn.ts),qn&&kn._upsertCachedMetaData(qn,pn.ts),Qn&&kn._removeFromCachedMetaData(Qn,pn.ts),g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){Sn&&n.onMetaDataCreated(kn,Sn),qn&&n.onMetaDataUpdated(kn,qn),Qn&&n.onMetaDataDeleted(kn,Qn)})),[2]}))}))})),[3,53];case 51:return[4,this.getChannel(pn.channelUrl,!0)];case 52:return zn=Zn.sent(),Kn=n.as(R),jn=Kn.created,Bn=Kn.updated,Vn=Kn.deleted,g((function(){return e(Yn,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){jn&&n.onMetaCounterCreated(zn,jn),Bn&&n.onMetaCounterUpdated(zn,Bn),Vn&&n.onMetaCounterDeleted(zn,Vn)})),[2]}))}))})),[3,53];case 53:return[3,54];case 54:return[3,56];case 55:if(Wn=Zn.sent(),E(Wn))throw Wn;return[3,56];case 56:return[2]}}))}))},n.prototype.addHandler=function(n,e){this._openChannelHandlers.set(n,e)},n.prototype.removeHandler=function(n){this._openChannelHandlers.delete(n)},n.prototype.clearHandler=function(){this._openChannelHandlers.clear()},n.prototype.getChannel=function(n,r){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:N(i("string",n)).throw(M.invalidParameters),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getChannelFromCache(n)];case 2:return(e=t.sent())?[2,e]:[3,4];case 3:return t.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(n)];case 5:return[2,t.sent()]}}))}))},n.prototype.getChannelWithoutCache=function(n,r){return void 0===r&&(r=!1),e(this,void 0,void 0,(function(){var e,a,s;return t(this,(function(t){switch(t.label){case 0:return N(i("string",n)).throw(M.invalidParameters),e=new hn({channelUrl:n,isInternalCall:r}),[4,this._requestQueue.send(e)];case 1:return a=t.sent(),s=a.as(dn).channel,[4,this.upsertChannelsToCache([s])];case 2:return[2,t.sent()[0]]}}))}))},n.prototype.createChannel=function(n){return e(this,void 0,void 0,(function(){var e,r,o,u;return t(this,(function(t){switch(t.label){case 0:return e=P(P({},cn),n),N(function(n){return a("string",n.operatorUserIds,!0)&&(i("string",n.coverUrlOrImage)||s(n.coverUrlOrImage)||null===n.coverUrlOrImage)&&i("string",n.name,!0)&&i("string",n.data,!0)&&i("string",n.customType,!0)&&(i("string",n.channelUrl)&&/^\w+$/.test(n.channelUrl)||null===n.channelUrl)&&i("boolean",n.isEphemeral,!0)}(e)).throw(M.invalidParameters),r=new pn(e),[4,this._requestQueue.send(r)];case 1:return o=t.sent(),u=o.as(dn).channel,this.upsertChannelsToCache([u]),[2,u]}}))}))},n}(),En={name:null,coverUrlOrImage:null,data:null,customType:null,operatorUserIds:null},gn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.token,i=n.limit;return(t=e.call(this)||this).method=o.GET,t.path="".concat(l,"/").concat(encodeURIComponent(r),"/participants"),t.params={token:a,limit:i},t}return n(t,e),t}(c),Un=function(e){function t(n,t){var r=e.call(this,n,t)||this;r.token=null,r.participants=[];var a=t.next,i=t.participants;return r.token=a,r.participants=i.map((function(e){return new un(n,e)})),r}return n(t,e),t}(h),wn=function(r){function a(n,e,t){return r.call(this,n,e,b.OPEN,t)||this}return n(a,r),a.prototype._validate=function(){return r.prototype._validate.call(this)},a.prototype.next=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,n=x.of(this._iid).requestQueue,e=new gn(P(P({},this),{token:this._token})),[4,n.send(e)]):[3,2]:[3,5];case 1:return r=t.sent(),a=r.as(Un),i=a.participants,s=a.token,this._token=s,this._hasNext=!!s,this._isLoading=!1,[2,i];case 2:return[2,[]];case 3:throw M.queryInProgress;case 4:return[3,6];case 5:throw M.invalidParameters;case 6:return[2]}}))}))},a}(O),Tn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.coverUrlOrImage,u=n.name,c=n.data,h=n.customType,p=n.operatorUserIds;return(t=e.call(this)||this).method=o.PUT,t.path="".concat(l,"/").concat(encodeURIComponent(r)),t.params=d({cover_url:i("string",a)?a:null,cover_file:s(a)?a:null,name:u,data:c,custom_type:h,operators:p}),t}return n(t,e),t}(c),bn=function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=new Mn(n,t),r}return n(t,e),t}(h),Nn=function(e){function t(n){var t=this,r=n.channelUrl;return(t=e.call(this)||this).method=o.DELETE,t.path="".concat(l,"/").concat(encodeURIComponent(r)),t}return n(t,e),t}(c);!function(e){function t(n,t){return e.call(this,n,t)||this}n(t,e)}(h);var Mn=function(r){function o(n,e){var t,a=this;return(a=r.call(this,n,e)||this)._lastParticipantCountUpdated=0,a.participantCount=0,a.operators=[],a.channelType=b.OPEN,a.participantCount=null!==(t=e.participant_count)&&void 0!==t?t:0,a.operators=Array.isArray(e.operators)?e.operators.map((function(e){return new f(n,e)})):[],a}return n(o,r),o.payloadify=function(n){return n?d(P(P({},G.payloadify(n)),{participant_count:n.participantCount,operators:n.operators.map((function(n){return f.payloadify(n)}))})):null},o.prototype.serialize=function(){return I(this)},o.prototype.isOperator=function(n){return n instanceof f?this.isOperator(n.userId):this.operators.some((function(e){return e.userId===n}))},o.prototype._updateParticipantCount=function(n,e){return e>this._lastParticipantCountUpdated&&(this.participantCount=n,this._lastParticipantCountUpdated=e,!0)},o.prototype.createParticipantListQuery=function(n){return new wn(this._iid,this.url,n)},o.prototype.refresh=function(){return e(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,mn.of(this._iid).getChannelWithoutCache(this.url)];case 1:return[2,n.sent()]}}))}))},o.prototype.enter=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return n=x.of(this._iid).requestQueue,e=new fn({channelUrl:this.url}),[4,n.send(e)];case 1:return r=t.sent(),a=r.as(vn),i=a.participantCount,s=a.ts,this._updateParticipantCount(i,s),mn.of(this._iid).setEnteredToCache(this),[2]}}))}))},o.prototype.exit=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return n=x.of(this._iid).requestQueue,e=new Cn({channelUrl:this.url}),[4,n.send(e)];case 1:return r=t.sent(),a=r.as(_n),i=a.participantCount,s=a.ts,this._updateParticipantCount(i,s),mn.of(this._iid).setExitedToCache(this),on.of(this._iid).fileMessageQueue.cancel(this),[2]}}))}))},o.prototype.updateChannel=function(n){return e(this,void 0,void 0,(function(){var e,r,o,u,l;return t(this,(function(t){switch(t.label){case 0:return e=P(P({},En),n),N(function(n){return a("string",n.operatorUserIds,!0)&&(i("string",n.coverUrlOrImage)||s(n.coverUrlOrImage)||null===n.coverUrlOrImage)&&i("string",n.name,!0)&&i("string",n.data,!0)&&i("string",n.customType,!0)}(e)).throw(M.invalidParameters),r=x.of(this._iid).requestQueue,o=new Tn(P({channelUrl:this.url},e)),[4,r.send(o)];case 1:return u=t.sent(),l=u.as(bn).channel,this._update(l),[4,mn.of(this._iid).upsertChannelsToCache([l])];case 2:return t.sent(),[2,this]}}))}))},o.prototype.updateChannelWithOperatorUserIds=function(n,r,a,i,s){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return e=P(P({},En),{name:n,coverUrlOrImage:r,data:a,operatorUserIds:i,customType:s}),[2,this.updateChannel(e)]}))}))},o.prototype.delete=function(){return e(this,void 0,void 0,(function(){var n,e;return t(this,(function(t){switch(t.label){case 0:return n=x.of(this._iid).requestQueue,e=new Nn({channelUrl:this.url}),[4,n.send(e)];case 1:return t.sent(),[4,mn.of(this._iid).removeChannelsFromCache([this.url])];case 2:return t.sent(),[2]}}))}))},o.prototype.sendUserMessage=function(n){return N(!n.isPinnedMessage).throw(M.notSupportedError),r.prototype.sendUserMessage.call(this,n)},o.prototype.sendFileMessage=function(n){return N(!n.isPinnedMessage).throw(M.notSupportedError),r.prototype.sendFileMessage.call(this,n)},o}(G),Pn=function(e){function t(n){void 0===n&&(n={});var t=e.call(this)||this;return Object.keys(n).forEach((function(e){t.hasOwnProperty(e)&&(t[e]=n[e])})),t}return n(t,e),t}(function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.onUserEntered=D,n.onUserExited=D,n.onChannelParticipantCountChanged=D,n.onPollUpdated=D,n.onPollVoted=D,n.onPollDeleted=D,n}return n(t,e),t}(an)),Hn=function(e){function t(n){var t=this,r=n.token,a=n.limit,i=n.nameKeyword,s=n.urlKeyword,u=n.customTypes,c=n.includeFrozen,h=n.includeMetaData;return(t=e.call(this)||this).method=o.GET,t.path=l,t.params=d({token:r,limit:a,name_contains:i,url_contains:s,custom_types:u,show_frozen:c,show_metadata:h}),t}return n(t,e),t}(c),On=function(e){function t(n,t){var r=e.call(this,n,t)||this;r.token=null,r.channels=[],r.ts=null;var a=t.next,i=t.channels,s=t.ts;return r.token=a,i&&i.length>0&&(r.channels=i.map((function(e){return new Mn(n,e)}))),r.ts="number"==typeof s?s:null,r}return n(t,e),t}(h),xn=function(r){function s(n,e){var t,a,i,s,o,u=this;return(u=r.call(this,n,e)||this).includeFrozen=!0,u.includeMetaData=!0,u.nameKeyword=null,u.urlKeyword=null,u.customTypes=null,u.includeFrozen=null===(t=e.includeFrozen)||void 0===t||t,u.includeMetaData=null===(a=e.includeMetaData)||void 0===a||a,u.nameKeyword=null!==(i=e.nameKeyword)&&void 0!==i?i:null,u.urlKeyword=null!==(s=e.urlKeyword)&&void 0!==s?s:null,u.customTypes=null!==(o=e.customTypes)&&void 0!==o?o:null,u}return n(s,r),s.prototype._validate=function(){return r.prototype._validate.call(this)&&i("boolean",this.includeFrozen)&&i("boolean",this.includeMetaData)&&i("string",this.nameKeyword,!0)&&i("string",this.urlKeyword,!0)&&a("string",this.customTypes,!0)},s.prototype.next=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,4]:this._hasNext?(this._isLoading=!0,n=x.of(this._iid).requestQueue,e=new Hn(P(P({},this),{token:this._token})),[4,n.send(e)]):[3,3]:[3,6];case 1:return r=t.sent(),a=r.as(On),i=a.channels,s=a.token,this._token=s,this._hasNext=!!s,[4,mn.of(this._iid).upsertChannelsToCache(i)];case 2:return t.sent(),this._isLoading=!1,[2,i];case 3:return[2,[]];case 4:throw M.queryInProgress;case 5:return[3,7];case 6:throw M.invalidParameters;case 7:return[2]}}))}))},s}(A),In=function(r){function a(){var n=null!==r&&r.apply(this,arguments)||this;return n.name="openChannel",n}return n(a,r),a.prototype.init=function(n,e){var t=e.sdkState,a=e.dispatcher,i=e.sessionManager,s=e.requestQueue,o=e.logger,u=e.onlineDetector,l=e.cacheContext;r.prototype.init.call(this,n,{sdkState:t,dispatcher:a,sessionManager:i,requestQueue:s,logger:o,onlineDetector:u,cacheContext:l}),this._manager=new mn(n,{sdkState:t,dispatcher:a,requestQueue:s})},a.prototype.createOpenChannelListQuery=function(n){return void 0===n&&(n={}),new xn(this._iid,n)},a.prototype.addOpenChannelHandler=function(n,e){this._manager.addHandler(n,e)},a.prototype.removeOpenChannelHandler=function(n){this._manager.removeHandler(n)},a.prototype.removeAllOpenChannelHandlers=function(){this._manager.clearHandler()},a.prototype.buildOpenChannelFromSerializedData=function(n){return this._manager.buildOpenChannelFromSerializedData(n)},a.prototype.getChannel=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.getChannel(n)]}))}))},a.prototype.getChannelWithoutCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.getChannelWithoutCache(n)]}))}))},a.prototype.createChannel=function(n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.createChannel(n)]}))}))},a.prototype.createChannelWithOperatorUserIds=function(n,r,a,i,s){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return(e=P({},cn)).name=n,e.coverUrlOrImage=r,e.data=a,e.operatorUserIds=i,e.customType=s,[2,this._manager.createChannel(e)]}))}))},a}(L);export{Mn as OpenChannel,Pn as OpenChannelHandler,xn as OpenChannelListQuery,In as OpenChannelModule,wn as ParticipantListQuery};
