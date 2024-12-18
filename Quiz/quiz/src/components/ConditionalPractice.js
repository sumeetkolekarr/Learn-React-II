import React from "react";

const ConditionalPractice = () => {
  const [messages, setMessages] = React.useState(['a', 'b']);
  return (
    <div>
      {/* {messages.length > 0 && <h1>You have {messages.length} unread Messages!</h1>} */}
      {
        <h1>
          {messages.length > 0
            ? `You have ${messages.length} unread ${
                messages.length === 1 ? "message" : "messages"
              }`
            : "You're all caught up!"}
        </h1>
      }
    </div>
  );
};

export default ConditionalPractice;
