    // Modal functionality
    const openBtn = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeModalBtn');
    const continueBtn = document.getElementById('continueBtn');
    const closingMessageBelow = document.getElementById('closingMessageBelow');

    openBtn.onclick = function () {
      modalOverlay.style.display = 'flex';
      closingMessageBelow.style.display = 'none';
    };

    closeBtn.onclick = function () {
      closingMessageBelow.className = 'closing-message-below';
      closingMessageBelow.innerText = 'Closing';
      closingMessageBelow.style.display = 'block';
      // Automatically close after 5 seconds
      setTimeout(() => {
        modalOverlay.style.display = 'none';
        closingMessageBelow.style.display = 'none';
      }, 5000);
    };

    continueBtn.onclick = function () {
      window.open('https://www.google.com/search?q=web+technology', '_blank');
    };

    window.onclick = function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        closingMessageBelow.style.display = 'none';
      }
    };

    // Accordion functionality
    document.querySelectorAll('.accordion-toggle').forEach((btn) => {
      btn.addEventListener('click', function () {
        const item = this.parentElement;
        item.classList.toggle('active');
        document.querySelectorAll('.accordion-item').forEach((other) => {
          if (other !== item) other.classList.remove('active');
        });
      });
    });

    // Hover effect for feature containers
    document.querySelectorAll('.feature').forEach((feature) => {
      feature.addEventListener('mouseenter', () => {
        feature.classList.add('hovered');
      });
      feature.addEventListener('mouseleave', () => {
        feature.classList.remove('hovered');
      });
    });
