import { initializeApp } from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from '@/shared/config';

export const firebase = initializeApp(firebaseConfig);
