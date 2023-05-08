import i18n from 'i18next';

const enum FirebaseAuthCode {
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
}

export const mapFirebaseAuthCodeToMessage = (firebaseCode: string): string => {
  switch (firebaseCode) {
    case FirebaseAuthCode.EMAIL_ALREADY_IN_USE:
      return i18n.t('toast.email-already-in-use');

    case FirebaseAuthCode.USER_NOT_FOUND:
      return i18n.t('toast.user-not-found');

    case FirebaseAuthCode.WRONG_PASSWORD:
      return i18n.t('toast.wrong-password');

    default:
      return i18n.t('toast.something-went-wrong');
  }
};
