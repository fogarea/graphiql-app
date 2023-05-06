import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/shared/config';

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
      if (e instanceof Error) set({ error: e.message });
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
      if (e instanceof Error) set({ error: e.message });
    } finally {
      set({ isLoading: false });
    }
  },
  logoutUser: async (navigate) => {
    await auth.signOut();

    set((state) => ({
      ...state,
      user: {
        ...initialUserState,
      },
      isAuth: false,
    }));

    navigate();
  },
});

export const useAuth = create<IUserStore>()(
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
  error: string | null;
  loginUser: (email: string, password: string) => Promise<void>;
  registerUser: (email: string, password: string) => Promise<void>;
  logoutUser: (navigate: () => void) => Promise<void>;
}

type TypeUserStore = StateCreator<IUserStore>;
