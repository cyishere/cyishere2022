import { ReactVideo } from "reactjs-media";

const Video = ({ src, poster, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ReactVideo
        src={src}
        poster={poster}
        type="video/mp4"
        className="video-wrapper"
      />
      {description ? (
        <p className="text-base text-gray-400 mt-2">{description}</p>
      ) : null}
    </div>
  );
};

export default Video;
