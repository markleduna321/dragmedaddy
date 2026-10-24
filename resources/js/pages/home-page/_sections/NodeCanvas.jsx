import React, { useEffect, useRef, useState } from 'react';

const steps = ['Arrange your blocks', 'Connect the logic', 'Make it real'];

export default function NodeCanvas() {
    const containerRef = useRef(null);
    const stageRef = useRef(null);
    const [status, setStatus] = useState('loading');
    const [paused, setPaused] = useState(false);
    const pauseRef = useRef(false);
    const refreshRef = useRef(null);

    useEffect(() => {
        pauseRef.current = paused;
        refreshRef.current?.();
    }, [paused]);

    useEffect(() => {
        const container = containerRef.current;
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        let disposed = false;
        let disposeScene;

        import('three').then((THREE) => {
            if (disposed) return;

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('webgl2', { alpha: true, antialias: true });
            if (!context) {
                console.warn('FullStackCanvas hero: WebGL 2 is unavailable; displaying the static workflow.');
                setStatus('unavailable');
                return;
            }

            const renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true, antialias: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setClearColor(0x000000, 0);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            canvas.className = 'h-full w-full';
            canvas.setAttribute('aria-hidden', 'true');
            container.appendChild(canvas);

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-6, 6, 4.5, -4.5, 0.1, 100);
            camera.position.z = 20;
            const board = new THREE.Group();
            board.rotation.set(-0.08, -0.08, -0.04);
            scene.add(board);

            const resources = new Set();
            const keep = (resource) => {
                resources.add(resource);
                return resource;
            };
            let frameId = 0;
            let previousTime = null;
            let elapsed = 0;
            let visible = true;
            let contextLost = false;
            let reducedMotion = motionPreference.matches;
            let graphicsDisposed = false;
            const disposeGraphics = () => {
                if (graphicsDisposed) return;
                graphicsDisposed = true;
                if (frameId) cancelAnimationFrame(frameId);
                resources.forEach((resource) => resource.dispose());
                renderer.dispose();
                if (!context.isContextLost()) renderer.forceContextLoss();
                canvas.remove();
            };
            disposeScene = disposeGraphics;

            const dotPositions = [];
            for (let x = -6; x <= 6; x += 0.5) {
                for (let y = -4.5; y <= 4.5; y += 0.5) dotPositions.push(x, y, -0.5);
            }
            const dots = keep(new THREE.BufferGeometry());
            dots.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));
            board.add(new THREE.Points(dots, keep(new THREE.PointsMaterial({ color: 0x9bb8ed, size: 0.035 }))));

            const specs = [
                { title: 'Lead capture form', subtitle: 'UI TRIGGER', detail: 'name   /   email   /   submit', from: [-4.3, 3.1], to: [-3.2, 1.9], blue: false },
                { title: 'Validate input', subtitle: 'VALIDATION', detail: 'required  +  email  +  unique', from: [-3.8, -3.1], to: [0, 0], blue: true },
                { title: 'Save to database', subtitle: 'DATABASE ACTION', detail: 'Lead::create($validated)', from: [4.3, -3], to: [3.2, -1.9], blue: false },
                { title: 'Ready to export', subtitle: 'LARAVEL + REACT', detail: 'Your application. Your code.', from: [4.3, 3], to: [3.2, 1.9], blue: false },
            ];

            const cards = specs.map((spec, index) => {
                const image = document.createElement('canvas');
                image.width = 768;
                image.height = 384;
                const ctx = image.getContext('2d');
                if (!ctx) throw new Error('Unable to create a 2D texture for the hero workflow.');
                ctx.fillStyle = spec.blue ? '#1d4ed8' : '#ffffff';
                ctx.strokeStyle = spec.blue ? '#2563eb' : '#c7d8f5';
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.roundRect(3, 3, 762, 378, 38);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = spec.blue ? '#bfdbfe' : '#1d4ed8';
                ctx.font = 'bold 27px Arial';
                ctx.fillText(spec.subtitle, 40, 69);
                ctx.fillStyle = spec.blue ? '#ffffff' : '#0f172a';
                ctx.font = 'bold 43px Arial';
                ctx.fillText(spec.title, 40, 143);
                ctx.fillStyle = spec.blue ? '#bfdbfe' : '#64748b';
                ctx.font = '27px monospace';
                ctx.fillText(spec.detail, 40, 202);
                ctx.fillStyle = spec.blue ? '#60a5fa' : '#dbeafe';
                ctx.beginPath();
                ctx.roundRect(40, 249, 430, 17, 8);
                ctx.roundRect(40, 286, 280, 17, 8);
                ctx.fill();
                ctx.fillStyle = spec.blue ? '#ffffff' : '#1d4ed8';
                ctx.beginPath();
                ctx.arc(682, 285, 30, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = spec.blue ? '#1d4ed8' : '#ffffff';
                ctx.font = 'bold 28px Arial';
                ctx.fillText(String(index + 1).padStart(2, '0'), 666, 294);

                const texture = keep(new THREE.CanvasTexture(image));
                texture.colorSpace = THREE.SRGBColorSpace;
                const card = new THREE.Mesh(
                    keep(new THREE.PlaneGeometry(2.95, 1.475)),
                    keep(new THREE.MeshBasicMaterial({ map: texture, transparent: true })),
                );
                card.position.z = 0.2;
                board.add(card);
                return card;
            });

            const edges = [[0, 1], [1, 2], [2, 3]].map(([from, to]) => {
                const start = new THREE.Vector3(...specs[from].to, 0);
                const end = new THREE.Vector3(...specs[to].to, 0);
                const curve = new THREE.CubicBezierCurve3(
                    start, new THREE.Vector3(start.x, end.y, 0), new THREE.Vector3(end.x, start.y, 0), end,
                );
                const geometry = keep(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)));
                const line = new THREE.Line(geometry, keep(new THREE.LineBasicMaterial({ color: 0x6094ed })));
                board.add(line);
                const particle = new THREE.Mesh(
                    keep(new THREE.SphereGeometry(0.075, 12, 8)),
                    keep(new THREE.MeshBasicMaterial({ color: 0x1d4ed8 })),
                );
                board.add(particle);
                return { curve, geometry, particle };
            });

            const cursorShape = new THREE.Shape();
            cursorShape.moveTo(0, 0);
            cursorShape.lineTo(0.06, -0.55);
            cursorShape.lineTo(0.2, -0.38);
            cursorShape.lineTo(0.37, -0.55);
            cursorShape.lineTo(0.48, -0.43);
            cursorShape.lineTo(0.3, -0.26);
            cursorShape.lineTo(0.53, -0.2);
            cursorShape.closePath();
            const cursor = new THREE.Mesh(
                keep(new THREE.ShapeGeometry(cursorShape)),
                keep(new THREE.MeshBasicMaterial({ color: 0x0f172a })),
            );
            cursor.position.z = 1;
            board.add(cursor);

            const pulse = new THREE.Mesh(
                keep(new THREE.RingGeometry(0.17, 0.2, 48)),
                keep(new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0 })),
            );
            pulse.position.z = 0.7;
            board.add(pulse);

            const render = (time) => {
                frameId = 0;
                if (disposed || contextLost) return;
                if (previousTime !== null && !pauseRef.current && !reducedMotion) {
                    elapsed += Math.min((time - previousTime) / 1000, 0.05);
                }
                previousTime = time;
                const cycle = reducedMotion ? 8 : elapsed % 12;
                specs.forEach((spec, index) => {
                    const progress = THREE.MathUtils.clamp((cycle - index * 0.85) / 1.2, 0, 1);
                    const eased = progress * progress * (3 - 2 * progress);
                    cards[index].position.x = THREE.MathUtils.lerp(spec.from[0], spec.to[0], eased);
                    cards[index].position.y = THREE.MathUtils.lerp(spec.from[1], spec.to[1], eased);
                    cards[index].rotation.z = (1 - eased) * (index % 2 ? -0.08 : 0.08);
                    cards[index].scale.setScalar(1 + Math.sin(progress * Math.PI) * 0.04);
                });
                edges.forEach((edge, index) => {
                    const progress = THREE.MathUtils.clamp((cycle - 4 - index * 0.5) / 0.7, 0, 1);
                    edge.geometry.setDrawRange(0, Math.floor(progress * 81));
                    edge.particle.visible = !reducedMotion && progress === 1;
                    edge.particle.position.copy(edge.curve.getPoint(((cycle - 4) * 0.4 + index * 0.3) % 1));
                    edge.particle.position.z = 0.4;
                });
                const activeIndex = Math.min(3, Math.floor(cycle / 0.85));
                cursor.visible = !reducedMotion && cycle < 4;
                cursor.position.x = cards[activeIndex].position.x + 0.8;
                cursor.position.y = cards[activeIndex].position.y - 0.4;
                const dropIndex = THREE.MathUtils.clamp(Math.floor((cycle - 1.05) / 0.85), 0, 3);
                const drop = (cycle - dropIndex * 0.85 - 1.05) / 0.45;
                pulse.visible = !reducedMotion && drop > 0 && drop < 1;
                pulse.position.x = specs[dropIndex].to[0] + 0.8;
                pulse.position.y = specs[dropIndex].to[1] - 0.4;
                pulse.scale.setScalar(1 + Math.max(0, drop) * 3);
                pulse.material.opacity = Math.max(0, 1 - drop);
                board.position.y = reducedMotion ? 0 : Math.sin(elapsed * 0.5) * 0.05;
                if (stageRef.current) stageRef.current.textContent = steps[cycle < 4 ? 0 : cycle < 6.5 ? 1 : 2];
                renderer.render(scene, camera);
                if (visible && !document.hidden && !reducedMotion && !pauseRef.current) frameId = requestAnimationFrame(render);
            };

            const refresh = () => {
                previousTime = null;
                if (frameId) cancelAnimationFrame(frameId);
                frameId = 0;
                if (visible && !document.hidden && !contextLost) frameId = requestAnimationFrame(render);
            };
            refreshRef.current = refresh;
            const resize = () => {
                const { width, height } = container.getBoundingClientRect();
                if (!width || !height) return;
                const aspect = width / height;
                const halfWidth = Math.max(6.1, 4.6 * aspect);
                camera.left = -halfWidth;
                camera.right = halfWidth;
                camera.top = halfWidth / aspect;
                camera.bottom = -halfWidth / aspect;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height, false);
                refresh();
            };
            const onMotionChange = (event) => {
                reducedMotion = event.matches;
                refresh();
            };
            const onContextLost = (event) => {
                event.preventDefault();
                contextLost = true;
                console.warn('FullStackCanvas hero: WebGL context lost; displaying the static workflow.');
                disposeScene?.();
                setStatus('unavailable');
            };
            const resizeObserver = new ResizeObserver(resize);
            const intersectionObserver = new IntersectionObserver(([entry]) => {
                visible = entry.isIntersecting;
                refresh();
            });
            disposeScene = () => {
                refreshRef.current = null;
                resizeObserver.disconnect();
                intersectionObserver.disconnect();
                motionPreference.removeEventListener('change', onMotionChange);
                document.removeEventListener('visibilitychange', refresh);
                canvas.removeEventListener('webglcontextlost', onContextLost);
                disposeGraphics();
            };
            resizeObserver.observe(container);
            intersectionObserver.observe(container);
            motionPreference.addEventListener('change', onMotionChange);
            document.addEventListener('visibilitychange', refresh);
            canvas.addEventListener('webglcontextlost', onContextLost);
            resize();
            setStatus('ready');
        }).catch((error) => {
            disposeScene?.();
            console.error('FullStackCanvas hero animation could not start:', error);
            if (!disposed) setStatus('unavailable');
        });

        return () => {
            disposed = true;
            disposeScene?.();
        };
    }, []);

    return (
        <figure className="relative min-w-0" aria-label="Illustration of interface blocks being arranged and connected into an exportable application">
            <div className="absolute inset-8 rounded-full bg-blue-200/50 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white/50 shadow-2xl shadow-blue-950/10 ring-1 ring-blue-100">
                <div className="flex items-center justify-between border-b border-blue-100/70 bg-white/70 px-4 py-4 sm:px-6">
                    <span className="flex items-center gap-2 text-xs font-bold text-blue-900">
                        <span className="h-2 w-2 rounded-full bg-blue-600" /> The canvas, connected.
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">Idea to application</span>
                </div>
                <div className="relative aspect-[6/5] sm:aspect-[4/3]">
                    <div ref={containerRef} className={`absolute inset-0 ${status === 'ready' ? '' : 'invisible'}`} />
                    {status !== 'ready' && (
                        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                            <ol className="grid w-full max-w-md grid-cols-2 gap-3">
                                {['Lead capture form', 'Validate input', 'Save to database', 'Ready to export'].map((label, index) => (
                                    <li key={label} className="rounded-xl border border-blue-100 bg-white p-3 text-xs font-bold leading-5 text-blue-900 shadow-sm sm:p-5">
                                        <span className="mb-1 block text-[10px] font-medium tracking-widest text-blue-600">{String(index + 1).padStart(2, '0')} /</span>
                                        {label}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-blue-100/70 bg-white/80 px-4 py-4 sm:px-6">
                    <div>
                        <p ref={stageRef} className="text-sm font-bold text-blue-900">Arrange your blocks</p>
                        <p className="mt-1 text-[10px] text-slate-500">
                            {status === 'loading' ? 'Loading the interactive illustration...' : status === 'unavailable' ? 'Static preview - animation is unavailable on this device.' : 'Compose visually. Connect logically. Export confidently.'}
                        </p>
                    </div>
                    {status === 'ready' && (
                        <button
                            type="button"
                            aria-pressed={paused}
                            onClick={() => setPaused((value) => !value)}
                            className="shrink-0 rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-medium text-blue-800 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:hidden"
                        >
                            {paused ? 'Resume' : 'Pause'}
                        </button>
                    )}
                </figcaption>
            </div>
        </figure>
    );
}
