'use client'; // Mark this as a client-side component

import React, { useEffect } from 'react';

// Define a more specific type for dataLayer
interface DataLayerEvent {
  event: string; // 'event' is required
  [key: string]: any; // This allows additional dynamic properties
}

// Declare the global types for window
declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag: (...args: DataLayerEvent[]) => void; // gtag expects an array of DataLayerEvent objects
  }
}

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-EZDPF9KV1N";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];

      // Implement gtag to accept a single DataLayerEvent or multiple
      window.gtag = (...args: DataLayerEvent[]) => {
        args.forEach(event => {
          window.dataLayer.push(event);
        });
      };

      // Call the gtag function with required event data
      window.gtag({ event: 'js', timestamp: new Date() });
      window.gtag({ event: 'config', tracking_id: 'G-EZDPF9KV1N' });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
