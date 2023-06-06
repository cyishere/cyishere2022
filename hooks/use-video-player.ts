import { ChangeEvent, useEffect, useState } from 'react';

export interface PlayerStateType {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
}

const useVideoPlayer = (videoElement: HTMLVideoElement | null) => {
  const [playerState, setPlayerState] = useState<PlayerStateType>({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    if (!videoElement) return;

    playerState.isPlaying ? videoElement.play() : videoElement.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    if (!videoElement) return;

    const progress = (videoElement.currentTime / videoElement.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event: ChangeEvent<HTMLInputElement>) => {
    if (!videoElement) return;

    const manualChange = Number(event.target.value);
    videoElement.currentTime = (videoElement.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!videoElement) return;

    const speed = Number(event.target.value);
    videoElement.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    if (!videoElement) return;

    playerState.isMuted
      ? (videoElement.muted = true)
      : (videoElement.muted = false);
  }, [playerState.isMuted, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;
