import React, { useMemo, useRef, useCallback, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { generateGraphData } from '../data/graphData';
import * as THREE from 'three';

import { colors, CENTRAL_NODE_COLOR } from '../utils/colors';

const NetworkGraph = () => {
    const fgRef = useRef();
    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [hoverNode, setHoverNode] = useState(null);

    const data = useMemo(() => generateGraphData(), []);

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };

    const handleNodeClick = useCallback(node => {
        setHighlightNodes(prev => {
            const newHighlights = new Set();
            newHighlights.add(node);
            // Add neighbors
            data.links.forEach(link => {
                if (link.source.id === node.id) newHighlights.add(link.target);
                if (link.target.id === node.id) newHighlights.add(link.source);
            });
            return newHighlights;
        });

        setHighlightLinks(prev => {
            const newHighlights = new Set();
            data.links.forEach(link => {
                if (link.source.id === node.id || link.target.id === node.id) {
                    newHighlights.add(link);
                }
            });
            return newHighlights;
        });

        // Camera focus removed as per request
        // const distance = 60;
        // const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
        // fgRef.current.cameraPosition(
        //     { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        //     node,
        //     3000
        // );
    }, [data, fgRef]);

    const handleBackgroundClick = useCallback(() => {
        setHighlightNodes(new Set());
        setHighlightLinks(new Set());
    }, []);

    return (
        <ForceGraph3D
            ref={fgRef}
            graphData={data}
            nodeLabel="id"

            // Visuals
            backgroundColor="#000011"
            showNavInfo={false}

            // Nodes
            nodeVal={node => node.val} // Already small in data (5-10)
            nodeColor={node => {
                if (highlightNodes.size > 0 && !highlightNodes.has(node)) {
                    return '#333333'; // Dimmed
                }
                if (node.id === 'Feminism') return CENTRAL_NODE_COLOR;
                return colors[node.group] || '#ffffff';
            }}
            nodeOpacity={1}
            nodeResolution={16}

            // Links
            linkWidth={link => highlightLinks.has(link) ? 2 : 0.5}
            linkColor={link => highlightLinks.has(link) ? '#ffffff' : '#555555'}
            linkOpacity={link => highlightLinks.has(link) ? 1 : 0.2}
            linkDirectionalParticles={link => highlightLinks.has(link) ? 4 : 0}
            linkDirectionalParticleWidth={2}

            // Forces
            d3Force={('link', (force) => {
                // Increase link distance to spread out the graph
                force.distance(100);
            })}
            d3VelocityDecay={0.1} // Lower decay for more movement/settling

            // Interaction
            onNodeClick={handleNodeClick}
            onBackgroundClick={handleBackgroundClick}
            onNodeHover={setHoverNode}

            // Container
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
};

export default NetworkGraph;
