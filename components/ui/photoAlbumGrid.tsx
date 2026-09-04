import { PhotoAlbum, RenderPhotoProps } from "react-photo-album";

interface PhotoAlbumGridProps {
  photoAlbumGridProps: {
      src: string;
      width: number;
      height: number;
  }[];
}

const PhotoAlbumGrid: React.FC<PhotoAlbumGridProps> = ({ photoAlbumGridProps }) => {
  
  const renderPhoto = (
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      // The photo-album library owns responsive image sizing and requires a native image renderer.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          ...style,
          borderRadius: "10px",
          boxShadow:"none",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        {...rest}
      />
    )
  )
  
  return (
        <PhotoAlbum 
            layout="masonry"
            photos={photoAlbumGridProps}
            renderPhoto={renderPhoto}
        />
    )
}

export default PhotoAlbumGrid;
