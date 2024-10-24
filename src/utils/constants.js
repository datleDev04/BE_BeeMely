export const STATUS = {
  INACTIVE: 0,
  ACTIVE: 1,
};

export const FLAG_PAGE = {
  ALLPAGE: 'all_page',
  SHOPPAGE: 'shop_page',
  HOMEPAGE: 'home_page',
};

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

export const PAYMENT_TYPE = {
  VNPAY: 'vnpay',
  PAYOS: 'payos',
};

export const SHIPPING_RULES = {
  WEIGHT: {
    LEVEL_1: { MAX: 500, PRICE: 15000 },
    LEVEL_2: { MAX: 1500, PRICE: 30000 },
    LEVEL_3: { MAX: 5000, PRICE: 50000 },
    LEVEL_4: { MAX: 10000, PRICE: 80000 },
    LEVEL_5: { MAX: 20000, PRICE: 150000 },
    LEVEL_6: { MAX: 30000, PRICE: 200000 },
  },
  VOLUME_TO_WEIGHT_RATIO: 6000,
};
