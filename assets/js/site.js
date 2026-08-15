document.querySelectorAll("[data-image-comparison]").forEach((comparison) => {
  const range = comparison.querySelector(".comparison-range");

  if (!range) return;

  const updateComparison = () => {
    const lightAmount = Number(range.value);
    comparison.style.setProperty("--split", `${lightAmount}%`);
    range.setAttribute(
      "aria-valuetext",
      `${lightAmount}% light, ${100 - lightAmount}% dark`
    );
  };

  range.addEventListener("input", updateComparison);
  updateComparison();
});
