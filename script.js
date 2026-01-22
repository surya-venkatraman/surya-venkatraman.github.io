document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending...";
  statusEl.className = "form-status";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      statusEl.textContent = "Sent. I’ll get back to you soon.";
      statusEl.className = "form-status success";
      form.reset();
    } else {
      statusEl.textContent =
        "Something went wrong. Try again or email me directly.";
      statusEl.className = "form-status error";
    }
  } catch (err) {
    statusEl.textContent = "Network error. Try again or email me directly.";
    statusEl.className = "form-status error";
  }
});

const clearBtn = document.getElementById("clearFormBtn");

if (clearBtn && form && statusEl) {
  clearBtn.addEventListener("click", () => {
    form.reset();
    statusEl.textContent = "";
    statusEl.className = "form-status";
  });
}
