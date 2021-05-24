export const statusCheck = (status: string) => {
  switch (status) {
    case "order-info-received":
      return "Order info received";
    case "on-the-way":
      return "On the way";
    case "delivered":
      return "Delivered";
    case "ready-for-pickup":
      return "Ready for pickup";
  }
};

export const statusEmoji = (status: string) => {
  switch (status) {
    case "order-info-received":
      return "📨";
    case "on-the-way":
      return "🚚";
    case "delivered":
      return "📦";
    case "ready-for-pickup":
      return "👌";
  }
};
