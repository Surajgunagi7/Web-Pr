function page1Ani() {
  var tl = gsap.timeline();

  tl.from("nav h1,nav h4,nav button", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -150,
      opacity: 0,
      duration: 0.6,
    },
    "-=1"
  );
  tl.from(
    ".center-part1 p",
    {
      x: -100,
      opacity: 0,
      duration: 0.4,
    },
    "-=1"
  );
  tl.from(
    ".center-part1 button",
    {
      y: 5,
      opacity: 0,
      duration: 0.3,
    },
    "-=1"
  );
  tl.from(
    ".center-part2 img",
    {
      x: 200,
      opacity: 0,
      duration: 0.6,
    },
    "-=1"
  );

  gsap.from(".section1-bottom img", {
    y: 200,
    opacity: 0,
    duration: 1,
    ease: "back.out",
    scrollTrigger: {
      trigger: "#section1-bottom",
      scroller: "body",
      start: "8%",
      end: "15%",
      scrub: 2,
    },
  });
}

function page2Ani() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(
    ".elements.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "line1"
  );
  tl2.from(
    ".elements.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "line1"
  );
  tl2.from(
    ".elements.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "line2"
  );
  tl2.from(
    ".elements.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "line2"
  );
}
function page3Ani() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section3",
          scroller: "body",
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
    });
    
    tl3.from(".container-2", {
        y:200,
        duration:1,
        opacity:0
    })
    tl3.from(".part2 img", {
        x:200,
        opacity:0,
        duration:0.6,
    },"anim1")
    tl3.from(".part1 h2", {
        x:-200,
        opacity:0,
        duration:0.5,
    },"anim1")
    tl3.from(".part1 p", {
        x:-150,
        opacity:0,
        duration:0.4,
    },"anim1")
    tl3.from(".part1 button", {
        x:-100,
        opacity:0,
        duration:0.3,
    })
}

function page4Ani(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section4",
          scroller: "body",
          start: "top 50%",
          end: "top 38%",
          scrub: 2,
        },
      });
    tl4.from(".caseStudy", {
        y: 60,
        duration: 1,
        opacity: 0,
      });
    tl4.from(".container-3", {
        y: 200,
        duration: 1,
        opacity: 0,
      });
    tl4.from(".box p,.box h4", {
        y: 80,
        duration: 1,
        opacity: 0,
        ease:"expo.out"
      });
}
page4Ani(); 
page1Ani();
page2Ani();
page3Ani(); 

