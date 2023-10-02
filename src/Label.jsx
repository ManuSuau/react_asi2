import React from 'react';

function Label({ label, value }) {
    return (
        <div className="Label">
            <strong>{label}:</strong> {value}
        </div>
    );
}

export default Label;