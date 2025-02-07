import { useEffect, useRef } from 'react';

type VideoProps = {
  videoId: string;
};

const YouTubePlayer = ({ videoId }: VideoProps) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef(null);

  useEffect(() => {
    const createPlayer = () => {
      if (!playerRef.current) return;

      playerInstance.current = new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          origin: window.location.origin,
        },
        host: 'https://www.youtube-nocookie.com',
      });
    };

    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = createPlayer;
    } else {
      createPlayer();
    }
  }, [videoId]);

  return <div ref={playerRef} />;
};

export default YouTubePlayer;
