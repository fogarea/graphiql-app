import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const getEnvVar = (key: string): string => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return (import.meta.env[key] as string) || '';
};

export const firebaseConfig = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY'),
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvVar('VITE_FIREBASE_APP_ID'),
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
