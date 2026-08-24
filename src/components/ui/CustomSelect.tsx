import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './ui.css';

interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  hasError?: boolean;
  className?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  value,
  options,
  placeholder = 'Select a subject...',
  onChange,
  onBlur,
  disabled = false,
  hasError = false,
  className = '',
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedby
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
          onBlur?.();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onBlur]);

  const handleToggle = () => {
    if (disabled) return;
    if (isOpen) {
      onBlur?.();
    }
    setIsOpen((prev) => !prev);
  };

  const handleSelectOption = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else if (focusedIndex >= 0 && focusedIndex < options.length) {
        handleSelectOption(options[focusedIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(options.length - 1);
      } else {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      onBlur?.();
    } else if (e.key === 'Tab') {
      if (isOpen) {
        setIsOpen(false);
        onBlur?.();
      }
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`custom-select-container ${isOpen ? 'is-open' : ''} ${hasError ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${className}`}
    >
      <button
        type="button"
        id={id}
        className="custom-select-trigger"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
      >
        <span className={`custom-select-value ${!value ? 'is-placeholder' : ''}`}>
          {value || placeholder}
        </span>
        <ChevronDown size={18} className={`custom-select-chevron ${isOpen ? 'is-open' : ''}`} />
      </button>

      {isOpen && (
        <div className="custom-select-menu" role="listbox">
          {options.map((option, idx) => {
            const isSelected = value === option;
            const isFocused = focusedIndex === idx;
            return (
              <div
                key={option}
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? 'is-selected' : ''} ${isFocused ? 'is-focused' : ''}`}
                onClick={() => handleSelectOption(option)}
                onMouseEnter={() => setFocusedIndex(idx)}
              >
                <span>{option}</span>
                {isSelected && <Check size={16} className="option-check-icon" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
