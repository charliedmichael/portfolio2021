(function() {
    'use strict';
    var a = Math.min
      , b = Math.max
      , c = {
        normalize: a=>{
            let c = new THREE.Box3().setFromObject(a)
              , d = new THREE.Vector3;
            c.getCenter(a.position),
            c.getSize(d);
            let e = 1 / b(d.x, d.y);
            return a.position.multiplyScalar(-e),
            a.scale.multiplyScalar(e),
            a.userData.size = d.multiplyScalar(e).clone(),
            a
        }
        ,
        createContainer: a=>{
            let b = new THREE.Object3D;
            return b.add(a),
            b
        }
    }
      , d = {
        getFileExtension: a=>{
            let b = a.split(/[?#]/)[0]
              , c = b.split("/")
              , d = c.pop()
              , e = d.split(".");
            if (0 < e.length)
                return "." + e.pop()
        }
    };
    const e = {}
      , f = a=>{
        let b, f, g = d.getFileExtension(a);
        return (g && (b = e[g]),
        !b) ? (console.error(`Couldn't load "${a}". Unknown object format "${g}"`),
        Promise.reject()) : (f = b.objectCache[a],
        f || (f = b.load(a).then(a=>(c.normalize(a),
        c.createContainer(a))),
        b.objectCache[a] = f),
        f.then(a=>a.clone()))
    }
    ;
    var g = {
        load: f,
        register: (a,b)=>{
            e[a] = {
                load: b,
                objectCache: {}
            }
        }
    };
    const h = a=>parseFloat(a || 0);
    var i = {
        parseTransformValue: (a,b)=>{
            var d = a.split(/\s*[(),]\s*/).slice(1, -1);
            6 === d.length ? b.set(+d[0], -d[2], 0, +d[4], -d[1], +d[3], 0, -d[5], 0, 0, 1, 0, 0, 0, 0, 1) : 16 === d.length ? b.set(+d[0], -d[4], +d[8], +d[12], -d[1], +d[5], -d[9], -d[13], +d[2], -d[6], +d[10], +d[14], +d[3], +d[7], +d[11], +d[15]) : b.identity()
        }
        ,
        parseOriginValue: (a,b)=>{
            let c = a.split(" ");
            b.set(h(c[0]), h(c[1]), h(c[2]))
        }
        ,
        parseUnitValue: h
    };
    const j = a=>{
        let b = document.createElement("style");
        return b.textContent = a,
        b
    }
    ;
    var k = {
        getTransformForElement: a=>{
            let b = new THREE.Matrix4
              , c = new THREE.Matrix4
              , d = new THREE.Vector3
              , e = new THREE.Matrix4
              , f = a
              , g = []
              , h = 0
              , j = 0;
            for (; a; )
                a === f && (h += a.offsetLeft,
                j += a.offsetTop,
                f = a.offsetParent),
                g.push(a),
                h -= a.scrollLeft,
                j -= a.scrollTop,
                a = a.parentElement;
            for (b.makeTranslation(h, -j, 0); a = g.pop(); ) {
                let f = getComputedStyle(a);
                i.parseOriginValue(f.transformOrigin, d),
                i.parseTransformValue(f.transform, c);
                let g = d.x - a.offsetWidth / 2
                  , h = d.y - a.offsetHeight / 2
                  , j = d.z;
                0 != g || 0 !== h || 0 !== j ? (b.multiply(e.makeTranslation(g, -h, j)),
                b.multiply(c),
                b.multiply(e.makeTranslation(-g, h, -j))) : b.multiply(c)
            }
            return b
        }
        ,
        getProjectionForElement: c=>{
            let d, e = new THREE.Vector3, f = {
                left: 0,
                top: 0,
                right: innerWidth,
                bottom: innerHeight
            }, g = {
                left: 0,
                top: 0,
                right: innerWidth,
                bottom: innerHeight
            };
            for (; c; ) {
                let h = getComputedStyle(c)
                  , j = c.getBoundingClientRect()
                  , k = h.perspective;
                if (!d && "none" !== k) {
                    d = i.parseUnitValue(k),
                    g.top = j.top,
                    g.left = j.left,
                    g.right = j.right,
                    g.bottom = j.bottom;
                    let a = h.perspectiveOrigin;
                    a && i.parseOriginValue(a, e)
                }
                "visible" !== h.overflow && (f.top = b(j.top, f.top),
                f.left = b(j.left, f.left),
                f.right = a(j.right, f.right),
                f.bottom = a(j.bottom, f.bottom)),
                c = c.parentElement
            }
            return {
                perspective: d,
                perspectiveOrigin: e,
                clipBounds: f,
                cameraBounds: g
            }
        }
        ,
        createStylesheet: j
    };
    let l, m, n, o, p, q, r, s;
    const t = []
      , u = ()=>!r && (r = new THREE.Scene,
    s = new THREE.PointLight(8421504,2,0),
    s.position.set(0, 0, 0),
    r.add(s),
    q = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    }),
    q.setPixelRatio(window.devicePixelRatio),
    q.setScissorTest(!0),
    q.setClearColor(0, 0),
    q.autoClear = !1,
    q.sortObjects = !1,
    requestAnimationFrame(y),
    q.domElement)
      , v = ()=>(m = window.innerWidth,
    n = window.innerHeight,
    l = null,
    q.setSize(m, n),
    q.clear(),
    t.forEach(b=>{
        let c = b.elem;
        if (c) {
            let d, e, f, g, h = b.children[0], i = c.shadowRoot.children[1], j = h.userData.size, o = c.offsetWidth, p = c.offsetHeight, t = a(o / j.x, p / j.y), u = j.x * t;
            if (d = k.getProjectionForElement(c),
            f = d.clipBounds.bottom - d.clipBounds.top,
            g = d.clipBounds.right - d.clipBounds.left,
            0 >= g || 0 >= f)
                return;
            e = k.getTransformForElement(c),
            b.rotation.setFromRotationMatrix(e),
            b.position.setFromMatrixPosition(e),
            b.scale.setFromMatrixScale(e),
            b.scale.multiplyScalar(t);
            let v = j.x * t
              , y = j.y * t
              , z = j.z * t;
            i.style.transform = `translate(-50%,-50%)scale3d(${v},${y},${z})`,
            b.position.x -= u - o / 2,
            b.position.x += u - m / 2,
            b.position.y -= p / 2,
            b.position.y += n / 2,
            l = d.perspective ? x(d.cameraBounds, d.perspective, d.perspectiveOrigin) : w(d.cameraBounds),
            s.position.x = d.cameraBounds.left + (d.cameraBounds.right - d.cameraBounds.left) / 2 - m / 2,
            s.position.y = n / 2 - d.cameraBounds.top - (d.cameraBounds.bottom - d.cameraBounds.top) / 2,
            s.position.z = l.far,
            q.setScissor(d.clipBounds.left, n - d.clipBounds.bottom, g, f),
            r.add(b),
            q.render(r, l),
            r.remove(b)
        }
    }
    ),
    !!l)
      , w = a=>{
        let b;
        return p || (p = new THREE.OrthographicCamera),
        b = p,
        b.left = a.left - m / 2,
        b.top = -a.top + n / 2,
        b.bottom = -a.bottom + n / 2,
        b.right = a.right - m / 2,
        b.near = -700,
        b.updateProjectionMatrix(),
        b
    }
      , x = (a,b,c)=>{
        let d;
        o || (o = new THREE.PerspectiveCamera),
        d = o,
        d.fov = 180 * (2 * Math.atan(n / 2 / b)) / Math.PI,
        d.aspect = m / n,
        d.position.set(0, 0, b),
        d.updateProjectionMatrix();
        let e = m / 2 - a.left - c.x
          , f = n / 2 - a.top - c.y;
        if (0 != e || 0 !== f) {
            let a = d.projectionMatrix.clone();
            d.projectionMatrix.makeTranslation(-e / (m / 2), f / (n / 2), 0),
            d.projectionMatrix.multiply(a),
            a.makeTranslation(e, -f, 0),
            d.projectionMatrix.multiply(a)
        }
        return d
    }
      , y = ()=>{
        requestAnimationFrame(y),
        v()
    }
    ;
    var z = {
        init: u,
        add: a=>{
            let b = t.indexOf(a);
            return !(-1 !== b) && (t.push(a),
            !0)
        }
        ,
        remove: a=>{
            let b = t.indexOf(a);
            return !!(-1 < b) && (t.splice(b, 1),
            !0)
        }
        ,
        render: y
    };
    const A = new WeakMap
      , B = {
        width: "--xModelWidth",
        height: "--xModelHeight"
    }
      , C = `<style>${":host{display:inline-block;width:var(--xModelWidth,200px);height:var(--xModelHeight,150px);transform-style:var(--xModelBoundingBoxTransformStyle, preserve-3d)}.boundingBox{visibility:var(--xModelBoundingBoxVisibility, hidden);transform-style:inherit;position:relative;left:50%;top:50%;width:1px;height:1px;background:#08c}.boundingBox__face{position:absolute;width:1px;height:1px;background:#0c0}.boundingBox__face:nth-child(1){transform:translateZ(-.5px)}.boundingBox__face:nth-child(2){transform:translateZ(.5px)}.boundingBox__face:nth-child(3){transform:translateY(-.5px)rotateX(90deg)}.boundingBox__face:nth-child(4){transform:translateY(.5px)rotateX(-90deg)}.boundingBox__face:nth-child(5){transform:translateX(.5px)rotateY(-90deg)}.boundingBox__face:nth-child(6){transform:translateX(-.5px)rotateY(-90deg)}"}</style>` + "<div class=\"boundingBox\">" + "<div class=\"boundingBox__face\"></div>".repeat(6) + "</div>";
    let D, E;
    const F = a=>{
        a.forEach(a=>{
            let b = A.get(a.target.parentElement);
            a.isIntersecting ? 6 > b.axisInView && (0 === b.axisInView && z.add(b),
            b.axisInView++) : 0 < b.axisInView && (b.axisInView--,
            0 === b.axisInView && z.remove(b))
        }
        )
    }
      , G = ()=>{
        D = k.createStylesheet(":root{transform-style:flat!important;}#x-model-renderLayer{position:fixed;top:0;left:0;pointer-events:none}");
        let a = document.documentElement.firstChild;
        a.insertBefore(D, a.firstChild);
        let b = z.init();
        b.setAttribute("id", "x-model-renderLayer"),
        document.documentElement.appendChild(b),
        E = new IntersectionObserver(F)
    }
    ;
    class H extends HTMLElement {
        constructor() {
            super(),
            this.attachShadow({
                mode: "open"
            }),
            this.shadowRoot.innerHTML = C
        }
        static get observedAttributes() {
            return ["src", "width", "height"]
        }
        connectedCallback() {
            D || G();
            let b = A.get(this);
            if (b && b.elem !== this) {
                let c = b.children[0]
                  , d = c.userData.size
                  , e = a(this.offsetWidth / d.x, this.offsetHeight / d.y)
                  , f = d.x * e
                  , g = d.y * e
                  , h = d.z * e
                  , i = this.shadowRoot.querySelector(".boundingBox");
                i.style.transform = `translate(-50%,-50%)scale3d(${f},${g},${h})`;
                let j = Array.from(i.children);
                j.forEach(a=>E.observe(a)),
                b.elem = this,
                b.axisInView = 0,
                A.set(i, b)
            }
        }
        disconnectedCallback() {
            let a = A.get(this);
            if (a && a.elem === this) {
                let b = this.shadowRoot.querySelector(".boundingBox")
                  , c = Array.from(b.children);
                c.forEach(a=>E.unobserve(a)),
                a.elem = null
            }
        }
        attributeChangedCallback(a, b, c) {
            if ("width" === a || "height" === a) {
                null !== c && (c += "px");
                let b = B[a];
                this.shadowRoot.children[0].sheet.rules[0].style.setProperty(b, c)
            } else
                "src" === a && (this.disconnectedCallback(),
                g.load(c).then(a=>{
                    let b = new UIEvent("load");
                    this.dispatchEvent(b),
                    A.set(this, a),
                    this.connectedCallback()
                }
                ).catch(()=>{
                    let a = new UIEvent("error");
                    this.dispatchEvent(a)
                }
                ))
        }
    }
    let I;
    var J = a=>new Promise((b,c)=>{
        return I || (I = new THREE.GLTFLoader),
        I.load(a, a=>{
            b(a.scene)
        }
        , null, ()=>{
            c()
        }
        )
    }
    );
    let K;
    var L = a=>new Promise((b,c)=>{
        return K || (K = new THREE.OBJLoader),
        K.load(a, a=>{
            b(a)
        }
        , null, ()=>{
            c()
        }
        )
    }
    );
    if ("customElements"in window) {
        if (!("THREE"in window))
            throw "THREE (threejs.org) is required.";
        "GLTFLoader"in THREE && (g.register(".gltf", J),
        g.register(".glb", J)),
        "OBJLoader"in THREE && g.register(".obj", L),
        customElements.define("x-model", H)
    }
}
)();
