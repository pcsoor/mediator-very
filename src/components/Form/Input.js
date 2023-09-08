import React from 'react'
import Label from './Label'
import "./form.css"

export default function Input({
    addon,
    addonPosition,
    autoFocus,
    error,
    label,
    max,
    min,
    name,
    noRightPadding,
    onBlur,
    onChange,
    optional,
    placeholder,
    tooltip,
    type,
    value,
    className,
    disabled,
    maxLength,
    autoComplete,
  }) {
    return (
      <>
        <div className='input-wrapper'>
            <Label label={label} />
        
            <div className="relative">
                {addonPosition === 'start' && <p className="absolute left-32 top-1/2 transform -translate-y-1/2">{addon}</p>}

                <input
                    autoFocus={autoFocus}
                    className={`
                        ${className ? className : 'input'}
                        ${error && 'error'}
                        ${addonPosition === 'start' && 'text-right'}
                    `}
                    max={max}
                    min={min}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    disabled={disabled}
                    maxLength={maxLength}
                    autoComplete={autoComplete}
                />

                {addonPosition === 'end' && <p className="absolute right-32 top-1/2 transform -translate-y-1/2">{addon}</p>}

                {(optional && type !== 'number' || (optional && !value && value != 0 && type === 'number')) && <p className="optional-text">Optional</p>}
            </div>
        </div>
        
      </>
    )
  }
  