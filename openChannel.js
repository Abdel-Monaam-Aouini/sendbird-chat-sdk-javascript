import{_ as e,b as n,c as t,aa as r,N as a,a as o,i,A as s,bb as u,bc as c,f as l,h,e as d,u as p,al as f,U as v,x as C,g as _,Z as y,at as m,W as U,z as g,B as E,r as w,M,D as T,aF as b,Y as N,aK as P,s as D,q as O,b6 as H,au as x,V as I,ad as A,aH as L,aP as R}from"./lib/__bundle-6c6d8c32.js";import{V as F,W as k,X as S,Z as z,Y as q,_ as Q,$ as K,a0 as V,a2 as B,a4 as W,a5 as j,a6 as G,a7 as X,P as Y,w as Z,aa as $}from"./lib/__bundle-51b646f3.js";import{C as J,B as ee,a as ne,O as te,P as re,M as ae,T as oe,R as ie,U as se,A as ue}from"./lib/__bundle-163fef97.js";import{B as ce}from"./lib/__bundle-925b0776.js";import"./lib/__bundle-c336221f.js";var le=function(r){function a(){var e=null!==r&&r.apply(this,arguments)||this;return e._channels=new Map,e._enteredChannelUrls=[],e}return e(a,r),Object.defineProperty(a.prototype,"enteredChannels",{get:function(){var e=this;return this._enteredChannelUrls.map((function(n){return e._channels.get(n)})).filter((function(e){return!!e}))},enumerable:!1,configurable:!0}),a.prototype.isEnteredChannel=function(e){return this._enteredChannelUrls.includes(e)},a.prototype.enter=function(e){this._enteredChannelUrls.indexOf(e)<0&&this._enteredChannelUrls.push(e)},a.prototype.exit=function(e){var n=this._enteredChannelUrls.indexOf(e);n>=0&&this._enteredChannelUrls.splice(n,1)},a.prototype.exitAll=function(){this._enteredChannelUrls=[]},a.prototype.get=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(n){return[2,this._channels.get(e)]}))}))},a.prototype.upsert=function(e){return n(this,void 0,void 0,(function(){var n,r=this;return t(this,(function(t){return n=[],e.forEach((function(e){if(r._channels.has(e.url)){var t=r._channels.get(e.url);Object.assign(t,e),n.push(t)}else r._channels.set(e.url,e),n.push(e)})),[2,n]}))}))},a.prototype.remove=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(n){return this._channels.delete(e),this.exit(e),[2]}))}))},a.prototype.clear=function(){return n(this,void 0,void 0,(function(){return t(this,(function(e){return this._channels.clear(),this._enteredChannelUrls=[],[2]}))}))},a}(r),he={channelUrl:void 0,name:void 0,coverUrlOrImage:void 0,data:void 0,customType:void 0,operatorUserIds:void 0,isEphemeral:void 0},de=function(n){function t(e){var t=e.channelUrl,r=e.isInternalCall,a=n.call(this)||this;return a.method=s.GET,a.path="".concat(r?u:c,"/").concat(encodeURIComponent(t)),a}return e(t,n),t}(l),pe=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.channel=new Pe(e,t),r}return e(t,n),t}(h),fe=function(n){function t(e){var t=this,r=e.channelUrl,a=e.coverUrlOrImage,u=e.name,l=e.data,h=e.customType,f=e.operatorUserIds,v=e.isEphemeral;return(t=n.call(this)||this).method=s.POST,t.path=c,t.params=d(p({channel_url:r,cover_url:o("string",a)?a:null,cover_file:i(a)?a:null,name:u,data:l,custom_type:h,operators:f,is_ephemeral:v})),t}return e(t,n),t}(l);!function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.channel=new Pe(e,t),r}e(t,n)}(h);var ve=function(n){function t(e){var t=e.channelUrl;return n.call(this,{code:"ENTR",payload:{channel_url:t},ackRequired:!0})||this}return e(t,n),t}(f),Ce=function(n){function t(e,t,r){var a,o,i=this;return i=n.call(this,e,"SYEV",r)||this,r.data&&(i.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,i.user=new v(e,r.data),i.ts=null!==(o=r.data.edge_ts)&&void 0!==o?o:0),i}return e(t,n),t}(J),_e=function(n){function t(e){var t=e.channelUrl;return n.call(this,{code:"EXIT",payload:{channel_url:t},ackRequired:!0})||this}return e(t,n),t}(f),ye=function(n){function t(e,t,r){var a,o,i=this;return i=n.call(this,e,"EXIT",r)||this,r.data&&(i.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,i.user=new v(e,r.data),i.ts=null!==(o=r.data.edge_ts)&&void 0!==o?o:0),i}return e(t,n),t}(J),me={},Ue=function(r){function s(e,a){var o=r.call(this,e,_(_({},a),{channelType:y.OPEN}))||this;return o.subscribeChannelEvent=m,o.unsubscribeChannelEvent=m,o.refreshChannel=function(){return n(o,void 0,void 0,(function(){return t(this,(function(e){return[2,m()]}))}))},o._openChannelCache=new le(e),o._openChannelHandlers=new Map,o._dispatcher.on((function(e){var n,t;if(e instanceof U)o._handleEvent(e);else if(e instanceof g&&e.stateType===E.CONNECTED){var r=o._openChannelCache.enteredChannels;try{for(var a=w(r),i=a.next();!i.done;i=a.next()){i.value.enter()}}catch(e){n={error:e}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}}})),me[e]||(me[e]=o),o}return e(s,r),s.of=function(e){return me[e]},s.prototype.buildOpenChannelFromSerializedData=function(e){var n=C(e);return new Pe(this._iid,Pe.payloadify(n))},s.prototype.getChannelFromCache=function(e){var r;return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,this._openChannelCache.get(e)];case 1:return[2,null!==(r=n.sent())&&void 0!==r?r:null]}}))}))},s.prototype.upsertChannelsToCache=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,this._openChannelCache.upsert(e)];case 1:return[2,n.sent()]}}))}))},s.prototype.removeChannelsFromCache=function(e){return n(this,void 0,void 0,(function(){var n,r,a,o,i,s;return t(this,(function(t){switch(t.label){case 0:t.trys.push([0,5,6,7]),n=w(e),r=n.next(),t.label=1;case 1:return r.done?[3,4]:(a=r.value,[4,this._openChannelCache.remove(a)]);case 2:t.sent(),t.label=3;case 3:return r=n.next(),[3,1];case 4:return[3,7];case 5:return o=t.sent(),i={error:o},[3,7];case 6:try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(i)throw i.error}return[7];case 7:return[2]}}))}))},s.prototype.setEnteredToCache=function(e){this._openChannelCache.enter(e.url)},s.prototype.setExitedToCache=function(e){this._openChannelCache.exit(e.url)},s.prototype._handleEvent=function(e){return n(this,void 0,void 0,(function(){var r,a,o,i,s,u,c,l,h,d,p,f,v,C,_,m,U,g,E,D,O,x,I,A,L,R,Y,Z,$,ee,ce,le,he,de,pe,fe,ve,_e,me,Ue,ge,Ee,we,Me,Te,be,Ne,Pe,De,Oe,He,xe,Ie,Ae,Le,Re,Fe,ke,Se,ze,qe,Qe,Ke,Ve,Be,We,je,Ge,Xe=this;return t(this,(function(Ye){switch(Ye.label){case 0:switch(Ye.trys.push([0,57,,58]),e.code){case"MESG":case"FILE":case"ADMM":case"BRDM":return[3,1];case"MEDI":case"FEDI":case"AEDI":return[3,4];case"DELM":return[3,7];case"MRCT":return[3,10];case"MTHD":return[3,13];case"MCNT":return[3,16];case"PEDI":return[3,27];case"VOTE":return[3,30];case"SYEV":return[3,33]}return[3,56];case 1:return i=null,"MESG"===e.code?i=e.as(G):"FILE"===e.code?i=e.as(X):"ADMM"!==e.code&&"BRDM"!=e.code||(i=e.as(ue)),i?(r=i.message,a=i.isMentioned,r.channelType!==y.OPEN?[3,3]:[4,this.getChannel(r.channelUrl,!0)]):[3,3];case 2:o=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,i,s,u;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())i=n.value,this._openChannelCache.isEnteredChannel(o.url)&&(i.onMessageReceived&&i.onMessageReceived(o,r),a&&i.onMentionReceived&&i.onMentionReceived(o,r))}catch(e){s={error:e}}finally{try{n&&!n.done&&(u=e.return)&&u.call(e)}finally{if(s)throw s.error}}return[2]}))}))})),Ye.label=3;case 3:return[3,56];case 4:return i=null,"MEDI"===e.code?i=e.as(W):"FEDI"===e.code?i=e.as(j):"AEDI"===e.code&&(i=e.as(se)),i?(s=i.message,u=i.mentionCountChange,s.channelType!==y.OPEN?[3,6]:[4,this.getChannel(s.channelUrl,!0)]):[3,6];case 5:c=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())r=n.value,this._openChannelCache.isEnteredChannel(c.url)&&(r.onMessageUpdated&&r.onMessageUpdated(c,s),u>0&&r.onMentionReceived&&r.onMentionReceived(c,s))}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))})),Ye.label=6;case 6:return[3,56];case 7:return l=e.as(B),ce=l.channelUrl,le=l.channelType,h=l.messageId,le!==y.OPEN?[3,9]:[4,this.getChannel(ce,!0)];case 8:d=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())r=n.value,this._openChannelCache.isEnteredChannel(d.url)&&r.onMessageDeleted&&r.onMessageDeleted(d,h)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))})),Ye.label=9;case 9:return[3,56];case 10:return p=e.as(ie),ce=p.channelUrl,le=p.channelType,f=p.event,le!==y.OPEN?[3,12]:[4,this.getChannel(ce,!0)];case 11:v=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())r=n.value,this._openChannelCache.isEnteredChannel(v.url)&&r.onReactionUpdated&&r.onReactionUpdated(v,f)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))})),Ye.label=12;case 12:return[3,56];case 13:return(C=e.as(oe).event).channelType!==y.OPEN?[3,15]:[4,this.getChannel(C.channelUrl,!0)];case 14:_=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())r=n.value,this._openChannelCache.isEnteredChannel(_.url)&&r.onThreadInfoUpdated&&r.onThreadInfoUpdated(_,C)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))})),Ye.label=15;case 15:return[3,56];case 16:m=e.as(ae).openChannelMemberCounts,U=[],Ye.label=17;case 17:Ye.trys.push([17,22,23,24]),g=w(m),E=g.next(),Ye.label=18;case 18:return E.done?[3,21]:(D=E.value,ce=D.channelUrl,ge=D.participantCount,O=D.updatedAt,[4,this.getChannelFromCache(ce)]);case 19:(x=Ye.sent())&&x._updateParticipantCount(ge,O)&&U.push(x),Ye.label=20;case 20:return E=g.next(),[3,18];case 21:return[3,24];case 22:return I=Ye.sent(),je={error:I},[3,24];case 23:try{E&&!E.done&&(Ge=g.return)&&Ge.call(g)}finally{if(je)throw je.error}return[7];case 24:return U.length>0?[4,this.upsertChannelsToCache(U)]:[3,26];case 25:A=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())(r=n.value).onChannelMemberCountChanged&&r.onChannelMemberCountChanged(A)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))})),Ye.label=26;case 26:return[3,56];case 27:return L=e.as(re),R=L.event,Y=L.status,ce=L.channelUrl,le=L.channelType,ce&&le===y.OPEN?[4,this.getChannel(ce,!0)]:[3,29];case 28:Z=Ye.sent(),this._dispatcher.dispatch(new P({event:R,source:N.EVENT_POLL_UPDATED})),T(Y===H?function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())(r=n.value).onPollDeleted&&r.onPollDeleted(Z,R.pollId)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))}:function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())(r=n.value).onPollUpdated&&r.onPollUpdated(Z,R)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))}),Ye.label=29;case 29:return[3,56];case 30:return $=e.as(V),ee=$.event,ce=$.channelUrl,le=$.channelType,ce&&le===y.OPEN?[4,this.getChannel(ce,!0)]:[3,32];case 31:he=Ye.sent(),this._dispatcher.dispatch(new b({event:ee,source:N.EVENT_POLL_VOTED})),T((function(){return n(Xe,void 0,void 0,(function(){var e,n,r,a,o;return t(this,(function(t){try{for(e=w(this._openChannelHandlers.values()),n=e.next();!n.done;n=e.next())(r=n.value).onPollVoted&&r.onPollVoted(he,ee)}catch(e){a={error:e}}finally{try{n&&!n.done&&(o=e.return)&&o.call(e)}finally{if(a)throw a.error}}return[2]}))}))})),Ye.label=32;case 32:return[3,56];case 33:if(!(de=e.as(J).event).isOpenChannelEvent)return[3,55];switch(de.category){case ne.CHANNEL_ENTER:return[3,34];case ne.CHANNEL_EXIT:return[3,36];case ne.CHANNEL_OPERATOR_UPDATE:return[3,38];case ne.USER_CHANNEL_MUTE:case ne.USER_CHANNEL_UNMUTE:return[3,40];case ne.USER_CHANNEL_BAN:case ne.USER_CHANNEL_UNBAN:return[3,42];case ne.CHANNEL_FREEZE:case ne.CHANNEL_UNFREEZE:return[3,44];case ne.CHANNEL_DELETED:return[3,46];case ne.CHANNEL_PROP_CHANGED:return[3,49];case ne.CHANNEL_META_DATA_CHANGED:return[3,51];case ne.CHANNEL_META_COUNTERS_CHANGED:return[3,53]}return[3,55];case 34:return[4,this.getChannel(de.channelUrl,!0)];case 35:return pe=Ye.sent(),fe=e.as(Ce),ge=fe.participantCount,ve=fe.user,_e=pe._updateParticipantCount(ge,de.ts),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){e.onUserEntered&&e.onUserEntered(pe,ve),_e&&e.onChannelParticipantCountChanged&&e.onChannelParticipantCountChanged(pe)})),[2]}))}))})),[3,55];case 36:return[4,this.getChannel(de.channelUrl,!0)];case 37:return me=Ye.sent(),Ue=e.as(ye),ge=Ue.participantCount,Ee=Ue.user,we=me._updateParticipantCount(ge,de.ts),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){e.onUserExited&&e.onUserExited(me,Ee),we&&e.onChannelParticipantCountChanged&&e.onChannelParticipantCountChanged(me)})),[2]}))}))})),[3,55];case 38:return[4,this.getChannel(de.channelUrl,!0)];case 39:return Me=Ye.sent(),Te=e.as(te).operators,Me.operators=Te,this.upsertChannelsToCache([Me]),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){e.onOperatorUpdated&&e.onOperatorUpdated(Me,Te)})),[2]}))}))})),[3,55];case 40:return[4,this.getChannel(de.channelUrl,!0)];case 41:return be=Ye.sent(),Ne=de.category===ne.USER_CHANNEL_MUTE,Pe=e.as(Ne?Q:K).user,T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){Ne?e.onUserMuted&&e.onUserMuted(be,Pe):e.onUserUnmuted&&e.onUserUnmuted(be,Pe)})),[2]}))}))})),[3,55];case 42:return[4,this.getChannel(de.channelUrl,!0)];case 43:return De=Ye.sent(),Oe=de.category===ne.USER_CHANNEL_BAN,He=e.as(Oe?z:q).user,T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){Oe?e.onUserBanned&&e.onUserBanned(De,He):e.onUserUnbanned&&e.onUserUnbanned(De,He)})),[2]}))}))})),[3,55];case 44:return[4,this.getChannel(de.channelUrl,!0)];case 45:return xe=Ye.sent(),Ie=e.as(S).freeze,xe.isFrozen=Ie,this.upsertChannelsToCache([xe]),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){Ie?e.onChannelFrozen&&e.onChannelFrozen(xe):e.onChannelUnfrozen&&e.onChannelUnfrozen(xe)})),[2]}))}))})),[3,55];case 46:return[4,this.getChannel(de.channelUrl,!0)];case 47:return Ae=Ye.sent(),[4,this.removeChannelsFromCache([Ae.url])];case 48:return Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){e.onChannelDeleted&&e.onChannelDeleted(Ae.url,Ae.channelType)})),[2]}))}))})),[3,55];case 49:return[4,this.getChannelWithoutCache(de.channelUrl,!0)];case 50:return Le=Ye.sent(),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){e.onChannelChanged&&e.onChannelChanged(Le)})),[2]}))}))})),[3,55];case 51:return[4,this.getChannel(de.channelUrl,!0)];case 52:return Re=Ye.sent(),Fe=e.as(k),ke=Fe.created,Se=Fe.updated,ze=Fe.deleted,ke&&Re._upsertCachedMetaData(ke,de.ts),Se&&Re._upsertCachedMetaData(Se,de.ts),ze&&Re._removeFromCachedMetaData(ze,de.ts),T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){ke&&e.onMetaDataCreated&&e.onMetaDataCreated(Re,ke),Se&&e.onMetaDataUpdated&&e.onMetaDataUpdated(Re,Se),ze&&e.onMetaDataDeleted&&e.onMetaDataDeleted(Re,ze)})),[2]}))}))})),[3,55];case 53:return[4,this.getChannel(de.channelUrl,!0)];case 54:return qe=Ye.sent(),Qe=e.as(F),Ke=Qe.created,Ve=Qe.updated,Be=Qe.deleted,T((function(){return n(Xe,void 0,void 0,(function(){return t(this,(function(e){return this._openChannelHandlers.forEach((function(e){Ke&&e.onMetaCounterCreated&&e.onMetaCounterCreated(qe,Ke),Ve&&e.onMetaCounterUpdated&&e.onMetaCounterUpdated(qe,Ve),Be&&e.onMetaCounterDeleted&&e.onMetaCounterDeleted(qe,Be)})),[2]}))}))})),[3,55];case 55:return[3,56];case 56:return[3,58];case 57:if(We=Ye.sent(),M(We))throw We;return[3,58];case 58:return[2]}}))}))},s.prototype.addHandler=function(e,n){this._openChannelHandlers.set(e,n)},s.prototype.removeHandler=function(e){this._openChannelHandlers.delete(e)},s.prototype.clearHandler=function(){this._openChannelHandlers.clear()},s.prototype.getChannel=function(e,r){return n(this,void 0,void 0,(function(){var n;return t(this,(function(t){switch(t.label){case 0:D(o("string",e)).throw(O.invalidParameters),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getChannelFromCache(e)];case 2:return(n=t.sent())?[2,n]:[3,4];case 3:return t.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(e)];case 5:return[2,t.sent()]}}))}))},s.prototype.getChannelWithoutCache=function(e,r){return void 0===r&&(r=!1),n(this,void 0,void 0,(function(){var n,a,i;return t(this,(function(t){switch(t.label){case 0:return D(o("string",e)).throw(O.invalidParameters),n=new de({channelUrl:e,isInternalCall:r}),[4,this._requestQueue.send(n)];case 1:return a=t.sent(),i=a.as(pe).channel,[4,this.upsertChannelsToCache([i])];case 2:return[2,t.sent()[0]]}}))}))},s.prototype.createChannel=function(e){return n(this,void 0,void 0,(function(){var n,r,s,u;return t(this,(function(t){switch(t.label){case 0:return n=_(_({},he),e),D(function(e){return a("string",e.operatorUserIds,!0)&&(o("string",e.coverUrlOrImage,!0)||i(e.coverUrlOrImage,!0))&&o("string",e.name,!0)&&o("string",e.data,!0)&&o("string",e.customType,!0)&&(o("string",e.channelUrl)&&/^\w+$/.test(e.channelUrl)||null===e.channelUrl||void 0===e.channelUrl)&&o("boolean",e.isEphemeral,!0)}(n)).throw(O.invalidParameters),r=new fe(n),[4,this._requestQueue.send(r)];case 1:return s=t.sent(),u=s.as(pe).channel,this.upsertChannelsToCache([u]),[2,u]}}))}))},s}(ee),ge={name:void 0,coverUrlOrImage:void 0,data:void 0,customType:void 0,operatorUserIds:void 0},Ee=function(n){function t(e){var t=this,r=e.channelUrl,a=e.token,o=e.limit;return(t=n.call(this)||this).method=s.GET,t.path="".concat(c,"/").concat(encodeURIComponent(r),"/participants"),t.params={token:a,limit:o},t}return e(t,n),t}(l),we=function(n){function t(e,t){var r=n.call(this,e,t)||this;r.participants=[];var a=t.next,o=t.participants;return r.token=a,r.participants=o.map((function(n){return new Y(e,n)})),r}return e(t,n),t}(h),Me=function(r){function a(e,n,t){return r.call(this,e,n,y.OPEN,t)||this}return e(a,r),a.prototype._validate=function(){return r.prototype._validate.call(this)},a.prototype.next=function(){return n(this,void 0,void 0,(function(){var e,n,r,a,o,i;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,e=I.of(this._iid).requestQueue,n=new Ee(_(_({},this),{token:this._token})),[4,e.send(n)]):[3,2]:[3,5];case 1:return r=t.sent(),a=r.as(we),o=a.participants,i=a.token,this._token=i,this._hasNext=!!i,this._isLoading=!1,[2,o];case 2:return[2,[]];case 3:throw O.queryInProgress;case 4:return[3,6];case 5:throw O.invalidParameters;case 6:return[2]}}))}))},a}(x),Te=function(n){function t(e){var t=this,r=e.channelUrl,a=e.coverUrlOrImage,u=e.name,l=e.data,h=e.customType,f=e.operatorUserIds;return(t=n.call(this)||this).method=s.PUT,t.path="".concat(c,"/").concat(encodeURIComponent(r)),t.params=d(p({cover_url:o("string",a)?a:null,cover_file:i(a)?a:null,name:u,data:l,custom_type:h,operators:f})),t}return e(t,n),t}(l),be=function(n){function t(e,t){var r=n.call(this,e,t)||this;return r.channel=new Pe(e,t),r}return e(t,n),t}(h),Ne=function(n){function t(e){var t=this,r=e.channelUrl;return(t=n.call(this)||this).method=s.DELETE,t.path="".concat(c,"/").concat(encodeURIComponent(r)),t}return e(t,n),t}(l);!function(n){function t(e,t){return n.call(this,e,t)||this}e(t,n)}(h);var Pe=function(r){function s(e,n){var t,a=this;return(a=r.call(this,e,n)||this)._lastParticipantCountUpdated=0,a.participantCount=0,a.operators=[],a.channelType=y.OPEN,a.participantCount=null!==(t=n.participant_count)&&void 0!==t?t:0,a.operators=Array.isArray(n.operators)?n.operators.map((function(n){return new v(e,n)})):[],a}return e(s,r),s.payloadify=function(e){return d(p(_(_({},Z.payloadify(e)),{participant_count:e.participantCount,operators:e.operators.map((function(e){return v.payloadify(e)}))})))},s.prototype.serialize=function(){return A(this)},s.prototype.isOperator=function(e){return e instanceof v?this.isOperator(e.userId):this.operators.some((function(n){return n.userId===e}))},s.prototype._updateParticipantCount=function(e,n){return n>this._lastParticipantCountUpdated&&(this.participantCount=e,this._lastParticipantCountUpdated=n,!0)},s.prototype.createParticipantListQuery=function(e){return new Me(this._iid,this.url,e)},s.prototype.refresh=function(){return n(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,Ue.of(this._iid).getChannelWithoutCache(this.url)];case 1:return[2,e.sent()]}}))}))},s.prototype.enter=function(){return n(this,void 0,void 0,(function(){var e,n,r,a,o,i;return t(this,(function(t){switch(t.label){case 0:return e=I.of(this._iid).requestQueue,n=new ve({channelUrl:this.url}),[4,e.send(n)];case 1:return r=t.sent(),a=r.as(Ce),o=a.participantCount,i=a.ts,this._updateParticipantCount(o,i),Ue.of(this._iid).setEnteredToCache(this),[2]}}))}))},s.prototype.exit=function(){return n(this,void 0,void 0,(function(){var e,n,r,a,o,i;return t(this,(function(t){switch(t.label){case 0:return e=I.of(this._iid).requestQueue,n=new _e({channelUrl:this.url}),[4,e.send(n)];case 1:return r=t.sent(),a=r.as(ye),o=a.participantCount,i=a.ts,this._updateParticipantCount(o,i),Ue.of(this._iid).setExitedToCache(this),$.of(this._iid).fileMessageQueue.cancel(this),[2]}}))}))},s.prototype.updateChannel=function(e){return n(this,void 0,void 0,(function(){var n,r,s,u,c;return t(this,(function(t){switch(t.label){case 0:return n=_(_({},ge),e),D(function(e){return a("string",e.operatorUserIds,!0)&&(o("string",e.coverUrlOrImage)||i(e.coverUrlOrImage)||null===e.coverUrlOrImage)&&o("string",e.name,!0)&&o("string",e.data,!0)&&o("string",e.customType,!0)}(n)).throw(O.invalidParameters),r=I.of(this._iid).requestQueue,s=new Te(_({channelUrl:this.url},n)),[4,r.send(s)];case 1:return u=t.sent(),c=u.as(be).channel,this._update(c),[4,Ue.of(this._iid).upsertChannelsToCache([c])];case 2:return t.sent(),[2,this]}}))}))},s.prototype.updateChannelWithOperatorUserIds=function(e,r,a,o,i){return n(this,void 0,void 0,(function(){var n;return t(this,(function(t){return n=_(_({},ge),{name:e,coverUrlOrImage:r,data:a,operatorUserIds:o,customType:i}),[2,this.updateChannel(n)]}))}))},s.prototype.delete=function(){return n(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return e=I.of(this._iid).requestQueue,n=new Ne({channelUrl:this.url}),[4,e.send(n)];case 1:return t.sent(),[4,Ue.of(this._iid).removeChannelsFromCache([this.url])];case 2:return t.sent(),[2]}}))}))},s.prototype.sendUserMessage=function(e){return D(!e.isPinnedMessage).throw(O.notSupportedError),r.prototype.sendUserMessage.call(this,e)},s.prototype.sendFileMessage=function(e){return D(!e.isPinnedMessage).throw(O.notSupportedError),r.prototype.sendFileMessage.call(this,e)},s}(Z),De=function(n){function t(e){void 0===e&&(e={});var t=n.call(this)||this;return Object.keys(e).forEach((function(n){t.hasOwnProperty(n)&&(t[n]=e[n])})),t}return e(t,n),t}(function(n){function t(){var e=null!==n&&n.apply(this,arguments)||this;return e.onUserEntered=m,e.onUserExited=m,e.onChannelParticipantCountChanged=m,e.onPollUpdated=m,e.onPollVoted=m,e.onPollDeleted=m,e}return e(t,n),t}(ce)),Oe=function(n){function t(e){var t=this,r=e.token,a=e.limit,o=e.nameKeyword,i=e.urlKeyword,u=e.customTypes,l=e.includeFrozen,h=e.includeMetaData;return(t=n.call(this)||this).method=s.GET,t.path=c,t.params=d({token:r,limit:a,name_contains:o,url_contains:i,custom_types:u,show_frozen:l,show_metadata:h}),t}return e(t,n),t}(l),He=function(n){function t(e,t){var r=n.call(this,e,t)||this;r.channels=[];var a=t.next,o=t.channels,i=t.ts;return r.token=a,o&&o.length>0&&(r.channels=o.map((function(n){return new Pe(e,n)}))),r.ts="number"==typeof i?i:null,r}return e(t,n),t}(h),xe=function(r){function i(e,n){var t,a,o,i,s,u=this;return(u=r.call(this,e,n)||this).includeFrozen=!0,u.includeMetaData=!0,u.nameKeyword=null,u.urlKeyword=null,u.customTypes=null,u.includeFrozen=null===(t=n.includeFrozen)||void 0===t||t,u.includeMetaData=null===(a=n.includeMetaData)||void 0===a||a,u.nameKeyword=null!==(o=n.nameKeyword)&&void 0!==o?o:null,u.urlKeyword=null!==(i=n.urlKeyword)&&void 0!==i?i:null,u.customTypes=null!==(s=n.customTypes)&&void 0!==s?s:null,u}return e(i,r),i.prototype._validate=function(){return r.prototype._validate.call(this)&&o("boolean",this.includeFrozen)&&o("boolean",this.includeMetaData)&&o("string",this.nameKeyword,!0)&&o("string",this.urlKeyword,!0)&&a("string",this.customTypes,!0)},i.prototype.next=function(){return n(this,void 0,void 0,(function(){var e,n,r,a,o,i;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,4]:this._hasNext?(this._isLoading=!0,e=I.of(this._iid).requestQueue,n=new Oe(p(_(_({},this),{token:this._token}))),[4,e.send(n)]):[3,3]:[3,6];case 1:return r=t.sent(),a=r.as(He),o=a.channels,i=a.token,this._token=i,this._hasNext=!!i,[4,Ue.of(this._iid).upsertChannelsToCache(o)];case 2:return t.sent(),this._isLoading=!1,[2,o];case 3:return[2,[]];case 4:throw O.queryInProgress;case 5:return[3,7];case 6:throw O.invalidParameters;case 7:return[2]}}))}))},i}(L),Ie=function(r){function a(){var e=null!==r&&r.apply(this,arguments)||this;return e.name="openChannel",e}return e(a,r),a.prototype.init=function(e,n){var t=n.sdkState,a=n.dispatcher,o=n.sessionManager,i=n.requestQueue,s=n.logger,u=n.onlineDetector,c=n.cacheContext;r.prototype.init.call(this,e,{sdkState:t,dispatcher:a,sessionManager:o,requestQueue:i,logger:s,onlineDetector:u,cacheContext:c}),this._manager=new Ue(e,{sdkState:t,dispatcher:a,requestQueue:i,logger:s,cacheContext:c,sessionManager:o})},a.prototype.createOpenChannelListQuery=function(e){return void 0===e&&(e={}),new xe(this._iid,e)},a.prototype.addOpenChannelHandler=function(e,n){this._manager.addHandler(e,n)},a.prototype.removeOpenChannelHandler=function(e){this._manager.removeHandler(e)},a.prototype.removeAllOpenChannelHandlers=function(){this._manager.clearHandler()},a.prototype.buildOpenChannelFromSerializedData=function(e){return this._manager.buildOpenChannelFromSerializedData(e)},a.prototype.getChannel=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(n){return[2,this._manager.getChannel(e)]}))}))},a.prototype.getChannelWithoutCache=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(n){return[2,this._manager.getChannelWithoutCache(e)]}))}))},a.prototype.createChannel=function(e){return void 0===e&&(e={}),n(this,void 0,void 0,(function(){return t(this,(function(n){return[2,this._manager.createChannel(e)]}))}))},a.prototype.createChannelWithOperatorUserIds=function(e,r,a,o,i){return n(this,void 0,void 0,(function(){var n;return t(this,(function(t){return(n=_({},he)).name=e,n.coverUrlOrImage=r,n.data=a,n.operatorUserIds=o,n.customType=i,[2,this._manager.createChannel(n)]}))}))},a}(R);export{Pe as OpenChannel,De as OpenChannelHandler,xe as OpenChannelListQuery,Ie as OpenChannelModule,Me as ParticipantListQuery};
