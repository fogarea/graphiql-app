import Skeleton from '@mui/material/Skeleton';
import { useImageLoader } from '@/shared/lib/hooks';

export const FeatureImage = ({ src, alt }: IProgressiveImageProps): JSX.Element => {
  const { isImageLoaded } = useImageLoader(src);

  if (!isImageLoaded) {
    return <Skeleton variant="circular" animation="wave" width={300} height={300} />;
  }

  return <img src={src} alt={alt} width={300} height={300} />;
};

interface IProgressiveImageProps {
  src: string;
  alt: string;
}
