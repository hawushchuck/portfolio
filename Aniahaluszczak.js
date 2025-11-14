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
      link2:"https://www.instagram.com/p/DJMli9iCWDe/",
      images: ["images/IMG_6382-2.jpeg","images/IMG_6379-2.jpeg","images/fnl12 .jpeg","images/IMG_6417 .jpeg","images/cuesty2-ezgif.com-resize.gif","images/l insta6 .jpeg"],
      videos: [
        { type: "vimeo", url: "https://vimeo.com/1136685687?fl=pl&fe=sh" }
      ]
    },
    7: {
      title: "British Business Bank Graphic Design",
      description: "During my internship at British Business Bank (a government funded bank), I took on several projects around making finance more acessible to a range of audiences using graphic, illustration and motion design skills",
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
        <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>
      </div>`;
  }

  if (video.type === "vimeo") {
    const id = video.url.split("/").pop();
    return `
      <div class="video-wrapper">
        <iframe src="https://player.vimeo.com/video/${id}" frameborder="0" allowfullscreen></iframe>
      </div>`;
  }

  if (video.type === "mp4") {
    return `
      <video controls>
        <source src="${video.url}" type="video/mp4">
      </video>`;
  }

  return "";
} 


  // Open modal on project click
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      const project = projectDetails[projectId];

      // Render multiple images
      const imagesHTML = project.images.map(img => `
        <img src="${img}" alt="${project.title}">
      `).join("");
      
      const videosHTML = project.videos
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
