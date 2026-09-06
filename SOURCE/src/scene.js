import * as THREE from "three";
import { roomStatus, nightInfo, clamp } from "./engine.js";
const palette = { wall: 14205860, trim: 3373945, roof: 2706261, wood: 7361860, linen: 15653821, blanket: 13330505, asphalt: 2505539, sand: 7954511 };
class MotelScene {
  constructor(canvas, onSelect, settings) {
    this.canvas = canvas;
    this.onSelect = onSelect;
    this.settings = settings;
    this.selected = null;
    this.time = 0;
    this.yaw = 0.19;
    this.pitch = 0.82;
    this.zoom = 1;
    this.target = new THREE.Vector3(0, 0, 0);
    this.roomGroups = [];
    this.materials = /* @__PURE__ */ new Map();
    this.people = [];
    this.cars = [];
    this.disposed = false;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(1255734);
    this.scene.fog = new THREE.FogExp2(1518646, 0.011);
    this.camera = new THREE.OrthographicCamera(-25, 25, 20, -20, 0.1, 180);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "low-power" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, settings.compact || settings.quality === "low" ? 1 : 1.6));
    this.renderer.shadowMap.enabled = !settings.compact && settings.quality !== "low";
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.scene.add(new THREE.HemisphereLight(11065830, 9790017, 2.4));
    this.sun = new THREE.DirectionalLight(16764832, 3.3);
    this.sun.position.set(-18, 35, 12);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    Object.assign(this.sun.shadow.camera, { left: -32, right: 32, top: 28, bottom: -28, near: 0.5, far: 95 });
    this.sun.shadow.bias = -1e-3;
    this.scene.add(this.sun);
    this.fill = new THREE.DirectionalLight(7187392, 1.2);
    this.fill.position.set(20, 10, -15);
    this.scene.add(this.fill);
    this.buildGround();
    this.buildMotel();
    this.buildProps();
    this.buildActors();
    this.buildWeather();
    this.scene.traverse(o=>{if(o.isPointLight)o.visible=!settings.compact;});
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.bindControls();
    this.resize();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas);
  }
  mat(color, extra = {}) {
    const key = color + JSON.stringify(extra);
    if (!this.materials.has(key)) this.materials.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.86, ...extra }));
    return this.materials.get(key);
  }
  box(w, h, d, color, x = 0, y = 0, z = 0, parent = this.scene, extra = {}) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.mat(color, extra));
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  cylinder(top, bottom, h, color, x, y, z, parent = this.scene, n = 8) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(top, bottom, h, n), this.mat(color));
    m.position.set(x, y, z);
    m.castShadow = true;
    parent.add(m);
    return m;
  }
  text(label, w, h, x, y, z, parent = this.scene, color = "#ffe2a7", bg = "#253e43", size = 70) {
    const c = document.createElement("canvas");
    c.width = 768;
    c.height = 256;
    const ctx = c.getContext("2d");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `bold ${size}px Arial, sans-serif`;
    ctx.fillText(label, 384, 128, 720);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, side: THREE.DoubleSide }));
    mesh.position.set(x, y, z);
    parent.add(mesh);
    return mesh;
  }
  buildGround() {
    this.box(140, 0.3, 130, palette.sand, 0, -0.48, 0);
    this.box(47, 0.22, 20, 3426122, 0, -0.18, 2);
    this.box(45, 0.16, 4, 9600355, 0, -0.06, -5);
    this.box(150, 0.04, 7, palette.asphalt, 0, -0.28, 19);
    for (let i = -70; i < 75; i += 8) this.box(3, 0.02, 0.14, 12626549, i, -0.245, 19);
    for (let i = 0; i < 8; i++) {
      const x = -12 + i * 4;
      this.box(0.09, 0.025, 5, 12828064, x, 0, 9);
    }
    this.box(34, 0.16, 0.25, 12298634, 1, 0, 12);
    this.box(46, 0.14, 0.25, 12298634, 0, 0.02, -9);
    for (let i = 0; i < 17; i++) {
      const x = -65 + i * 8;
      const m = new THREE.Mesh(new THREE.ConeGeometry(9 + i % 3 * 3, 9 + i % 5 * 3, 5), this.mat(i % 2 ? 4937568 : 5464939));
      m.position.set(x, 2, -39 - i % 3 * 6);
      m.rotation.y = i * 0.7;
      this.scene.add(m);
    }
    for (let i = 0; i < 15; i++) {
      const x = i < 8 ? -34 - i % 3 * 6 : 29 + i % 4 * 7, z = -20 + i * 11 % 51;
      this.cactus(x, z, 1 + i % 3 * 0.3);
    }
    const starGeometry = new THREE.BufferGeometry(), positions = [];
    for (let i = 0; i < 120; i++) {
      const a = i * 2.399;
      positions.push(Math.cos(a) * 70, 28 + i % 13 * 3, -25 - Math.abs(Math.sin(a)) * 55);
    }
    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    this.scene.add(new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 15850685, size: 0.1, transparent: true, opacity: 0.7 })));
  }
  cactus(x, z, s = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(s);
    this.scene.add(g);
    this.cylinder(0.23, 0.28, 2.8, 4814950, 0, 1.3, 0, g);
    this.box(0.9, 0.35, 0.35, 4814950, 0.45, 1.5, 0, g);
    this.cylinder(0.16, 0.18, 1.1, 4814950, 0.85, 1.95, 0, g);
    this.box(0.7, 0.32, 0.32, 4814950, -0.42, 0.85, 0, g);
    this.cylinder(0.15, 0.17, 0.8, 4814950, -0.7, 1.1, 0, g);
  }
  buildMotel() {
    for (let i = 0; i < 10; i++) {
      const g = new THREE.Group();
      const wing = i >= 6;
      g.position.set(wing ? -19 : -12.5 + i * 5, 0, wing ? -4 + (i - 6) * 5 : -4);
      this.scene.add(g);
      const room = { group: g, objects: [], id: i + 1 };
      g.userData.room = i + 1;
      this.box(4.8, 0.28, 5, 12365459, 0, 0.13, 0, g);
      this.box(4.65, 0.04, 4.8, i % 2 ? 12226680 : 11967874, 0, 0.3, 0, g);
      this.box(4.8, 2.9, 0.18, palette.wall, 0, 1.65, -2.45, g);
      this.box(0.14, 1.15, 5, palette.wall, -2.33, 0.87, 0, g);
      this.box(0.14, 1.15, 5, palette.wall, 2.33, 0.87, 0, g);
      this.box(4.9, 0.2, 0.3, palette.trim, 0, 3.1, -2.45, g);
      this.box(1.85, 0.4, 2.55, palette.wood, -0.75, 0.53, -0.25, g);
      this.box(1.78, 0.3, 2.48, palette.linen, -0.75, 0.86, -0.25, g);
      room.blanket = this.box(1.81, 0.07, 1.5, palette.blanket, -0.75, 1.05, 0.24, g);
      this.box(1.55, 0.17, 0.55, 16772562, -0.75, 1.11, -1.15, g);
      this.box(1.95, 1.1, 0.15, palette.wood, -0.75, 0.83, -1.65, g);
      this.box(0.55, 0.62, 0.6, palette.wood, 0.65, 0.59, -1.43, g);
      this.cylinder(0.15, 0.2, 0.45, 14402446, 0.65, 1.1, -1.43, g);
      this.cylinder(0.27, 0.37, 0.4, 16306330, 0.65, 1.51, -1.43, g);
      this.box(1.12, 0.75, 0.55, palette.wood, 1.46, 0.65, 0.92, g);
      this.box(0.95, 0.63, 0.08, 2111812, 1.46, 1.34, 0.85, g);
      this.box(0.75, 0.45, 0.035, 6720923, 1.46, 1.34, 0.9, g, { emissive: 4418937, emissiveIntensity: 0.2 });
      this.box(1.18, 0.1, 0.95, 4948091, -0.7, 0.38, 1.55, g);
      room.frame = this.box(0.9, 0.6, 0.06, 3702662, 0.5, 2.3, -2.32, g);
      this.box(0.65, 0.37, 0.025, 14069103, 0.5, 2.3, -2.28, g);
      room.plant = new THREE.Group();
      room.plant.position.set(1.6, 0.35, -1.72);
      g.add(room.plant);
      this.cylinder(0.24, 0.18, 0.35, 12018243, 0, 0.17, 0, room.plant);
      this.cylinder(0, 0.4, 0.65, 7181425, 0, 0.66, 0, room.plant, 5);
      room.plant.visible = false;
      room.luxury = this.box(1.05, 0.15, 1.05, 13868867, 1.35, 0.35, -0.6, g);
      room.luxury.visible = false;
      room.dirt = new THREE.Group();
      g.add(room.dirt);
      for (let j = 0; j < 4; j++) {
        const p = this.box(0.28, 0.035, 0.22, 15721421, 0.5 + j * 0.3, 0.36, 1.3 - j * 0.35, room.dirt);
        p.rotation.y = j * 0.8;
      }
      room.dirt.visible = false;
      room.damage = this.box(0.12, 0.08, 0.65, 5281968, 1.8, 0.4, 1.7, g);
      room.damage.visible = false;
      room.closed = this.box(4.7, 0.1, 4.7, 4281177, 0, 0.38, 0, g);
      room.closed.visible = false;
      room.label = this.text(String(101 + i), 1.12, 0.36, 0, 1.1, 2.58, g, "#ffebc8", "#245b5d", 90);
      room.label.rotation.x = -0.18;
      room.status = this.cylinder(0.17, 0.17, 0.09, 8639933, 1.82, 0.5, 2.2, g, 12);
      room.status.material = this.mat(8639933, { emissive: 8639933, emissiveIntensity: 0.8 }).clone();
      room.request = new THREE.Group();
      room.request.position.set(0, 3.8, 0);
      g.add(room.request);
      this.cylinder(0.3, 0.3, 0.6, 16039254, 0, 0, 0, room.request, 5);
      this.cylinder(0.1, 0.1, 0.14, 16039254, 0, -0.55, 0, room.request, 8);
      room.request.visible = false;
      room.highlight = this.box(4.98, 0.04, 5.2, 16368748, 0, 0.01, 0, g, { emissive: 16368748, emissiveIntensity: 0.6 });
      room.highlight.visible = false;
      const light = new THREE.PointLight(16762253, 8, 6, 2);
      light.position.set(0.65, 1.9, -1.43);
      g.add(light);
      room.light = light;
      this.roomGroups.push(room);
    }
    const office = new THREE.Group();
    office.position.set(19, 0, -4);
    this.scene.add(office);
    this.box(5, 0.3, 5.5, 10324850, 0, 0.1, 0, office);
    this.box(5, 3.2, 0.2, palette.trim, 0, 1.7, -2.7, office);
    this.box(0.2, 3.2, 5.5, palette.trim, 2.4, 1.7, 0, office);
    this.box(5.3, 0.3, 5.8, palette.roof, 0, 3.4, 0, office);
    this.box(2.7, 1.2, 0.6, 12086343, 0, 0.9, 1.4, office);
    this.box(0.75, 0.45, 0.06, 14073221, 0, 1.74, 1.4, office);
    this.text("OFFICE", 3.2, 0.7, 0, 2.62, 2.85, office);
    this.text("ROUTE 86", 2.5, 0.5, 0, 2.05, -2.56, office, "#e2bf87", "#245b5d");
    this.box(35, 0.1, 1.3, 11838085, 2, 0.13, -0.7);
  }
  buildProps() {
    this.sign = new THREE.Group();
    this.sign.position.set(17, 0, 10.5);
    this.scene.add(this.sign);
    this.box(0.25, 6, 0.25, 7770508, -1.5, 3, 0, this.sign);
    this.box(0.25, 6, 0.25, 7770508, 1.5, 3, 0, this.sign);
    this.box(5.7, 2.9, 0.38, 2974306, 0, 5.7, 0, this.sign);
    this.text("LAST STOP", 5.2, 1.05, 0, 6.33, 0.21, this.sign, "#ffcb86", "#244e51", 88);
    this.text("M O T E L", 4.9, 0.83, 0, 5.33, 0.21, this.sign, "#f58b6e", "#244e51", 78);
    this.vacancy = this.text("VACANCY", 3.2, 0.65, 0, 4.08, 0.22, this.sign, "#9cdad0", "#1e3d42", 84);
    this.neon = this.box(5.75, 0.09, 0.44, 15304546, 0, 7.15, 0, this.sign, { emissive: 16024665, emissiveIntensity: 2 });
    this.garden = new THREE.Group();
    this.scene.add(this.garden);
    for (let i = 0; i < 4; i++) {
      const x = -7 + i * 3;
      this.cylinder(0.65, 0.5, 0.5, 12020813, x, 0.25, 4, this.garden);
      this.cylinder(0, 0.9, 1.5, 7052152, x, 1.2, 4, this.garden, 6);
    }
    this.garden.visible = false;
    for (const x of [-14, 10]) {
      this.cylinder(0.1, 0.13, 4.8, 7505280, x, 2.4, 4);
      this.box(0.8, 0.2, 0.55, 15188634, x, 4.8, 4, this.scene, { emissive: 16761477, emissiveIntensity: 1.5 });
      const l = new THREE.PointLight(16763276, 22, 13, 2);
      l.position.set(x, 4.5, 4);
      this.scene.add(l);
    }
    this.coffee = new THREE.Group();
    this.coffee.position.set(16, 0.3, 0.4);
    this.scene.add(this.coffee);
    this.box(1.3, 0.7, 0.75, palette.wood, 0, 0.35, 0, this.coffee);
    this.box(0.5, 0.65, 0.45, 14201982, 0, 1, 0, this.coffee);
    this.coffee.visible = false;
    for (const x of [-6, 5]) {
      this.box(2, 0.18, 0.6, 9465682, x, 0.6, 3);
      this.box(2, 0.6, 0.15, 9465682, x, 0.96, 2.74);
      this.box(0.15, 0.55, 0.5, 3821907, x - 0.8, 0.3, 3);
      this.box(0.15, 0.55, 0.5, 3821907, x + 0.8, 0.3, 3);
    }
  }
  person(color) {
    const g = new THREE.Group();
    this.box(0.4, 0.65, 0.27, color, 0, 0.72, 0, g);
    this.cylinder(0.18, 0.18, 0.33, 13673084, 0, 1.24, 0, g, 8);
    const legs = [];
    for (const x of [-0.11, 0.11]) legs.push(this.box(0.14, 0.42, 0.17, 3361364, x, 0.23, 0, g));
    g.userData.legs = legs;
    this.scene.add(g);
    return g;
  }
  car(color) {
    const g = new THREE.Group();
    this.box(1.65, 0.5, 3, color, 0, 0.57, 0, g);
    this.box(1.4, 0.5, 1.55, color, 0, 1.02, -0.05, g);
    this.box(1.22, 0.35, 0.06, 7774381, 0, 1.04, 0.75, g);
    this.box(1.22, 0.35, 0.06, 7774381, 0, 1.04, -0.85, g);
    for (const x of [-0.8, 0.8]) for (const z of [-0.94, 0.94]) {
      const w = this.cylinder(0.31, 0.31, 0.18, 1912888, x, 0.35, z, g, 10);
      w.rotation.z = Math.PI / 2;
    }
    for (const x of [-0.55, 0.55]) this.box(0.34, 0.15, 0.05, 16768432, x, 0.65, 1.54, g, { emissive: 16765860, emissiveIntensity: 0.6 });
    this.scene.add(g);
    return g;
  }
  buildActors() {
    for (let i = 0; i < 10; i++) {
      const g = this.person([13336667, 7645338, 11772090, 14597238][i % 4]);
      g.visible = false;
      this.people.push(g);
      const car = this.car([10310467, 6590345, 13020799, 5600650, 12698029][i % 5]);
      car.position.set(-10 + i * 3.35, 0, 8);
      car.visible = false;
      this.cars.push(car);
    }
    this.workerActors = [this.person(15449704), this.person(8765104), this.person(7442350), this.person(11769776)];
  }
  buildWeather() {
    const vertices = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      vertices[i * 3] = (Math.sin(i * 8.17) * 0.5 + 0.5) * 60 - 30;
      vertices[i * 3 + 1] = i % 57 / 57 * 30;
      vertices[i * 3 + 2] = Math.cos(i * 6.19) * 25;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    this.rain = new THREE.Points(geo, new THREE.PointsMaterial({ color: 10865112, size: 0.055, transparent: true, opacity: 0.55 }));
    this.scene.add(this.rain);
    this.rain.visible = false;
  }
  bindControls() {
    this.pointers = /* @__PURE__ */ new Map();
    this.dragged = false;
    this.lastDistance = null;
    this.canvas.addEventListener("pointerdown", (e) => {
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      this.canvas.setPointerCapture(e.pointerId);
      this.start = { x: e.clientX, y: e.clientY };
      if(this.pointers.size===1)this.dragged=false;
      else this.dragged=true;
    });
    this.canvas.addEventListener("pointermove", (e) => {
      const old = this.pointers.get(e.pointerId);
      if (!old) return;
      const dx = e.clientX - old.x, dy = e.clientY - old.y;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (Math.abs(e.clientX - this.start.x) + Math.abs(e.clientY - this.start.y) > 8) this.dragged = true;
      if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (this.lastDistance) this.zoom = clamp(this.zoom * dist / this.lastDistance, 0.65, 2.3);
        this.lastDistance = dist;
      } else {
        this.yaw -= dx * 4e-3;
        this.pitch = clamp(this.pitch + dy * 3e-3, 0.5, 1.35);
      }
      this.updateCamera();
    });
    this.canvas.addEventListener("pointerup", (e) => {
      if (!this.dragged && this.pointers.size === 1) this.pick(e.clientX, e.clientY);
      this.pointers.delete(e.pointerId);
      this.lastDistance = null;
    });
    this.canvas.addEventListener("pointercancel", (e) => {
      this.pointers.delete(e.pointerId);
      this.lastDistance = null;
    });
    this.canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      this.zoom = clamp(this.zoom * Math.exp(-e.deltaY * 1e-3), 0.65, 2.3);
      this.updateCamera();
    }, { passive: false });
    this.canvas.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      this.disposed = true;
      window.dispatchEvent(new Event("motel-context-lost"));
    });
  }
  pick(x, y) {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.set((x - rect.left) / rect.width * 2 - 1, -(y - rect.top) / rect.height * 2 + 1);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.roomGroups.map((r) => r.group), true);
    if (hits.length) {
      let o = hits[0].object;
      while (o && !o.userData.room) o = o.parent;
      if (o) this.onSelect(o.userData.room);
    }
  }
  resize() {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.aspect = w / h;
    this.updateCamera();
  }
  updateCamera() {
    const aspect = this.aspect || 1;
    let view = aspect < 1 ? 25 / aspect : 23;
    this.camera.left = -view * aspect;
    this.camera.right = view * aspect;
    this.camera.top = view * (this.settings.compact ? .74 : 1);
    this.camera.bottom = -view * (this.settings.compact ? 1.26 : 1);
    this.camera.zoom = this.zoom;
    this.camera.position.set(Math.sin(this.yaw) * 48 * Math.cos(this.pitch), Math.sin(this.pitch) * 48, Math.cos(this.yaw) * 48 * Math.cos(this.pitch));
    this.camera.lookAt(this.target);
    this.camera.updateProjectionMatrix();
  }
  select(id) {
    this.selected = id;
  }
  control(action) {
    if (action === "reset") {
      this.yaw = 0.19;
      this.pitch = 0.82;
      this.zoom = 1;
    }
    if (action === "left") this.yaw -= 0.2;
    if (action === "right") this.yaw += 0.2;
    if (action === "in") this.zoom = clamp(this.zoom * 1.18, 0.65, 2.3);
    if (action === "out") this.zoom = clamp(this.zoom / 1.18, 0.65, 2.3);
    this.updateCamera();
  }
  setQuality(q) {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.settings.compact || q === "low" ? 1 : 1.6));
    this.renderer.shadowMap.enabled = !this.settings.compact && q !== "low";
    this.scene.traverse(o=>{if(o.isPointLight)o.visible=!this.settings.compact;});
    this.resize();
  }
  update(s, delta) {
    if (this.disposed) return;
    this.time += delta;
    const reduced = this.settings.compact || this.settings.reducedMotion;
    for (let i = 0; i < this.roomGroups.length; i++) {
      const view = this.roomGroups[i], r = s.rooms[i];
      view.closed.visible = !r.open;
      view.dirt.visible = r.open && r.clean < 75;
      view.damage.visible = r.open && r.condition < 55;
      view.plant.visible = r.open && r.quality >= 1;
      view.luxury.visible = r.open && r.quality >= 2;
      view.frame.visible = r.quality >= 2;
      view.highlight.visible = this.selected === r.id;
      view.request.visible = !!r.request;
      if (r.request) view.request.position.y = 3.8 + (reduced ? 0 : Math.sin(this.time * 3) * 0.14);
      const colors = { Ready: 8771770, Occupied: 15118188, "Needs cleaning": 13138277, "Needs repair": 14969177, Closed: 5993081, Cleaning: 8961744, Repairing: 8961744, "Guest service": 8961744 };
      const c = colors[roomStatus(r)] || 7829367;
      view.status.material.color.setHex(c);
      view.status.material.emissive.setHex(c);
      view.light.intensity = r.open ? r.guest ? 9 : 4 : 0;
      view.blanket.material = this.mat(r.quality === 3 ? 3440523 : r.quality === 2 ? 5798025 : r.quality === 1 ? 11174504 : palette.blanket);
      const p = this.people[i];
      p.visible = !!r.guest;
      if (r.guest) {
        const dest = view.group.position;
        p.position.set(dest.x + 1.1, 0.31, dest.z + 0.8);
        p.rotation.y = Math.sin(this.time * 0.2 + i) * 0.3;
      }
      const car = this.cars[i];
      car.visible = !!r.guest;
      car.position.x = -12 + i * 3.1;
    }
    const assignments = [s.playerJob, ...["rosa", "eli", "june"].map((id) => s.staff.find((w) => w.id === id)?.job || null)];
    this.workerActors.forEach((p, i) => {
      const id = assignments[i];
      p.visible = i === 0 || s.staff.some((w) => w.id === ["rosa", "eli", "june"][i - 1] && w.active);
      const room = id ? this.roomGroups[id - 1] : null;
      const goal = new THREE.Vector3(room ? room.group.position.x + 1.5 : 17 + i * 0.55, 0.12, room ? room.group.position.z + 1.8 : 1.5);
      if (reduced) p.position.copy(goal);
      else {
        p.position.lerp(goal, Math.min(1, delta * 2));
        const moving = p.position.distanceTo(goal) > 0.2;
        p.userData.legs.forEach((leg, j) => leg.rotation.x = moving ? Math.sin(this.time * 10 + j * Math.PI) * 0.45 : 0);
      }
      p.rotation.y = id ? Math.PI : 0;
    });
    this.garden.visible = s.upgrades.includes("garden");
    this.coffee.visible = s.upgrades.includes("coffee");
    this.neon.material.emissiveIntensity = s.upgrades.includes("sign") ? 3 : 1.3;
    const rain = nightInfo(s).weather === "Heavy rain" && s.phase === "night";
    this.rain.visible = rain && !reduced && !this.settings.compact;
    if (this.rain.visible) {
      const a = this.rain.geometry.attributes.position;
      for (let i = 0; i < a.count; i++) {
        a.array[i * 3 + 1] -= delta * 13;
        if (a.array[i * 3 + 1] < 0) a.array[i * 3 + 1] = 30;
      }
      a.needsUpdate = true;
    }
    const night = s.phase === "night" ? Math.sin(Math.PI * s.minute / 480) : 0.05;
    this.sun.intensity = 3.3 - night * 2.8;
    this.fill.intensity = 0.9 + night * 0.4;
    this.scene.background.setRGB(0.075 - night * 0.035, 0.15 - night * 0.07, 0.19 - night * 0.07);
    this.scene.fog.color.copy(this.scene.background);
    this.vacancy.visible = s.rooms.some((r) => roomStatus(r) === "Ready");
    this.renderer.render(this.scene, this.camera);
  }
}
export {
  MotelScene
};
