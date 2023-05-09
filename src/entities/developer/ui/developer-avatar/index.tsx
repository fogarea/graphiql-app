import { Avatar, Skeleton } from '@mui/material';
import { useImageLoader } from '@/shared/lib';

export const DeveloperAvatar = ({ src, alt }: IDeveloperAvatarProps): JSX.Element => {
  const { isImageLoaded } = useImageLoader(src);

  if (!isImageLoaded) {
    return <Skeleton variant="circular" animation="wave" width={128} height={128} />;
  }

  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{
        width: 128,
        height: 128,
      }}
    />
  );
};

interface IDeveloperAvatarProps {
  src: string;
  alt: string;
}
