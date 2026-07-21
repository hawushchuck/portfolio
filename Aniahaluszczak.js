document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  // Data for each project
const projectDetails = {
  1: {
      title: "Shipley College Events and Communications",
      description: "Shipley College is an FE College specialising in vocational and Foundation Learning courses. My Role was to organise Events from Start to finish, create visual communications and outreach in person and online. ",
      images: ["images/creative industries showcase invites.png","images/health social ads 1200X628.png"],
      videos: [
        { type: "youtube", url: "https://youtube.com/shorts/VtWohuibxXs?feature=share" }
        { type: "youtube", url: "https://youtu.be/7tcSSfYMcEI" } 
        ]
    }, 
  2: {
      title: "Grove Website and Branding",
      description: "Grove Dyslexia is a small business that provides diagnostic dyslexia assessments for children and adults. I built the website with a focus on accessibility. I initiated the idea of a clean layout with a limited palette in Figma, inspired by my knowledge of standards for readability. I used Inclusive Sans, a great open-source font by Olivia King that is designed for readability. Built using HTML, CSS, and JS as well as Formspree. One key feature is the coloured overlay button, which reduces visual stress on the screen, hugely beneficial for some users. Users noted the improvements in the site, which translated to more dyslexia assessments.",
      images: ["images/grove_3.png","images/grove_4.png","images/grove_vis.png","images/grove_5.png",]
    }, 
  3: {
      title: "Simbioze 2.0: Skujene Plein air",
      description: "Simbioze 2.0 was an outdoor plein air held in July 2025. The event featured 50 artists selected from 100 following an open call. This shows the process of the poster design, inspired by the idea of forging a path, and uses paper cut and collage. I designed the logo using an experimental process that references Kefir, the name of the studio.",
      link: "https://satori.lv/article/skujene-tiks-atklata-brivdabas-laikmetigas-makslas-izstade-simbioze-20",
      images: ["images/PHOTO-2025-07-23-21-37-02.jpg","images/simbiozeposter.jpeg","images/IMG_8850.jpeg","images/OG Scan.jpeg","images/sposter b_w.png", "images/INVITES ENG 2.jpeg","images/Screenshot 2025-09-19 at 16.23.20.jpeg"],
      videos: [
        { type: "instagram", url: "https://www.instagram.com/p/DOtP1CQCHnE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" } 
        ]
    },
   4: {
      title: "Village General Store website WIP",
      description: "Ongoing Figma prototype of a Shopify website for the Village General Store. Features a video banner, Tab-style menu, Hover labels of photos, an integrated shop and a scrolling slideshow. Please note the copy is not final.",
      images: ["images/villagehome1.png","images/villagehome2.png","images/villagehome3.png","images/villagehome5.png","images/villagehome6.png"],
    },
    5: {
      title: "British Business Bank Graphic Design",
      description: "During my internship at British Business Bank (a government-funded bank), I took on several projects around making finance more accessible to a range of audiences using graphic, illustration and motion design. For the Start Up loans Ambassadors design - the insight was 'confetti' ,chosen from 3 options, it features lightbeams celebrating the quotes and images.",
      images: ["images/SBET MOCKUP Large.png","images/Icons for the intranet bbb 08045-08068 Large.jpeg","images/v7pngs-02 Large.jpeg","images/v7pngs-05 Large.jpeg","images/SUL Ambassadors colourways 24_25 Large.jpeg","images/external 16-9_BBB 08520 Woof The Yorkshire Dog Shop Large.jpeg"],
      videos: [
        { type: "youtube", url: "https://youtube.com/shorts/j_IWuJWzhw4?feature=share" }
      ]
    },
    6: {
      title: "ESE London",
      description: "ESE is a private business school in London and across Europe. I designed digital brochures, edited interviews, photos and other media for the school.",
      images: ["images/ESEmockup.png","images/ese insta mockup.png","images/ese insta mockup2.png","images/XMAS_EVENTBRITE.jpeg"]
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
  
  if (video.type === "instagram") {
  let id;
  if(video.url.includes("/p/")) {
    id = video.url.split("/p/")[1]?.split("/")[0];
  } else if(video.url.includes("/reel/")) {
    id = video.url.split("/reel/")[1]?.split("/")[0];
  }
return `
  <div class="video-wrapper">
    <iframe 
      src="https://www.instagram.com/p/${id}/embed" 
      frameborder="0" 
      allowfullscreen></iframe>
  </div>`;
}
  return "";
}


// Open modal on project click
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project");
    const project = projectDetails[projectId];

    const imagesHTML = project.images.map(img => `
      <img src="${img}" alt="${project.title}">
    `).join("");

    const videosHTML = project.videos
      ?.map(v => renderVideo(v))
      .join("") || "";

    const linkHTML = project.link 
  ? `<p><a href="${project.link}" target="_blank" class="modal-link">
       <img src="images/link icon.svg" alt="Link icon" style="width:16px; height:16px; margin-right:6px; vertical-align:middle;">
       View Project
     </a></p>`
  : "";

    const linkHTML2 = project.link2 
  ? `<p><a href="${project.link2}" target="_blank" class="modal-link">
       <img src="images/link icon.svg" alt="Link icon" style="width:16px; height:16px; margin-right:6px; vertical-align:middle;">
       View Project
     </a></p>`
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
