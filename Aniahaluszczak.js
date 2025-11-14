document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  // Data for each project
const projectDetails = {
    1: {
      title: "Simbioze 2.0: Riga",
      description: "Simbioze 2.0 was an outdoor plein air held in July 2025, then exhibited in Riga November 2025. This shows the process of the exhibition poster design from printmaking to editing and incorporating found textures.",
      images: ["images/EXP-ezgif.com-optimize.gif","images/Screenshot 2025-10-05 at 20.26.50.jpeg","images/-93.jpeg","images/745098A1-5DCF-4320-82A7-DC2EC9429BC0.jpeg","images/draft1.jpeg"],
    },
    2: {
      title: "Simbioze 2.0: Skujene",
      description: "Simbioze 2.0 was an outdoor plein air held in July 2025, This shows the process of the poster design, the logo and some event photos",
      images: ["images/simbiozeposter.jpeg","images/IMG_8850.jpeg","images/OG Scan.jpeg","images/000042 2.jpeg","images/IMG_9316.jpg","images/P1050183 Large.jpeg", "images/sposter b_w.png", "images/INVITES ENG 2.jpeg","images/P1050144.jpeg","images/P1050250.jpeg","images/Screenshot 2025-09-19 at 16.23.20.jpeg",]
    },
    3: {
      title: "Open Call",
      description: "I designed an Open Call poster for Simbioze 2.0, an outdoor plein air event held in July 2025 in Skujene, Latvia. I created an animation from the poster to make it more interesting on Instagram stories.",
      images: ["images/2-3 Large.jpeg", "images/open call final Large.jpeg","images/Sequence01-ezgif.com-resize.gif","images/62FFC0EE-8332-45F8-8079-8668349B1FAF Large.jpeg"]
    },
    4: {
      title: "Tu i Tam",
      description: "Creative baking and design project for an exhibition opening about polish heritage. I made 50 bakes and a branded pop-up poster. ",
      link: "https://bradford2025.co.uk/event/tu-i-tam-tyt-i-tam/",
      images: ["images/flyer_2 Large.jpeg","images/flyer Large.jpeg","images/IMG_9822.jpeg"]
    },
    5: {
      title: "Digital Intimacy",
      description: "I designed social media assets and a teaser trailer for the Digital Intimacy exhibition, about the intersection of intimacy and AI at BcmA.",
      link: "https://youtube.com/shorts/XqjDoP2n4NU?feature=share",
      link2:"https://bcma.gallery/mind-ai-ness-digital-intimacy/",
      images: ["images/background1.jpeg","images/social media-01.jpeg","images/Teaser3-ezgif.com-optimize.gif"]
    },
    6: {
      title: "Interviews",
      description: "I recorded artist interviews about their work and process for their workshop promotion. Featuring Pernilla Weinholz, Fashion designer and Lisette Ros, Performance artist. See the full videos linked below.",
      link: "https://www.instagram.com/p/DKKmLn7oF58/?img_index=3",
      video: "<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DJMli9iCWDe/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DJMli9iCWDe/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DJMli9iCWDe/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by KEFIRSSTUDIO (@kefirsstudio)</a></p></div></blockquote><script async src="//www.instagram.com/embed.js"></script>",
      link2:"https://www.instagram.com/p/DJMli9iCWDe/",
      images: ["images/IMG_6382-2.jpeg","images/IMG_6379-2.jpeg","images/fnl12 .jpeg","images/IMG_6417 .jpeg","images/cuesty2-ezgif.com-resize.gif","images/l insta6 .jpeg"]
    },
    7: {
      title: "British Business Bank Graphic Design",
      description: "During my internship at British Business Bank(a government funded bank), I took on several projects around making finance more acessible to a range of audiences using graphic, illustration and motion design skills",
      link: "https://youtube.com/shorts/j_IWuJWzhw4?feature=share",
      images: ["images/SBET factsheet  Large.jpeg","images/SBET factsheet 2 Large.jpeg","images/SBET factsheet 3 Large.jpeg","images/SBET factsheet 4 Large.jpeg","images/Icons for the intranet bbb 08045-08068 Large.jpeg","images/v7pngs-02 Large.jpeg","images/v7pngs-05 Large.jpeg","images/SUL Ambassadors colourways 24_25 Large.jpeg","images/external 16-9_BBB 08520 Woof The Yorkshire Dog Shop Large.jpeg"],
    },
    8: {
      title: "Post Produzione",
      description: "Postproduzione is an Italian postcast that discusses visual art through a youthful, contemporary lens.This shows the final design in context and some intial idea development.",
      link: "https://open.spotify.com/episode/4Z0nLIKZqIJgT2xazTw3QO?si=e413eabe7aa7450e",
      images: ["images/PostProduzione_colori.jpeg","images/image-294f887d-fe32-45e2-8e19-5d7fe3fe9112.png","images/image-e47eb326-529f-457b-b2d5-b0fa9c556dbe.png","images/Post Prozuzione_8.jpeg","images/Post Produzione_4 Large.jpeg"],
    },
    9: {
      title: "OFN Film Festival ",
      description: "Photoshoot and Layout for Instagram.",
      images: ["images/1ofn Large.jpeg","images/2ofn Large.jpeg","images/3ofn Large.jpeg","images/4ofn Large.jpeg","images/5ofn Large.jpeg","images/6ofn Large.jpeg"]
    },
    10: {
      title: "Photography",
      description: "Self initiated portraits inspired by mundaneity.",
      images: ["images/P1050308 Large.jpeg","images/P1050339 Large.jpeg","images/014089010013 Large.jpeg","images/014089010014 Large.jpeg","images/IMG_8034 Large.jpeg"]
    },
    11: {
      title: "Grove Website and Branding",
      description: "Grove Dyslexia is a small business that provides diagnostic dyslexia assessments for children and adults. I redesigned the website using Figma and Square Space with a focus on accessibility. It was also an aim to design something that was more reflective of the growth of the business, and the refinement of it’s services.",
      link: "https://grovedyslexia.squarespace.com/",
      images: ["images/9C4B7BE4-927E-411E-99DB-C9F4DB6910FD Medium.jpeg","images/Screenshot 2025-06-23 at 21.57.41 Large.jpeg","images/Capture-2025-06-23-215646 Large.jpeg","images/grove.png","images/grove 2.png"]
    },
    12: {
      title: "Altrincham Dyslexia Website",
      link: "https://altrinchamdyslexiasupport.co.uk/",
      description: "Altrincham Dyslexia provides services and assessments for individuals with dyslexia around the greater Manchester area. I designed the website.",
      images: ["images/Screenshot 2025-10-05 at 15.03.50.png","images/Screenshot 2025-10-05 at 15.03.56.png","images/Screenshot 2025-10-05 at 15.04.02.jpeg","images/Screenshot 2025-10-05 at 15.04.09.png"]
    },
     13: {
      title: "ESE London",
      description: "ESE is a private business school in London and across Europe. I designed digital brochures, edited interviews, Photos and other media for the school.",
      images: ["images/Gapyearprogramme  .jpeg","images/Gapyearprogramme3 Large.png","images/Gapyearprogramme5  .jpeg","images/Gapyearprogramme6  .jpeg","images/ese-instaad_otz Large.jpeg","images/ese-instaad_story  .jpeg","images/XMAS_EVENTBRITE.jpeg"]
    },
  };
  
  // ---- VIDEO EMBED FUNCTION ----
  function renderVideo(video) {
    if (video.type === "youtube") {
      const id = video.url.split("v=")[1] || video.url.split("/").pop();
      return `
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/${id}" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>`;
    }

    if (video.type === "vimeo") {
      const id = video.url.split("/").pop();
      return `
        <div class="video-wrapper">
          <iframe 
            src="https://player.vimeo.com/video/${id}" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>`;
    }

    if (video.type === "mp4") {
      return `
        <video controls>
          <source src="${video.url}" type="video/mp4">
        </video>`;
    }

    return "";

  // Open modal on project click
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      const project = projectDetails[projectId];

      // Render multiple images
      const imagesHTML = project.images.map(img => `
        <img src="${img}" alt="${project.title}">
      `).join("");

            const videosHTML = p.videos
        ?.map((v) => renderVideo(v))
        .join("") || "";

      // ✅ Only add the link if it exists
      const linkHTML = project.link 
      ? `<p><a href="${project.link}" target="_blank" class="modal-link">🔗 View Project</a></p>`
      : "";
          
      // ✅ Only add the link if it exists
      const linkHTML2 = project.link2 
      ? `<p><a href="${project.link2}" target="_blank" class="modal-link2">🔗 View Project</a></p>`
      : "";

      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        ${linkHTML}
        ${linkHTML2}
        ${videosHTML}
        ${imagesHTML}
      `;

      modal.style.display = "flex";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
