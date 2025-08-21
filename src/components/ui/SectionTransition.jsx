import React, { useEffect, useRef, useState } from 'react';

const SectionTransition = ({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1,
  animationType = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (elementRef?.current) {
      observer?.observe(elementRef?.current);
    }

    return () => {
      if (elementRef?.current) {
        observer?.unobserve(elementRef?.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    switch (animationType) {
      case 'fade-up':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'
        }`;
      case 'fade-in':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100' :'opacity-0'
        }`;
      case 'slide-left':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' :'opacity-0 translate-x-8'
        }`;
      case 'slide-right':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' :'opacity-0 -translate-x-8'
        }`;
      case 'scale':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 scale-100' :'opacity-0 scale-95'
        }`;
      default:
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'
        }`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTransition;