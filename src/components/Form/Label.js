import React from 'react'

export default function Label({
    label
}) {
    if (!label) return null

    return (
        <div>
            <label className="label">
                {label}
            </label>
        </div>
    )
}