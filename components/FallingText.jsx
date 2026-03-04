'use client';

import { useEffect, useRef } from 'react';

const TEXT = 'FRONTEND DEVELOPER';

export default function FallingText() {
    const sceneRef = useRef(null);

    useEffect(() => {
        let engine = null;
        let render = null;
        let runner = null;

        const init = async () => {
            const Matter = await import('matter-js');

            const {
                Engine,
                Render,
                Runner,
                Bodies,
                Composite,
                World,
                Events,
                Body,
            } = Matter;

            if (!sceneRef.current) return;

            engine = Engine.create();
            const world = engine.world;

            const width = sceneRef.current.offsetWidth;
            const height = sceneRef.current.offsetHeight;

            render = Render.create({
                element: sceneRef.current,
                engine,
                options: {
                    width,
                    height,
                    background: '#FFF9EF',
                    wireframes: false,
                },
            });

            Render.run(render);

            runner = Runner.create();
            Runner.run(runner, engine);

            const { Mouse, MouseConstraint } = Matter;

            const mouse = Mouse.create(render.canvas);

            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: 0.2,
                    render: { visible: false },
                },
            });

            Events.on(engine, 'beforeUpdate', () => {
                const mousePosition = mouse.position;

                Composite.allBodies(world).forEach((body) => {
                    if (!body.letter) return;

                    const dx = body.position.x - mousePosition.x;
                    const dy = body.position.y - mousePosition.y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const maxDistance = 175;

                    if (distance < maxDistance) {
                        const forceMagnitude = 0.002;

                        Body.applyForce(body, body.position, {
                            x: dx * forceMagnitude,
                            y: dy * forceMagnitude,
                        });
                    }
                });
            });

            World.add(world, mouseConstraint);

            mouse.element.removeEventListener('wheel', mouse.mousewheel);
            mouse.element.removeEventListener('mousewheel', mouse.mousewheel);

            render.mouse = mouse;

            const WALL = 200;

            const walls = [
                Bodies.rectangle(width / 2, height + WALL / 2, width + WALL, WALL, { isStatic: true }),
                Bodies.rectangle(-WALL / 2, height / 2, WALL, height + WALL, { isStatic: true }),
                Bodies.rectangle(width + WALL / 2, height / 2, WALL, height + WALL, { isStatic: true }),
            ];

            World.add(world, walls);

            const SIZE = 120;
            const RADIUS = 24;

            TEXT.split('').forEach((letter, index) => {
                if (letter === ' ') return;

                const body = Bodies.rectangle(
                    150 + index * 90,
                    -150 - index * 60,
                    SIZE,
                    SIZE,
                    {
                        restitution: 0.6,
                        friction: 0.4,
                        chamfer: { radius: RADIUS },
                        render: {
                            fillStyle: '#89B0EA',
                        },
                    }
                );

                (body).letter = letter;
                World.add(world, body);
            });

            Events.on(render, 'afterRender', () => {
                const ctx = render.context;

                Composite.allBodies(world).forEach((body) => {
                    if (!body.letter) return;

                    ctx.save();
                    ctx.translate(body.position.x, body.position.y);
                    ctx.rotate(body.angle);

                    ctx.fillStyle = '#FFF9EF';
                    ctx.font = 'bold 60px Inter, Arial, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';


                    ctx.fillText(body.letter, 0, 0);
                    ctx.restore();
                });
            });
        };

        init();

        return () => {
            if (render) {
                render.canvas.remove();
                render.textures = {};
            }
            if (runner) {
                runner.enabled = false;
            }
            if (engine) {
                engine.world.bodies = [];
            }
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            className="absolute inset-0 w-full h-full overflow-hidden"
        />
    );
}