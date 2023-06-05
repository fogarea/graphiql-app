import { Avatar as MUIAvatar } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import styled from '@mui/material/styles/styled';
import { useImageLoader } from '@/shared/lib/hooks';

export const DeveloperAvatar = ({ src, alt }: IDeveloperAvatarProps): JSX.Element => {
  const { isImageLoaded } = useImageLoader(src);

  if (!isImageLoaded) {
    return <Skeleton variant="circular" animation="wave" width={128} height={128} />;
  }

  return <Avatar src={src} alt={alt} />;
};

interface IDeveloperAvatarProps {
  src: string;
  alt: string;
}

const Avatar = styled(MUIAvatar)(() => ({
  width: 128,
  height: 128,
}));
