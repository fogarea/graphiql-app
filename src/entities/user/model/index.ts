import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

//TODO: implement navigate

const initialUserState: TypeUser = { email: null, token: null, id: null };

const userStore: TypeUserStore = (set) => ({
  user: initialUserState,
  isAuth: false,
  setUser: (user: TypeUser) => set((state) => ({ ...state, user: user, isAuth: true })),
  removeUser: () =>
    set((state) => ({
      ...state,
      user: {
        ...initialUserState,
      },
      isAuth: false,
    })),
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
  setUser: (user: TypeUser) => void;
  removeUser: () => void;
}

type TypeUserStore = StateCreator<IUserStore>;
