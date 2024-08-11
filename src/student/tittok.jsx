import React, { useEffect, useState } from 'react';

const TikTokEmbed = () => {
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;

    script.onerror = () => {
      setLoadError(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loadError) {
    return <div>Couldn’t load video. Please try again later.</div>;
  }

  return (
    <blockquote 
      className="tiktok-embed" 
      cite="https://www.tiktok.com/@outercirclehub/video/7380763716272409888" 
      data-video-id="7380763716272409888" 
      style={{ 
        maxWidth: '605px', 
        minWidth: '325px',
        margin: '10px auto'
      }}>
      <section style={{ 
        margin: 0, 
        padding: 0 
      }}>
        <a 
          target="_blank" 
          title="@outercirclehub" 
          href="https://www.tiktok.com/@outercirclehub?refer=embed">
          @outercirclehub
        </a> 
        Applying to an apprenticeship? Or are you a current apprentice wanting to develop further? 
        Outer Circle provides resources at all points &gt; stay connected with us on our journey 🌐❤️ 
        <a title="outercircle" target="_blank" href="https://www.tiktok.com/tag/outercircle?refer=embed">
          #outercircle
        </a> 
        <a title="apprenticeship" target="_blank" href="https://www.tiktok.com/tag/apprenticeship?refer=embed">
          #apprenticeship
        </a> 
        <a title="degreeapprenticeship" target="_blank" href="https://www.tiktok.com/tag/degreeapprenticeship?refer=embed">
          #degreeapprenticeship
        </a> 
        <a title="university" target="_blank" href="https://www.tiktok.com/tag/university?refer=embed">
          #university
        </a> 
        <a title="corporate" target="_blank" href="https://www.tiktok.com/tag/corporate?refer=embed">
          #corporate
        </a> 
        <a title="community" target="_blank" href="https://www.tiktok.com/tag/community?refer=embed">
          #community
        </a> 
        <a target="_blank" title="♬ original sound - OuterCircle" href="https://www.tiktok.com/music/original-sound-7380763791090682656?refer=embed">
          ♬ original sound - OuterCircle
        </a> 
      </section>
    </blockquote>
  );
};

export default TikTokEmbed;
