import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { auth } from '@/shared/config';
import { mapFirebaseAuthCodeToMessage } from '@/shared/lib';

const initialUserState: TypeUser = { email: null, token: null, id: null };

const userStore: TypeUserStore = (set) => ({
  user: initialUserState,
  isAuth: false,
  isLoading: false,
  error: null,
  loginUser: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      set({
        user: {
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
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
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
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
    })
  )
);

type TypeUser = {
  email: string | null;
  token: string | null;
  id: string | null;
};

interface IUserStore {
  isAuth: boolean;
  user: TypeUser;
  isLoading: boolean;
  error: null | string;
  loginUser: (email: string, password: string) => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
  logoutUser: (cb: () => void) => Promise<void>;
}

type TypeUserStore = StateCreator<IUserStore>;
