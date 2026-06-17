const bars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          const targetWidth = bar.getAttribute("data-width");
          bar.style.width = targetWidth + "%";
        });
        observer.disconnect(); // run once
      }
    });
  }, { threshold: 0.4 });

  observer.observe(document.querySelector("#skills"));
