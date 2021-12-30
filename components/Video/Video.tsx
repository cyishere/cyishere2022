import { useRef } from "react";
import styled from "styled-components";
import { Play, Pause, VolumeX, Volume2 } from "react-feather";

import useVideoPlayer from "@/hooks/useVideoPlayer";
import UnstyledButton from "../UnstyledButton";

interface VideoProps {
  src: string;
  description?: string;
}

const Video: React.FC<VideoProps> = ({ src, description }) => {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElementRef.current);

  return (
    <Wrapper>
      <Container>
        <TheVideo
          src={src}
          ref={videoElementRef}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <Controls>
          <Actions>
            <UnstyledButton onClick={togglePlay}>
              {playerState.isPlaying ? <Pause /> : <Play />}
            </UnstyledButton>
          </Actions>

          <RangeInput
            type="range"
            min={0}
            max={100}
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />

          <Selector
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </Selector>

          <UnstyledButton onClick={toggleMute}>
            {playerState.isMuted ? <Volume2 /> : <VolumeX />}
          </UnstyledButton>
        </Controls>
      </Container>
      {description ? <Description>{description}</Description> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TheVideo = styled.video`
  width: 100%;
`;

const Controls = styled.div`
  --color-base: 0deg 0% 100%;
  color: hsl(var(--color-base));
  background-color: hsl(var(--color-base) / 0.25);
  box-shadow: 0 8px 32px 0 hsl(var(--color-base) / 0.1);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  border: 1px solid hsl(var(--color-base) / 0.18);
  transform: translateY(200%);
  transition: transform 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: absolute;
  bottom: 30px;
  padding: 10px;
  width: 100%;
  max-width: 500px;

  button {
    display: grid;
    place-content: center;
  }
`;

const Container = styled.div`
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:hover ${Controls} {
    transform: translateY(0%);
  }
`;

const Actions = styled.div``;

const RangeInput = styled.input`
  -webkit-appearance: none !important;
  background-color: hsl(var(--color-base) / 0.2);
  border-radius: 20px;
  height: 4px;
  width: 350px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    height: 6px;
    cursor: pointer;
  }

  &::-moz-range-progress {
    background-color: hsl(var(--color-base));
  }
`;

const Selector = styled.select`
  appearance: none;
  background: none;
  color: hsl(var(--color-base));
  outline: none;
  border: none;
  text-align: center;
  font-size: 16px;
`;

const Description = styled.p`
  font-size: var(--font-size-sm);
  color: var(--clr-text-light);
  text-align: center;
  margin-top: 0.5em;
`;

export default Video;
