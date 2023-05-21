import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { FirebaseError } from 'firebase/app';

import { auth } from '@/shared/config';
import { mapFirebaseAuthCodeToMessage } from '@/shared/lib/fp';

const initialUserState: TypeUser = { email: null, id: null };

const userStore: TypeUserStore = (set) => ({
  user: initialUserState,
  isAuth: false,
  isLoading: false,
  error: null,
  setUser: (user) => {
    set({
      user: {
        id: user.id,
        email: user.email,
      },
      isAuth: true,
    });
  },
  loginUser: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      set({
        user: {
          id: user.uid,
          email: user.email,
        },
        isAuth: true,
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        const errorMessage = mapFirebaseAuthCodeToMessage(e.code);

        set({ error: errorMessage });

        throw new Error(errorMessage);
      }
    } finally {
      set({ isLoading: false });
    }
  },
  registerUser: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      set({
        user: {
          id: user.uid,
          email: user.email,
        },
        isAuth: true,
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        const errorMessage = mapFirebaseAuthCodeToMessage(e.code);

        set({ error: errorMessage });

        throw new Error(errorMessage);
      }
    } finally {
      set({ isLoading: false });
    }
  },
  logoutUser: async (cb) => {
    await auth.signOut();

    set((state) => ({
      ...state,
      user: {
        ...initialUserState,
      },
      isAuth: false,
    }));

    cb();
  },
});

export const useUserStore = create<IUserStore>()(
  devtools(
    persist(userStore, {
      name: '@user',
    }),
    { name: '@user-store' }
  )
);

onAuthStateChanged(auth, (user) => {
  if (user) {
    useUserStore.setState({
      user: {
        id: user.uid,
        email: user.email,
      },
      isAuth: true,
    });
  } else {
    useUserStore.setState({
      user: {
        ...initialUserState,
      },
      isAuth: false,
    });
  }
});

type TypeUser = {
  id: string | null;
  email: string | null;
};

interface IUserStore {
  isAuth: boolean;
  user: TypeUser;
  isLoading: boolean;
  error: null | string;
  setUser: (user: TypeUser) => void;
  loginUser: (email: string, password: string) => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
  logoutUser: (cb: () => void) => Promise<void>;
}

type TypeUserStore = StateCreator<IUserStore>;
