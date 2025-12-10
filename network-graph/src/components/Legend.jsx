import React from 'react';
import { colors, CENTRAL_NODE_COLOR } from '../utils/colors';

const Legend = () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            zIndex: 10,
            backgroundColor: 'rgba(0, 0, 17, 0.8)',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #333',
            color: 'white',
            fontFamily: 'sans-serif',
            fontSize: '0.8rem',
            maxHeight: '40vh',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            // If closed, only show header/button height (approximated or auto)
            width: isOpen ? 'auto' : '150px'
        }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: isOpen ? '10px' : '0',
                    cursor: 'pointer'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Legend</h3>
                <span style={{ marginLeft: '10px', fontSize: '1.2em' }}>{isOpen ? '−' : '+'}</span>
            </div>

            {isOpen && (
                <div style={{ overflowY: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <span style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: CENTRAL_NODE_COLOR,
                            marginRight: '8px',
                            boxShadow: '0 0 5px white'
                        }}></span>
                        <span>Central Node (Feminism)</span>
                    </div>

                    {Object.entries(colors).map(([group, color]) => (
                        <div key={group} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <span style={{
                                display: 'inline-block',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                marginRight: '8px'
                            }}></span>
                            <span>{group}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Legend;
