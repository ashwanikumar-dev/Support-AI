(function () {
  const api_url = "https://support-ai-ivory-three.vercel.app/api/chat";

  const scriptTag = document.currentScript;

  const ownerId = scriptTag?.getAttribute("data-owner-id");

  if (!ownerId) {
    console.log("Support AI: OwnerId not found");
    return;
  }

  // ==========================================
  // CHAT BUTTON
  // ==========================================

  const button = document.createElement("div");

  button.id = "support-ai-button";
  button.innerHTML = "💬";

  Object.assign(button.style, {
    position: "fixed",
    right: "24px",
    bottom: "24px",

    width: "56px",
    height: "56px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "#18181b",
    color: "#ffffff",

    border: "none",
    borderRadius: "50%",

    fontSize: "24px",
    lineHeight: "1",

    cursor: "pointer",

    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",

    zIndex: "2147483647",

    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  });

  // ==========================================
  // CHAT BOX
  // ==========================================

  const chatBox = document.createElement("div");

  chatBox.id = "support-ai-chatbox";

  Object.assign(chatBox.style, {
    position: "fixed",

    right: "24px",
    bottom: "92px",

    width: "360px",
    height: "520px",

    maxWidth: "calc(100vw - 32px)",
    maxHeight: "calc(100vh - 120px)",

    display: "flex",
    flexDirection: "column",

    background: "#ffffff",
    color: "#18181b",

    border: "1px solid #e4e4e7",
    borderRadius: "18px",

    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.18)",

    overflow: "hidden",

    zIndex: "2147483646",

    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

    opacity: "0",
    transform: "translateY(12px) scale(0.98)",

    pointerEvents: "none",

    transition: "opacity 0.2s ease, transform 0.2s ease",
  });

  // ==========================================
  // CHAT UI
  // ==========================================

  chatBox.innerHTML = `
    <!-- HEADER -->
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 18px;
        border-bottom: 1px solid #e4e4e7;
        background: #ffffff;
      "
    >
      <div
        style="
          display: flex;
          align-items: center;
          gap: 10px;
        "
      >
        <div
          style="
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: #18181b;
            color: #ffffff;
            font-size: 17px;
          "
        >
          ✦
        </div>

        <div>
          <div
            style="
              font-size: 14px;
              font-weight: 600;
              color: #18181b;
            "
          >
            Support AI
          </div>

          <div
            style="
              display: flex;
              align-items: center;
              gap: 5px;
              margin-top: 2px;
              font-size: 11px;
              color: #71717a;
            "
          >
            <span
              style="
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #22c55e;
              "
            ></span>

            Online
          </div>
        </div>
      </div>

      <button
        id="support-ai-close"
        type="button"
        style="
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: #71717a;
          font-size: 20px;
          cursor: pointer;
        "
      >
        ×
      </button>
    </div>

    <!-- MESSAGES -->
    <div
      id="support-ai-messages"
      style="
        flex: 1;
        overflow-y: auto;
        padding: 18px;
        background: #fafafa;
        display: flex;
        flex-direction: column;
        gap: 12px;
      "
    >
      <div
        style="
          display: flex;
          align-items: flex-start;
          gap: 8px;
        "
      >
        <div
          style="
            width: 28px;
            height: 28px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: #18181b;
            color: #ffffff;
            font-size: 13px;
          "
        >
          ✦
        </div>

        <div
          style="
            max-width: 78%;
            padding: 10px 12px;
            border-radius: 12px;
            border-top-left-radius: 4px;
            background: #ffffff;
            border: 1px solid #e4e4e7;
            color: #3f3f46;
            font-size: 13px;
            line-height: 1.5;
          "
        >
          Hi! How can I help you today?
        </div>
      </div>
    </div>

    <!-- INPUT -->
    <div
      style="
        padding: 12px;
        border-top: 1px solid #e4e4e7;
        background: #ffffff;
      "
    >
      <div
        style="
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border: 1px solid #d4d4d8;
          border-radius: 12px;
          background: #fafafa;
        "
      >
        <input
          id="support-ai-input"
          type="text"
          placeholder="Ask anything..."
          autocomplete="off"
          style="
            flex: 1;
            min-width: 0;
            border: none;
            outline: none;
            background: transparent;
            color: #18181b;
            font-size: 13px;
          "
        />

        <button
          id="support-ai-send"
          type="button"
          style="
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 9px;
            background: #18181b;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
          "
        >
          ➤
        </button>
      </div>

      <div
        style="
          margin-top: 7px;
          text-align: center;
          font-size: 9px;
          color: #a1a1aa;
        "
      >
        Powered by Support AI
      </div>
    </div>
  `;

  // ==========================================
  // APPEND
  // ==========================================

  document.body.appendChild(chatBox);
  document.body.appendChild(button);

  // ==========================================
  // ELEMENTS
  // ==========================================

  const input = chatBox.querySelector("#support-ai-input");
  const sendBtn = chatBox.querySelector("#support-ai-send");
  const messageArea = chatBox.querySelector("#support-ai-messages");
  const closeButton = chatBox.querySelector("#support-ai-close");

  // ==========================================
  // TYPING ANIMATION
  // ==========================================

  const style = document.createElement("style");

  style.textContent = `
    @keyframes supportAiTyping {
      0%, 60%, 100% {
        opacity: 0.3;
        transform: translateY(0);
      }

      30% {
        opacity: 1;
        transform: translateY(-3px);
      }
    }

    #support-ai-typing span {
      animation: supportAiTyping 1.2s infinite ease-in-out;
    }

    #support-ai-typing span:nth-child(2) {
      animation-delay: 0.15s;
    }

    #support-ai-typing span:nth-child(3) {
      animation-delay: 0.3s;
    }
  `;

  document.head.appendChild(style);

  // ==========================================
  // OPEN / CLOSE
  // ==========================================

  let isOpen = false;
  let isSending = false;

  function openChat() {
    isOpen = true;

    chatBox.style.opacity = "1";
    chatBox.style.transform = "translateY(0) scale(1)";
    chatBox.style.pointerEvents = "auto";

    button.style.transform = "scale(0.95)";

    input.focus();
  }

  function closeChat() {
    isOpen = false;

    chatBox.style.opacity = "0";
    chatBox.style.transform = "translateY(12px) scale(0.98)";
    chatBox.style.pointerEvents = "none";

    button.style.transform = "scale(1)";
  }

  button.addEventListener("click", () => {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  });

  closeButton.addEventListener("click", closeChat);

  // ==========================================
  // BUTTON HOVER
  // ==========================================

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.08)";
    button.style.boxShadow =
      "0 14px 35px rgba(0, 0, 0, 0.28)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = isOpen ? "scale(0.95)" : "scale(1)";
    button.style.boxShadow =
      "0 10px 30px rgba(0, 0, 0, 0.2)";
  });

  // ==========================================
  // ADD MESSAGE
  // ==========================================

  function addMessage(text, from) {
    const bubble = document.createElement("div");

    // IMPORTANT:
    // textContent instead of innerHTML
    bubble.textContent = text;

    Object.assign(bubble.style, {
      maxWidth: "78%",
      padding: "10px 13px",
      borderRadius: "14px",
      fontSize: "13px",
      lineHeight: "1.5",
      wordBreak: "break-word",
    });

    if (from === "user") {
      Object.assign(bubble.style, {
        alignSelf: "flex-end",
        background: "#18181b",
        color: "#ffffff",
        borderBottomRightRadius: "4px",
      });
    } else {
      Object.assign(bubble.style, {
        alignSelf: "flex-start",
        background: "#ffffff",
        color: "#3f3f46",
        border: "1px solid #e4e4e7",
        borderBottomLeftRadius: "4px",
      });
    }

    messageArea.appendChild(bubble);

    messageArea.scrollTop = messageArea.scrollHeight;

    return bubble;
  }

  // ==========================================
  // TYPING INDICATOR
  // ==========================================

  function showTyping() {
    const typing = document.createElement("div");

    typing.id = "support-ai-typing";

    typing.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    Object.assign(typing.style, {
      alignSelf: "flex-start",

      display: "flex",
      alignItems: "center",
      gap: "4px",

      width: "fit-content",

      padding: "11px 14px",

      borderRadius: "14px",
      borderBottomLeftRadius: "4px",

      background: "#ffffff",

      border: "1px solid #e4e4e7",

      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
    });

    const dots = typing.querySelectorAll("span");

    dots.forEach((dot) => {
      Object.assign(dot.style, {
        display: "block",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "#71717a",
      });
    });

    messageArea.appendChild(typing);

    messageArea.scrollTop = messageArea.scrollHeight;

    return typing;
  }

  // ==========================================
  // SEND MESSAGE
  // ==========================================

  async function sendMessage() {
    if (isSending) return;

    const text = input.value.trim();

    if (!text) return;

    isSending = true;

    // Disable controls
    input.disabled = true;
    sendBtn.disabled = true;

    sendBtn.style.opacity = "0.5";
    sendBtn.style.cursor = "not-allowed";

    // User message
    addMessage(text, "user");

    // Clear input
    input.value = "";

    // Typing indicator
    const typing = showTyping();

    try {
      const response = await fetch(api_url, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ownerId,
          message: text,
        }),
      });

      const data = await response.json();

      console.log("Support AI API status:", response.status);
      console.log("Support AI API response:", data);

      // Remove typing indicator
      if (typing.parentNode) {
        typing.remove();
      }

      // Backend returned an error
      if (!response.ok) {
        addMessage(
          data.message ||
            data.error ||
            "Something went wrong. Please try again.",
          "ai"
        );

        return;
      }

      // Successful response
      const aiResponse =
        data.response ||
        data.message ||
        data.answer ||
        data.text;

      if (!aiResponse) {
        console.error(
          "Support AI: No response field found.",
          data
        );

        addMessage(
          "I couldn't generate a response. Please try again.",
          "ai"
        );

        return;
      }

      addMessage(aiResponse, "ai");
    } catch (error) {
      console.error("Support AI chat error:", error);

      if (typing.parentNode) {
        typing.remove();
      }

      addMessage(
        "Sorry, something went wrong. Please try again.",
        "ai"
      );
    } finally {
      // Re-enable controls
      isSending = false;

      input.disabled = false;
      sendBtn.disabled = false;

      sendBtn.style.opacity = "1";
      sendBtn.style.cursor = "pointer";

      input.focus();
    }
  }

  // ==========================================
  // SEND BUTTON
  // ==========================================

  sendBtn.addEventListener("click", sendMessage);

  // ==========================================
  // ENTER TO SEND
  // ==========================================

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      sendMessage();
    }
  });

  // ==========================================
  // MOBILE
  // ==========================================

  function applyMobileStyles() {
    if (window.innerWidth <= 640) {
      Object.assign(button.style, {
        right: "16px",
        bottom: "16px",
        width: "52px",
        height: "52px",
        fontSize: "22px",
      });

      Object.assign(chatBox.style, {
        right: "16px",
        bottom: "82px",
        width: "calc(100vw - 32px)",
        height: "min(520px, calc(100vh - 105px))",
        borderRadius: "16px",
      });
    } else {
      Object.assign(button.style, {
        right: "24px",
        bottom: "24px",
        width: "56px",
        height: "56px",
        fontSize: "24px",
      });

      Object.assign(chatBox.style, {
        right: "24px",
        bottom: "92px",
        width: "360px",
        height: "520px",
        borderRadius: "18px",
      });
    }
  }

  applyMobileStyles();

  window.addEventListener("resize", applyMobileStyles);

  // ==========================================
  // READY
  // ==========================================

  console.log("Support AI loaded:", ownerId);
})();