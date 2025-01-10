import prismaClient from '../../prisma';

class DetailOrderService {
  async execute(order_id: string) {
    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return order;
  }
}

export { DetailOrderService };
