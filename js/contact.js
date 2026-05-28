/* ============================================
   CONTACT FORM
   Submits inquiry directly to WhatsApp
   ============================================ */

function submitForm() {
  const nameInput    = document.querySelector('input.form-input[placeholder="Enter your full name"]');
  const phoneInput   = document.querySelector('input.form-input[placeholder="+91 00000 00000"]');
  const eventInput   = document.querySelector('input.form-input[placeholder="Wedding, Pre-Wedding, Portrait..."]');
  const dateInput    = document.querySelector('input.form-input[placeholder="DD / MM / YYYY"]');
  const messageInput = document.querySelector('textarea.form-textarea');

  const name    = nameInput?.value.trim();
  const phone   = phoneInput?.value.trim();
  const event   = eventInput?.value.trim();
  const date    = dateInput?.value.trim();
  const message = messageInput?.value.trim();

  if (!name) {
    alert('Please enter your name to continue.');
    nameInput?.focus();
    return;
  }

  const text = [
    `Hi Yog! I'm interested in booking your photography services.`,
    `*Name:* ${name}`,
    phone   ? `*Phone:* ${phone}`         : null,
    event   ? `*Event Type:* ${event}`    : null,
    date    ? `*Event Date:* ${date}`     : null,
    message ? `*Message:* ${message}`     : null,
  ].filter(Boolean).join('\n');

  const waURL = `https://wa.me/917218512969?text=${encodeURIComponent(text)}`;
  window.open(waURL, '_blank');
}
