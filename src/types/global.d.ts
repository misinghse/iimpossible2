/**
 * Defines the structure for events pushed into the dataLayer.
 */
interface DataLayerEvent {
    [key: string]: unknown;
  }
  
  declare global {
    interface Window {
      /**
       * Array of custom events for Google Tag Manager or other analytics.
       */
      dataLayer: DataLayerEvent[];
      /**
       * Function to send events to the LinkedIn Insight Tag.
       * @param action - The action identifier (e.g., "track").
       * @param payload - An object containing event details.
       */
      lintrk: (action: string, payload: DataLayerEvent) => void;
    }
  }
  
  export {}; // Ensure this file is treated as a module.
  