
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(myStatus);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT="left",
  RIGHT="right",
  ERROR = 4
}

const direction = ArrowKeys.UP;


const enum OrderStatuses {
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
  RETURNED,
}