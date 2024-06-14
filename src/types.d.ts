// types.d.ts
declare var process: {
    env: {
      RAZORPAY_KEY_ID: string;
    };
  };
  
  interface Window {
    Razorpay: any;
  }
  