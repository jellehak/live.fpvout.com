const r="1.0.0",i="live.fpvout.com",c=r,o=["/","/assets/Gidole-Regular.ttf","/assets/app.js","/assets/index.css"];self.addEventListener("install",function(e){e.waitUntil(caches.open(`${c}-${i}`).then(function(t){return t.addAll(o)}))});self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(t){return Promise.all(t.filter(s=>s.indexOf(c)!==0).map(s=>caches.delete(s)))}))});self.addEventListener("fetch",function(e){var s;const t=e.request;if(t.method!=="GET"){e.respondWith(fetch(t));return}if(((s=t.headers.get("Accept"))==null?void 0:s.indexOf("text/html"))!==-1&&t.url.startsWith(this.origin)){e.respondWith(fetch(t).then(n=>{const a=n.clone();return caches.open(c+i).then(h=>h.put(t,a)),n}).catch(()=>caches.match(t).then(n=>n||caches.match("/"))));return}else e.respondWith(caches.match(t).then(n=>n||fetch(t)))});
