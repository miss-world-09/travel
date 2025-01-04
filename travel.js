<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script>
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".fade-in", {
        scrollTrigger: {
            trigger: ".fade-in",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        opacity: 0,
        y: 50
    });
</script>
